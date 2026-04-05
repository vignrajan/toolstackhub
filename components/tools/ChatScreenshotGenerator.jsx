'use client';
import { useState, useRef, useCallback, useEffect } from 'react';

// ── TEMPLATES ───────────────────────────────────────────────
const TEMPLATES = [
  {
    id: 'ex-texting',
    label: 'Ex Texting Again',
    category: 'Relationships',
    platform: 'whatsapp',
    contact: { name: 'Alex 🚩', avatar: 'A', status: 'last seen today' },
    messages: [
      { id: 1, side: 'left',  text: 'hey', time: '11:42 PM', seen: true },
      { id: 2, side: 'right', text: '...', time: '11:58 PM', seen: true },
      { id: 3, side: 'left',  text: 'i miss you', time: '11:59 PM', seen: true },
      { id: 4, side: 'right', text: 'you had a whole year to miss me 💀', time: '12:01 AM', seen: true },
      { id: 5, side: 'left',  text: 'can we talk?', time: '12:02 AM', seen: true },
      { id: 6, side: 'right', text: 'sure. my lawyer will be in touch', time: '12:03 AM', seen: true },
    ],
  },
  {
    id: 'boss-weekend',
    label: 'Boss on Weekend',
    category: 'Work',
    platform: 'imessage',
    contact: { name: 'Sarah (Manager)', avatar: 'S', status: '' },
    messages: [
      { id: 1, side: 'left',  text: 'Hey! Quick question about the Q3 report 😊', time: '11:15 AM', seen: true },
      { id: 2, side: 'right', text: '...', time: '2:30 PM', seen: true },
      { id: 3, side: 'left',  text: 'It\'s Saturday btw not urgenttt', time: '2:31 PM', seen: true },
      { id: 4, side: 'right', text: 'I am on a beach in Goa', time: '3:00 PM', seen: true },
      { id: 5, side: 'left',  text: 'Ohhh haha ignore me!! Enjoy!', time: '3:01 PM', seen: true },
      { id: 6, side: 'right', text: 'It\'ll cost extra 😊', time: '3:02 PM', seen: true },
    ],
  },
  {
    id: 'salary-raise',
    label: 'Salary Raise Ask',
    category: 'Work',
    platform: 'whatsapp',
    contact: { name: 'Manager', avatar: 'M', status: 'online' },
    messages: [
      { id: 1, side: 'right', text: 'Hi, can we schedule a quick call? I want to discuss my compensation', time: '10:00 AM', seen: true },
      { id: 2, side: 'left',  text: 'Sure! What\'s the context?', time: '10:15 AM', seen: true },
      { id: 3, side: 'right', text: 'I\'ve been here 2 years. I do the work of 3 people. I need a raise.', time: '10:17 AM', seen: true },
      { id: 4, side: 'left',  text: 'You know the economy is tough right now...', time: '10:30 AM', seen: true },
      { id: 5, side: 'right', text: 'Funny. I just got an offer for 40% more. Thought you should know first.', time: '10:32 AM', seen: true },
      { id: 6, side: 'left',  text: 'Let me talk to finance 👀', time: '10:33 AM', seen: true },
    ],
  },
  {
    id: 'ghosting',
    label: 'Being Ghosted',
    category: 'Relationships',
    platform: 'imessage',
    contact: { name: 'Jordan', avatar: 'J', status: '' },
    messages: [
      { id: 1, side: 'right', text: 'Hey! Did you get my last message?', time: 'Mon 6:00 PM', seen: false },
      { id: 2, side: 'right', text: 'Hope everything\'s okay 🙂', time: 'Wed 11:00 AM', seen: false },
      { id: 3, side: 'right', text: 'No pressure just checking in', time: 'Fri 9:00 PM', seen: false },
      { id: 4, side: 'left',  text: 'Hey! So sorry been super busy 😅', time: 'Sun 8:00 PM', seen: true },
      { id: 5, side: 'right', text: 'You watched my story every day lol', time: 'Sun 8:01 PM', seen: true },
      { id: 6, side: 'left',  text: '...', time: 'Sun 8:15 PM', seen: true },
    ],
  },
  {
    id: 'friend-money',
    label: 'Friend Asking Money',
    category: 'Funny',
    platform: 'whatsapp',
    contact: { name: 'Rahul 💸', avatar: 'R', status: 'online' },
    messages: [
      { id: 1, side: 'left',  text: 'bro you there?', time: '9:00 PM', seen: true },
      { id: 2, side: 'right', text: 'what', time: '9:05 PM', seen: true },
      { id: 3, side: 'left',  text: 'nothing just checking on you 🥰 how are you bro', time: '9:05 PM', seen: true },
      { id: 4, side: 'right', text: 'how much', time: '9:06 PM', seen: true },
      { id: 5, side: 'left',  text: 'just 2k yaar emergency', time: '9:06 PM', seen: true },
      { id: 6, side: 'right', text: 'bro i checked on you last week too 😭', time: '9:07 PM', seen: true },
    ],
  },
  {
    id: 'we-need-to-talk',
    label: '"We Need to Talk" Anxiety',
    category: 'Gen Z / Viral',
    platform: 'imessage',
    contact: { name: 'Mom', avatar: 'M', status: '' },
    messages: [
      { id: 1, side: 'left',  text: 'We need to talk when you get home', time: '2:34 PM', seen: true },
      { id: 2, side: 'right', text: 'about what', time: '2:34 PM', seen: true },
      { id: 3, side: 'left',  text: 'Just come home', time: '2:35 PM', seen: true },
      { id: 4, side: 'right', text: 'ok now i\'m spiraling. what did i do', time: '2:36 PM', seen: true },
      { id: 5, side: 'left',  text: 'Nothing bad lol relax', time: '4:00 PM', seen: true },
      { id: 6, side: 'right', text: 'then SAY THAT in the first message 😭', time: '4:01 PM', seen: true },
    ],
  },
  {
    id: 'he-10-but',
    label: '"He\'s a 10 but..."',
    category: 'Gen Z / Viral',
    platform: 'whatsapp',
    contact: { name: 'Priya 💅', avatar: 'P', status: 'typing...' },
    messages: [
      { id: 1, side: 'left',  text: 'he\'s like a 10 but he uses "k" as a reply', time: '8:00 PM', seen: true },
      { id: 2, side: 'right', text: 'instant 2', time: '8:01 PM', seen: true },
      { id: 3, side: 'left',  text: 'he\'s a 10 but he watches my stories and doesn\'t text back', time: '8:02 PM', seen: true },
      { id: 4, side: 'right', text: 'negative 5', time: '8:02 PM', seen: true },
      { id: 5, side: 'left',  text: 'he\'s a 10 but he said "I\'m not looking for anything serious"', time: '8:03 PM', seen: true },
      { id: 6, side: 'right', text: 'he\'s just a 10 that\'s not for you bestie 💀', time: '8:04 PM', seen: true },
    ],
  },
  {
    id: 'autocorrect',
    label: 'Autocorrect Disaster',
    category: 'Funny',
    platform: 'imessage',
    contact: { name: 'Dad', avatar: 'D', status: '' },
    messages: [
      { id: 1, side: 'left',  text: 'Son I\'m in the parking slot', time: '3:00 PM', seen: true },
      { id: 2, side: 'right', text: 'ok coming', time: '3:01 PM', seen: true },
      { id: 3, side: 'left',  text: 'Ducking autocorrect changed my text again', time: '3:02 PM', seen: true },
      { id: 4, side: 'right', text: 'lmaooo dad', time: '3:02 PM', seen: true },
      { id: 5, side: 'left',  text: 'I SAID DUCKING', time: '3:03 PM', seen: true },
      { id: 6, side: 'right', text: 'I\'m telling mom 💀', time: '3:03 PM', seen: true },
    ],
  },
  {
    id: 'red-flag',
    label: 'Red Flag Spotted',
    category: 'Gen Z / Viral',
    platform: 'whatsapp',
    contact: { name: 'Mystery Person 🚩', avatar: '?', status: 'online' },
    messages: [
      { id: 1, side: 'left',  text: 'why do you even need girl best friends', time: '10:00 PM', seen: true },
      { id: 2, side: 'right', text: 'they\'re literally just friends?', time: '10:01 PM', seen: true },
      { id: 3, side: 'left',  text: 'no girl is friends with a guy unless they like him', time: '10:02 PM', seen: true },
      { id: 4, side: 'right', text: 'ok 🚩', time: '10:02 PM', seen: true },
      { id: 5, side: 'left',  text: 'why are you putting a flag', time: '10:03 PM', seen: true },
      { id: 6, side: 'right', text: 'just organizing my collection 🚩🚩🚩', time: '10:03 PM', seen: true },
    ],
  },
  {
    id: 'freelancer-payment',
    label: 'Chasing Payment',
    category: 'Work',
    platform: 'whatsapp',
    contact: { name: 'Client', avatar: 'C', status: 'last seen 3 days ago' },
    messages: [
      { id: 1, side: 'right', text: 'Hi! Just a reminder — invoice #4 was due 2 weeks ago', time: 'Mon 10:00 AM', seen: false },
      { id: 2, side: 'right', text: 'Let me know if you need me to resend 🙏', time: 'Wed 2:00 PM', seen: false },
      { id: 3, side: 'left',  text: 'Hey! Yes so sorry processing on our end', time: 'Fri 5:00 PM', seen: true },
      { id: 4, side: 'right', text: 'Great! Let me know when it\'s done 🙂', time: 'Fri 5:01 PM', seen: true },
      { id: 5, side: 'left',  text: 'Hey quick update — we\'re going with a different vendor', time: 'Sun 11:00 PM', seen: true },
      { id: 6, side: 'right', text: 'The invoice still needs to be paid though', time: 'Sun 11:00 PM', seen: true },
    ],
  },
  {
    id: 'snap-streak-broken',
    label: 'Streak Broken Drama 🔥',
    category: 'Gen Z / Viral',
    platform: 'snapchat',
    contact: { name: 'bestie 👻', avatar: 'B', status: '💛 #1 Best Friend' },
    messages: [
      { id: 1, side: 'left',  text: 'YOU BROKE OUR 847 DAY STREAK', time: '8:02 AM', seen: true },
      { id: 2, side: 'right', text: 'i was ASLEEP', time: '8:03 AM', seen: true },
      { id: 3, side: 'left',  text: 'set an alarm like a normal person 😭', time: '8:03 AM', seen: true },
      { id: 4, side: 'right', text: 'it was 3am in my timezone!!', time: '8:04 AM', seen: true },
      { id: 5, side: 'left',  text: 'not my problem. 847 days GONE.', time: '8:04 AM', seen: true },
      { id: 6, side: 'right', text: 'i\'m buying you a streak restore rn', time: '8:05 AM', seen: true },
    ],
  },
];

