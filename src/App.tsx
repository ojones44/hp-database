import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './frontend/components/Navbar';
import Home from './frontend/pages/Home';
import Login from './frontend/pages/Login';
import Dashboard from './frontend/pages/Dashboard';
import Scheduler from './frontend/pages/Scheduler';
import Maintenance from './frontend/pages/Maintenance';
import MachineCardSingle from './frontend/pages/MachineCardSingle';
import NotFound from './frontend/pages/NotFound';
import Footer from './frontend/pages/Footer';

export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scheduler" element={<Scheduler />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/machinecardsingle" element={<MachineCardSingle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
