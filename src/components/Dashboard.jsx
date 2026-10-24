import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import Profile from "./Profile";
import Settings from "./Settings";

const stats = [
  { icon: "📚", label: "Courses Enrolled", value: "6", note: "This term", color: "purple", progress: 78 },
  { icon: "✔", label: "Assignments Done", value: "18", note: "of 24", color: "green", progress: 75 },
  { icon: "⏱", label: "Study Hours", value: "42h", note: "This month", color: "orange", progress: 60 },
  { icon: "★", label: "Average Score", value: "86", percent: true, note: "Overall", color: "pink", progress: 86 },
];

const activities = [
  { icon: "📘", color: "purple", title: "Math Assignment", text: "Chapter 4 exercises submitted.", status: "Done" },
  { icon: "🧪", color: "green", title: "Chemistry Quiz", text: "Scored 9/10 in the weekly quiz.", status: "Done" },
  { icon: "💻", color: "orange", title: "React Project", text: "Context API dashboard completed.", status: "Done" },
];

function Dashboard() {
  const user = useContext(UserContext);
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <main className="main-content dashboard" id="dashboard">
      <header className="topbar">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h2>Dashboard</h2>
        </div>
        <div className="topbar-actions">
          <span className="date-pill">{today}</span>
          <button className="icon-button" aria-label="Notifications">🔔</button>
        </div>
      </header>

      <section className="welcome-banner">
        <div className="welcome-copy">
          <span className="welcome-tag">✦ WELCOME BACK</span>
          <h1>Hello, {user?.name || "Student"}!</h1>
          <p>Track your courses, update your profile and customize your workspace from one place.</p>
          <button className="primary-button">Continue Learning →</button>
        </div>
        <div className="welcome-art">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <div className="book-art">📖</div>
          <span className="floating-star">★</span>
          <span className="floating-cap">🎓</span>
        </div>
      </section>

      <div className="section-heading">
        <div>
          <h2>Your Progress</h2>
          <p>A quick look at how you are doing this term.</p>
        </div>
        <span className="live-badge">
          <span className="online-dot" /> Live
        </span>
      </div>

      <section className="stats-grid">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <div className="stat-top">
              <span className={`stat-icon ${s.color}`}>{s.icon}</span>
              <span className="stat-note">{s.note}</span>
            </div>
            <p>{s.label}</p>
            <h3>
              {s.value}
              {s.percent && <span className="percent">%</span>}
            </h3>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${s.progress}%` }} />
            </div>
          </div>
        ))}
      </section>

      <section className="lower-grid">
        <div className="panel" id="profile">
          <div className="panel-heading">
            <div>
              <h2>My Profile</h2>
              <p>Your account information.</p>
            </div>
            <span className="panel-symbol">♙</span>
          </div>
          <Profile />
        </div>

        <div className="panel" id="activity">
          <div className="panel-heading">
            <div>
              <h2>Recent Activity</h2>
              <p>What you have been up to lately.</p>
            </div>
            <span className="panel-symbol">◷</span>
          </div>
          {activities.map((a) => (
            <div className="activity-item" key={a.title}>
              <span className={`activity-icon ${a.color}`}>{a.icon}</span>
              <div>
                <strong>{a.title}</strong>
                <p>{a.text}</p>
              </div>
              <span className="activity-status">{a.status}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="panel settings-panel" id="settings">
        <Settings />
      </section>

      <footer className="footer">
        <span>© 2026 StudySpace</span>
        <span>Built with React Context API</span>
      </footer>
    </main>
  );
}

export default Dashboard;