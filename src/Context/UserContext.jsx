
import { createContext } from "react";

export const UserContext = createContext();

const student = {
  name: "Murtajis",
  email: "murtajis@gmail.com",
  role: "Student",
};

export function UserProvider({ children }) {
  return (
    <UserContext.Provider value={student}>
      {children}
    </UserContext.Provider>
  );
}
