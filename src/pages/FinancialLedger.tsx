import { 
  TrendingUp, 
  Wallet, 
  Calendar, 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  PieChart as PieChartIcon, 
  ArrowRight,
  Plus,
  ArrowUpRight,
  ChevronDown,
  Building,
  Briefcase
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function FinancialLedger() {
  return (
    <div className="max-w-[1500px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header & Toggle Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-6xl font-headline font-black text-primary-base dark:text-primary-dark tracking-tighter mb-2 editorial-header leading-none">
            Financial Ledger
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-lg leading-snug">
            Architecture-level asset management and investment tracking for SNEP Virtual infrastructure.
          </p>
        </div>
        <div className="bg-slate-100 dark:bg-slate-900 p-1.5 rounded-full flex gap-1 border border-slate-200 dark:border-slate-800">
          <button className="px-8 py-2.5 bg-brand-surface dark:bg-slate-800 text-primary-base dark:text-primary-dark font-black rounded-full shadow-sm text-sm transition-all uppercase tracking-widest">
            Active Payments
          </button>
          <button className="px-8 py-2.5 text-slate-500 font-bold rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-all text-sm uppercase tracking-widest">
            Refunds / Devoluciones
          </button>
        </div>
      </div>

      {/* Bento Summary Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <SummaryCard 
          label="Total Asset Value" 
          value="$1,248,500.00" 
          accent="bg-secondary-base"
          trend="+12.5% vs last month"
          trendUp
        />
        <SummaryCard 
          label="Partner Capital Deployed" 
          value="$412,300.00" 
          accent="bg-primary-base"
          subText="Weighted Average: 33.1% Portfolio"
        />
        <div className="bg-primary-base dark:bg-slate-950 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[180px]">
          <div className="relative z-10">
            <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest mb-2 font-headline">Pending Taxes (IVA 19%)</p>
            <h3 className="text-4xl font-headline font-black text-white">$78,314.90</h3>
          </div>
          <div className="mt-4 flex items-center gap-3 relative z-10">
            <Calendar size={18} className="text-secondary-dark" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Next settlement: Oct 15</span>
          </div>
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-primary-base to-secondary-base"></div>
          <div className="absolute top-0 right-0 p-8 opacity-20 rotate-12">
             <ArrowUpRight size={80} />
          </div>
        </div>
      </div>

      {/* Ledger Table Container */}
      <div className="bg-brand-surface dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
        <div className="px-10 py-8 flex flex-col lg:flex-row justify-between items-center bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800 gap-6">
          <h4 className="font-headline font-black text-2xl text-primary-base dark:text-primary-dark uppercase">Transactional Ledger</h4>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                className="pl-12 pr-6 py-3 bg-brand-surface dark:bg-slate-800 border-none rounded-full text-sm font-medium focus:ring-4 focus:ring-secondary-base/10 w-full sm:w-80 shadow-inner dark:shadow-none placeholder:text-slate-400 text-primary-base dark:text-primary-dark" 
                placeholder="Search clients..." 
                type="text"
              />
            </div>
            <button className="flex items-center gap-3 px-6 py-3 bg-brand-surface dark:bg-slate-800 rounded-full text-xs font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 shadow-sm border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              <Filter size={16} />
              Filter
              <ChevronDown size={14} className="ml-1" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-slate-50/30 dark:bg-slate-950/20">
                <th className="px-10 py-6 text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800">Client Name</th>
                <th className="px-6 py-6 text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800">Plan Type</th>
                <th className="px-6 py-6 text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800">Asset</th>
                <th className="px-6 py-6 text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800">Client Inv.</th>
                <th className="px-6 py-6 text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 text-center">IVA (19%)</th>
                <th className="px-6 py-6 text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 text-right">Final Total</th>
                <th className="px-10 py-6 text-[10px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              <LedgerRow 
                name="Apex Media Ltd." 
                initials="AM" 
                plan="Enterprise V4" 
                asset="$1,200.00" 
                inv="$960.00" 
                perc="80%" 
                iva="$182.40" 
                total="$1,142.40" 
                status="Completed" 
                statusColor="text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20"
                bullet="bg-emerald-500"
              />
              <LedgerRow 
                name="Julianna Duarte" 
                initials="JD" 
                plan="Pro Nodes" 
                asset="$850.00" 
                inv="$510.00" 
                perc="60%" 
                iva="$96.90" 
                total="$556.90" 
                status="Pending" 
                statusColor="text-amber-500 bg-amber-50 dark:bg-amber-950/20"
                bullet="bg-amber-500"
              />
              <LedgerRow 
                name="Skyline Lab Corp" 
                initials="SK" 
                plan="Basic Cluster" 
                asset="$1,100.00" 
                inv="$825.00" 
                perc="75%" 
                iva="$156.75" 
                total="$981.75" 
                status="Completed" 
                statusColor="text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20"
                bullet="bg-emerald-500"
              />
            </tbody>
          </table>
        </div>

        <div className="px-10 py-8 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-black uppercase tracking-widest gap-6 border-t border-slate-100 dark:border-slate-800">
          <p>Showing 3 of 48 active payment cycles</p>
          <div className="flex gap-2">
            <PaginationButton icon={<ChevronLeft size={16} />} disabled />
            <PaginationButton label="1" active />
            <PaginationButton label="2" />
            <PaginationButton label="3" />
            <PaginationButton icon={<ChevronRight size={16} />} />
          </div>
        </div>
      </div>

      {/* Contextual Insights Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-slate-100 dark:bg-slate-900/40 p-10 rounded-[2.5rem] border border-white dark:border-slate-800/50 editorial-shadow">
          <h5 className="font-headline font-black text-2xl text-primary-base dark:text-primary-dark mb-8 flex items-center gap-3 uppercase tracking-tight">
            <BarChart3 className="text-secondary-base" size={24} />
            Investment Distribution
          </h5>
          <div className="flex flex-col sm:flex-row items-center gap-10">
            <div className="relative w-40 h-40 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[14px] border-secondary-base border-t-slate-200 dark:border-t-slate-700 rotate-45"></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-primary-base dark:text-primary-dark font-headline">75%</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Avg.</span>
              </div>
            </div>
            <div className="space-y-6 flex-1 w-full">
              <DistributionBar label="Client Portion" value="$1.1M" progress={75} color="bg-primary-base dark:bg-primary-dark" />
              <DistributionBar label="Partner Leverage" value="$342k" progress={25} color="bg-secondary-base" />
            </div>
          </div>
        </div>

        <div className="bg-brand-surface dark:bg-slate-800 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-xl relative overflow-hidden group">
          <img 
            className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000" 
            alt="Compliance" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW3TbMddq5z_PcScP6Uu-SD7kYVSgN3aBqseZIQdLTauhnPrJ-otDSnyBVmGE1vrRSwnT3Pqv-uMKynesQX-6U2-dw7PUuTiQAgGfMBMEzHDSf-OQMo5QHQViZ-YkRURjFFrzIH8qFy7na_g9b4sE8ohE5dPkFOiIqES85H2aXIlTvnpeO5Saxz1uRAh8bYf5rn9vwBXMDr8n6SRYkXRAidFjeXoQq14JNLX0rAKNyWARs44t9X7jSIm14dpOugvub1H42oSkx4ho" 
          />
          <div className="relative z-10 flex flex-col h-full h-[240px]">
            <h5 className="font-headline font-black text-2xl text-primary-base dark:text-primary-dark mb-3 uppercase tracking-tight">Audit Compliance</h5>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed max-w-sm mb-auto">
              All transactional data for SNEP Virtual Architecture is cryptographically signed and ready for Q4 reconciliation.
            </p>
            <button className="flex items-center gap-3 text-secondary-base hover:text-primary-base dark:hover:text-primary-dark transition-all text-sm font-black uppercase tracking-widest mt-8 group-hover:translate-x-1 duration-300">
              Generate Audit Report
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-10 right-10 w-16 h-16 bg-primary-base dark:bg-primary-dark text-white dark:text-slate-900 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 z-50">
        <Plus size={32} />
      </button>
    </div>
  );
}

function SummaryCard({ label, value, accent, trend, trendUp, subText }: any) {
  return (
    <div className="bg-brand-surface dark:bg-slate-900 p-8 rounded-3xl shadow-xl relative overflow-hidden group border border-transparent dark:border-slate-800 transition-all hover:border-slate-200 dark:hover:border-slate-700">
      <div className={cn("absolute top-0 left-0 w-1.5 h-full transition-all group-hover:w-2", accent)}></div>
      <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest mb-2 font-headline">{label}</p>
      <h3 className="text-3xl font-headline font-black text-primary-base dark:text-primary-dark mb-4">{value}</h3>
      {trend && (
        <div className={cn("flex items-center gap-2", trendUp ? "text-emerald-600 dark:text-emerald-400" : "text-red-500")}>
          <TrendingUp size={16} />
          <span className="text-xs font-black uppercase tracking-widest">{trend}</span>
        </div>
      )}
      {subText && (
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{subText}</p>
      )}
    </div>
  );
}

function LedgerRow({ name, initials, plan, asset, inv, perc, iva, total, status, statusColor, bullet }: any) {
  return (
    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all group">
      <td className="px-10 py-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary-base dark:text-primary-dark font-black text-xs border border-slate-200 dark:border-slate-700">
            {initials}
          </div>
          <div className="font-headline font-bold text-sm text-primary-base dark:text-primary-dark">{name}</div>
        </div>
      </td>
      <td className="px-6 py-6 italic text-sm text-slate-500 font-medium">{plan}</td>
      <td className="px-6 py-6 text-sm font-mono text-slate-400 font-bold">{asset}</td>
      <td className="px-6 py-6">
        <div className="flex flex-col">
          <span className="text-sm text-primary-base dark:text-primary-dark font-black tracking-tight">{inv}</span>
          <span className="text-[10px] text-slate-400 font-bold uppercase">{perc} Allocation</span>
        </div>
      </td>
      <td className="px-6 py-6 text-sm text-slate-400 font-medium text-center">{iva}</td>
      <td className="px-6 py-6 text-right">
        <span className="text-lg font-headline font-black text-primary-base dark:text-primary-dark">{total}</span>
      </td>
      <td className="px-10 py-6 text-right">
        <span className={cn("inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm", statusColor)}>
          <span className={cn("w-2 h-2 rounded-full", bullet)}></span>
          {status}
        </span>
      </td>
    </tr>
  );
}

function PaginationButton({ label, icon, active, disabled }: any) {
  return (
    <button 
      disabled={disabled}
      className={cn(
        "w-10 h-10 flex items-center justify-center rounded-xl border transition-all text-xs font-black uppercase",
        active 
          ? "bg-primary-base dark:bg-primary-dark text-white dark:text-slate-900 border-primary-base shadow-lg" 
          : "bg-brand-surface dark:bg-slate-800 border-slate-100 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-30"
      )}
    >
      {label || icon}
    </button>
  );
}

function DistributionBar({ label, value, progress, color }: any) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-end">
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</span>
        <span className="text-sm font-black text-primary-base dark:text-primary-dark">{value}</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
        <div className={cn("h-full transition-all duration-1000", color)} style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

function BarChart3({ className, size }: any) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
  );
}
