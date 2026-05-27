'use client';
import { useState, useMemo, useRef } from 'react';

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function fmt(n) {
  return Math.round(n).toLocaleString('en-IN');
}

export default function SalarySlipGenerator() {
  const printRef = useRef(null);

  // Employee info
  const [empName,    setEmpName]    = useState('Rahul Sharma');
  const [empId,      setEmpId]      = useState('EMP-001');
  const [designation, setDesignation] = useState('Software Engineer');
  const [department, setDepartment] = useState('Engineering');
  const [company,    setCompany]    = useState('Acme Technologies Pvt. Ltd.');
  const [month,      setMonth]      = useState(new Date().getMonth());
  const [year,       setYear]       = useState(new Date().getFullYear());
  const [doj,        setDoj]        = useState('2022-01-15');
  const [bankName,   setBankName]   = useState('HDFC Bank');
  const [accountNo,  setAccountNo]  = useState('XXXX XXXX 1234');
  const [pan,        setPan]        = useState('ABCDE1234F');
  const [uan,        setUan]        = useState('100123456789');

  // Earnings (monthly)
  const [basic,      setBasic]      = useState(40000);
  const [hra,        setHra]        = useState(16000);
  const [da,         setDa]         = useState(0);
  const [conveyance, setConveyance] = useState(1600);
  const [medical,    setMedical]    = useState(1250);
  const [lta,        setLta]        = useState(3333);
  const [special,    setSpecial]    = useState(10000);
  const [bonus,      setBonus]      = useState(0);

  // Deductions (monthly)
  const [pfEmployee, setPfEmployee] = useState('auto'); // 'auto' = 12% of basic
  const [profTax,    setProfTax]    = useState(200);
  const [tds,        setTds]        = useState(5000);
  const [advance,    setAdvance]    = useState(0);
  const [otherDed,   setOtherDed]   = useState(0);

  const result = useMemo(() => {
    const grossEarnings = basic + hra + da + conveyance + medical + lta + special + bonus;
    const pfAuto = Math.round(Math.min(basic, 15000) * 0.12);
    const pfActual = pfEmployee === 'auto' ? pfAuto : Number(pfEmployee) || 0;
    const totalDeductions = pfActual + profTax + tds + advance + otherDed;
    const netPay = grossEarnings - totalDeductions;
    return { grossEarnings, pfActual, totalDeductions, netPay };
  }, [basic, hra, da, conveyance, medical, lta, special, bonus, pfEmployee, profTax, tds, advance, otherDed]);

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const win = window.open('', '_blank');
    win.document.write(`
      <html><head><title>Salary Slip — ${MONTHS[month]} ${year}</title>
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: Arial, sans-serif; font-size: 12px; color: #111; background: white; }
        .slip { max-width: 800px; margin: 0 auto; padding: 24px; border: 1px solid #ccc; }
        .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 12px; margin-bottom: 12px; }
        .company-name { font-size: 18px; font-weight: bold; }
        .slip-title { font-size: 13px; margin-top: 4px; color: #555; }
        .emp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 16px; }
        .emp-grid div { display: flex; gap: 6px; }
        .label { color: #555; min-width: 110px; }
        .value { font-weight: 600; }
        .earnings-table { width: 100%; border-collapse: collapse; }
        .earnings-table th { background: #f3f4f6; font-weight: 700; padding: 6px 10px; text-align: left; border: 1px solid #ddd; font-size: 11px; text-transform: uppercase; }
        .earnings-table td { padding: 5px 10px; border: 1px solid #ddd; }
        .total-row td { font-weight: 700; background: #f9fafb; }
        .net-row { margin-top: 12px; border: 2px solid #333; border-radius: 4px; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center; }
        .net-label { font-size: 14px; font-weight: 700; }
        .net-value { font-size: 18px; font-weight: 900; }
        .footer { text-align: center; font-size: 10px; color: #888; margin-top: 16px; border-top: 1px solid #eee; padding-top: 8px; }
        @media print { body { print-color-adjust: exact; -webkit-print-color-adjust: exact; } }
      </style></head><body>${printContents}</body></html>
    `);
    win.document.close();
    win.focus();
    win.print();
    win.close();
  };

  const earnings = [
    ['Basic Salary',          basic],
    ['House Rent Allowance',  hra],
    ['Dearness Allowance',    da],
    ['Conveyance Allowance',  conveyance],
    ['Medical Allowance',     medical],
    ['Leave Travel Allowance',lta],
    ['Special Allowance',     special],
    ['Bonus',                 bonus],
  ].filter(([,v]) => v > 0);

  const deductions = [
    ['EPF (Employee)',        result.pfActual],
    ['Professional Tax',      profTax],
    ['Income Tax (TDS)',      tds],
    ['Advance Deduction',     advance],
    ['Other Deductions',      otherDed],
  ].filter(([,v]) => v > 0);

  const InputField = ({ label, value, setter, type = 'text' }) => (
    <div>
      <label className="block text-xs font-medium text-surface-600 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => setter(type === 'number' ? Number(e.target.value) || 0 : e.target.value)}
        className="input-field text-sm"
      />
    </div>
  );

  const NumField = ({ label, value, setter }) => (
    <div>
      <label className="block text-xs font-medium text-surface-600 mb-1">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 text-sm">₹</span>
        <input
          type="number"
          value={value}
          onChange={e => setter(Number(e.target.value) || 0)}
          className="input-field pl-7 text-sm"
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Input form */}
      <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
        <div className="px-5 py-3 bg-surface-50 border-b border-surface-200">
          <span className="text-sm font-medium text-surface-600">Employee & Company Details</span>
        </div>
        <div className="p-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
          <InputField label="Employee Name"   value={empName}      setter={setEmpName} />
          <InputField label="Employee ID"     value={empId}        setter={setEmpId} />
          <InputField label="Designation"     value={designation}  setter={setDesignation} />
          <InputField label="Department"      value={department}   setter={setDepartment} />
          <InputField label="Company Name"    value={company}      setter={setCompany} />
          <InputField label="Date of Joining" value={doj}          setter={setDoj} type="date" />
          <div>
            <label className="block text-xs font-medium text-surface-600 mb-1">Month</label>
            <select value={month} onChange={e => setMonth(Number(e.target.value))} className="input-field text-sm">
              {MONTHS.map((m, i) => <option key={m} value={i}>{m}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-surface-600 mb-1">Year</label>
            <select value={year} onChange={e => setYear(Number(e.target.value))} className="input-field text-sm">
              {[2023,2024,2025,2026].map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
          <InputField label="Bank Name"       value={bankName}     setter={setBankName} />
          <InputField label="Account No."     value={accountNo}    setter={setAccountNo} />
          <InputField label="PAN"             value={pan}          setter={setPan} />
          <InputField label="UAN"             value={uan}          setter={setUan} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Earnings */}
        <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
          <div className="px-5 py-3 bg-emerald-50 border-b border-emerald-200">
            <span className="text-sm font-semibold text-emerald-700">Earnings (Monthly)</span>
          </div>
          <div className="p-4 space-y-3">
            {[
              ['Basic Salary',           basic,      setBasic],
              ['House Rent Allowance',   hra,        setHra],
              ['Dearness Allowance',     da,         setDa],
              ['Conveyance Allowance',   conveyance, setConveyance],
              ['Medical Allowance',      medical,    setMedical],
              ['Leave Travel Allowance', lta,        setLta],
              ['Special Allowance',      special,    setSpecial],
              ['Bonus',                  bonus,      setBonus],
            ].map(([label, value, setter]) => (
              <NumField key={label} label={label} value={value} setter={setter} />
            ))}
            <div className="border-t border-surface-200 pt-3 flex justify-between font-semibold text-sm">
              <span className="text-surface-700">Gross Earnings</span>
              <span className="text-emerald-700">₹{fmt(result.grossEarnings)}</span>
            </div>
          </div>
        </div>

        {/* Deductions */}
        <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
          <div className="px-5 py-3 bg-red-50 border-b border-red-200">
            <span className="text-sm font-semibold text-red-700">Deductions (Monthly)</span>
          </div>
          <div className="p-4 space-y-3">
            <div>
              <label className="block text-xs font-medium text-surface-600 mb-1">EPF Employee Contribution</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setPfEmployee('auto')}
                  className={`flex-1 py-1.5 text-xs rounded-lg border transition-colors ${pfEmployee === 'auto' ? 'bg-brand-100 border-brand-400 text-brand-700 font-semibold' : 'bg-white border-surface-200 text-surface-600'}`}
                >
                  Auto (12% of Basic, max ₹15K)
                </button>
              </div>
              {pfEmployee !== 'auto' && (
                <div className="relative mt-2">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 text-sm">₹</span>
                  <input
                    type="number"
                    value={pfEmployee}
                    onChange={e => setPfEmployee(e.target.value)}
                    className="input-field pl-7 text-sm"
                  />
                </div>
              )}
              {pfEmployee === 'auto' && (
                <p className="text-xs text-surface-400 mt-1">= ₹{fmt(result.pfActual)} / month</p>
              )}
            </div>
            {[
              ['Professional Tax',    profTax,  setProfTax],
              ['Income Tax (TDS)',    tds,      setTds],
              ['Advance Deduction',   advance,  setAdvance],
              ['Other Deductions',    otherDed, setOtherDed],
            ].map(([label, value, setter]) => (
              <NumField key={label} label={label} value={value} setter={setter} />
            ))}
            <div className="border-t border-surface-200 pt-3 flex justify-between font-semibold text-sm">
              <span className="text-surface-700">Total Deductions</span>
              <span className="text-red-600">₹{fmt(result.totalDeductions)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Net Pay Summary */}
      <div className="bg-emerald-600 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <p className="text-emerald-100 text-sm font-medium">Net Pay — {MONTHS[month]} {year}</p>
          <p className="text-white text-3xl font-bold mt-0.5">₹{fmt(result.netPay)}</p>
        </div>
        <button
          onClick={handlePrint}
          className="px-6 py-2.5 bg-white hover:bg-emerald-50 text-emerald-700 text-sm font-bold rounded-xl transition-colors shadow"
        >
          🖨️ Print / Download PDF
        </button>
      </div>

      {/* Printable salary slip (hidden on screen) */}
      <div className="hidden">
        <div ref={printRef}>
          <div className="slip">
            <div className="header">
              <div className="company-name">{company}</div>
              <div className="slip-title">Salary Slip — {MONTHS[month]} {year}</div>
            </div>
            <div className="emp-grid">
              <div><span className="label">Employee Name:</span><span className="value">{empName}</span></div>
              <div><span className="label">Employee ID:</span><span className="value">{empId}</span></div>
              <div><span className="label">Designation:</span><span className="value">{designation}</span></div>
              <div><span className="label">Department:</span><span className="value">{department}</span></div>
              <div><span className="label">Date of Joining:</span><span className="value">{doj}</span></div>
              <div><span className="label">PAN:</span><span className="value">{pan}</span></div>
              <div><span className="label">UAN:</span><span className="value">{uan}</span></div>
              <div><span className="label">Bank:</span><span className="value">{bankName} — {accountNo}</span></div>
            </div>
            <table className="earnings-table">
              <thead>
                <tr>
                  <th style={{ width: '40%' }}>Earnings</th>
                  <th style={{ width: '10%', textAlign: 'right' }}>Amount (₹)</th>
                  <th style={{ width: '40%' }}>Deductions</th>
                  <th style={{ width: '10%', textAlign: 'right' }}>Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: Math.max(earnings.length, deductions.length) }).map((_, i) => (
                  <tr key={i}>
                    <td>{earnings[i]?.[0] ?? ''}</td>
                    <td style={{ textAlign: 'right' }}>{earnings[i] ? fmt(earnings[i][1]) : ''}</td>
                    <td>{deductions[i]?.[0] ?? ''}</td>
                    <td style={{ textAlign: 'right' }}>{deductions[i] ? fmt(deductions[i][1]) : ''}</td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td>Gross Earnings</td>
                  <td style={{ textAlign: 'right' }}>{fmt(result.grossEarnings)}</td>
                  <td>Total Deductions</td>
                  <td style={{ textAlign: 'right' }}>{fmt(result.totalDeductions)}</td>
                </tr>
              </tbody>
            </table>
            <div className="net-row">
              <span className="net-label">Net Pay (Take Home)</span>
              <span className="net-value">₹ {fmt(result.netPay)}</span>
            </div>
            <div className="footer">
              This is a computer-generated salary slip and does not require a signature. Generated via ToolStackHub.in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
