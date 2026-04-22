import { 
  Network, 
  Server, 
  Truck, 
  DollarSign, 
  ShieldCheck, 
  FileText, 
  HelpCircle, 
  PlusCircle, 
  Package, 
  Settings as SettingsIcon,
  MapPin, 
  Cloud,
  Info,
  ArrowRight,
  Search
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function LogisticsSupplyChain() {
  return (
    <div className="max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-black text-primary-base dark:text-primary-dark tracking-tight editorial-header">
            LOGISTICS & SUPPLY CHAIN
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-body">Deployment Pipeline for Plan Avanzado MiniPCs</p>
        </div>
        <button className="bg-secondary-base dark:bg-secondary-dark text-white dark:text-slate-900 px-6 py-3 rounded-md font-headline font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg active:scale-95">
          <PlusCircle size={20} />
          REGISTER NEW SHIPMENT
        </button>
      </div>

      {/* Deployment Pipeline Overview */}
      <section className="bg-brand-surface dark:bg-slate-800 rounded-xl p-8 editorial-shadow mb-12 border border-transparent dark:border-slate-700">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Deployment Pipeline Overview</h2>
          <span className="text-secondary-base dark:text-secondary-dark font-bold text-sm">84% Success Rate</span>
        </div>
        
        <div className="relative px-4">
          {/* Progress Line */}
          <div className="absolute top-5 left-8 right-8 h-0.5 bg-slate-100 dark:bg-slate-700 -translate-y-1/2"></div>
          <div className="absolute top-5 left-8 w-[65%] h-1 bg-secondary-base dark:bg-secondary-dark -translate-y-1/2 transition-all duration-1000"></div>
          
          <div className="relative flex justify-between">
            <PipelineStep icon={<Package size={16} />} label="Inventory" active />
            <PipelineStep icon={<SettingsIcon size={16} />} label="Configuration" active />
            <PipelineStep icon={<Truck size={16} />} label="Transit" active highlight />
            <PipelineStep icon={<MapPin size={16} />} label="Delivered" disabled />
            <PipelineStep icon={<Cloud size={16} />} label="Online" disabled />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Active Shipment Tracker */}
        <div className="lg:col-span-8 space-y-8">
          <section className="bg-brand-surface dark:bg-slate-800 rounded-xl p-8 editorial-shadow overflow-hidden border border-transparent dark:border-slate-700">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6">Active Shipment Tracker</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-body">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-slate-700">
                    <th className="pb-4 text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-black">Order ID</th>
                    <th className="pb-4 text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-black">Client / Destination</th>
                    <th className="pb-4 text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-black">Carrier</th>
                    <th className="pb-4 text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-black">ETA</th>
                    <th className="pb-4 text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-black text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-700">
                  <ShipmentRow 
                    id="#SN-9821" 
                    client="Banco Digital S.A." 
                    location="Bogotá, Calle 100" 
                    carrier="Servientrega" 
                    carrierColor="bg-emerald-500"
                    eta="24 Oct, 14:00"
                    status="IN TRANSIT"
                    statusColor="bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300"
                  />
                  <ShipmentRow 
                    id="#SN-9844" 
                    client="Logistica Global" 
                    location="Medellín, Poblado" 
                    carrier="Envia" 
                    carrierColor="bg-blue-500"
                    eta="25 Oct, 09:30"
                    status="PENDING PICKUP"
                    statusColor="bg-primary-base dark:bg-primary-dark text-white dark:text-slate-900"
                  />
                  <ShipmentRow 
                    id="#SN-9765" 
                    client="EduTech Innovate" 
                    location="Cali, Versalles" 
                    carrier="Servientrega" 
                    carrierColor="bg-emerald-500"
                    eta="Arrived"
                    status="DELIVERED"
                    statusColor="bg-slate-100 dark:bg-slate-700 text-slate-500"
                  />
                </tbody>
              </table>
            </div>
          </section>

          {/* Map Section */}
          <section className="bg-slate-100 dark:bg-slate-900 rounded-xl p-0 editorial-shadow overflow-hidden min-h-[450px] relative group border border-transparent dark:border-slate-700">
            <div className="absolute top-6 left-6 z-10 bg-brand-surface/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-lg shadow-sm border border-white/20 dark:border-slate-700">
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">Live Deployment Density</h2>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-secondary-base dark:bg-secondary-dark rounded-full"></span>
                <span className="font-headline font-bold text-xl text-primary-base dark:text-primary-dark">Colombia / Central</span>
              </div>
            </div>
            
            <div className="w-full h-[450px]">
              <img 
                alt="Map" 
                className="w-full h-full object-cover grayscale opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw4RfQMWAoctqZ8mqAPc-5yt16cl40vqQs64mTcqV78wTmJInOtXjXvfeZOzasGiPlN1zwjpnbK_WC7tp_l5C8rgqb6gjfhWsT2lLhm8u1KAu84PgVi1Is6N_n1O6blTa9xFXxCJVrujOAolfN1hZSmMSlDcwm7SsIYQ6wYjr8ttZ3qst6Q2Q_Q2m1bfNstAMHrmS1XQLhI8BXwrEgtlHbEW1hWDFoQ6X6-15CaJnmi7OXy1NOw5H1iJpVbJBYkYLsZb1vYkf928I" 
              />
              
              {/* Markers */}
              <div className="absolute top-1/2 left-[48%] -translate-x-1/2 -translate-y-1/2 shadow-2xl">
                <div className="relative">
                  <div className="w-4 h-4 bg-secondary-base rounded-full animate-ping absolute"></div>
                  <div className="w-4 h-4 bg-secondary-base rounded-full relative border-2 border-white dark:border-slate-800"></div>
                </div>
              </div>
              <div className="absolute top-[40%] left-[45%]">
                <div className="w-2 h-2 bg-primary-base dark:bg-primary-dark rounded-full"></div>
              </div>
              <div className="absolute top-[60%] left-[42%]">
                <div className="w-2 h-2 bg-primary-base dark:bg-primary-dark rounded-full"></div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Stats */}
        <div className="lg:col-span-4 space-y-8">
          <section className="bg-brand-surface dark:bg-slate-800 rounded-xl p-8 editorial-shadow border border-transparent dark:border-slate-700">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6 font-headline">Inventory Levels</h2>
            <div className="space-y-6">
              <InventoryBar label="GAMA ALTA (V4)" left={12} total={80} color="bg-red-500" critical />
              <InventoryBar label="GAMA MEDIA (X2)" left={45} total={70} color="bg-secondary-base" />
              <InventoryBar label="GAMA ENTRADA (S1)" left={89} total={100} color="bg-emerald-500" />
            </div>
          </section>

          <section className="bg-brand-surface dark:bg-slate-800 rounded-xl p-8 editorial-shadow border border-transparent dark:border-slate-700">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6 font-headline">Partner Performance</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase mb-2">Servientrega</p>
                <div className="text-2xl font-black text-primary-base dark:text-primary-dark">98.2%</div>
                <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Avg: 1.2 Days</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase mb-2">Envia</p>
                <div className="text-2xl font-black text-primary-base dark:text-primary-dark">94.5%</div>
                <p className="text-[10px] text-blue-600 dark:text-blue-400 font-bold">Avg: 2.1 Days</p>
              </div>
            </div>
          </section>

          <section className="bg-slate-50 dark:bg-slate-900/50 backdrop-blur rounded-xl p-8 editorial-shadow border border-dashed border-slate-200 dark:border-slate-700 opacity-80">
            <div className="flex items-center gap-3 mb-4">
              <Info size={16} className="text-slate-400" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">System Maintenance</h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed uppercase tracking-tighter">
              Logistics sync with local partners scheduled for 02:00 AM (COT). External tracking APIs may experience temporary phantom layers during materialization.
            </p>
          </section>

          {/* Quick Action Card */}
          <div className="relative group overflow-hidden rounded-xl h-48 cursor-pointer shadow-xl">
            <img 
              alt="Inventory" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhlD-oyN-509B1GoXrxbL__X75V0ugGsHCVogNU42oYc9JH5vXiaFT-pFtrUS8qFjbfsHvBZ-qer9koMU6LELsm1CnhXmngmMF9g5NzoxVQ09MJfQt6IMCji73qHJcLbccpcZ-IHkn4SsJa0z7pndmrh93w-RMtGqjSOlTPJmhuX-TVHPyejfXFucZWrXkdE65l_57ex7gyIj9ZQrImgfA8QNwsNDgGh1CIjR4HOVWPWVFAqjFy6qLkZZqD9qgBpxOhzsjp9Dg_dk" 
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-base/90 to-secondary-base/40 flex flex-col justify-end p-6">
              <h3 className="text-white font-headline font-bold text-lg">Update Inventory Batch</h3>
              <p className="text-white/70 text-xs mb-4 uppercase tracking-widest">Register new hardware arrivals manually.</p>
              <div className="w-10 h-10 rounded-full bg-brand-surface dark:bg-primary-dark flex items-center justify-center text-primary-base dark:text-slate-900 group-hover:translate-x-2 transition-transform">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PipelineStep({ icon, label, active, disabled, highlight }: any) {
  return (
    <div className={cn(
      "flex flex-col items-center gap-3 bg-brand-surface dark:bg-slate-800 px-2 transition-all duration-500",
      disabled && "opacity-40"
    )}>
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center text-white z-10 transition-colors",
        active && !highlight && "bg-primary-base dark:bg-primary-dark",
        highlight && "bg-secondary-base dark:bg-secondary-dark ring-4 ring-secondary-base/20",
        disabled && "bg-slate-200 dark:bg-slate-700 text-slate-500"
      )}>
        {icon}
      </div>
      <span className={cn(
        "text-[10px] font-bold uppercase tracking-widest",
        active ? "text-primary-base dark:text-white" : "text-slate-400"
      )}>{label}</span>
    </div>
  );
}

