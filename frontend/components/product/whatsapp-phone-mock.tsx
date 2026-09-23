"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState, type ReactNode } from "react";

type ChatEvent =
  | { type: "typing"; side: "left" | "right"; durationMs: number }
  | { type: "message"; side: "left" | "right"; content: ReactNode; ai?: boolean }
  | { type: "cta"; label: string }
  | { type: "chip"; label: string; tone?: "success" | "info" }
  | { type: "pause"; durationMs: number };

type Scene = {
  id: string;
  label: string;
  script: ChatEvent[];
};

const SCENES: Scene[] = [
  {
    id: "quote",
    label: "Quote generation",
    script: [
      { type: "typing", side: "left", durationMs: 800 },
      {
        type: "message",
        side: "left",
        content: "Hi! I'd like a quote for a website.",
      },
      { type: "typing", side: "right", durationMs: 1000 },
      {
        type: "message",
        side: "right",
        ai: true,
        content: "Happy to help! What industry are you in, and roughly how many pages do you need?",
      },
      { type: "typing", side: "left", durationMs: 900 },
      {
        type: "message",
        side: "left",
        content: "We're a consultancy — about 5 pages with a contact form.",
      },
      { type: "typing", side: "right", durationMs: 1100 },
      {
        type: "message",
        side: "right",
        ai: true,
        content: (
          <>
            Great. A site like that typically starts from{" "}
            <span className="font-semibold">KSh 20,000</span>. Want to book a free consultation?
          </>
        ),
      },
      { type: "chip", label: "Quote drafted", tone: "success" },
      { type: "cta", label: "Book a free consultation" },
      { type: "pause", durationMs: 2600 },
    ],
  },
  {
    id: "booking",
    label: "Booking & reminders",
    script: [
      { type: "typing", side: "left", durationMs: 700 },
      {
        type: "message",
        side: "left",
        content: "Yes — can we meet this week?",
      },
      { type: "typing", side: "right", durationMs: 1000 },
      {
        type: "message",
        side: "right",
        ai: true,
        content: "I have Thu 10:00 or Fri 14:30 (EAT). Which works better?",
      },
      { type: "typing", side: "left", durationMs: 800 },
      {
        type: "message",
        side: "left",
        content: "Thursday 10:00 works.",
      },
      { type: "typing", side: "right", durationMs: 1100 },
      {
        type: "message",
        side: "right",
        ai: true,
        content: "Booked. I've added it to the calendar and will send a reminder 1 hour before.",
      },
      { type: "chip", label: "Calendar synced", tone: "info" },
      { type: "chip", label: "Reminder scheduled", tone: "success" },
      { type: "pause", durationMs: 2800 },
    ],
  },
  {
    id: "handoff",
    label: "Human takeover",
    script: [
      { type: "typing", side: "left", durationMs: 750 },
      {
        type: "message",
        side: "left",
        content: "Can someone review our custom integrations?",
      },
      { type: "typing", side: "right", durationMs: 900 },
      {
        type: "message",
        side: "right",
        ai: true,
        content: "Absolutely — I'll bring in a specialist now so nothing gets lost.",
      },
      { type: "chip", label: "Human takeover", tone: "info" },
      { type: "typing", side: "right", durationMs: 1000 },
      {
        type: "message",
        side: "right",
        content: "Hi, this is Ama from BK Tech Hub. I have your chat history — let's dig in.",
      },
      { type: "pause", durationMs: 2800 },
    ],
  },
];

type VisibleItem =
  | { id: string; kind: "message"; side: "left" | "right"; content: ReactNode; ai?: boolean }
  | { id: string; kind: "cta"; label: string }
  | { id: string; kind: "chip"; label: string; tone?: "success" | "info" };

function buildStaticFallback(scene: Scene): VisibleItem[] {
  const items: VisibleItem[] = [];
  scene.script.forEach((event, index) => {
    if (event.type === "message") {
      items.push({
        id: `static-${scene.id}-${index}`,
        kind: "message",
        side: event.side,
        content: event.content,
        ai: event.ai,
      });
    }
    if (event.type === "cta") {
      items.push({ id: `static-${scene.id}-cta`, kind: "cta", label: event.label });
    }
    if (event.type === "chip") {
      items.push({
        id: `static-${scene.id}-chip-${index}`,
        kind: "chip",
        label: event.label,
        tone: event.tone,
      });
    }
  });
  return items;
}

