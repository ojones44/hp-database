import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Scheduler from './pages/Scheduler';
import Maintenance from './pages/Maintenance';
import MachineCardSingle from './pages/MachineCardSingle';
import NotFound from './pages/NotFound';
import Footer from './pages/Footer';

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
