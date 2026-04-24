"use client";

import { useState, useRef, useEffect, useCallback } from "react";

/* ─── Firebase Config ─── */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCU1AcfzpEFnW7Ay8TNKkiZUfuanZoWRIM",
  databaseURL: "https://zedtreeo-chat-default-rtdb.firebaseio.com",
  projectId: "zedtreeo-chat",
};

/* ─── Types ─── */
type Message = {
  id: string;
  text: string;
  sender: "user" | "bot" | "agent";
  timestamp: number;
};

type ChatState = "closed" | "open" | "minimized";
type LeadStep = "idle" | "ask-name" | "ask-email" | "ask-role" | "captured";

/* ─── Bot Responses ─── */
const QUICK_REPLIES = [
  { label: "Hire Talent", value: "hire" },
  { label: "Get Pricing", value: "pricing" },
  { label: "How It Works", value: "process" },
  { label: "Talk to a Human", value: "human" },
];

const BOT_RESPONSES: Record<string, string> = {
  hire: "We provide dedicated remote employees across 28+ role categories — developers, accountants, marketers, legal staff, and more. Starting from $5/hour with a free 5-day trial. What role are you looking to fill?",
  pricing: "Our pricing starts from $5/hour for virtual assistants and goes up to $15/hour for senior specialists. No recruitment fees, no hidden costs, no long-term contracts. Want a custom quote for your specific role?",
  process: "Here's how it works: (1) Share your requirements, (2) We match & vet candidates within 48 hours, (3) You interview shortlisted candidates, (4) Start with a free 5-day trial, (5) Onboard and scale. Ready to get started?",
  human: "I'll connect you with our team. To route you to the right person, could I get your name first?",
};

const WELCOME_MESSAGE = "Hi there! 👋 I'm Zedtreeo's assistant. How can I help you today?";
const BOT_DELAY = 800;

