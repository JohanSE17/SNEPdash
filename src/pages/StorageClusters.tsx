import { 
  TrendingUp, 
  Truck, 
  Terminal as TerminalIcon, 
  CheckCircle, 
  History, 
  Package,
  MoreHorizontal,
  ChevronRight,
  LogOut,
  MapPin,
  Clock,
  Activity,
  PlusSquare,
  Search
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function StorageClusters() {
  return (
    <div className="max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero / Stats Section */}
      <section className="mb-16">
        <h2 className="text-5xl font-headline font-bold text-primary-base dark:text-primary-dark tracking-tighter mb-4 editorial-header">
          Deployment Pipeline
        </h2>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
          Monitoring the physical rollout of <span className="font-bold text-secondary-base dark:text-secondary-dark">Plan Avanzado</span> MiniPC nodes across the South American region. Real-time carrier integration with Servientrega and Envia.
        </p>

        {/* Fulfillment Stats - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatBox 
            label="Total Units" 
            value="1,248" 
            trend="+12% this week" 
            trendIcon={<TrendingUp size={14} />} 
            active 
          />
          <StatBox 
            label="In Transit" 
            value="84" 
            subtitle="Avg. delivery: 2.4 days" 
          />
          <StatBox 
            label="Configuring" 
            value="12" 
            subtitle="Provisioning lab active" 
          />
          <div className="bg-primary-base dark:bg-primary-dark p-6 rounded-xl shadow-sm text-white dark:text-slate-900">
            <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">Uptime Target</p>
            <p className="text-3xl font-headline font-bold">99.98%</p>
            <p className="mt-4 text-xs opacity-80">SLA Compliance met</p>
          </div>
        </div>
      </section>

      {/* Deployment Kanban Tracker */}
      <section className="mb-16">
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-2xl font-headline font-bold text-primary-base dark:text-primary-dark">Active Fulfillment Flow</h3>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-xs font-bold uppercase text-primary-base dark:text-primary-dark bg-slate-100 dark:bg-slate-800 rounded hover:opacity-80 transition-all">Filter: Region</button>
            <button className="px-4 py-2 text-xs font-bold uppercase text-white bg-primary-base dark:bg-primary-dark rounded hover:opacity-90 transition-all">Export Manifest</button>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
          {/* Column: Received */}
          <KanbanColumn title="Order Received (4)" dotColor="bg-slate-300 dark:bg-slate-600">
            <KanbanCard 
              id="ORD-48291" 
              title="Bogotá Data Hub Alpha" 
              address="Calle 100 #15-32, Bogotá" 
              progress={20}
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAdcObVlwhY6YqDjmDclJpkn_087Ts7hSts2JcHROf-E_SzX5o9VZPMXIDwwWYjX2TrN4fAjGXi2f5eoFsrr_WlGOCtYA216o26fATFOON9vWoVUmFx5tsLtY_chc1pZ5pNUaEKrTaPrGPEhPUWdocV2fV9RmR9JpZePG_1DCZ6bqs_P3X9_FgnMgPytGmGRabJO_5CYY7OfsByFWP4T29xJAKZ7IdSR3zmupOC4wu3GTXHO1RA3yerrPldj1TX58H_S_avjHHD1tY"
            />
            <KanbanCard 
              id="ORD-48305" 
              title="Medellín Node Beta" 
              address="Cra 43A #1-50, Medellín" 
            />
          </KanbanColumn>

          {/* Column: Configured */}
          <KanbanColumn title="Configured (2)" dotColor="bg-sky-400">
            <div className="bg-brand-surface dark:bg-slate-800 p-5 rounded-xl editorial-shadow border-l-4 border-sky-400 space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-black px-2 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded">PROVISIONING</span>
                <span className="text-xs text-sky-600 dark:text-sky-400 font-bold">85%</span>
              </div>
              <h4 className="font-bold text-primary-base dark:text-primary-dark">Cali Edge Terminal</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Av. 6N #22-04, Cali</p>
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-center gap-3">
                <TerminalIcon size={14} className="text-sky-600 animate-pulse" />
                <span className="text-[10px] font-mono text-slate-500">Installing snep-os_v2.4...</span>
              </div>
            </div>
          </KanbanColumn>

          {/* Column: Shipped */}
          <KanbanColumn title="Shipped (3)" dotColor="bg-secondary-base">
            <div className="bg-brand-surface dark:bg-slate-800 p-5 rounded-xl editorial-shadow border-l-4 border-secondary-base">
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Servientrega</span>
                <span className="text-[10px] font-black text-secondary-base">EN ROUTE</span>
              </div>
              <h4 className="font-bold text-primary-base dark:text-primary-dark mb-1">Barranquilla Mainframe</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 tracking-tight">TRK: SER-9023411002</p>
              <div className="flex items-center justify-between py-2 border-t border-slate-100 dark:border-slate-700 mt-2">
                <span className="text-[10px] text-slate-400">Last update: Guaduas Terminal</span>
                <Truck size={14} className="text-secondary-base" />
              </div>
            </div>
            <div className="bg-brand-surface dark:bg-slate-800 p-5 rounded-xl editorial-shadow">
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Envia</span>
                <span className="text-[10px] font-black text-secondary-base">DEPARTED</span>
              </div>
              <h4 className="font-bold text-primary-base dark:text-primary-dark mb-1">Pereira Local Node</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 tracking-tight">TRK: ENV-882733190</p>
            </div>
          </KanbanColumn>

          {/* Column: Delivered/Online */}
          <KanbanColumn title="Online (Active)" dotColor="bg-emerald-500">
            <div className="bg-brand-surface dark:bg-slate-800 p-5 rounded-xl editorial-shadow border-l-4 border-emerald-500 relative overflow-hidden">
              <CheckCircle size={48} className="absolute top-0 right-0 p-2 opacity-5 text-emerald-500" />
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded">DELIVERED</span>
                <span className="text-[10px] text-slate-400">Oct 24, 2023</span>
              </div>
              <h4 className="font-bold text-primary-base dark:text-primary-dark mb-1">Bucaramanga Satellite</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Node Active & Syncing</p>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                LATENCY: 12ms
              </div>
            </div>
          </KanbanColumn>
        </div>
      </section>

      {/* Details & Map */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden relative min-h-[400px]">
          <div className="absolute inset-0">
            <img 
              className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-overlay opacity-50 contrast-125 grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgf_ShiKkdYLnFtjMGPfchW8Gk26sfWiPSvBG0TAZWz5l461IieJxsoawg2BeMn4dYH7CC7fHp3zVC-cLGLxW_Fmpx2eHTRPVU9D3PSanoU5duRY_U8my9qOh1VIENaGWSqRdyNBgPNcNCRBeVCqQeu8kekE9H4t6MaPy3CQ_pjsj4KSsqKH_qSqCOpWOM4QaryZD6DzX3lqrZWOW0yUhSHxUQ-lJLzafYdI2vk7PaTtlVqV2CN3VMJSey5lFp3sKx4lrpEBexJrU" 
              alt="Map" 
            />
          </div>
          <div className="absolute top-6 left-6 z-10">
            <div className="bg-brand-surface/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 dark:border-slate-700">
              <h4 className="font-headline font-bold text-primary-base dark:text-primary-dark text-lg">Geographic Distribution</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Active deployments by territory</p>
              <div className="mt-4 space-y-2">
                <DistributionProgress label="Central Region" value={64} color="bg-secondary-base" />
                <DistributionProgress label="Caribbean Coast" value={22} color="bg-sky-400" />
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
            <div className="w-4 h-4 bg-secondary-base rounded-full border-2 border-white shadow-xl animate-bounce"></div>
            <div className="bg-primary-base text-white text-[10px] px-2 py-1 rounded mt-1 font-bold shadow-xl">BOG_TRANSIT</div>
          </div>
        </div>

        {/* Logs */}
        <div className="lg:col-span-4 bg-brand-surface dark:bg-slate-800 p-8 rounded-2xl editorial-shadow">
          <h4 className="font-headline font-bold text-primary-base dark:text-primary-dark text-xl mb-6">Logistics Logs</h4>
          <div className="space-y-6">
            <LogItem 
              icon={<Truck size={18} />} 
              color="text-secondary-base" 
              title="Shipment Picked Up" 
              desc="Servientrega collected Node AR-22 from HQ Lab." 
              time="14:22 PM" 
            />
            <LogItem 
              icon={<CheckCircle size={18} />} 
              color="text-emerald-500" 
              title="Configuration Success" 
              desc="Node MED-10 provisioned with snep-os_v2.4." 
              time="11:05 AM" 
            />
            <LogItem 
              icon={<Package size={18} />} 
              color="text-primary-base dark:text-primary-dark" 
              title="New Order Received" 
              desc="Plan Avanzado: 4 Units for Ecopetrol Facility." 
              time="09:40 AM" 
            />
            <LogItem 
              icon={<History size={18} />} 
              color="text-slate-400" 
              title="Daily Report Sent" 
              desc="Automated summary sent to Lead Architect." 
              time="Yesterday" 
              faint
            />
          </div>
          <button className="w-full mt-10 py-3 text-xs font-bold uppercase text-secondary-base bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-slate-100 transition-all">
            View Full History
          </button>
        </div>
      </section>

      {/* Floating Action */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-primary-base dark:bg-primary-dark text-white dark:text-slate-900 p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,32,69,0.3)] hover:scale-105 transition-transform flex items-center gap-3">
          <PlusSquare size={20} />
          <span className="font-bold pr-2 uppercase text-xs tracking-widest">Register Shipment</span>
        </button>
      </div>
    </div>
  );
}

function StatBox({ label, value, trend, trendIcon, subtitle, active }: any) {
  return (
    <div className={cn(
      "bg-brand-surface dark:bg-slate-800 p-6 rounded-xl shadow-sm border-l-4 transition-all duration-300",
      active ? "border-secondary-base" : "border-slate-100 dark:border-slate-700"
    )}>
      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">{label}</p>
      <p className="text-3xl font-headline font-bold text-primary-base dark:text-primary-dark">{value}</p>
      {trend && (
        <div className="mt-4 flex items-center text-xs text-secondary-base font-bold">
          <span className="mr-1">{trendIcon}</span>
          {trend}
        </div>
      )}
      {subtitle && <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>}
    </div>
  );
}

function KanbanColumn({ title, children, dotColor }: any) {
  return (
    <div className="min-w-[320px] flex-shrink-0">
      <div className="flex items-center justify-between mb-4 px-2">
        <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">{title}</span>
        <span className={cn("h-2 w-2 rounded-full", dotColor)}></span>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

function KanbanCard({ id, title, address, progress, image }: any) {
  return (
    <div className="bg-brand-surface dark:bg-slate-800 p-5 rounded-xl editorial-shadow group hover:translate-y-[-4px] transition-all duration-300 cursor-pointer border border-transparent dark:border-slate-700">
      <div className="flex justify-between items-start mb-3">
        <span className="text-[10px] font-black px-2 py-1 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded">{id}</span>
        <MoreHorizontal className="text-slate-300 group-hover:text-primary-base transition-colors" size={18} />
      </div>
      <h4 className="font-bold text-primary-base dark:text-primary-dark mb-1">{title}</h4>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{address}</p>
      {progress !== undefined && (
        <div className="flex items-center gap-3">
          {image && <img className="w-8 h-8 rounded-lg object-cover" src={image} alt="Unit" />}
          <div className="flex-1">
            <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
              <div className={cn("h-full bg-sky-400 transition-all duration-1000")} style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DistributionProgress({ label, value, color }: any) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-xs">
        <span className="text-slate-500 dark:text-slate-400">{label}</span>
        <span className="font-bold text-primary-base dark:text-primary-dark">{value}%</span>
      </div>
      <div className="w-full h-1 bg-slate-100 dark:bg-slate-900 rounded-full">
        <div className={cn("h-full rounded-full transition-all duration-1000", color)} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

function LogItem({ icon, color, title, desc, time, faint }: any) {
  return (
    <div className={cn("flex gap-4", faint && "opacity-50")}>
      <div className={cn("mt-1", color)}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-primary-base dark:text-primary-dark">{title}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{desc}</p>
        <span className="text-[10px] text-slate-400 mt-1 block">{time}</span>
      </div>
    </div>
  );
}
