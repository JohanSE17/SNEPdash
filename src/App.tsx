import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import DashboardLayout from './components/DashboardLayout';
import DashboardOverview from './pages/DashboardOverview';
import VirtualNodes from './pages/VirtualNodes';
import StorageClusters from './pages/StorageClusters';
import ClientPortal from './pages/ClientPortal';
import LogisticsSupplyChain from './pages/LogisticsSupplyChain';
import SecurityIAOps from './pages/SecurityIAOps';
import FinancialLedger from './pages/FinancialLedger';
import Settings from './pages/Settings';
import NoderAssistant from './pages/NoderAssistant';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="nodes" element={<VirtualNodes />} />
            <Route path="storage" element={<StorageClusters />} />
            <Route path="storage/Logistics_&_Supply_Chain_Management" element={<LogisticsSupplyChain />} />
            <Route path="clients" element={<ClientPortal />} />
            <Route path="security" element={<SecurityIAOps />} />
            <Route path="financials" element={<FinancialLedger />} />
            <Route path="iam" element={<Placeholder title="Identity Management" />} />
            <Route path="inventory" element={<Placeholder title="Inventario" />} />
            <Route path="noder" element={<NoderAssistant />} />
            <Route path="health" element={<Placeholder title="System Health" />} />
            <Route path="settings" element={<Settings />} />
            <Route path="logs" element={<Placeholder title="System Logs" />} />
            <Route path="terminal" element={<Placeholder title="Terminal" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

function Placeholder({ title }: { title: string }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight text-primary-base dark:text-primary-dark uppercase font-headline">{title}</h1>
      <div className="bg-brand-surface dark:bg-slate-800 editorial-shadow rounded-lg p-12 text-center border border-transparent dark:border-slate-700">
        <p className="text-slate-400 dark:text-slate-500 font-medium tracking-wide uppercase text-sm italic">Operational module: {title} coming soon</p>
      </div>
    </div>
  );
}

