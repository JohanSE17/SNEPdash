import { 
  TrendingUp, 
  AlertTriangle, 
  RefreshCw,
  Search,
  ArrowRight,
  ShieldCheck,
  Activity,
  Plus,
  Cpu,
  Database,
  Users,
  Wallet,
  Truck,
  Bell,
  HelpCircle,
  Sun,
  Moon,
  ChevronRight,
  ChevronLeft,
  Circle
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

export default function DashboardOverview() {
  const { t } = useLanguage();

  return (
    <div className="max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Dashboard Header */}
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <p className="text-secondary-base dark:text-secondary-dark font-bold text-sm uppercase tracking-[0.2em] mb-2 font-headline">{t('overview.globalOverview')}</p>
          <h3 className="text-5xl font-black text-primary-base dark:text-white font-headline leading-tight tracking-tighter editorial-header">
            {t('overview.monolith.1')} <br/> {t('overview.monolith.2')}
          </h3>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="px-5 py-2.5 bg-brand-surface dark:bg-slate-900 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse ring-4 ring-emerald-500/10"></span>
            <span className="text-[10px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-widest">{t('overview.network')}</span>
          </div>
          <button className="bg-primary-base dark:bg-primary-dark text-white dark:text-slate-900 px-8 py-3 rounded-xl font-black text-sm hover:scale-[0.98] transition-all flex items-center gap-3 shadow-2xl shadow-primary-base/20 dark:shadow-primary-dark/20 uppercase tracking-widest active:scale-95">
            <RefreshCw size={18} />
            {t('overview.resync')}
          </button>
        </div>
      </div>

      {/* Bento Grid: Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
        <OverviewStat 
          label={t('stat.vms')}
          value="1,284" 
          trend="+12%" 
          icon={<Cpu size={24} />} 
          progress={75}
          color="bg-blue-600"
        />
        <OverviewStat 
          label={t('stat.revenue')}
          value="$42.8k" 
          trend="+5.2%" 
          icon={<Wallet size={24} />} 
          subText={`${t('stat.projected')}: $45.1k`}
          color="bg-emerald-500"
        />
        <OverviewStat 
          label={t('stat.health')}
          value="98.2%" 
          trend={`2 ${t('stat.alerts')}`}
          icon={<Activity size={24} />} 
          health
          color="bg-blue-400"
        />
        <OverviewStat 
          label={t('stat.support')}
          value="14" 
          trend={`${t('stat.avg')}: 22m`}
          icon={<Users size={24} />} 
          color="bg-slate-900 dark:bg-slate-700"
          avatars={[
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAxI186p6SgokUVKC69-MEZIS0HidUciA0I8-c5b8MNj3TyxI5omLU7fXye_DOtiprAdZLN_AVWdj1mCywkmIMD1bxNqjn2Fz4ChJqAp0sFYwepEq3CN_xkKBcZoPHKb7SoD6cFBLX2bV0hIipxm7TrKkzmg9MPr9Begmn-PrOsG3BTUmvm6_avwzrqIy-HO2SXVlf23vRpKdV_v8nZXdD--zTUlWUGGlawwflfFlb2Lsyk9lNeZdd1inXeXjcJ9EOIfRk5g48tcdg",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDmHIE7Wv7TBs7vg-lxGKvBa0p-xIUUgvlpA_MIdAlmCKoCVpFpoM798r98b_zOuTYWlkXoB_eIbk5PIgyZPXtq7MAUnCBlsIQNWI311LnZ_kIQmKkdXGBjrrdZ-gq7fKvJqsZ9BXXHyfD6VNxGhwIG-LSJ7L3Y8NPYvrd87VV8VPFe7UFM7GR4KQVYsy7hBXhxlTwfcd1NXmYCdjyVR5OiSFU5lFWwOyZ0qKJ1APaW0mV2M32xLCPFrFYk7XurgzTb_QAQ3APrhuw"
          ]}
          extraAvatars={3}
        />
        <div className="bg-primary-base dark:bg-slate-950 p-6 rounded-2xl relative overflow-hidden group shadow-xl">
          <div className="absolute -right-4 -bottom-4 opacity-10 transform rotate-12 group-hover:scale-110 transition-transform duration-700">
            <Cpu size={120} className="text-white" />
          </div>
          <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-4">{t('token.tracker')}</p>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[10px] text-white/60 font-black uppercase tracking-widest">{t('token.free')}</span>
                <span className="text-xs font-black text-white">84%</span>
              </div>
              <div className="w-full bg-brand-surface/10 h-1 rounded-full overflow-hidden">
                <div className="h-full bg-secondary-dark w-[84%] rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-between items-center bg-brand-surface/5 p-3 rounded-lg border border-white/5">
              <span className="text-[10px] text-white/70 font-black uppercase tracking-widest">{t('token.advanced')}</span>
              <span className="text-sm font-headline font-black text-white">12.4k UC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Central Layout: Map & Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Infrastructure Density Map */}
        <div className="lg:col-span-2 bg-brand-surface dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col min-h-[600px] border border-slate-100 dark:border-slate-800">
          <div className="px-10 py-8 border-b border-slate-50 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <h5 className="text-2xl font-black text-primary-base dark:text-white font-headline uppercase tracking-tight">{t('map.density')}</h5>
              <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">{t('map.desc')}</p>
            </div>
            <div className="flex gap-4 items-center">
              <button className="px-5 py-2 bg-slate-50 dark:bg-slate-800 text-[10px] font-black uppercase rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-2">
                <RefreshCw size={14} />
                {t('map.export')}
              </button>
              <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                <button className="px-4 py-1.5 text-[10px] font-black uppercase bg-brand-surface dark:bg-slate-700 shadow-sm rounded-lg text-primary-base dark:text-white">{t('map.live')}</button>
                <button className="px-4 py-1.5 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 hover:text-slate-600 transition-colors">{t('map.heatmap')}</button>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative bg-slate-950 group overflow-hidden">
            <img 
              alt="Global Map" 
              className="w-full h-full object-cover opacity-50 grayscale mix-blend-luminosity hover:scale-105 transition-transform duration-[20s] linear" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzLtTP3Ur9pt0k8oxkA33k2wWiUr6-BaTZ84cDSnblRA84aRbKbrODSu3mcdZFEl9_B3TcewKA07LE7GMk5ydmnX23bLyTU0XfT2sey5z-XViPPS0b5sf9JbszTdKtYLCSsssHQJdn5HU1KjycaQjkHjByeNL5MzfE3c1q5gsUJVeUGWwpK2O6W1dy9SUN9NGZj107cwAyMDhOfcjap4Sjp0R-BWKLahbir3ztCV31FGo14LeKpxoagIAl9ftK839t9anEowZaar8" 
            />
            
            {/* Markers */}
            <div className="absolute top-1/4 left-1/4 group/marker cursor-pointer">
              <div className="w-4 h-4 bg-secondary-base rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-secondary-base rounded-full relative border-2 border-white dark:border-slate-800 shadow-[0_0_15px_rgba(49,130,206,0.6)]"></div>
              <div className="absolute left-6 top-0 hidden group-hover/marker:block bg-brand-surface dark:bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-100 dark:border-slate-800 shadow-2xl z-20 w-40">
                <p className="text-[10px] font-black text-primary-base dark:text-white uppercase tracking-widest mb-1">Node: XJ-09</p>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Latency</span>
                  <span className="text-[10px] text-emerald-500 font-black">14ms</span>
                </div>
                <div className="mt-2 h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-full"></div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-secondary-base rounded-full shadow-[0_0_15px_rgba(49,130,206,0.6)]"></div>
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-secondary-base rounded-full shadow-[0_0_15_rgba(49,130,206,0.6)]"></div>

            {/* Overlay Legend */}
            <div className="absolute bottom-10 left-10 p-6 bg-brand-surface/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-slate-800 shadow-2xl">
              <p className="text-[10px] font-black text-primary-base dark:text-white uppercase tracking-widest mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">{t('map.sectors')}</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-secondary-base ring-4 ring-secondary-base/20"></span>
                  <span className="text-[10px] text-slate-600 dark:text-slate-300 font-black uppercase tracking-widest">{t('map.core')} (82)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"></span>
                  <span className="text-[10px] text-slate-600 dark:text-slate-300 font-black uppercase tracking-widest">{t('map.edge')} (144)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Details */}
        <div className="flex flex-col gap-8">
          {/* Financial Summary */}
          <section className="bg-brand-surface dark:bg-slate-900 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800">
            <h5 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-8 flex justify-between items-center group cursor-pointer">
              {t('finance.title')}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </h5>
            <div className="space-y-8">
              <FinancialMetric label={t('finance.client')} value="80%" color="bg-blue-600" active />
              <FinancialMetric label={t('finance.partner')} value={`60% ${t('finance.capacity')}`} progress={60} color="bg-primary-base dark:bg-primary-dark" />
              
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex items-center justify-between border border-slate-100 dark:border-slate-800 transition-transform hover:scale-[1.02] cursor-pointer">
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">{t('finance.yield')}</p>
                  <p className="text-2xl font-black text-primary-base dark:text-primary-dark font-headline">+14.2%</p>
                </div>
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-950/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 ring-4 ring-emerald-50 dark:ring-emerald-950/20">
                  <TrendingUp size={20} />
                </div>
              </div>
            </div>
          </section>

          {/* Security Protocol */}
          <section className="bg-brand-surface dark:bg-slate-900 p-8 rounded-[2rem] shadow-xl border-t-4 border-red-500 border-x border-b border-slate-100 dark:border-slate-800 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div>
                <h5 className="text-[10px] font-black text-primary-base dark:text-white uppercase tracking-[0.2em]">{t('security.title')}</h5>
                <p className="text-[10px] text-red-500 font-black mt-2 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                  2 {t('security.vuln')}
                </p>
              </div>
              <ShieldCheck className="text-red-500" size={24} />
            </div>

            <div className="space-y-4 mb-8 relative z-10">
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-2xl flex items-start gap-4 border border-red-100 dark:border-red-950/40">
                <AlertTriangle className="text-red-600 dark:text-red-400 shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-[10px] font-black text-red-700 dark:text-red-400 uppercase tracking-widest mb-1">{t('security.leak')}</p>
                  <p className="text-[10px] text-red-800/60 dark:text-red-400/60 font-medium leading-relaxed uppercase tracking-tighter">{t('security.leak_desc')}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 relative z-10">
              <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-4 text-center">{t('security.manual')}</p>
              <button className="w-full bg-red-600 text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 active:scale-95">
                <RefreshCw size={16} />
                {t('security.keychain')}
              </button>
              <p className="text-[8px] text-center text-slate-400 mt-3 italic uppercase tracking-widest">{t('security.auth')}</p>
            </div>
            
            {/* Decorative background for security block */}
            <div className="absolute -right-12 -bottom-12 opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none">
              <ShieldCheck size={200} />
            </div>
          </section>
        </div>
      </div>

      {/* Module Shortcuts Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
        <ModuleCard 
          icon={<Users size={20} />} 
          title={t('modules.client')} 
          desc={t('modules.client_desc')} 
          to="/clients"
        />
        <ModuleCard 
          icon={<Truck size={20} />} 
          title={t('modules.logistics')} 
          desc={t('modules.logistics_desc')} 
          to="/storage/Logistics_&_Supply_Chain_Management"
        />
        <ModuleCard 
          icon={<Wallet size={20} />} 
          title={t('modules.ledger')} 
          desc={t('modules.ledger_desc')} 
          to="/financials"
        />
      </div>

      {/* Footer Section: Intelligence & Tips */}
      <div className="mt-8 grid grid-cols-1 xl:grid-cols-4 gap-8 pb-12">
        <div className="xl:col-span-3 glass rounded-3xl p-10 flex flex-col lg:flex-row justify-between lg:items-center gap-12 min-h-[360px] bg-gradient-to-br from-brand-surface to-brand-bg/40">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pastel-indigo/10 border border-pastel-indigo/20 text-pastel-indigo text-[10px] font-bold uppercase tracking-widest mb-6">
              <Activity size={12} /> {t('intel.live')}
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">{t('intel.title')}</h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">{t('intel.desc')}</p>
            <div className="flex items-center gap-4">
              <button className="px-8 py-3 bg-pastel-indigo text-brand-bg font-bold rounded-xl shadow-lg shadow-pastel-indigo/20 hover:scale-105 transition-all text-sm">{t('intel.portal')}</button>
              <button className="px-8 py-3 bg-brand-surface border border-brand-border font-bold rounded-xl hover:bg-brand-bg transition-all text-sm">{t('intel.docs')}</button>
            </div>
          </div>
        </div>
        
        {/* New Mini Search & Tips Section */}
        <div className="xl:col-span-1 glass rounded-3xl p-8 flex flex-col gap-6 bg-brand-surface border-brand-border">
          <div>
            <h6 className="font-display font-bold text-lg text-pastel-indigo tracking-tight mb-2">{t('intel.smart')}</h6>
            <p className="text-xs text-text-secondary">{t('intel.smart_desc')}</p>
          </div>
          
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input 
              placeholder={t('intel.search')}
              className="w-full bg-brand-bg/50 border border-brand-border rounded-xl pl-9 pr-4 py-2 text-xs focus:outline-none focus:border-pastel-indigo/50 transition-colors text-text-primary" 
              type="text" 
            />
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto">
            <div className="p-4 rounded-2xl bg-pastel-teal/5 border border-pastel-teal/10 hover:bg-pastel-teal/10 transition-colors cursor-pointer group">
              <p className="text-xs font-semibold text-pastel-teal mb-1">{t('suggest.rebalance.title')}</p>
              <p className="text-[10px] text-text-secondary leading-relaxed">{t('suggest.rebalance.desc')}</p>
            </div>
            <div className="p-4 rounded-2xl bg-pastel-indigo/5 border border-pastel-indigo/10 hover:bg-pastel-indigo/10 transition-colors cursor-pointer group">
              <p className="text-xs font-semibold text-pastel-indigo mb-1">{t('suggest.cold.title')}</p>
              <p className="text-[10px] text-text-secondary leading-relaxed">{t('suggest.cold.desc')}</p>
            </div>
            <div className="p-4 rounded-2xl bg-pastel-rose/5 border border-pastel-rose/10 hover:bg-pastel-rose/10 transition-colors cursor-pointer group">
              <p className="text-xs font-semibold text-pastel-rose mb-1">{t('suggest.audit.title')}</p>
              <p className="text-[10px] text-text-secondary leading-relaxed">{t('suggest.audit.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OverviewStat({ label, value, trend, icon, progress, subText, health, color, avatars, extraAvatars }: any) {
  return (
    <div className="bg-brand-surface dark:bg-slate-900 p-8 rounded-3xl shadow-xl relative overflow-hidden group border border-slate-50 dark:border-slate-800 transition-all hover:border-slate-200 dark:hover:border-slate-700">
      <div className={cn("absolute top-0 left-0 w-1.5 h-full transition-all group-hover:w-2", color)}></div>
      <div className="absolute top-6 right-8 text-slate-100 dark:text-slate-800 group-hover:text-slate-200 dark:group-hover:text-slate-700 transition-colors">
        {icon}
      </div>
      
      <p className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-widest mb-3">{label}</p>
      <div className="flex items-baseline gap-3 mb-6">
        <h4 className="text-4xl font-headline font-black text-primary-base dark:text-white leading-none">{value}</h4>
        <span className={cn(
          "text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1.5",
          trend.includes('+') ? "bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400" : "bg-red-50 dark:bg-red-950/20 text-red-500"
        )}>
          {trend.includes('Alerts') && <AlertTriangle size={10} />}
          {trend}
        </span>
      </div>

      {progress !== undefined && (
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className={cn("h-full", color)}
          />
        </div>
      )}

      {health && (
        <div className="flex gap-1.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={cn("h-1.5 rounded-full", i <= 4 ? "bg-emerald-500 w-full" : "bg-red-500 w-1/2 ring-2 ring-red-500/20")} />
          ))}
        </div>
      )}

      {avatars && (
        <div className="flex -space-x-2">
          {avatars.map((src: string, i: number) => (
            <img key={i} alt="Avatar" className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800 shadow-sm" src={src} />
          ))}
          {extraAvatars && (
            <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-[10px] font-black text-primary-base dark:text-white">
              +{extraAvatars}
            </div>
          )}
        </div>
      )}

      {subText && <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">{subText}</p>}
    </div>
  );
}

function FinancialMetric({ label, value, progress = 80, color, active }: any) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end">
        <span className={cn(
          "px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm",
          active ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" : "bg-slate-50 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
        )}>
          {label}
        </span>
        <span className={cn("text-xs font-black", active ? "text-blue-600 dark:text-blue-400" : "text-primary-base dark:text-white")}>{value}</span>
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className={cn("h-full", color)}
        />
      </div>
    </div>
  );
}

function ModuleCard({ icon, title, desc, to }: any) {
  return (
    <div className="bg-brand-surface/40 dark:bg-slate-900/20 backdrop-blur-sm p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:bg-brand-surface dark:hover:bg-slate-900 transition-all cursor-pointer group hover:shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
          {icon}
        </div>
        <div className="w-10 h-10 rounded-full border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-300 dark:text-slate-700 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:border-blue-600/20 transition-all">
          <ArrowRight size={20} />
        </div>
      </div>
      <h6 className="font-headline font-black text-xl text-primary-base dark:text-white uppercase tracking-tight mb-2">{title}</h6>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed uppercase tracking-tighter opacity-70">{desc}</p>
    </div>
  );
}