const PLATFORMS = {
  whatsapp: {
    label: 'WhatsApp',
    emoji: '💬',
    bg: '#E5DDD5',
    header: '#075E54',
    headerText: '#ffffff',
    senderBubble: '#DCF8C6',
    senderText: '#111b21',
    receiverBubble: '#ffffff',
    receiverText: '#111b21',
    timeColor: '#8696a0',
    tickColor: '#53bdeb',
    statusColor: '#d9fdd3',
    fontFamily: "'Segoe UI', system-ui, sans-serif",
  },
  imessage: {
    label: 'iMessage',
    emoji: '💙',
    bg: '#f2f2f7',
    header: '#ffffff',
    headerText: '#000000',
    senderBubble: '#007AFF',
    senderText: '#ffffff',
    receiverBubble: '#e9e9eb',
    receiverText: '#000000',
    timeColor: '#8e8e93',
    tickColor: '#007AFF',
    statusColor: '#007AFF',
    fontFamily: "-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif",
  },
  instagram: {
    label: 'Instagram DM',
    emoji: '📸',
    bg: '#000000',
    header: '#000000',
    headerText: '#ffffff',
    senderBubble: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
    senderText: '#ffffff',
    receiverBubble: '#262626',
    receiverText: '#ffffff',
    timeColor: '#737373',
    tickColor: '#c7c7c7',
    statusColor: '#c7c7c7',
    fontFamily: "-apple-system, 'SF Pro Text', system-ui, sans-serif",
  },
  snapchat: {
    label: 'Snapchat',
    emoji: '👻',
    bg: '#0d0d0d',
    header: '#1a1a1a',
    headerText: '#ffffff',
    senderBubble: '#0FABFF',
    senderText: '#ffffff',
    receiverBubble: '#2a2a2a',
    receiverText: '#ffffff',
    timeColor: '#6e6e6e',
    tickColor: '#FFFC00',
    statusColor: '#FFFC00',
    fontFamily: "'Avenir Next', 'Avenir', system-ui, sans-serif",
  },
};

