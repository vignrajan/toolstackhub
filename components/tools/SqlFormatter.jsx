'use client';
import { useState, useMemo } from 'react';

const KEYWORDS = [
  'SELECT','FROM','WHERE','JOIN','LEFT','RIGHT','INNER','OUTER','FULL','CROSS',
  'ON','GROUP BY','ORDER BY','HAVING','LIMIT','OFFSET','UNION','ALL','DISTINCT',
  'INSERT INTO','VALUES','UPDATE','SET','DELETE FROM','DELETE','CREATE TABLE',
  'CREATE INDEX','ALTER TABLE','DROP TABLE','DROP INDEX','TRUNCATE','EXISTS',
  'NOT EXISTS','IN','NOT IN','BETWEEN','LIKE','IS NULL','IS NOT NULL',
  'AND','OR','NOT','AS','WITH','CASE','WHEN','THEN','ELSE','END',
  'COUNT','SUM','AVG','MIN','MAX','COALESCE','NULLIF','CAST','CONVERT',
  'IF','IFNULL','ISNULL','NVL','SUBSTR','SUBSTRING','LENGTH','TRIM','UPPER','LOWER',
  'NOW','CURDATE','DATE','YEAR','MONTH','DAY','DATEDIFF','DATEADD',
  'CONCAT','REPLACE','ROUND','FLOOR','CEIL','ABS','MOD',
  'PRIMARY KEY','FOREIGN KEY','REFERENCES','CONSTRAINT','INDEX','UNIQUE',
  'NOT NULL','DEFAULT','AUTO_INCREMENT','AUTOINCREMENT','SERIAL',
  'BEGIN','COMMIT','ROLLBACK','TRANSACTION','DECLARE','PROCEDURE','FUNCTION',
  'RETURNS','RETURN','TRIGGER','VIEW','SCHEMA','DATABASE','USE',
];

// Sort by length descending so longer keywords are matched first
const SORTED_KEYWORDS = [...KEYWORDS].sort((a, b) => b.length - a.length);

function formatSQL(raw, { keywordCase, indent, commaStyle }) {
  if (!raw.trim()) return '';
  const indentStr = indent === '2' ? '  ' : indent === '4' ? '    ' : '\t';

  // Tokenize
  const tokens = [];
  let str = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  // Simple tokenizer: strings, comments, keywords, identifiers
  const re = /('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|--[^\n]*|\/\*[\s\S]*?\*\/|[(),;]|[^\s(),;]+/g;
  let m;
  while ((m = re.exec(str)) !== null) {
    tokens.push(m[0]);
  }

  const applyCase = (token) => {
    const upper = token.toUpperCase();
    if (SORTED_KEYWORDS.includes(upper)) {
      return keywordCase === 'upper' ? upper : upper.toLowerCase();
    }
    return token;
  };

  // Reconstruct with formatting
  const result = [];
  let depth = 0;

  const newline = () => '\n' + indentStr.repeat(depth);

  const MAJOR_CLAUSES = new Set([
    'SELECT','FROM','WHERE','JOIN','LEFT JOIN','RIGHT JOIN','INNER JOIN',
    'OUTER JOIN','FULL JOIN','CROSS JOIN','GROUP BY','ORDER BY','HAVING',
    'LIMIT','OFFSET','UNION','UNION ALL','INSERT INTO','VALUES','UPDATE',
    'SET','DELETE FROM','CREATE TABLE','ALTER TABLE','ON',
  ]);

  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    const upper = tok.toUpperCase();

    if (tok === '(') {
      result.push('(');
      depth++;
    } else if (tok === ')') {
      depth = Math.max(0, depth - 1);
      result.push(')');
    } else if (tok === ',') {
      if (commaStyle === 'end') {
        result.push(',\n' + indentStr.repeat(depth));
      } else {
        result.push('\n' + indentStr.repeat(depth) + ',');
      }
    } else if (tok === ';') {
      result.push(';\n');
    } else if (MAJOR_CLAUSES.has(upper)) {
      // Check multi-word clauses
      let matched = upper;
      for (const kw of SORTED_KEYWORDS) {
        if (!MAJOR_CLAUSES.has(kw)) continue;
        const words = kw.split(' ');
        if (words.length > 1) {
          const upcoming = tokens.slice(i, i + words.length).map(t => t.toUpperCase()).join(' ');
          if (upcoming === kw) {
            matched = kw;
            i += words.length - 1;
            break;
          }
        }
      }
      if (result.length > 0) result.push('\n');
      result.push(keywordCase === 'upper' ? matched : matched.toLowerCase());
      result.push('\n' + indentStr);
    } else {
      // Check if it's a single keyword
      const cased = applyCase(tok);
      const last = result[result.length - 1];
      if (last && !last.endsWith('\n') && last !== '(' && cased !== ')') {
        result.push(' ');
      }
      result.push(cased);
    }
  }

  return result.join('').replace(/\n{3,}/g, '\n\n').trim();
}