export function WhatsAppPhoneMock() {
  const shouldReduceMotion = useReducedMotion();
  const [sceneIndex, setSceneIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [items, setItems] = useState<VisibleItem[]>([]);
  const [typingSide, setTypingSide] = useState<"left" | "right" | null>(null);
  const [runId, setRunId] = useState(0);

  const scene = SCENES[sceneIndex];

  const advanceScene = useCallback(() => {
    setItems([]);
    setTypingSide(null);
    setStep(0);
    setSceneIndex((current) => (current + 1) % SCENES.length);
    setRunId((id) => id + 1);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) {
      setItems(buildStaticFallback(SCENES[0]));
      setTypingSide(null);
      return;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const script = scene.script;

    const run = (index: number, currentItems: VisibleItem[]) => {
      if (cancelled) return;

      if (index >= script.length) {
        timer = setTimeout(() => {
          if (cancelled) return;
          advanceScene();
        }, 450);
        return;
      }

      const event = script[index];
      setStep(index);

      if (event.type === "typing") {
        setTypingSide(event.side);
        timer = setTimeout(() => {
          if (cancelled) return;
          setTypingSide(null);
          run(index + 1, currentItems);
        }, event.durationMs);
        return;
      }

      if (event.type === "pause") {
        setTypingSide(null);
        timer = setTimeout(() => {
          if (cancelled) return;
          run(index + 1, currentItems);
        }, event.durationMs);
        return;
      }

      if (event.type === "message") {
        const next: VisibleItem[] = [
          ...currentItems,
          {
            id: `${runId}-${index}`,
            kind: "message",
            side: event.side,
            content: event.content,
            ai: event.ai,
          },
        ];
        setItems(next);
        timer = setTimeout(() => {
          if (cancelled) return;
          run(index + 1, next);
        }, 320);
        return;
      }

      if (event.type === "cta") {
        const next: VisibleItem[] = [
          ...currentItems,
          { id: `${runId}-cta-${index}`, kind: "cta", label: event.label },
        ];
        setItems(next);
        timer = setTimeout(() => {
          if (cancelled) return;
          run(index + 1, next);
        }, 320);
        return;
      }

      if (event.type === "chip") {
        const next: VisibleItem[] = [
          ...currentItems,
          {
            id: `${runId}-chip-${index}`,
            kind: "chip",
            label: event.label,
            tone: event.tone,
          },
        ];
        setItems(next);
        timer = setTimeout(() => {
          if (cancelled) return;
          run(index + 1, next);
        }, 280);
      }
    };

    timer = setTimeout(() => run(0, []), sceneIndex === 0 && runId === 0 ? 500 : 350);

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [shouldReduceMotion, scene, sceneIndex, runId, advanceScene]);

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[340px]"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.96 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {!shouldReduceMotion ? (
        <motion.div
          className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-brand-blue/20 blur-2xl"
          aria-hidden
          animate={{ opacity: [0.35, 0.6, 0.35], scale: [0.96, 1.04, 0.96] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}

      <div className="mb-3 flex items-center justify-between gap-2 px-1">
        <div className="flex gap-1.5">
          {SCENES.map((item, index) => (
            <span
              key={item.id}
              className={`h-1.5 w-6 rounded-full transition-colors ${
                index === sceneIndex ? "bg-brand-yellow" : "bg-white/25"
              }`}
              aria-hidden
            />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={scene.id}
            className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-yellow"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
          >
            {scene.label}
          </motion.p>
        </AnimatePresence>
      </div>

      <motion.div
        className="relative overflow-hidden rounded-[2rem] border-[10px] border-navy bg-[#e5ddd5] shadow-2xl"
        animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={
          shouldReduceMotion ? undefined : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-xs font-bold">
            BK
            {!shouldReduceMotion ? (
              <motion.span
                className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#075e54] bg-emerald-400"
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            ) : (
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#075e54] bg-emerald-400" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold">BK Tech Hub</p>
            <p className="text-[11px] text-white/80">
              {typingSide === "right" ? "ConversaOS is typing…" : "online · ConversaOS"}
            </p>
          </div>
          <span className="rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white/90">
            AI
          </span>
        </div>

        <div
          className="flex min-h-[360px] flex-col justify-end space-y-2.5 px-3 py-4 text-[13px] leading-relaxed"
          aria-live="polite"
          aria-atomic="false"
        >
          <AnimatePresence initial={false}>
            {items.map((item) => {
              if (item.kind === "message") {
                return (
                  <Bubble key={item.id} side={item.side} ai={item.ai}>
                    {item.content}
                  </Bubble>
                );
              }
              if (item.kind === "chip") {
                return <StatusChip key={item.id} label={item.label} tone={item.tone} />;
              }
              return (
                <motion.div
                  key={item.id}
                  className="flex justify-end"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="inline-flex items-center rounded-full bg-brand-blue px-4 py-2 text-xs font-semibold text-white shadow">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>

          <AnimatePresence>
            {typingSide ? (
              <TypingIndicator key={`typing-${typingSide}-${step}`} side={typingSide} />
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Bubble({
  side,
  ai,
  children,
}: {
  side: "left" | "right";
  ai?: boolean;
  children: ReactNode;
}) {
  const isRight = side === "right";

  return (
    <motion.div
      className={`flex ${isRight ? "justify-end" : "justify-start"}`}
      initial={{ opacity: 0, y: 14, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`max-w-[88%] rounded-2xl px-3 py-2 shadow-sm ${
          isRight ? "rounded-tr-sm bg-[#dcf8c6] text-navy" : "rounded-tl-sm bg-white text-navy"
        }`}
      >
        {ai ? (
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-blue">
            ConversaOS
          </p>
        ) : null}
        <div>{children}</div>
      </div>
    </motion.div>
  );
}

function StatusChip({ label, tone = "info" }: { label: string; tone?: "success" | "info" }) {
  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, y: 8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <span
        className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] shadow-sm ${
          tone === "success"
            ? "bg-emerald-100 text-emerald-800"
            : "bg-sky-100 text-sky-800"
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
}

function TypingIndicator({ side }: { side: "left" | "right" }) {
  const isRight = side === "right";

  return (
    <motion.div
      className={`flex ${isRight ? "justify-end" : "justify-start"}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={`inline-flex items-center gap-1 rounded-2xl px-3 py-2.5 shadow-sm ${
          isRight ? "rounded-tr-sm bg-[#dcf8c6]" : "rounded-tl-sm bg-white"
        }`}
      >
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            className="h-1.5 w-1.5 rounded-full bg-navy/45"
            animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              delay: dot * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
