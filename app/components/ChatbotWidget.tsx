import { useMemo, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type ChatMessage = {
  id: number;
  from: 'bot' | 'user';
  text: string;
};

type QuickAction = {
  label: string;
  answer: string;
};

type KnowledgeItem = {
  keywords: string[];
  answer: string;
};

const quickActions: QuickAction[] = [
  {
    label: 'Services',
    answer:
      'I build geospatial systems STAC APIs environmental dashboards remote sensing analytics and full-stack GIS applications.',
  },
  {
    label: 'Key Projects',
    answer:
      'Top projects include a dynamic STAC platform on S3 EcoDashboard monitoring workflows Namukima LULC classification and SAR-based analytics.',
  },
  {
    label: 'Hire Me',
    answer:
      'You can hire me for geospatial development full-stack GIS engineering API integration and environmental intelligence projects.',
  },
  {
    label: 'Contact',
    answer: 'Use the contact form section. I can also share direct email: koomebrian285@gmail.com',
  },
];

const knowledgeBase: KnowledgeItem[] = [
  {
    keywords: ['service', 'services', 'offer', 'what do you do', 'work'],
    answer:
      'On this site I focus on geospatial systems engineering STAC APIs environmental dashboards remote sensing analytics and full-stack GIS development.',
  },
  {
    keywords: ['project', 'projects', 'portfolio', 'featured'],
    answer:
      'My featured work here includes Dynamic STAC on S3 EcoDashboard monitoring Namukima LULC classification NDVI VCI SPI prediction burned area SAR mapping and InSAR deformation monitoring.',
  },
  {
    keywords: ['skills', 'tech', 'stack', 'tools', 'backend', 'frontend'],
    answer:
      'My stack shown on this site includes HTML CSS JavaScript Python Django Node.js PostgreSQL PostGIS MongoDB Web GIS tooling and AI approaches including CNN and Bayesian networks.',
  },
  {
    keywords: ['stac', 'titiler', 'tipg', 's3', 'api'],
    answer:
      'The STAC implementation shown here includes dynamic ingestion from S3 STAC Browser API integration TiTiler rendering and TiPG-backed geospatial services.',
  },
  {
    keywords: ['certification', 'certifications', 'course', 'coursera', 'freecodecamp'],
    answer:
      'My certifications listed here include Meta Front-End and Back-End freeCodeCamp tracks APIs and microservices PostGIS SQL PostgreSQL and cloud-oriented full stack development.',
  },
  {
    keywords: ['volunteer', 'volunteering', 'osm', 'hot', 'unv', 'open source'],
    answer:
      'My volunteering here includes OpenStreetMap contribution HOT volunteer GIS work UNV online volunteering and open-source geospatial full-stack contributions on GitHub.',
  },
  {
    keywords: ['contact', 'email', 'phone', 'hire', 'reach'],
    answer:
      'You can reach me at koomebrian285@gmail.com or 0705078418 and you can also use the contact form section on this site.',
  },
  {
    keywords: ['linkedin', 'github', 'medium', 'social'],
    answer: 'My social links available here are LinkedIn GitHub and Medium in the contact section.',
  },
  {
    keywords: ['university', 'academic', 'training', 'coursework'],
    answer:
      'My academic section includes a full Year 1 to Final Year training timeline covering GIS surveying photogrammetry remote sensing geodesy and engineering applications.',
  },
];

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      from: 'bot',
      text: "Hello I am Kirimi Kooome Brian's portfolio assistant. Ask me about projects skills certifications or collaboration.",
    },
  ]);
  const [input, setInput] = useState('');

  const nextId = useMemo(() => messages.length + 1, [messages.length]);

  const respond = (question: string) => {
    const q = question.toLowerCase();
    const normalized = q.replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
    const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'];

    if (greetings.some((g) => normalized.includes(g))) {
      return "Hello. I am Kirimi Kooome Brian's portfolio assistant. Ask me about projects services skills certifications or contact options.";
    }

    const introMatch = normalized.match(/\b(i am|im|i m|my name is)\s+([a-z0-9]{1,30})\b/);
    if (introMatch) {
      const name = introMatch[2].toUpperCase();
      return `Nice to meet you ${name}. I can walk you through Kirimi Kooome Brian's projects skills and collaboration options on this website.`;
    }

    if (normalized.includes('who are you') || normalized.includes('your name')) {
      return "I represent Kirimi Kooome Brian's portfolio and I can guide you through his geospatial work technical stack and collaboration options.";
    }

    if (normalized.includes('thank you') || normalized.includes('thanks')) {
      return 'You are welcome. If useful I can show projects skills certifications or contact details.';
    }

    let best: { score: number; answer: string } = { score: 0, answer: '' };

    for (const item of knowledgeBase) {
      let score = 0;
      for (const keyword of item.keywords) {
        if (normalized.includes(keyword)) score += 1;
      }
      if (score > best.score) best = { score, answer: item.answer };
    }

    if (best.score > 0) return best.answer;

    return 'Great question. I keep responses focused on this portfolio. You can ask about projects services skills certifications volunteering or contact details.';
  };

  const sendUserMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = { id: nextId, from: 'user', text: trimmed };
    const botMessage: ChatMessage = { id: nextId + 1, from: 'bot', text: respond(trimmed) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[min(92vw,360px)] h-[500px] rounded-2xl border border-cyan-400/30 bg-[#0B0F1A]/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 mb-3 flex flex-col overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <p className="text-sm font-semibold text-cyan-300">Geo Assistant</p>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-xl text-sm ${
                      message.from === 'user'
                        ? 'bg-cyan-500/20 text-cyan-100 border border-cyan-400/30'
                        : 'bg-white/10 text-gray-200 border border-white/10'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-3 py-2 border-t border-white/10">
              <div className="flex flex-wrap gap-2 mb-2">
                {quickActions.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => sendUserMessage(item.label)}
                    className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-200 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/30 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendUserMessage(input);
                }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-400/40 outline-none text-sm text-white"
                />
                <button
                  type="submit"
                  className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/40 flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Toggle chatbot"
      >
        {open ? <X size={22} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
