'use client';
import { useState } from 'react';

function Calc({ title, icon, fields, formula, result }) {
  const [vals, setVals] = useState({});
  const set = (k,v) => setVals(p => ({...p,[k]:v}));
  const res = result(vals);
  return (
    <div className="bg-surface-50 border border-surface-200 rounded-2xl p-4">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-semibold text-surface-900">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {fields.map(f => (
          <div key={f.key}>
            <label className="block text-xs font-medium text-surface-600 mb-1">{f.label}</label>
            <input type="number" value={vals[f.key]||''} onChange={e=>set(f.key,e.target.value)}
              placeholder={f.placeholder||'0'} className="input-field text-sm" />
          </div>
        ))}
      </div>
      <div className={`p-3 rounded-xl text-center font-bold text-lg transition-all ${res !== null ? 'bg-brand-600 text-white' : 'bg-surface-200 text-surface-400'}`}>
        {res !== null ? `${res}` : '—'}
      </div>
      <p className="text-xs text-surface-400 mt-2 text-center">{formula}</p>
    </div>
  );
}

export default function PercentageCalculator() {
  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">Percentage Calculator</span>
      </div>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Calc
          title="What is X% of Y?"
          icon="🔢"
          fields={[{key:'p',label:'Percentage (X)',placeholder:'e.g. 20'},{key:'n',label:'Number (Y)',placeholder:'e.g. 500'}]}
          formula="Result = (X / 100) × Y"
          result={({p,n}) => p&&n ? `${((Number(p)/100)*Number(n)).toFixed(2)}` : null}
        />
        <Calc
          title="X is what % of Y?"
          icon="📊"
          fields={[{key:'x',label:'Value (X)',placeholder:'e.g. 50'},{key:'y',label:'Total (Y)',placeholder:'e.g. 200'}]}
          formula="Result = (X / Y) × 100"
          result={({x,y}) => x&&y&&Number(y)!==0 ? `${((Number(x)/Number(y))*100).toFixed(2)}%` : null}
        />
        <Calc
          title="Percentage Change"
          icon="📈"
          fields={[{key:'from',label:'From Value',placeholder:'e.g. 80'},{key:'to',label:'To Value',placeholder:'e.g. 100'}]}
          formula="Result = ((To - From) / From) × 100"
          result={({from,to}) => from&&to&&Number(from)!==0 ? `${(((Number(to)-Number(from))/Math.abs(Number(from)))*100).toFixed(2)}%` : null}
        />
        <Calc
          title="Add Percentage"
          icon="➕"
          fields={[{key:'val',label:'Value',placeholder:'e.g. 100'},{key:'pct',label:'Add %',placeholder:'e.g. 15'}]}
          formula="Result = Value × (1 + %/100)"
          result={({val,pct}) => val&&pct ? `${(Number(val)*(1+Number(pct)/100)).toFixed(2)}` : null}
        />
        <Calc
          title="Subtract Percentage"
          icon="➖"
          fields={[{key:'val',label:'Value',placeholder:'e.g. 100'},{key:'pct',label:'Subtract %',placeholder:'e.g. 10'}]}
          formula="Result = Value × (1 - %/100)"
          result={({val,pct}) => val&&pct ? `${(Number(val)*(1-Number(pct)/100)).toFixed(2)}` : null}
        />
        <Calc
          title="Percentage Difference"
          icon="↔️"
          fields={[{key:'a',label:'Value A',placeholder:'e.g. 40'},{key:'b',label:'Value B',placeholder:'e.g. 60'}]}
          formula="Result = |A-B| / ((A+B)/2) × 100"
          result={({a,b}) => a&&b&&(Number(a)+Number(b))!==0 ? `${(Math.abs(Number(a)-Number(b))/((Number(a)+Number(b))/2)*100).toFixed(2)}%` : null}
        />
      </div>
    </div>
  );
}
