// lib/billing/db.js
// ─────────────────────────────────────────────────────────────
// Browser-only persistence for the ToolStackHub Billing Suite.
// All data lives in IndexedDB on the user's device — no backend,
// no account, nothing ever leaves the browser. This is the single
// storage foundation the whole suite builds on.
// ─────────────────────────────────────────────────────────────

const DB_NAME = 'toolstackhub_billing';
const DB_VERSION = 2;

// Object stores (think of these as tables). Each row is a plain
// object keyed by a string `id`. `business` holds a single profile
// row keyed 'profile'.
//   menu      — restaurant menu items
//   tables    — dine-in tables
//   posOrders — restaurant orders (open running tabs + settled bills)
export const STORES = [
  'business', 'customers', 'products', 'invoices',
  'menu', 'tables', 'posOrders',
];

let dbPromise = null;

function openDB() {
  if (typeof window === 'undefined' || !('indexedDB' in window)) {
    return Promise.reject(new Error('IndexedDB is not available in this environment.'));
  }
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);

    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      for (const name of STORES) {
        if (!db.objectStoreNames.contains(name)) {
          db.createObjectStore(name, { keyPath: 'id' });
        }
      }
    };

    req.onsuccess = () => resolve(req.result);
    req.onerror   = () => reject(req.error);
  });

  return dbPromise;
}

function tx(store, mode) {
  return openDB().then((db) => db.transaction(store, mode).objectStore(store));
}

// ── Generic CRUD ─────────────────────────────────────────────

export async function getAll(store) {
  const os = await tx(store, 'readonly');
  return new Promise((resolve, reject) => {
    const req = os.getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror   = () => reject(req.error);
  });
}

export async function getOne(store, id) {
  const os = await tx(store, 'readonly');
  return new Promise((resolve, reject) => {
    const req = os.get(id);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror   = () => reject(req.error);
  });
}

export async function put(store, record) {
  const now = new Date().toISOString();
  const row = {
    ...record,
    id: record.id || crypto.randomUUID(),
    createdAt: record.createdAt || now,
    updatedAt: now,
  };
  const os = await tx(store, 'readwrite');
  return new Promise((resolve, reject) => {
    const req = os.put(row);
    req.onsuccess = () => resolve(row);
    req.onerror   = () => reject(req.error);
  });
}

export async function remove(store, id) {
  const os = await tx(store, 'readwrite');
  return new Promise((resolve, reject) => {
    const req = os.delete(id);
    req.onsuccess = () => resolve(true);
    req.onerror   = () => reject(req.error);
  });
}

// ── Business profile (single row, fixed key) ─────────────────

const PROFILE_KEY = 'profile';

export async function getBusiness() {
  return getOne('business', PROFILE_KEY);
}

export async function saveBusiness(profile) {
  return put('business', { ...profile, id: PROFILE_KEY });
}

// ── Backup / restore (JSON export & import) ──────────────────

export async function exportAll() {
  const dump = { version: DB_VERSION, exportedAt: new Date().toISOString(), data: {} };
  for (const store of STORES) {
    dump.data[store] = await getAll(store);
  }
  return dump;
}

export async function importAll(dump) {
  if (!dump || !dump.data) throw new Error('Invalid backup file.');
  for (const store of STORES) {
    const rows = dump.data[store];
    if (!Array.isArray(rows)) continue;
    for (const row of rows) {
      if (row && row.id) await put(store, row);
    }
  }
  return true;
}
