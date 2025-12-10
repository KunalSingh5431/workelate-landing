import { useState } from "react";
import styles from "./AppGrid.module.css";

const apps = [
  { key: "TaskNetic", label: "TaskNetic", icon: "task" },
  { key: "xNetic", label: "xNetic", icon: "flow" },
  { key: "SyncNetic", label: "SyncNetic", icon: "chat" },
  { key: "weMail", label: "weMail", icon: "mail" },
  { key: "FormNetic", label: "FormNetic", icon: "form" },
  { key: "BoardNetic", label: "BoardNetic", icon: "board" },
  { key: "DataNetic", label: "DataNetic", icon: "list" },
  { key: "Calendar", label: "Calendar", icon: "calendar" },
];

// -------- ICONS (your same icon set) --------
function Icon({ type }) {
  const common = { width: 32, height: 32, viewBox: "0 0 24 24", fill: "none" };

  if (type === "task") {
    return (
      <svg {...common}>
        <path
          d="M7 7h10M7 12h10M7 17h6"
          stroke="url(#g)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="m4.8 7.2 1.4 1.4 2.8-2.8M4.8 12.2l1.4 1.4 2.8-2.8M4.8 17.2l1.4 1.4 2.8-2.8"
          stroke="url(#g)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="20" y2="20">
            <stop stopColor="#00D4FF" />
            <stop offset="1" stopColor="#B563FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (type === "flow") {
    return (
      <svg {...common}>
        <path
          d="M7 7h5a3 3 0 0 1 0 6H9m8-6h-5a3 3 0 0 0 0 6h3"
          stroke="url(#g)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="20" y2="20">
            <stop stopColor="#00D4FF" />
            <stop offset="1" stopColor="#B563FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (type === "chat") {
    return (
      <svg {...common}>
        <path
          d="M7 16H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-5l-4 4v-4Z"
          stroke="url(#g)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="20" y2="20">
            <stop stopColor="#00D4FF" />
            <stop offset="1" stopColor="#B563FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (type === "mail") {
    return (
      <svg {...common}>
        <path
          d="M4.5 8.5h15v10h-15v-10Z"
          stroke="url(#g)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path d="m5 9 7 6 7-6" stroke="url(#g)" strokeWidth="2.2" strokeLinejoin="round" />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="20" y2="20">
            <stop stopColor="#00D4FF" />
            <stop offset="1" stopColor="#B563FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (type === "form") {
    return (
      <svg {...common}>
        <path
          d="M9 4h6M9 20h6M8 8h8M8 12h8M8 16h8"
          stroke="url(#g)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="20" y2="20">
            <stop stopColor="#00D4FF" />
            <stop offset="1" stopColor="#B563FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (type === "board") {
    return (
      <svg {...common}>
        <path
          d="M7 7h10v7H7V7Zm-2 13h14M12 14v6"
          stroke="url(#g)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="20" y2="20">
            <stop stopColor="#00D4FF" />
            <stop offset="1" stopColor="#B563FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (type === "list") {
    return (
      <svg {...common}>
        <path
          d="M6 7h12M6 12h12M6 17h12"
          stroke="url(#g)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="20" y2="20">
            <stop stopColor="#00D4FF" />
            <stop offset="1" stopColor="#B563FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg {...common}>
        <path d="M7 4v3M17 4v3M5 9h14" stroke="url(#g)" strokeWidth="2.2" strokeLinecap="round" />
        <path
          d="M6 7h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
          stroke="url(#g)"
          strokeWidth="2.2"
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="20" y2="20">
            <stop stopColor="#00D4FF" />
            <stop offset="1" stopColor="#B563FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return null;
}

export default function AppGrid() {
  const [active, setActive] = useState("xNetic");

  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        {/* HEADER (top) */}
        <div className={styles.header}>
          <div className={styles.kicker}>One system. Zero chaos.</div>
          <h2 className={styles.title}>The WorkElate App Suite</h2>
          <p className={styles.lead}>
            A single workflow layer that wires tasks, comms, data and planning together — so your team stops
            firefighting and starts shipping.
          </p>
        </div>

        {/* GRID (interactive) */}
        <div className={styles.grid} role="list">
          {apps.map((a) => {
            const isActive = a.key === active;
            return (
              <button
                key={a.key}
                type="button"
                className={`${styles.tile} ${isActive ? styles.active : ""}`}
                onClick={() => setActive(a.key)}
                role="listitem"
              >
                <div className={styles.tileIcon}>
                  <Icon type={a.icon} />
                </div>
                <div className={styles.tileText}>{a.label}</div>
                <div className={styles.tileHint}>{isActive ? "Selected" : "Tap to open"}</div>
              </button>
            );
          })}
        </div>

        {/* FOOTER (mini status for premium feel) */}
        <div className={styles.status}>
          <span className={styles.statusDot} />
          <span className={styles.statusText}>
            Current focus: <strong>{active}</strong> — unified workflow layer ready.
          </span>
        </div>
      </div>
    </section>
  );
}