function ShipmentRow({ id, client, location, carrier, carrierColor, eta, status, statusColor }: any) {
  return (
    <tr className="group hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
      <td className="py-5 font-headline font-bold text-primary-base dark:text-primary-dark">{id}</td>
      <td className="py-5">
        <div className="font-bold text-sm text-slate-700 dark:text-slate-200">{client}</div>
        <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-black">{location}</div>
      </td>
      <td className="py-5">
        <div className="flex items-center gap-2">
          <span className={cn("w-2 h-2 rounded-full", carrierColor)}></span>
          <span className="text-xs font-bold text-slate-600 dark:text-slate-300">{carrier}</span>
        </div>
      </td>
      <td className="py-5 text-xs text-slate-500 font-medium">{eta}</td>
      <td className="py-5 text-right">
        <span className={cn("px-2 py-1 text-[10px] font-black rounded uppercase tracking-tighter", statusColor)}>
          {status}
        </span>
      </td>
    </tr>
  );
}

function InventoryBar({ label, left, total, color, critical }: any) {
  const percentage = (left / total) * 100;
  return (
    <div>
      <div className="flex justify-between items-end mb-2">
        <span className="font-headline font-bold text-primary-base dark:text-primary-dark text-sm">{label}</span>
        <span className="text-xs font-bold font-mono">{left} Units Left</span>
      </div>
      <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
        <div className={cn("h-full transition-all duration-1000", color)} style={{ width: `${percentage}%` }}></div>
      </div>
      {critical && (
        <p className="text-[10px] text-red-500 font-black mt-1 uppercase tracking-widest">Critical: Restock Required</p>
      )}
    </div>
  );
}
