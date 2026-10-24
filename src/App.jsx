import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <Dashboard />
    </div>
  );
}
// function App() {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div className={`app ${theme.toLowerCase()}`}>
//       <Navbar />
//       <Dashboard />
//     </div>
//   );
// }

export default App;
