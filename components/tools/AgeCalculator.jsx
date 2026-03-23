'use client';
import { useState, useMemo } from 'react';

export default function AgeCalculator() {
  const [dob, setDob]       = useState('');
  const [toDate, setToDate] = useState(new Date().toISOString().split('T')[0]);

  const result = useMemo(() => {
    if (!dob) return null;
    const birth = new Date(dob);
    const end   = new Date(toDate);
    if (isNaN(birth) || isNaN(end) || birth > end) return null;

    let years  = end.getFullYear() - birth.getFullYear();
    let months = end.getMonth() - birth.getMonth();
    let days   = end.getDate() - birth.getDate();

    if (days < 0) { months--; const prev = new Date(end.getFullYear(), end.getMonth(), 0); days += prev.getDate(); }
    if (months < 0) { years--; months += 12; }

    const totalDays   = Math.floor((end - birth) / 86400000);
    const totalWeeks  = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;
    const totalHours  = totalDays * 24;
    const nextBday    = new Date(end.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBday <= end) nextBday.setFullYear(nextBday.getFullYear() + 1);
    const daysToNext  = Math.ceil((nextBday - end) / 86400000);
    const dayOfWeek   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][birth.getDay()];
    const zodiac      = getZodiac(birth.getMonth()+1, birth.getDate());

    return { years, months, days, totalDays, totalWeeks, totalMonths, totalHours, daysToNext, dayOfWeek, zodiac };
  }, [dob, toDate]);

  function getZodiac(m, d) {
    if ((m===1&&d>=20)||(m===2&&d<=18)) return '♒ Aquarius';
    if ((m===2&&d>=19)||(m===3&&d<=20)) return '♓ Pisces';
    if ((m===3&&d>=21)||(m===4&&d<=19)) return '♈ Aries';
    if ((m===4&&d>=20)||(m===5&&d<=20)) return '♉ Taurus';
    if ((m===5&&d>=21)||(m===6&&d<=20)) return '♊ Gemini';
    if ((m===6&&d>=21)||(m===7&&d<=22)) return '♋ Cancer';
    if ((m===7&&d>=23)||(m===8&&d<=22)) return '♌ Leo';
    if ((m===8&&d>=23)||(m===9&&d<=22)) return '♍ Virgo';
    if ((m===9&&d>=23)||(m===10&&d<=22)) return '♎ Libra';
    if ((m===10&&d>=23)||(m===11&&d<=21)) return '♏ Scorpio';
    if ((m===11&&d>=22)||(m===12&&d<=21)) return '♐ Sagittarius';
    return '♑ Capricorn';
  }

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">Age Calculator</span>
      </div>
      <div className="p-5 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Date of Birth</label>
            <input type="date" value={dob} onChange={e => setDob(e.target.value)}
              max={toDate} className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Age at Date</label>
            <input type="date" value={toDate} onChange={e => setToDate(e.target.value)}
              max={new Date().toISOString().split('T')[0]} className="input-field" />
          </div>
        </div>

        {!dob && (
          <div className="text-center py-8 text-surface-400">
            <div className="text-5xl mb-3">🎂</div>
            <p>Enter your date of birth to calculate your age</p>
          </div>
        )}

        {result && (
          <div className="space-y-4">
            {/* Main age display */}
            <div className="text-center py-6 bg-gradient-to-br from-brand-50 to-violet-50 rounded-2xl border border-brand-100">
              <div className="font-display font-bold text-6xl text-brand-700">{result.years}</div>
              <div className="text-surface-500 mt-1 text-lg">years old</div>
              <div className="text-surface-600 mt-2 font-medium">
                {result.months} months and {result.days} days
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: 'Total Months',  value: result.totalMonths.toLocaleString(), icon: '📅' },
                { label: 'Total Weeks',   value: result.totalWeeks.toLocaleString(),  icon: '📆' },
                { label: 'Total Days',    value: result.totalDays.toLocaleString(),   icon: '🗓️' },
                { label: 'Total Hours',   value: result.totalHours.toLocaleString(),  icon: '⏰' },
                { label: 'Next Birthday', value: `${result.daysToNext} days`,         icon: '🎉' },
                { label: 'Zodiac Sign',   value: result.zodiac,                       icon: '⭐' },
              ].map(s => (
                <div key={s.label} className="bg-surface-50 border border-surface-200 rounded-xl p-3 text-center">
                  <div className="text-xl mb-1">{s.icon}</div>
                  <div className="font-bold text-surface-900 text-sm">{s.value}</div>
                  <div className="text-xs text-surface-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            <p className="text-xs text-surface-400 text-center">
              Born on a <span className="font-medium text-surface-600">{result.dayOfWeek}</span>
            </p>
          </div>
        )}

        {dob && !result && (
          <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            ❌ Invalid date or end date is before birth date.
          </p>
        )}
      </div>
    </div>
  );
}