let msgId = 100;
const newMsg = (side = 'right') => ({
  id: ++msgId,
  side,
  text: '',
  time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
  seen: true,
  editing: true,
});

// ── CHAT BUBBLE ──────────────────────────────────────────────
function Bubble({ msg, platform, onEdit, onDelete, onToggleSide }) {
  const p = PLATFORMS[platform];
  const isRight = msg.side === 'right';
  const [hovering, setHovering] = useState(false);

  const bubbleStyle = isRight ? {
    background: platform === 'instagram'
      ? 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)'
      : p.senderBubble,
    color: p.senderText,
    borderRadius: platform === 'imessage'
      ? '20px 20px 4px 20px'
      : '8px 8px 2px 8px',
    maxWidth: '75%',
    padding: '8px 12px',
    fontSize: '14.5px',
    lineHeight: '1.4',
    wordBreak: 'break-word',
    position: 'relative',
    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
  } : {
    background: p.receiverBubble,
    color: p.receiverText,
    borderRadius: platform === 'imessage'
      ? '20px 20px 20px 4px'
      : '8px 8px 8px 2px',
    maxWidth: '75%',
    padding: '8px 12px',
    fontSize: '14.5px',
    lineHeight: '1.4',
    wordBreak: 'break-word',
    position: 'relative',
    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: isRight ? 'flex-end' : 'flex-start', marginBottom: '4px', padding: '0 12px', position: 'relative' }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Controls */}
      {hovering && (
        <div style={{ display: 'flex', gap: '4px', marginBottom: '4px', order: isRight ? 1 : 0 }}>
          <button onClick={() => onToggleSide(msg.id)} style={{ fontSize: '10px', padding: '2px 6px', borderRadius: '6px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer', color: '#555' }}>
            ⇄ Flip
          </button>
          <button onClick={() => onDelete(msg.id)} style={{ fontSize: '10px', padding: '2px 6px', borderRadius: '6px', border: '1px solid #fcc', background: '#fff5f5', cursor: 'pointer', color: '#c00' }}>
            ✕
          </button>
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', flexDirection: isRight ? 'row-reverse' : 'row' }}>
        <div style={bubbleStyle}>
          {msg.editing ? (
            <textarea
              autoFocus
              value={msg.text}
              onChange={e => onEdit(msg.id, 'text', e.target.value)}
              onBlur={() => onEdit(msg.id, 'editing', false)}
              style={{
                background: 'transparent', border: 'none', outline: 'none', color: 'inherit',
                fontSize: '14.5px', lineHeight: '1.4', width: '100%', minWidth: '120px',
                resize: 'none', fontFamily: 'inherit', padding: 0, minHeight: '20px',
              }}
              rows={1}
              onInput={e => { e.target.style.height = 'auto'; e.target.style.height = e.target.scrollHeight + 'px'; }}
            />
          ) : (
            <div onClick={() => onEdit(msg.id, 'editing', true)} style={{ cursor: 'text', whiteSpace: 'pre-wrap' }}>
              {msg.text || <span style={{ opacity: 0.5 }}>Tap to edit...</span>}
            </div>
          )}
        </div>
      </div>

      {/* Time + Ticks */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginTop: '2px', color: p.timeColor, fontSize: '11px' }}>
        <span>{msg.time}</span>
        {isRight && platform === 'whatsapp' && (
          <span style={{ color: msg.seen ? p.tickColor : p.timeColor, fontSize: '13px' }}>
            {msg.seen ? '✓✓' : '✓'}
          </span>
        )}
        {isRight && platform === 'imessage' && (
          <span style={{ color: p.statusColor, fontSize: '11px' }}>
            {msg.seen ? 'Read' : 'Delivered'}
          </span>
        )}
      </div>
    </div>
  );
}

