'use client';
import { useState } from 'react';

// Each model has different prompt optimization strategies
const MODEL_CONFIGS = {
  claude: {
    name:    'Claude',
    company: 'Anthropic',
    icon:    '🟠',
    color:   'border-orange-200 bg-orange-50',
    badge:   'bg-orange-100 text-orange-700',
    tips:    'XML tags, step-by-step thinking, structured output',
    build: ({ task, tone, format, persona, context, steps }) => {
      const lines = [];
      if (persona) lines.push(`You are ${persona}.`);
      lines.push('');
      if (context) {
        lines.push('<context>');
        lines.push(context);
        lines.push('</context>');
        lines.push('');
      }
      lines.push('<task>');
      lines.push(task);
      lines.push('</task>');
      lines.push('');
      lines.push('<instructions>');
      if (steps) lines.push('- Think through this step by step before giving your final answer.');
      if (tone)   lines.push(`- Use a ${tone} tone throughout your response.`);
      if (format) lines.push(`- Format your response as: ${format}`);
      lines.push('- Be thorough but concise. Prioritize accuracy.');
      lines.push('</instructions>');
      if (steps) {
        lines.push('');
        lines.push('<thinking>');
        lines.push('Walk through your reasoning here before the final answer.');
        lines.push('</thinking>');
      }
      return lines.join('\n');
    },
  },
  chatgpt: {
    name:    'ChatGPT',
    company: 'OpenAI',
    icon:    '🟢',
    color:   'border-emerald-200 bg-emerald-50',
    badge:   'bg-emerald-100 text-emerald-700',
    tips:    'Role assignment, numbered steps, clear constraints',
    build: ({ task, tone, format, persona, context, steps }) => {
      const lines = [];
      if (persona) {
        lines.push(`Act as ${persona}.`);
        lines.push('');
      }
      if (context) {
        lines.push(`Background: ${context}`);
        lines.push('');
      }
      lines.push(`Task: ${task}`);
      lines.push('');
      lines.push('Requirements:');
      if (steps)  lines.push('1. Break down your answer into clear numbered steps.');
      if (tone)   lines.push(`${steps ? '2' : '1'}. Use a ${tone} tone.`);
      if (format) lines.push(`${steps && tone ? '3' : steps || tone ? '2' : '1'}. Output format: ${format}`);
      lines.push(`${steps || tone || format ? 'Final' : '1'}. Be specific, practical, and actionable.`);
      lines.push('');
      lines.push('Please provide a comprehensive and well-structured response.');
      return lines.join('\n');
    },
  },
  gemini: {
    name:    'Gemini',
    company: 'Google',
    icon:    '🔵',
    color:   'border-blue-200 bg-blue-50',
    badge:   'bg-blue-100 text-blue-700',
    tips:    'Clear objective, examples, output specification',
    build: ({ task, tone, format, persona, context, steps }) => {
      const lines = [];
      lines.push('## Objective');
      lines.push(task);
      lines.push('');
      if (persona) {
        lines.push('## Role');
        lines.push(`Respond as ${persona}.`);
        lines.push('');
      }
      if (context) {
        lines.push('## Context');
        lines.push(context);
        lines.push('');
      }
      lines.push('## Guidelines');
      if (steps)  lines.push('- Provide a logical, step-by-step explanation.');
      if (tone)   lines.push(`- Maintain a ${tone} tone.`);
      if (format) lines.push(`- Present the output as: ${format}`);
      lines.push('- Be accurate, detailed, and easy to understand.');
      lines.push('');
      lines.push('## Expected Output');
      lines.push(format
        ? `Provide the response in ${format} format.`
        : 'Provide a clear, structured, and complete response.');
      return lines.join('\n');
    },
  },
};