const EXAMPLES = [
  {
    label: 'Basic SELECT',
    sql: `select id, name, email, created_at from users where status = 'active' and age > 18 order by created_at desc limit 10;`,
  },
  {
    label: 'JOIN query',
    sql: `select o.id, u.name, u.email, p.name as product, oi.quantity, oi.price from orders o inner join users u on o.user_id = u.id inner join order_items oi on oi.order_id = o.id inner join products p on p.id = oi.product_id where o.status = 'completed' and o.created_at >= '2025-01-01' order by o.created_at desc;`,
  },
  {
    label: 'Aggregation',
    sql: `select department, count(*) as total_employees, avg(salary) as avg_salary, sum(salary) as total_payroll from employees where status = 'active' group by department having count(*) > 5 order by total_payroll desc;`,
  },
];

export default function SqlFormatter() {
  const [input,       setInput]       = useState('');
  const [keywordCase, setKeywordCase] = useState('upper');
  const [indent,      setIndent]      = useState('2');
  const [commaStyle,  setCommaStyle]  = useState('end');
  const [copied,      setCopied]      = useState(false);

  const output = useMemo(() => {
    try { return formatSQL(input, { keywordCase, indent, commaStyle }); }
    catch { return input; }
  }, [input, keywordCase, indent, commaStyle]);

  const copy = async () => {
    try { await navigator.clipboard.writeText(output); }
    catch {
      const el = document.createElement('textarea');
      el.value = output; document.body.appendChild(el); el.select();
      document.execCommand('copy'); document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      {/* Options bar */}
      <div className="px-5 py-3 bg-surface-50 border-b border-surface-200 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-surface-500 font-medium">Keywords:</span>
          {[['UPPER','upper'],['lower','lower']].map(([l,v]) => (
            <button key={v} onClick={() => setKeywordCase(v)}
              className={`px-3 py-1 text-xs rounded-lg border transition-colors ${keywordCase===v ? 'bg-brand-100 border-brand-400 text-brand-700 font-bold' : 'bg-white border-surface-200 text-surface-600'}`}>
              {l}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-surface-500 font-medium">Indent:</span>
          {[['2 spaces','2'],['4 spaces','4'],['Tab','tab']].map(([l,v]) => (
            <button key={v} onClick={() => setIndent(v)}
              className={`px-3 py-1 text-xs rounded-lg border transition-colors ${indent===v ? 'bg-brand-100 border-brand-400 text-brand-700 font-bold' : 'bg-white border-surface-200 text-surface-600'}`}>
              {l}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-surface-500 font-medium">Comma:</span>
          {[['End of line','end'],['Start of line','start']].map(([l,v]) => (
            <button key={v} onClick={() => setCommaStyle(v)}
              className={`px-3 py-1 text-xs rounded-lg border transition-colors ${commaStyle===v ? 'bg-brand-100 border-brand-400 text-brand-700 font-bold' : 'bg-white border-surface-200 text-surface-600'}`}>
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Example buttons */}
      <div className="px-5 py-2 border-b border-surface-100 flex flex-wrap gap-2">
        <span className="text-xs text-surface-400 self-center">Examples:</span>
        {EXAMPLES.map(ex => (
          <button key={ex.label} onClick={() => setInput(ex.sql)}
            className="text-xs px-3 py-1 bg-surface-50 border border-surface-200 text-surface-600 rounded-full hover:border-brand-300 hover:bg-brand-50 transition-colors">
            {ex.label}
          </button>
        ))}
      </div>

      <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Input */}
        <div>
          <label className="block text-xs font-semibold text-surface-600 mb-2 uppercase tracking-wider">SQL Input</label>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Paste your SQL query here…"
            className="textarea-field font-mono text-sm min-h-[320px]"
            spellCheck={false}
          />
        </div>

        {/* Output */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-semibold text-surface-600 uppercase tracking-wider">Formatted SQL</label>
            {output && (
              <button onClick={copy} className="text-xs px-3 py-1 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors">
                {copied ? 'Copied ✓' : 'Copy'}
              </button>
            )}
          </div>
          <div className="bg-surface-900 rounded-xl min-h-[320px] overflow-auto">
            {output ? (
              <pre className="p-4 font-mono text-xs text-surface-100 leading-relaxed whitespace-pre-wrap">{output}</pre>
            ) : (
              <div className="flex items-center justify-center h-40 text-surface-500 text-sm">
                Formatted SQL will appear here
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