// ── PHONE FRAME ──────────────────────────────────────────────
function PhoneFrame({ children, showFrame, platform }) {
  const p = PLATFORMS[platform];
  if (!showFrame) return children;
  return (
    <div style={{
      width: '390px', height: '780px', borderRadius: '46px',
      background: '#1a1a1a', padding: '12px',
      boxShadow: '0 0 0 2px #333, 0 30px 80px rgba(0,0,0,0.6), inset 0 0 0 1px #555',
      position: 'relative', overflow: 'hidden', flexShrink: 0,
    }}>
      {/* Notch */}
      <div style={{ position: 'absolute', top: '14px', left: '50%', transform: 'translateX(-50%)', width: '120px', height: '30px', background: '#1a1a1a', borderRadius: '20px', zIndex: 10 }} />
      <div style={{ width: '100%', height: '100%', borderRadius: '36px', overflow: 'hidden', background: p.bg }}>
        {children}
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ───────────────────────────────────────────
export default function ChatScreenshotGenerator() {
  const chatRef = useRef(null);
  const [platform, setPlatform] = useState('whatsapp');
  const [showFrame, setShowFrame] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [activeTab, setActiveTab] = useState('build'); // build | templates
  const [contact, setContact] = useState({ name: 'Alex', avatar: 'A', status: 'online' });
  const [messages, setMessages] = useState([
    { id: 1, side: 'left',  text: 'Hey! Are you free tonight?', time: '7:30 PM', seen: true, editing: false },
    { id: 2, side: 'right', text: 'Yeah what\'s up? 😊', time: '7:31 PM', seen: true, editing: false },
    { id: 3, side: 'left',  text: 'Want to grab dinner?', time: '7:32 PM', seen: true, editing: false },
    { id: 4, side: 'right', text: 'Absolutely! Where?', time: '7:33 PM', seen: true, editing: false },
  ]);
  const [showWatermark, setShowWatermark] = useState(true);
  const [currentTime, setCurrentTime] = useState('9:41');

  const p = PLATFORMS[platform];

  const addMessage = (side) => {
    setMessages(prev => [...prev, newMsg(side)]);
  };

  const editMessage = (id, field, val) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, [field]: val } : m));
  };

  const deleteMessage = (id) => {
    setMessages(prev => prev.filter(m => m.id !== id));
  };

  const toggleSide = (id) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, side: m.side === 'left' ? 'right' : 'left' } : m));
  };

  const loadTemplate = (tpl) => {
    setPlatform(tpl.platform);
    setContact(tpl.contact);
    setMessages(tpl.messages.map(m => ({ ...m, editing: false })));
    setActiveTab('build');
  };

  const handleExport = useCallback(async () => {
    if (!chatRef.current) return;
    setExporting(true);
    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(chatRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: p.bg,
        logging: false,
        allowTaint: true,
      });
      const link = document.createElement('a');
      link.download = `chat-screenshot-${platform}-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
    } catch (err) {
      alert('Export failed. Try again.');
    }
    setExporting(false);
  }, [platform, p.bg]);

  // Chat preview header
  const ChatHeader = () => (
    <div style={{
      background: p.header,
      padding: platform === 'instagram' || platform === 'snapchat' ? '12px 16px' : '10px 16px',
      display: 'flex', alignItems: 'center', gap: '12px',
      borderBottom: platform === 'imessage' ? '0.5px solid #d1d1d6' : platform === 'snapchat' ? '1px solid #222' : 'none',
      paddingTop: platform === 'imessage' ? '52px' : '10px',
    }}>
      {/* Back arrow */}
      <span style={{
        color: platform === 'whatsapp' ? '#ffffff'
          : platform === 'instagram' ? '#ffffff'
          : platform === 'snapchat' ? '#FFFC00'
          : '#007AFF',
        fontSize: '20px', cursor: 'default',
      }}>←</span>

      {/* Avatar */}
      <div style={{
        width: '38px', height: '38px', borderRadius: '50%', flexShrink: 0,
        background: platform === 'whatsapp' ? '#128C7E'
          : platform === 'instagram' ? '#833ab4'
          : platform === 'snapchat' ? '#FFFC00'
          : '#007AFF',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: platform === 'snapchat' ? '#000' : '#fff',
        fontWeight: 700, fontSize: '16px', fontFamily: p.fontFamily,
      }}>
        {platform === 'snapchat' ? '👻' : contact.avatar?.slice(0, 1).toUpperCase() || '?'}
      </div>

      {/* Name + status */}
      <div style={{ flex: 1 }}>
        <div style={{ color: p.headerText, fontWeight: 700, fontSize: '15px', fontFamily: p.fontFamily }}>{contact.name}</div>
        {contact.status && (
          <div style={{
            color: platform === 'whatsapp' ? '#d9fdd3'
              : platform === 'snapchat' ? '#6e6e6e'
              : '#8e8e93',
            fontSize: '12px', fontFamily: p.fontFamily,
          }}>{contact.status}</div>
        )}
      </div>

      {/* Icons */}
      <div style={{ display: 'flex', gap: '16px', color: p.headerText, fontSize: '18px' }}>
        {platform === 'whatsapp' && <><span>📹</span><span>📞</span></>}
        {platform === 'imessage' && <><span>📹</span><span>📞</span></>}
        {platform === 'instagram' && <><span>📞</span><span>📹</span></>}
        {platform === 'snapchat' && (
          <>
            <span style={{ color: '#FFFC00', fontSize: '20px' }}>📞</span>
            <span style={{ color: '#FFFC00', fontSize: '20px' }}>📹</span>
          </>
        )}
      </div>
    </div>
  );

  // Time display at top
  const StatusBar = () => (
    <div style={{
      display: 'flex', justifyContent: 'space-between', padding: '8px 20px 0',
      background: p.header, color: p.headerText, fontSize: '13px', fontWeight: 600, fontFamily: p.fontFamily,
    }}>
      <span>{currentTime}</span>
      <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '12px' }}>
        <span>●●●</span>
        <span>WiFi</span>
        <span>🔋</span>
      </div>
    </div>
  );

  const bgStyle = platform === 'whatsapp' ? {
    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h100v100H0z\' fill=\'%23E5DDD5\'/%3E%3C/svg%3E")',
    backgroundColor: '#E5DDD5',
  } : { backgroundColor: p.bg };

  return (
    <div className="space-y-4">

      {/* ── CONTROLS PANEL ────────────────────────────────── */}
      <div className="bg-white border border-surface-200 rounded-2xl overflow-hidden print:hidden">

        {/* Tab bar */}
        <div className="flex border-b border-surface-100">
          {['build', 'templates'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-semibold capitalize transition-colors ${
                activeTab === tab ? 'text-brand-700 border-b-2 border-brand-600 bg-brand-50' : 'text-surface-500 hover:text-surface-700'
              }`}>
              {tab === 'build' ? '⚙️ Build' : '🔥 Templates'}
            </button>
          ))}
        </div>

        {activeTab === 'build' && (
          <div className="p-5 space-y-5">

            {/* Platform + Display */}
            <div className="flex flex-wrap gap-4 items-end">
              <div>
                <label className="text-xs font-bold text-surface-500 uppercase tracking-wider block mb-2">Platform</label>
                <div className="flex gap-2">
                  {Object.entries(PLATFORMS).map(([key, val]) => (
                    <button key={key} onClick={() => setPlatform(key)}
                      className={`px-3 py-2 text-xs font-bold rounded-xl border transition-all ${
                        platform === key ? 'bg-surface-900 text-white border-surface-900' : 'bg-white text-surface-600 border-surface-200 hover:border-surface-400'
                      }`}>
                      {val.emoji} {val.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 ml-auto">
                <label className="flex items-center gap-2 text-sm font-medium text-surface-600 cursor-pointer">
                  <div onClick={() => setShowFrame(p => !p)}
                    className={`w-9 h-5 rounded-full transition-colors flex items-center cursor-pointer ${showFrame ? 'bg-brand-600' : 'bg-surface-300'}`}>
                    <div className={`w-4 h-4 bg-white rounded-full mx-0.5 shadow transition-transform ${showFrame ? 'translate-x-4' : ''}`} />
                  </div>
                  Phone Frame
                </label>
                <label className="flex items-center gap-2 text-sm font-medium text-surface-600 cursor-pointer">
                  <div onClick={() => setShowWatermark(p => !p)}
                    className={`w-9 h-5 rounded-full transition-colors flex items-center cursor-pointer ${showWatermark ? 'bg-brand-600' : 'bg-surface-300'}`}>
                    <div className={`w-4 h-4 bg-white rounded-full mx-0.5 shadow transition-transform ${showWatermark ? 'translate-x-4' : ''}`} />
                  </div>
                  Watermark
                </label>
              </div>
            </div>

            {/* Contact info */}
            <div>
              <label className="text-xs font-bold text-surface-500 uppercase tracking-wider block mb-2">Contact</label>
              <div className="flex gap-3 flex-wrap">
                <input value={contact.name} onChange={e => setContact(p => ({...p, name: e.target.value}))}
                  placeholder="Contact name" className="text-sm border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-400 flex-1 min-w-32" />
                <input value={contact.status} onChange={e => setContact(p => ({...p, status: e.target.value}))}
                  placeholder="Status (online, typing...)" className="text-sm border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-400 flex-1 min-w-32" />
                <input value={contact.avatar} onChange={e => setContact(p => ({...p, avatar: e.target.value}))}
                  placeholder="Avatar initial" className="text-sm border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-400 w-24" maxLength={2} />
                <input value={currentTime} onChange={e => setCurrentTime(e.target.value)}
                  placeholder="9:41" className="text-sm border border-surface-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-400 w-20" />
              </div>
            </div>

            {/* Messages list */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-surface-500 uppercase tracking-wider">Messages</label>
                <span className="text-xs text-surface-400">{messages.length} messages · click bubble to edit</span>
              </div>
              <div className="space-y-2 max-h-48 overflow-y-auto bg-surface-50 rounded-xl p-3">
                {messages.map(m => (
                  <div key={m.id} className="flex items-center gap-2 text-sm bg-white rounded-lg px-3 py-2 border border-surface-100">
                    <button onClick={() => setMessages(prev => prev.map(msg => msg.id === m.id ? { ...msg, side: msg.side === 'left' ? 'right' : 'left' } : msg))}
                      className="text-xs px-2 py-0.5 rounded-full border border-surface-200 text-surface-500 hover:bg-surface-100 shrink-0">
                      {m.side === 'right' ? '→ You' : '← Them'}
                    </button>
                    <span className="flex-1 truncate text-surface-700">{m.text || '(empty)'}</span>
                    <input value={m.time} onChange={e => editMessage(m.id, 'time', e.target.value)}
                      className="w-20 text-xs border border-surface-200 rounded-lg px-1.5 py-0.5 focus:outline-none shrink-0" />
                    <button onClick={() => setMessages(prev => prev.map(msg => msg.id === m.id ? { ...msg, seen: !msg.seen } : msg))}
                      className={`text-xs shrink-0 ${m.seen ? 'text-brand-600' : 'text-surface-400'}`}>
                      {m.side === 'right' ? (m.seen ? '✓✓' : '✓') : ''}
                    </button>
                    <button onClick={() => deleteMessage(m.id)} className="text-rose-400 hover:text-rose-600 shrink-0">✕</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Add message buttons */}
            <div className="flex gap-2 flex-wrap">
              <button onClick={() => addMessage('left')}
                className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl border-2 border-dashed border-surface-300 text-surface-600 hover:border-brand-400 hover:text-brand-700 transition-colors">
                + Message from Them (←)
              </button>
              <button onClick={() => addMessage('right')}
                className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl border-2 border-dashed border-brand-300 text-brand-600 hover:border-brand-600 transition-colors">
                + Your Message (→)
              </button>
              <button onClick={handleExport} disabled={exporting}
                className="ml-auto flex items-center gap-2 bg-surface-900 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-surface-800 transition-colors disabled:opacity-70">
                {exporting ? (
                  <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>Exporting...</>
                ) : '⬇️ Download PNG'}
              </button>
            </div>
          </div>
        )}

        {activeTab === 'templates' && (
          <div className="p-5">
            <p className="text-sm text-surface-500 mb-4">Click any template to load it into the editor. You can edit all messages after loading.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-1">
              {TEMPLATES.map(tpl => (
                <button key={tpl.id} onClick={() => loadTemplate(tpl)}
                  className="text-left p-4 bg-surface-50 border border-surface-200 rounded-xl hover:border-brand-400 hover:bg-brand-50 transition-all group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{PLATFORMS[tpl.platform].emoji}</span>
                    <span className="font-bold text-surface-900 group-hover:text-brand-700 text-sm">{tpl.label}</span>
                    <span className="ml-auto text-xs text-surface-400 bg-surface-100 px-2 py-0.5 rounded-full">{tpl.category}</span>
                  </div>
                  <div className="space-y-1">
                    {tpl.messages.slice(0, 2).map(m => (
                      <div key={m.id} className={`text-xs text-surface-500 truncate ${m.side === 'right' ? 'text-right' : 'text-left'}`}>
                        {m.side === 'right' ? '→ ' : '← '}{m.text}
                      </div>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── CHAT PREVIEW ────────────────────────────────────── */}
      <div className="flex justify-center py-4">
        <div ref={chatRef} style={{
          width: showFrame ? '390px' : '380px',
          background: p.bg,
          borderRadius: showFrame ? '46px' : '16px',
          overflow: 'hidden',
          boxShadow: showFrame
            ? '0 0 0 2px #333, 0 30px 80px rgba(0,0,0,0.4), inset 0 0 0 1px #555'
            : '0 4px 24px rgba(0,0,0,0.15)',
          fontFamily: p.fontFamily,
          position: 'relative',
          padding: showFrame ? '12px' : '0',
        }}>
          <div style={{
            background: p.bg,
            borderRadius: showFrame ? '36px' : '16px',
            overflow: 'hidden',
            minHeight: '600px',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {/* Status bar */}
            <div style={{
              background: p.header, padding: '8px 20px 0',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              color: p.headerText, fontSize: '13px', fontWeight: 600,
            }}>
              <span>{currentTime}</span>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '11px' }}>
                <span>●●●</span><span>WiFi</span><span>🔋</span>
              </div>
            </div>

            <ChatHeader />

            {/* Messages area */}
            <div style={{
              flex: 1, overflowY: 'auto', padding: '8px 0',
              background: p.bg,
              backgroundImage: platform === 'whatsapp'
                ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Cpath d=\'M0 0h200v200H0z\' fill=\'%23e5ddd5\'/%3E%3C/svg%3E")'
                : 'none',
            }}>
              {/* Date divider */}
              <div style={{ display: 'flex', justifyContent: 'center', margin: '8px 0' }}>
                <span style={{
                  background: (platform === 'instagram' || platform === 'snapchat') ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)',
                  color: (platform === 'instagram' || platform === 'snapchat') ? '#fff' : '#666',
                  fontSize: '12px', padding: '4px 12px', borderRadius: '20px',
                  fontFamily: p.fontFamily,
                }}>Today</span>
              </div>

              {messages.map(msg => (
                <Bubble
                  key={msg.id}
                  msg={msg}
                  platform={platform}
                  onEdit={editMessage}
                  onDelete={deleteMessage}
                  onToggleSide={toggleSide}
                />
              ))}
            </div>

            {/* Input bar */}
            <div style={{
              background: p.header,
              padding: '8px 12px',
              display: 'flex', alignItems: 'center', gap: '8px',
              borderTop: platform === 'imessage' ? '0.5px solid #d1d1d6'
                : platform === 'snapchat' ? '1px solid #222' : 'none',
            }}>
              {platform === 'whatsapp' && <span style={{ fontSize: '20px' }}>😊</span>}
              {platform === 'snapchat' && <span style={{ fontSize: '20px' }}>😊</span>}
              <div style={{
                flex: 1,
                background: platform === 'instagram' ? '#262626'
                  : platform === 'snapchat' ? '#1f1f1f'
                  : '#ffffff',
                borderRadius: '24px', padding: '8px 16px',
                fontSize: '14px', color: p.timeColor,
                border: platform === 'imessage' ? '1px solid #d1d1d6'
                  : platform === 'snapchat' ? '1px solid #333' : 'none',
                fontFamily: p.fontFamily,
              }}>
                {platform === 'instagram' ? 'Message...'
                  : platform === 'imessage' ? 'iMessage'
                  : platform === 'snapchat' ? 'Send a chat'
                  : 'Message'}
              </div>
              {platform === 'whatsapp' && (
                <span style={{ fontSize: '20px', background: '#128C7E', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🎤</span>
              )}
              {platform === 'imessage' && (
                <span style={{ background: '#007AFF', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px' }}>↑</span>
              )}
              {platform === 'instagram' && (
                <span style={{ color: '#0095f6', fontSize: '14px', fontWeight: 600, fontFamily: p.fontFamily }}>Send</span>
              )}
              {platform === 'snapchat' && (
                <span style={{ fontSize: '22px' }}>📸</span>
              )}
            </div>

            {/* Watermark */}
            {showWatermark && (
              <div style={{
                background: p.header, textAlign: 'center',
                padding: '4px 0 6px',
                color: platform === 'imessage' ? '#8e8e93' : 'rgba(255,255,255,0.4)',
                fontSize: '10px', fontFamily: p.fontFamily,
              }}>
                toolstackhub.in/chat-screenshot-generator
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick tips */}
      <div className="bg-surface-50 border border-surface-200 rounded-2xl p-4">
        <div className="text-xs font-bold uppercase tracking-wider text-surface-400 mb-3">💡 Tips</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon:'✏️', tip:'Click any bubble in the preview to edit text inline' },
            { icon:'⇄',  tip:'Click "Flip" on hover to switch sender/receiver' },
            { icon:'🔥', tip:'Use Templates tab for 10 ready-to-use viral chats' },
            { icon:'⬇️', tip:'Download saves a 3× retina-quality PNG to your device' },
          ].map(t => (
            <div key={t.tip} className="flex items-start gap-2 text-xs text-surface-500">
              <span className="shrink-0">{t.icon}</span><span>{t.tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}