const TONES    = ['professional', 'friendly', 'concise', 'detailed', 'creative', 'technical', 'casual', 'formal'];
const FORMATS  = ['bullet points', 'numbered list', 'paragraph', 'table', 'code', 'step-by-step guide', 'summary', 'Q&A format'];
const EXAMPLES = [
  { label: 'Blog post',       task: 'Write a blog post about the benefits of remote work for software developers', persona: 'an experienced tech writer', tone: 'friendly',      format: 'structured article with headings' },
  { label: 'Code review',     task: 'Review this Python function and suggest improvements for readability and performance', persona: 'a senior software engineer', tone: 'technical',  format: 'bullet points' },
  { label: 'Email draft',     task: 'Write a follow-up email to a client after a product demo meeting', persona: 'a professional sales consultant', tone: 'professional', format: 'email format' },
  { label: 'Study plan',      task: 'Create a 30-day study plan to learn machine learning from scratch', persona: 'an ML educator', tone: 'detailed',     format: 'structured weekly plan' },
  { label: 'Product desc',    task: 'Write a compelling product description for wireless noise-cancelling headphones', persona: 'a copywriter', tone: 'creative',     format: 'paragraph with bullet features' },
  { label: 'SQL query help',  task: 'Explain how to optimize a slow SQL query with multiple JOINs', persona: 'a database expert', tone: 'technical',    format: 'step-by-step guide' },
];

