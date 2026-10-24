
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
function Profile() {
  const user = useContext(UserContext);

  return (
    <div className="profile-content">
      <div className="profile-hero">
        <div className="profile-avatar">
          {user.name.charAt(0)}
        </div>
        <div>
          <h3>{user.name}</h3>
          <span className="role-badge">✦ {user.role}</span>
        </div>
      </div>

      <div className="profile-info">
        <div className="info-row">
          <span className="info-icon">♙</span>
          <div>
            <span className="info-label">FULL NAME</span>
            <strong>{user.name}</strong>
          </div>
        </div>

        <div className="info-row">
          <span className="info-icon">✉</span>
          <div>
            <span className="info-label">EMAIL ADDRESS</span>
            <strong className="email-text">{user.email}</strong>
          </div>
        </div>

        <div className="info-row">
          <span className="info-icon">♧</span>
          <div>
            <span className="info-label">ACCOUNT ROLE</span>
            <strong>{user.role}</strong>
          </div>
        </div>
      </div>

      <div className="profile-footer">
        <span className="online-dot" />
        Student account active
      </div>
    </div>
  );
}

export default Profile;