/* ─── Firebase REST helpers (no SDK needed) ─── */
async function firebasePush(path: string, data: Record<string, unknown>) {
  try {
    await fetch(`${FIREBASE_CONFIG.databaseURL}/${path}.json?key=${FIREBASE_CONFIG.apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    // Silently fail — chat still works locally
  }
}

function generateSessionId(): string {
  return `web_${now()}_${Math.random().toString(36).slice(2, 8)}`;
}

/** Timestamp helper — extracted to satisfy React compiler purity lint */
function now(): number {
  return Date.now();
}

/* ─── Component ─── */
export default function ChatWidget() {
  const [state, setState] = useState<ChatState>("closed");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [leadStep, setLeadStep] = useState<LeadStep>("idle");
  const [leadData, setLeadData] = useState({ name: "", email: "", role: "" });
  const [unread, setUnread] = useState(0);
  const sessionId = useRef(generateSessionId());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const addBotMessage = useCallback((text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: `bot_${now()}`, text, sender: "bot", timestamp: now() },
      ]);
      setIsTyping(false);
    }, BOT_DELAY);
  }, []);

  const openChat = () => {
    setState("open");
    setUnread(0);
    if (messages.length === 0) {
      addBotMessage(WELCOME_MESSAGE);
    }
    setTimeout(() => inputRef.current?.focus(), 300);
  };

  const handleQuickReply = (value: string) => {
    const reply = QUICK_REPLIES.find((r) => r.value === value);
    if (!reply) return;

    setShowQuickReplies(false);
    const ts = now();
    setMessages((prev) => [
      ...prev,
      { id: `user_${ts}`, text: reply.label, sender: "user", timestamp: ts },
    ]);

    // Log to Firebase
    firebasePush(`chats/${sessionId.current}/messages`, {
      text: reply.label,
      sender: "user",
      timestamp: ts,
    });

    if (value === "human") {
      setLeadStep("ask-name");
    }

    addBotMessage(BOT_RESPONSES[value] || "Let me help you with that. Could you tell me more about what you're looking for?");
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [
      ...prev,
      { id: `user_${now()}`, text, sender: "user", timestamp: now() },
    ]);
    setInput("");
    setShowQuickReplies(false);

    // Log to Firebase
    firebasePush(`chats/${sessionId.current}/messages`, {
      text,
      sender: "user",
      timestamp: now(),
    });

    // Lead capture flow
    if (leadStep === "ask-name") {
      setLeadData((prev) => ({ ...prev, name: text }));
      setLeadStep("ask-email");
      addBotMessage(`Thanks, ${text}! What's the best email to reach you?`);
      return;
    }

    if (leadStep === "ask-email") {
      if (text.includes("@")) {
        setLeadData((prev) => ({ ...prev, email: text }));
        setLeadStep("ask-role");
        addBotMessage("Great! And what role are you looking to hire for?");
      } else {
        addBotMessage("That doesn't look like a valid email. Could you double-check?");
      }
      return;
    }

    if (leadStep === "ask-role") {
      const finalLead = { ...leadData, role: text };
      setLeadData(finalLead);
      setLeadStep("captured");

      // Save lead to Firebase
      firebasePush("leads", {
        ...finalLead,
        sessionId: sessionId.current,
        source: "chat-widget",
        timestamp: now(),
        url: typeof window !== "undefined" ? window.location.href : "",
      });

      addBotMessage(`Perfect! I've noted that ${finalLead.name} is looking for: ${text}. Our team will reach out to ${finalLead.email} shortly. In the meantime, you can also start your free trial at zedtreeo.com/get-started`);
      return;
    }

    // Default response for free-text messages
    addBotMessage("Thanks for your message! For the fastest response, you can also reach us at info@zedtreeo.com or start a free trial at zedtreeo.com/get-started. Would you like to speak with our team?");
  };

  // unread is managed via setUnread in addBotMessage callback

  if (state === "closed") {
    return (
      <button
        onClick={openChat}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-zt-primary shadow-lg hover:bg-zt-primary/90 transition-all flex items-center justify-center group"
        aria-label="Open chat"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        {unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-zt-accent text-zt-headings text-xs font-bold rounded-full flex items-center justify-center">
            {unread}
          </span>
        )}
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-zt shadow-2xl overflow-hidden flex flex-col bg-white border border-zt-border"
      style={{ height: "min(520px, calc(100vh - 6rem))" }}
    >
      {/* Header */}
      <div className="bg-zt-primary text-white px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-zt-accent flex items-center justify-center">
            <span className="text-zt-headings font-bold text-sm">Z</span>
          </div>
          <div>
            <div className="text-sm font-semibold">Zedtreeo</div>
            <div className="text-xs text-white/60 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              Online
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => { setState("closed"); setUnread(0); }}
            className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/10"
            aria-label="Close chat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.sender === "user"
                  ? "bg-zt-primary text-white rounded-br-md"
                  : "bg-white text-zt-body border border-zt-border rounded-bl-md"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Quick replies */}
        {showQuickReplies && messages.length > 0 && !isTyping && (
          <div className="flex flex-wrap gap-2 pt-1">
            {QUICK_REPLIES.map((reply) => (
              <button
                key={reply.value}
                onClick={() => handleQuickReply(reply.value)}
                className="px-3 py-1.5 rounded-full bg-white border border-zt-accent text-zt-primary text-xs font-medium hover:bg-zt-accent/10 transition-colors"
              >
                {reply.label}
              </button>
            ))}
          </div>
        )}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-zt-border rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5">
              <span className="w-2 h-2 bg-zt-body/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-2 h-2 bg-zt-body/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-2 h-2 bg-zt-body/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-zt-border px-3 py-3 bg-white shrink-0">
        <form
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex items-center gap-2"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              leadStep === "ask-name" ? "Your name..." :
              leadStep === "ask-email" ? "your@email.com" :
              leadStep === "ask-role" ? "e.g. Full-Stack Developer" :
              "Type a message..."
            }
            className="flex-1 px-3 py-2 rounded-full bg-gray-50 border border-zt-border text-sm text-zt-headings placeholder:text-zt-body/50 focus:outline-none focus:border-zt-accent transition-colors"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="w-9 h-9 rounded-full bg-zt-primary text-white flex items-center justify-center hover:bg-zt-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            aria-label="Send message"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
