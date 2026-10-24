
// import { useContext } from "react";
// import { UserContext } from "../Context/UserContext";

// function Navbar() {
//   const user = useContext(UserContext);

//   return (
//     <aside className="sidebar">
//       <div className="brand">
//         <div className="brand-icon">S</div>
//         <div>
//           <h2>StudySpace</h2>
//           <span>STUDENT PORTAL</span>
//         </div>
//       </div>

//       <p className="nav-label">MENU</p>

//       <nav className="nav-links">
//         <a href="#dashboard" className="nav-link active">
//           <span>◫</span> Dashboard
//         </a>
//         <a href="#profile" className="nav-link">
//           <span>♙</span> My Profile
//         </a>
//         <a href="#activity" className="nav-link">
//           <span>◷</span> Activity
//         </a>
//         <a href="#settings" className="nav-link">
//           <span>⚙</span> Settings
//         </a>
//       </nav>

//       <div className="sidebar-bottom">
//         <div className="theme-control">
//           <div>
//             <span>{theme === "Light" ? "☀" : "☾"}</span>
//             <span>{theme} Mode</span>
//           </div>

//           <button
//             className="theme-switch"
//             onClick={toggleTheme}
//             aria-label="Toggle theme"
//           >
//             <span className="switch-dot" />
//           </button>
//         </div>

//         <div className="sidebar-user">
//           <div className="avatar">{user.name.charAt(0)}</div>
//           <div className="user-details">
//             <strong>{user.name}</strong>
//             <span>{user.role}</span>
//           </div>
//           <span className="online-dot" />
//         </div>
//       </div>
//     </aside>
//   );
// }

// export default Navbar;


import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { ThemeContext } from "../Context/Theme";

function Navbar() {
  const user = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">S</div>
        <div>
          <h2>StudySpace</h2>
          <span>STUDENT PORTAL</span>
        </div>
      </div>

      <p className="nav-label">MENU</p>

      <nav className="nav-links">
        <a href="#dashboard" className="nav-link active">
          <span>◫</span> Dashboard
        </a>
        <a href="#profile" className="nav-link">
          <span>♙</span> My Profile
        </a>
        <a href="#activity" className="nav-link">
          <span>◷</span> Activity
        </a>
        <a href="#settings" className="nav-link">
          <span>⚙</span> Settings
        </a>
      </nav>

      <div className="sidebar-bottom">
        <div className="theme-control">
          <div>
            <span>{theme === "Light" ? "☀" : "☾"}</span>
            <span>{theme} Mode</span>
          </div>

          <button
            className="theme-switch"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span className="switch-dot" />
          </button>
        </div>

        <div className="sidebar-user">
          <div className="avatar">
            {user?.name?.charAt(0) || "U"}
          </div>
          <div className="user-details">
            <strong>{user?.name || "Student"}</strong>
            <span>{user?.role || "User"}</span>
          </div>
          <span className="online-dot" />
        </div>
      </div>
    </aside>
  );
}

export default Navbar;
