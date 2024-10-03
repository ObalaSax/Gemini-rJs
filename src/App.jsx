import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Dashboard from "./Pages/Dashboard";
import Accounts from "./Pages/Accounts";
import Transactions from "./Pages/Transactions";
import Settings from "./Pages/Settings";
import Support from "./Pages/Support";
function App() {
  return (
    <Router>
      <SideBar />
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}
export default App;
