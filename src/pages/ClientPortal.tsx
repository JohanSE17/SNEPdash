import { 
  Building, 
  Building2, 
  Landmark, 
  Network, 
  Ticket, 
  AlertTriangle,
  Zap,
  DollarSign,
  BarChart3,
  Search,
  MoreVertical,
  Activity,
  AlertCircle,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function ClientPortal() {
  return (
    <div className="max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Dashboard Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h2 className="font-headline text-5xl font-black text-primary-base dark:text-primary-dark tracking-tighter mb-2 editorial-header">
            Lifecycle Management
          </h2>
          <p className="text-slate-400 dark:text-slate-500 font-bold text-xs uppercase tracking-widest">
            Client Ecosystem & Node Allocation
          </p>
        </div>
        <div className="flex gap-4">
          <MetricBadge 
            label="Network Load" 
            value="84.2%" 
            icon={<Activity size={18} className="text-secondary-base" />} 
            borderColor="border-secondary-base"
          />
          <MetricBadge 
            label="At-Risk Accounts" 
            value="07" 
            valueColor="text-red-600 dark:text-red-400"
            icon={<AlertCircle size={18} className="text-red-600 dark:text-red-400" />} 
            borderColor="border-red-600 dark:border-red-400"
          />
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-8 items-start">
        {/* Table Section */}
        <section className="col-span-12 xl:col-span-8">
          <div className="bg-brand-surface dark:bg-slate-800 rounded-xl overflow-hidden editorial-shadow border border-transparent dark:border-slate-700">
            <div className="p-6 flex flex-col sm:flex-row justify-between items-center bg-slate-50/50 dark:bg-slate-900/50 gap-4">
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary-base dark:bg-primary-dark text-white dark:text-slate-900 text-[10px] font-bold uppercase rounded-full">All Clients</span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase rounded-full">Recent Payments</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Search size={16} />
                <input 
                  className="bg-transparent border-none focus:ring-0 text-sm font-medium italic placeholder:text-slate-400" 
                  placeholder="Filter entities..." 
                  type="text"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="text-[10px] uppercase tracking-[0.15em] font-black text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-700">
                    <th className="px-8 py-5">Client Entity</th>
                    <th className="px-6 py-5">Current Plan</th>
                    <th className="px-6 py-5">Node Latency</th>
                    <th className="px-6 py-5">Status</th>
                    <th className="px-6 py-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-700">
                  <ClientRow 
                    name="Quantum-Link Corp" 
                    id="SN-8829-QX" 
                    plan="Personalizado" 
                    latency="240ms" 
                    latencyStatus="error" 
                    status="At Risk" 
                    statusColor="text-red-500" 
                    pulse 
                    icon={Building}
                  />
                  <ClientRow 
                    name="Nebula Ventures" 
                    id="SN-1104-NV" 
                    plan="Avanzado" 
                    latency="12ms" 
                    latencyStatus="success" 
                    status="Optimal" 
                    statusColor="text-emerald-500" 
                    icon={Building2}
                  />
                  <ClientRow 
                    name="Apex Data Solutions" 
                    id="SN-4930-AP" 
                    plan="Básico" 
                    latency="45ms" 
                    latencyStatus="warning" 
                    status="Payment Overdue" 
                    statusColor="text-red-500" 
                    icon={Landmark}
                  />
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-slate-50/20 dark:bg-slate-900/20 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
              <span className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">Displaying 24 of 1,208 Nodes</span>
              <div className="flex gap-2">
                <button className="p-2 border border-slate-200 dark:border-slate-700 rounded hover:bg-brand-surface dark:hover:bg-slate-800 transition-all text-slate-400"><ChevronLeft size={16} /></button>
                <button className="p-2 border border-slate-200 dark:border-slate-700 rounded hover:bg-brand-surface dark:hover:bg-slate-800 transition-all text-slate-400"><ChevronRight size={16} /></button>
              </div>
            </div>
          </div>
        </section>

        {/* Drill-down Sidebar */}
        <aside className="col-span-12 xl:col-span-4 space-y-8">
          <div className="bg-primary-base dark:bg-slate-900 text-white p-8 rounded-xl relative overflow-hidden shadow-xl">
            {/* Glassy Orbs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-base rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-1/2 -left-20 w-60 h-60 bg-brand-surface/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="h-16 w-16 bg-brand-surface/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <Network size={32} className="text-white" />
                </div>
                <span className="px-3 py-1 bg-brand-surface/10 text-[10px] font-bold uppercase tracking-widest rounded-full">Active Profile</span>
              </div>
              
              <h3 className="font-headline text-3xl font-bold mb-1">Quantum-Link</h3>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-8">Node Architecture: V-88</p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest">Support History</p>
                  <div className="space-y-3">
                    <HistoryItem 
                      title="Latency Spike Resolved" 
                      subtitle="Oct 12, 2023 • Case #0029" 
                      icon={<Ticket size={14} />} 
                      iconColor="text-secondary-dark"
                    />
                    <HistoryItem 
                      title="Critical Overload" 
                      subtitle="Oct 28, 2023 • Case #0045" 
                      icon={<AlertTriangle size={14} />} 
                      iconColor="text-red-400"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest">Assigned Hardware</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border border-white/10 p-3 rounded-lg bg-brand-surface/5">
                      <p className="text-[10px] text-slate-400">GPU Unit</p>
                      <p className="text-sm font-bold font-headline">RTX-A6000</p>
                    </div>
                    <div className="border border-white/10 p-3 rounded-lg bg-brand-surface/5">
                      <p className="text-[10px] text-slate-400">Rack Pos</p>
                      <p className="text-sm font-bold font-headline">SEC-09/B</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-10 py-4 bg-brand-surface dark:bg-primary-dark text-primary-base dark:text-slate-900 font-black uppercase text-xs tracking-widest rounded transition-all hover:bg-secondary-base hover:text-white">
                Initialize Diagnostic
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <SecondaryMetric icon={<Zap size={20} />} label="SLA Uptime" value="99.98%" />
            <SecondaryMetric icon={<DollarSign size={20} />} label="Annual Value" value="$42.8k" primary />
          </div>
        </aside>
      </div>

      {/* Pulse Section */}
      <section className="mt-16">
        <h4 className="font-headline text-2xl font-bold mb-8 text-primary-base dark:text-primary-dark">Ecosystem Pulse</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-brand-surface dark:bg-slate-800 rounded-xl p-8 editorial-shadow border border-transparent dark:border-slate-700 min-h-[300px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <p className="font-bold text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500">Network Propagation Rate</p>
              <BarChart3 size={20} className="text-secondary-base" />
            </div>
            <div className="flex-1 flex items-end gap-3 px-2">
              <Bar height="60%" />
              <Bar height="40%" />
              <Bar height="80%" active />
              <Bar height="30%" />
              <Bar height="90%" primary />
              <Bar height="25%" />
              <Bar height="100%" secondary />
            </div>
            <div className="mt-6 flex justify-between text-[10px] font-black text-slate-400 dark:text-slate-500">
              <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
            </div>
          </div>

          <div className="md:col-span-2 bg-primary-base dark:bg-slate-900 rounded-xl overflow-hidden relative shadow-lg group">
            <img 
              alt="Server Room" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0PjVmpKHkXr-Ib3oYMy0wDtaLt2HqDv-MQoqtO9x_Q_08zujYZQdYmqeuhJf27Z6hhvt9veGepb5IuzzCBmN2_tGwIeGA_KVc4r7bRgGBDEjcOCdTD-sSOJW46M7mTQ0CFw2GcEyoUG81xIHX45opXbijzvD48TpW5KDmUqEtxzz4NDo11eAfXhNUvqmMx9kVaJG81E6L3FOMPsdPI0ar7-otvKeCBMoJdjfmb9HQlVjJnbZlCHMz1vro9QRN09xQdCp1mjYrpAc" 
            />
            <div className="relative z-10 p-8 flex items-center justify-between h-full bg-gradient-to-r from-primary-base dark:from-slate-900 to-transparent">
              <div className="max-w-[200px]">
                <p className="font-bold text-[10px] uppercase tracking-widest text-slate-400 mb-2">Architectural Health</p>
                <h5 className="text-3xl font-headline font-bold leading-tight text-white">Infrastructure integrity is optimal.</h5>
              </div>
              <div className="text-right">
                <span className="text-8xl font-headline font-black text-secondary-base/40">A+</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-slate-900/50 rounded-xl p-6 flex flex-col justify-between">
            <p className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500">Tickets Closed</p>
            <p className="text-5xl font-headline font-black text-primary-base dark:text-primary-dark">1,402</p>
            <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">+12% vs last month</p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-900/50 rounded-xl p-6 flex flex-col justify-between">
            <p className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500">Churn Index</p>
            <p className="text-5xl font-headline font-black text-primary-base dark:text-primary-dark">0.04%</p>
            <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded-full">
              <div className="w-[4%] h-full bg-secondary-base"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MetricBadge({ label, value, icon, borderColor, valueColor }: any) {
  return (
    <div className={cn("bg-brand-surface dark:bg-slate-800 p-4 px-6 flex items-center gap-4 editorial-shadow border-l-4 rounded-lg transition-all", borderColor)}>
      {icon}
      <div>
        <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">{label}</p>
        <p className={cn("text-2xl font-headline font-bold text-primary-base dark:text-primary-dark", valueColor)}>{value}</p>
      </div>
    </div>
  );
}

function ClientRow({ name, id, plan, latency, latencyStatus, status, statusColor, pulse, icon: Icon }: any) {
  const barColor = latencyStatus === 'error' ? 'bg-red-500' : latencyStatus === 'success' ? 'bg-secondary-base' : 'bg-slate-400';
  
  return (
    <tr className="group hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-all duration-300">
      <td className="px-8 py-6">
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-10 h-10 flex items-center justify-center rounded-lg shadow-inner",
            latencyStatus === 'error' ? "bg-red-50 dark:bg-red-900/20 text-red-500" : "bg-slate-100 dark:bg-slate-700 text-slate-500"
          )}>
            {Icon && <Icon size={20} />}
          </div>
          <div>
            <p className="font-headline font-bold text-primary-base dark:text-primary-dark">{name}</p>
            <p className="text-xs text-slate-400 dark:text-slate-500">ID: {id}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-6">
        <span className="text-[10px] font-bold uppercase px-2 py-1 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded">
          {plan}
        </span>
      </td>
      <td className="px-6 py-6 min-w-[160px]">
        <div className="flex items-center gap-3">
          <div className="w-24 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <div className={cn("h-full", barColor)} style={{ width: latencyStatus === 'error' ? '80%' : latencyStatus === 'success' ? '25%' : '50%' }}></div>
          </div>
          <span className={cn("text-xs font-bold", latencyStatus === 'error' ? "text-red-500" : "text-slate-500")}>{latency}</span>
        </div>
      </td>
      <td className="px-6 py-6">
        <div className="flex items-center gap-2">
          <span className={cn("w-2 h-2 rounded-full", pulse ? "bg-red-600 animate-pulse" : statusColor.replace('text-', 'bg-'))}></span>
          <span className={cn("text-[10px] font-black uppercase", statusColor)}>{status}</span>
        </div>
      </td>
      <td className="px-6 py-6 text-right">
        <button className="text-slate-400 hover:text-primary-base dark:hover:text-primary-dark transition-colors">
          <MoreVertical size={18} />
        </button>
      </td>
    </tr>
  );
}

function HistoryItem({ title, subtitle, icon, iconColor }: any) {
  return (
    <div className="bg-brand-surface/5 p-3 rounded-lg flex items-center gap-3 group hover:bg-brand-surface/10 transition-colors cursor-default">
      <div className={cn("w-6 h-6 flex items-center justify-center rounded", iconColor)}>
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold text-white">{title}</p>
        <p className="text-[9px] text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}

function SecondaryMetric({ icon, label, value, primary }: any) {
  return (
    <div className={cn(
      "p-6 rounded-xl transition-all duration-300",
      primary ? "bg-brand-surface dark:bg-slate-800 editorial-shadow" : "bg-slate-100 dark:bg-slate-900/50"
    )}>
      <div className={cn("mb-2", primary ? "text-secondary-base" : "text-primary-base dark:text-primary-dark")}>
        {icon}
      </div>
      <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{label}</p>
      <p className={cn("text-xl font-headline font-bold", primary ? "text-primary-base dark:text-primary-dark" : "text-slate-700 dark:text-slate-200")}>
        {value}
      </p>
    </div>
  );
}

function Bar({ height, active, primary, secondary }: any) {
  return (
    <div 
      className={cn(
        "flex-1 rounded-t-sm transition-all duration-700 hover:opacity-80 cursor-help",
        active ? "bg-secondary-base" : 
        primary ? "bg-primary-base dark:bg-primary-dark" : 
        secondary ? "bg-sky-400" : "bg-slate-200 dark:bg-slate-700"
      )} 
      style={{ height }}
    ></div>
  );
}

// Proxies for icons not exactly in lucide but similar
function MetricIcon({ icon: Icon, color }: any) {
  return <Icon className={color} size={18} />
}
