import BillingShell from '../../components/billing/BillingShell';

export const metadata = {
  title: 'Billing Suite — Free GST Invoice Software',
  description: 'Create GST invoices, manage customers and track payments — 100% free, 100% private. Your data never leaves your device. No account required.',
  robots: { index: false, follow: false }, // private app area, not for indexing
};

export default function BillingLayout({ children }) {
  return <BillingShell>{children}</BillingShell>;
}