export default function AiPromptGenerator() {
  const [task, setTask]       = useState('');
  const [persona, setPersona] = useState('');
  const [context, setContext] = useState('');
  const [tone, setTone]       = useState('');
  const [format, setFormat]   = useState('');
  const [steps, setSteps]     = useState(false);
  const [results, setResults] = useState(null);
  const [copied, setCopied]   = useState('');
  const [activeTab, setActiveTab] = useState('claude');

  const generate = () => {
    if (!task.trim()) return;
    const params = { task: task.trim(), persona, context, tone, format, steps };
    setResults({
      claude:  MODEL_CONFIGS.claude.build(params),
      chatgpt: MODEL_CONFIGS.chatgpt.build(params),
      gemini:  MODEL_CONFIGS.gemini.build(params),
    });
    setActiveTab('claude');
  };

  const copy = (model) => {
    navigator.clipboard.writeText(results[model]);
    setCopied(model);
    setTimeout(() => setCopied(''), 2000);
  };

  const copyAll = () => {
    const all = Object.entries(MODEL_CONFIGS).map(([key, cfg]) =>
      `===== ${cfg.name} (${cfg.company}) =====\n\n${results[key]}`
    ).join('\n\n' + '─'.repeat(50) + '\n\n');
    navigator.clipboard.writeText(all);
    setCopied('all');
    setTimeout(() => setCopied(''), 2000);
  };

  const loadExample = (ex) => {
    setTask(ex.task);
    setPersona(ex.persona || '');
    setTone(ex.tone || '');
    setFormat(ex.format || '');
    setContext('');
    setResults(null);
  };

  const reset = () => {
    setTask(''); setPersona(''); setContext('');
    setTone(''); setFormat(''); setSteps(false);
    setResults(null); setCopied('');
  };

  return (
    <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-surface-50 border-b border-surface-200">
        <span className="text-sm font-medium text-surface-600">AI Prompt Generator</span>
        <div className="flex gap-2 text-xs">
          <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">Claude</span>
          <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">ChatGPT</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">Gemini</span>
        </div>
      </div>

      <div className="p-5 space-y-5">

        {/* Examples */}
        <div>
          <p className="text-xs font-medium text-surface-500 mb-2">Quick examples:</p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map(ex => (
              <button key={ex.label} onClick={() => loadExample(ex)}
                className="text-xs px-3 py-1.5 bg-surface-100 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors">
                {ex.label}
              </button>
            ))}
          </div>
        </div>

        {/* Task input */}
        <div>
          <label className="block text-sm font-medium text-surface-700 mb-1.5">
            What do you want the AI to do? <span className="text-red-500">*</span>
          </label>
          <textarea
            value={task}
            onChange={e => setTask(e.target.value)}
            placeholder="e.g. Write a product description for noise-cancelling headphones targeting remote workers..."
            className="textarea-field min-h-[100px]"
          />
        </div>

        {/* Options grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">
              Persona / Role <span className="text-surface-400 font-normal">(optional)</span>
            </label>
            <input value={persona} onChange={e => setPersona(e.target.value)}
              className="input-field" placeholder="e.g. a senior software engineer" />
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">
              Tone <span className="text-surface-400 font-normal">(optional)</span>
            </label>
            <select value={tone} onChange={e => setTone(e.target.value)} className="input-field">
              <option value="">Select a tone...</option>
              {TONES.map(t => <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">
              Output Format <span className="text-surface-400 font-normal">(optional)</span>
            </label>
            <select value={format} onChange={e => setFormat(e.target.value)} className="input-field">
              <option value="">Select a format...</option>
              {FORMATS.map(f => <option key={f} value={f}>{f.charAt(0).toUpperCase() + f.slice(1)}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">
              Context / Background <span className="text-surface-400 font-normal">(optional)</span>
            </label>
            <input value={context} onChange={e => setContext(e.target.value)}
              className="input-field" placeholder="e.g. This is for a startup's landing page" />
          </div>
        </div>

        {/* Step by step toggle */}
        <label className="flex items-center gap-3 p-3 bg-surface-50 rounded-xl border border-surface-200 cursor-pointer hover:border-brand-200 hover:bg-brand-50 transition-colors">
          <input type="checkbox" checked={steps} onChange={e => setSteps(e.target.checked)}
            className="w-4 h-4 accent-brand-600 rounded" />
          <div>
            <div className="text-sm font-medium text-surface-800">Include step-by-step reasoning</div>
            <div className="text-xs text-surface-500">Asks the AI to think through the problem before answering (better results)</div>
          </div>
        </label>

        {/* Generate button */}
        <div className="flex gap-3">
          <button onClick={generate} disabled={!task.trim()} className="btn-primary flex-1 text-base py-3">
            ✨ Generate Prompts for All 3 Models
          </button>
          {results && (
            <button onClick={reset} className="btn-secondary px-4">
              ↺ Reset
            </button>
          )}
        </div>

        {/* Results */}
        {results && (
          <div className="space-y-4">
            {/* Tab bar */}
            <div className="flex items-center justify-between">
              <div className="flex rounded-xl border border-surface-200 overflow-hidden">
                {Object.entries(MODEL_CONFIGS).map(([key, cfg]) => (
                  <button key={key} onClick={() => setActiveTab(key)}
                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors
                      ${activeTab === key ? 'bg-brand-600 text-white' : 'bg-white text-surface-600 hover:bg-surface-50'}`}>
                    <span>{cfg.icon}</span>
                    {cfg.name}
                  </button>
                ))}
              </div>
              <button onClick={copyAll} className="text-xs btn-ghost py-1.5 px-3">
                {copied === 'all' ? '✅ All Copied!' : '📋 Copy All 3'}
              </button>
            </div>

            {/* Active model prompt */}
            {Object.entries(MODEL_CONFIGS).map(([key, cfg]) => (
              activeTab === key && (
                <div key={key} className={`rounded-2xl border-2 overflow-hidden ${cfg.color}`}>
                  {/* Model header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-current border-opacity-10">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{cfg.icon}</span>
                      <div>
                        <span className="font-semibold text-surface-900">{cfg.name}</span>
                        <span className="text-surface-500 text-sm ml-1.5">by {cfg.company}</span>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${cfg.badge}`}>
                        Optimized
                      </span>
                    </div>
                    <button onClick={() => copy(key)}
                      className="btn-secondary text-sm py-1.5 px-3">
                      {copied === key ? '✅ Copied!' : '📋 Copy'}
                    </button>
                  </div>

                  {/* Prompt output */}
                  <pre className="p-4 font-mono text-sm text-surface-800 leading-relaxed whitespace-pre-wrap overflow-x-auto custom-scrollbar bg-white/60 min-h-[200px]">
                    {results[key]}
                  </pre>

                  {/* Tips footer */}
                  <div className="px-4 py-2.5 bg-white/40 border-t border-current border-opacity-10">
                    <p className="text-xs text-surface-500">
                      <span className="font-medium">Optimized for {cfg.name}:</span> {cfg.tips}
                    </p>
                  </div>
                </div>
              )
            ))}

            {/* How to use */}
            <div className="p-4 bg-surface-50 rounded-xl border border-surface-200">
              <p className="text-xs font-semibold text-surface-700 mb-2">How to use these prompts:</p>
              <ol className="space-y-1 text-xs text-surface-600">
                <li>1. Click the model tab above to view the optimized prompt for that AI</li>
                <li>2. Click <strong>Copy</strong> to copy it to your clipboard</li>
                <li>3. Paste it directly into Claude, ChatGPT, or Gemini</li>
                <li>4. Each prompt is tailored to get the best results from that specific model</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
