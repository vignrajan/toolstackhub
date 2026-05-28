'use client';
import { useState, useMemo, useRef } from 'react';

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const STATES = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat',
  'Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra',
  'Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim',
  'Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal',
  'Delhi','Chandigarh','Jammu & Kashmir','Ladakh','Puducherry',
];

function toWords(num) {
  const ones = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine',
    'Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
  const tens = ['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
  if (num === 0) return 'Zero';
  if (num < 20) return ones[num];
  if (num < 100) return tens[Math.floor(num/10)] + (num%10 ? ' ' + ones[num%10] : '');
  if (num < 1000) return ones[Math.floor(num/100)] + ' Hundred' + (num%100 ? ' ' + toWords(num%100) : '');
  if (num < 100000) return toWords(Math.floor(num/1000)) + ' Thousand' + (num%1000 ? ' ' + toWords(num%1000) : '');
  if (num < 10000000) return toWords(Math.floor(num/100000)) + ' Lakh' + (num%100000 ? ' ' + toWords(num%100000) : '');
  return toWords(Math.floor(num/10000000)) + ' Crore' + (num%10000000 ? ' ' + toWords(num%10000000) : '');
}

const TABS = ['Parties', 'Property', 'Terms', 'Preview'];

export default function RentAgreementGenerator() {
  const [tab, setTab] = useState(0);
  const printRef = useRef(null);

  // Landlord
  const [llName,    setLlName]    = useState('Suresh Kumar');
  const [llAge,     setLlAge]     = useState(52);
  const [llAddress, setLlAddress] = useState('12, Gandhi Nagar, Bengaluru, Karnataka - 560001');
  const [llAadhar,  setLlAadhar]  = useState('XXXX XXXX 1234');

  // Tenant
  const [tenName,    setTenName]    = useState('Priya Sharma');
  const [tenAge,     setTenAge]     = useState(28);
  const [tenAddress, setTenAddress] = useState('45, MG Road, Pune, Maharashtra - 411001');
  const [tenAadhar,  setTenAadhar]  = useState('XXXX XXXX 5678');

  // Property
  const [propAddress, setPropAddress] = useState('Flat No. 302, Sunshine Apartments, Koramangala, Bengaluru, Karnataka - 560034');
  const [propArea,    setPropArea]    = useState('850');
  const [propType,    setPropType]    = useState('Residential Flat');
  const [state,       setState]       = useState('Karnataka');

  // Terms
  const [rentAmount,   setRentAmount]   = useState(25000);
  const [deposit,      setDeposit]      = useState(75000);
  const [startDay,     setStartDay]     = useState(1);
  const [startMonth,   setStartMonth]   = useState(new Date().getMonth());
  const [startYear,    setStartYear]    = useState(new Date().getFullYear());
  const [duration,     setDuration]     = useState(11);
  const [rentDueDay,   setRentDueDay]   = useState(5);
  const [noticePeriod, setNoticePeriod] = useState(1);
  const [maintenanceBy, setMaintenanceBy] = useState('tenant');
  const [parkingIncluded, setParkingIncluded] = useState(true);

  const endDate = useMemo(() => {
    const d = new Date(startYear, startMonth, startDay);
    d.setMonth(d.getMonth() + duration);
    return d;
  }, [startDay, startMonth, startYear, duration]);

  const agreementText = useMemo(() => {
    const startDateStr = `${startDay}${startDay===1?'st':startDay===2?'nd':startDay===3?'rd':'th'} day of ${MONTHS[startMonth]}, ${startYear}`;
    const endDateStr   = `${endDate.getDate()}${endDate.getDate()===1?'st':endDate.getDate()===2?'nd':endDate.getDate()===3?'rd':'th'} day of ${MONTHS[endDate.getMonth()]}, ${endDate.getFullYear()}`;
    const rentWords    = toWords(rentAmount);
    const depositWords = toWords(deposit);

    return `RENT AGREEMENT

This Rent Agreement is made and executed at ${state}, on this ${startDateStr}.

BETWEEN

${llName}, aged about ${llAge} years, residing at ${llAddress}, Aadhaar No. ${llAadhar}, hereinafter referred to as the "LANDLORD" (which expression shall mean and include his/her heirs, legal representatives, successors, assigns and nominees)
                                                        of the FIRST PART

AND

${tenName}, aged about ${tenAge} years, residing at ${tenAddress}, Aadhaar No. ${tenAadhar}, hereinafter referred to as the "TENANT" (which expression shall mean and include his/her heirs, legal representatives, successors, assigns and nominees)
                                                        of the SECOND PART

WHEREAS the Landlord is the absolute owner of the premises situated at ${propAddress} (hereinafter referred to as the "Scheduled Property"), consisting of a ${propType} with an area of approximately ${propArea} sq. ft.

AND WHEREAS the Tenant has approached the Landlord for taking the Scheduled Property on rent for residential/commercial purposes, and the Landlord has agreed to let out the same on the terms and conditions hereinafter mentioned.

NOW THIS AGREEMENT WITNESSETH AS FOLLOWS:

1. TERM OF TENANCY
   The Landlord hereby agrees to let and the Tenant agrees to take on rent the Scheduled Property for a period of ${duration} (${toWords(duration)}) months commencing from ${startDateStr} to ${endDateStr}.

2. RENT
   The Tenant shall pay a monthly rent of ₹${rentAmount.toLocaleString('en-IN')}/- (Rupees ${rentWords} Only) payable on or before the ${rentDueDay}${rentDueDay===1?'st':rentDueDay===2?'nd':rentDueDay===3?'rd':'th'} day of every English calendar month.

3. SECURITY DEPOSIT
   The Tenant shall pay a refundable security deposit of ₹${deposit.toLocaleString('en-IN')}/- (Rupees ${depositWords} Only) to the Landlord on execution of this Agreement. The deposit shall be refunded to the Tenant at the time of vacating the premises after deducting any arrears of rent or damages caused to the property.

4. MAINTENANCE & UTILITIES
   a) The Tenant shall pay all electricity, water, internet, and other utility charges directly to the respective authorities.
   b) ${maintenanceBy === 'tenant' ? 'The Tenant shall bear all monthly maintenance charges of the society/apartment association.' : 'The Landlord shall bear all monthly maintenance charges of the society/apartment association.'}
   c) Parking: ${parkingIncluded ? 'One parking space is included in this tenancy.' : 'Parking is not included in this agreement.'}

5. USE OF PREMISES
   The Tenant shall use the Scheduled Property only for residential/commercial purposes as agreed and shall not sub-let, assign, or transfer the tenancy to any other person without prior written consent of the Landlord.

6. CONDITION OF PROPERTY
   The Tenant shall maintain the property in good condition and shall return it to the Landlord in the same condition (subject to normal wear and tear) at the expiry of the tenancy.

7. NOTICE PERIOD
   Either party wishing to terminate this Agreement before its expiry shall give a minimum of ${noticePeriod} (${toWords(noticePeriod)}) month${noticePeriod > 1 ? 's' : ''} prior written notice to the other party.

8. LOCK-IN PERIOD
   This Agreement shall have a lock-in period of ${Math.min(duration, 2)} (${toWords(Math.min(duration, 2))}) month${Math.min(duration,2)>1?'s':''} from the commencement date, during which neither party shall terminate this Agreement without mutual consent.

9. ALTERATIONS
   The Tenant shall not make any structural alterations or additions to the property without the prior written consent of the Landlord.

10. RENEWAL
    This Agreement may be renewed for a further period as mutually agreed upon by both parties. Any renewal shall be subject to revision of rent at market rates prevailing at the time of renewal.

11. GENERAL CONDITIONS
    a) The Tenant shall allow the Landlord or his/her authorized representative to inspect the property at reasonable times after giving prior notice.
    b) The Tenant shall not use the premises for any illegal, immoral, or anti-social activities.
    c) The Landlord shall ensure peaceful possession of the property to the Tenant during the period of this Agreement.

12. JURISDICTION
    This Agreement shall be governed by the laws of India and any dispute arising out of this Agreement shall be subject to the jurisdiction of the courts at ${state}.

IN WITNESS WHEREOF, the parties hereto have signed this Agreement on the day, month, and year first written above.

LANDLORD                                    TENANT
${llName}                                   ${tenName}

Signature: ___________________              Signature: ___________________

WITNESSES:

1. Name: _____________________
   Signature: ___________________
   Date: _______________________

2. Name: _____________________
   Signature: ___________________
   Date: _______________________`;
  }, [llName, llAge, llAddress, llAadhar, tenName, tenAge, tenAddress, tenAadhar,
      propAddress, propArea, propType, state, rentAmount, deposit, startDay, startMonth,
      startYear, duration, rentDueDay, noticePeriod, maintenanceBy, parkingIncluded, endDate]);

  const handlePrint = () => {
    const win = window.open('', '_blank');
    win.document.write(`
      <html><head><title>Rent Agreement</title>
      <style>
        body { font-family: 'Times New Roman', serif; font-size: 13px; line-height: 1.8; color: #111; max-width: 800px; margin: 40px auto; padding: 0 24px; }
        h1 { text-align: center; font-size: 16px; letter-spacing: 2px; margin-bottom: 24px; border-bottom: 2px solid #333; padding-bottom: 12px; }
        pre { font-family: inherit; white-space: pre-wrap; word-wrap: break-word; }
        @media print { body { margin: 20px; } }
      </style></head>
      <body><pre>${agreementText}</pre></body></html>
    `);
    win.document.close();
    win.focus();
    win.print();
    win.close();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(agreementText);
    } catch {
      const el = document.createElement('textarea');
      el.value = agreementText;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
  };

  const InputField = ({ label, value, setter, type = 'text', hint = '' }) => (
    <div>
      <label className="block text-xs font-medium text-surface-600 mb-1">{label}</label>
      {hint && <p className="text-xs text-surface-400 mb-1">{hint}</p>}
      <input
        type={type}
        value={value}
        onChange={e => setter(type === 'number' ? Number(e.target.value) || 0 : e.target.value)}
        className="input-field text-sm"
      />
    </div>
  );

  const TextArea = ({ label, value, setter, rows = 2 }) => (
    <div>
      <label className="block text-xs font-medium text-surface-600 mb-1">{label}</label>
      <textarea
        value={value}
        onChange={e => setter(e.target.value)}
        rows={rows}
        className="textarea-field text-sm"
      />
    </div>
  );

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-surface-200 bg-surface-50">
        {TABS.map((t, i) => (
          <button key={t} onClick={() => setTab(i)}
            className={`flex-1 py-3 text-sm font-semibold transition-colors ${tab === i ? 'bg-white border-b-2 border-brand-600 text-brand-700' : 'text-surface-500 hover:text-surface-700'}`}>
            {i < tab ? '✓ ' : ''}{t}
          </button>
        ))}
      </div>

      <div className="p-5">
        {/* Tab 0: Parties */}
        {tab === 0 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-surface-700 mb-3 pb-1 border-b border-surface-200">Landlord Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="Full Name"     value={llName}    setter={setLlName} />
                <InputField label="Age"           value={llAge}     setter={setLlAge} type="number" />
                <InputField label="Aadhaar No."   value={llAadhar}  setter={setLlAadhar} />
                <div className="sm:col-span-2">
                  <TextArea  label="Current Address" value={llAddress} setter={setLlAddress} />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-surface-700 mb-3 pb-1 border-b border-surface-200">Tenant Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="Full Name"     value={tenName}    setter={setTenName} />
                <InputField label="Age"           value={tenAge}     setter={setTenAge} type="number" />
                <InputField label="Aadhaar No."   value={tenAadhar}  setter={setTenAadhar} />
                <div className="sm:col-span-2">
                  <TextArea  label="Permanent Address" value={tenAddress} setter={setTenAddress} />
                </div>
              </div>
            </div>
            <button onClick={() => setTab(1)} className="w-full py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-colors">
              Next: Property Details →
            </button>
          </div>
        )}

        {/* Tab 1: Property */}
        {tab === 1 && (
          <div className="space-y-4">
            <TextArea  label="Property Address (Scheduled Property)" value={propAddress} setter={setPropAddress} rows={3} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Property Type" value={propType} setter={setPropType} hint="e.g. Residential Flat, 2 BHK, Office Space" />
              <InputField label="Area (sq. ft.)" value={propArea} setter={setPropArea} />
              <div>
                <label className="block text-xs font-medium text-surface-600 mb-1">State</label>
                <select value={state} onChange={e => setState(e.target.value)} className="input-field text-sm">
                  {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setTab(0)} className="flex-1 py-2.5 bg-surface-100 hover:bg-surface-200 text-surface-700 text-sm font-semibold rounded-xl transition-colors">← Back</button>
              <button onClick={() => setTab(2)} className="flex-1 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-colors">Next: Terms →</button>
            </div>
          </div>
        )}

        {/* Tab 2: Terms */}
        {tab === 2 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-surface-600 mb-1">Monthly Rent (₹)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 text-sm">₹</span>
                  <input type="number" value={rentAmount} onChange={e => setRentAmount(Number(e.target.value)||0)} className="input-field pl-7 text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-surface-600 mb-1">Security Deposit (₹)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 text-sm">₹</span>
                  <input type="number" value={deposit} onChange={e => setDeposit(Number(e.target.value)||0)} className="input-field pl-7 text-sm" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-surface-600 mb-1">Start Day</label>
                <input type="number" min="1" max="31" value={startDay} onChange={e => setStartDay(Number(e.target.value))} className="input-field text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-surface-600 mb-1">Start Month</label>
                <select value={startMonth} onChange={e => setStartMonth(Number(e.target.value))} className="input-field text-sm">
                  {MONTHS.map((m, i) => <option key={m} value={i}>{m}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-surface-600 mb-1">Start Year</label>
                <select value={startYear} onChange={e => setStartYear(Number(e.target.value))} className="input-field text-sm">
                  {[2024,2025,2026,2027].map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-surface-600 mb-1">Duration (months)</label>
                <select value={duration} onChange={e => setDuration(Number(e.target.value))} className="input-field text-sm">
                  {[1,2,3,6,9,11,12,18,24,36].map(m => <option key={m} value={m}>{m} month{m>1?'s':''}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-surface-600 mb-1">Rent Due Date</label>
                <input type="number" min="1" max="28" value={rentDueDay} onChange={e => setRentDueDay(Number(e.target.value))} className="input-field text-sm" />
                <p className="text-xs text-surface-400 mt-1">Day of each month</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-surface-600 mb-1">Notice Period</label>
                <select value={noticePeriod} onChange={e => setNoticePeriod(Number(e.target.value))} className="input-field text-sm">
                  {[1,2,3].map(m => <option key={m} value={m}>{m} month{m>1?'s':''}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-surface-600 mb-2">Maintenance Paid By</label>
                <div className="flex gap-2">
                  {[['Tenant','tenant'],['Landlord','landlord']].map(([l,v]) => (
                    <button key={v} onClick={() => setMaintenanceBy(v)}
                      className={`flex-1 py-2 text-xs rounded-lg border transition-colors ${maintenanceBy===v ? 'bg-brand-100 border-brand-400 text-brand-700 font-semibold' : 'bg-white border-surface-200 text-surface-600'}`}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-surface-600 mb-2">Parking Included?</label>
                <div className="flex gap-2">
                  {[['Yes',true],['No',false]].map(([l,v]) => (
                    <button key={String(v)} onClick={() => setParkingIncluded(v)}
                      className={`flex-1 py-2 text-xs rounded-lg border transition-colors ${parkingIncluded===v ? 'bg-brand-100 border-brand-400 text-brand-700 font-semibold' : 'bg-white border-surface-200 text-surface-600'}`}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setTab(1)} className="flex-1 py-2.5 bg-surface-100 hover:bg-surface-200 text-surface-700 text-sm font-semibold rounded-xl transition-colors">← Back</button>
              <button onClick={() => setTab(3)} className="flex-1 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-colors">Preview Agreement →</button>
            </div>
          </div>
        )}

        {/* Tab 3: Preview */}
        {tab === 3 && (
          <div className="space-y-4">
            <div className="flex gap-3">
              <button onClick={handlePrint} className="flex-1 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-xl transition-colors">
                🖨️ Print / Download PDF
              </button>
              <button onClick={handleCopy} className="flex-1 py-2.5 bg-surface-100 hover:bg-surface-200 text-surface-700 text-sm font-semibold rounded-xl transition-colors">
                📋 Copy Text
              </button>
            </div>
            <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 max-h-[600px] overflow-auto">
              <pre className="font-serif text-xs leading-relaxed whitespace-pre-wrap text-surface-800">{agreementText}</pre>
            </div>
            <button onClick={() => setTab(0)} className="w-full py-2 bg-surface-100 hover:bg-surface-200 text-surface-700 text-sm font-semibold rounded-xl transition-colors">
              ← Edit Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
