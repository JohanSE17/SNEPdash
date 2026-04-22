import { 
  ShieldCheck, 
  Lock, 
  Terminal, 
  Zap, 
  RefreshCw, 
  Cpu, 
  BarChart3, 
  AlertOctagon, 
  LockKeyhole, 
  Command, 
  Activity, 
  Brain, 
  Trash2, 
  UserPlus, 
  Ban,
  Fingerprint,
  Activity as PulseIcon
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function SecurityIAOps() {
  return (
    <div className="max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <h1 className="font-headline text-5xl font-bold text-primary-base dark:text-primary-dark tracking-tighter leading-none mb-2 editorial-header">
              Security & IA Agent Operations
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg leading-snug">
              Centralized governance for anti-theft protocols and neural node management.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">System Health</span>
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-sm font-bold text-primary-base dark:text-primary-dark">All Systems Nominal</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        {/* EMERGENCY LOCKDOWN */}
        <section className="col-span-12 lg:col-span-4 bg-red-50 dark:bg-red-950/20 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group border-b-4 border-red-200 dark:border-red-900/50 min-h-[400px]">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-600 rounded-xl text-white">
                <Lock size={24} />
              </div>
              <h3 className="font-headline text-2xl font-black text-red-900 dark:text-red-400 uppercase tracking-tight">Emergency Lockdown</h3>
            </div>
            <p className="text-red-800 dark:text-red-400/80 text-sm mb-8 leading-relaxed font-medium">
              Triggering the <strong className="font-black">Botón de emergencia</strong> will immediately sever all external API connections, rotate master keys, and isolate node clusters.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col gap-4">
            <button className="w-full bg-red-600 text-white py-6 rounded-2xl font-headline font-black text-xl tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 shadow-2xl shadow-red-600/40 uppercase">
              <Fingerprint size={28} />
              ACTIVATE KEYCHAIN
            </button>
            <div className="flex justify-between text-[10px] font-black text-red-600 dark:text-red-500 uppercase tracking-widest px-2">
              <span>Anti-Theft Protocol 4.2</span>
              <span>Level 5 Auth Requirement</span>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
        </section>

        {/* ACTIVE SECURITY SCRIPTS */}
        <section className="col-span-12 lg:col-span-8 bg-brand-surface dark:bg-slate-900 rounded-3xl p-8 shadow-xl border-l-4 border-secondary-base dark:border-secondary-dark flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <Terminal size={24} className="text-secondary-base" />
              <h3 className="font-headline text-2xl font-bold text-primary-base dark:text-primary-dark">Active Security Scripts</h3>
            </div>
            <span className="text-[10px] font-black text-secondary-base uppercase bg-secondary-base/10 px-3 py-1 rounded-full">Replicating to 12 Nodes</span>
          </div>

          <div className="space-y-4 flex-1">
            <ScriptItem 
              id="HASH_CHK" 
              title="Inbound Packet Validation" 
              desc="Replicating to: Cluster-Alpha, Beta-4" 
              progress={85} 
            />
            <ScriptItem 
              id="SSH_RTN" 
              title="Dynamic SSH Tunneling" 
              desc="Replicating to: All Global Nodes" 
              progress={100} 
              synced 
            />
            <ScriptItem 
              id="D_WIPE" 
              title="Volatile Memory Purge" 
              desc="Status: Awaiting Command" 
              progress={0} 
              standby 
            />
          </div>
        </section>

        {/* CREDENTIAL ROTATION */}
        <section className="col-span-12 md:col-span-4 bg-primary-base dark:bg-slate-950 text-white rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative shadow-2xl">
          <div className="relative z-10">
            <h3 className="font-headline text-xl font-bold mb-8 flex items-center gap-3">
              <LockKeyhole size={20} className="text-secondary-dark" />
              Credential Rotation
            </h3>
            <div className="space-y-6">
              <RotationItem label="Web Infrastructure" time="4h 12m left" />
              <RotationItem label="API Gateway" time="Rotated Now" success />
              <RotationItem label="MCP Core" time="Expiring Soon" warning />
            </div>
          </div>
          <button className="relative z-10 mt-10 w-full py-4 bg-secondary-base text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-secondary-dark transition-all active:scale-95">
            Manual Rotation Force
          </button>
          <div className="absolute -right-10 -top-10 opacity-10 pointer-events-none">
            <Lock size={160} />
          </div>
        </section>

        {/* NEURAL NODE TRACKING */}
        <section className="col-span-12 md:col-span-8 bg-brand-surface dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden flex flex-col border border-slate-100 dark:border-slate-800">
          <div className="p-8 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <Brain size={24} className="text-secondary-base" />
              <h3 className="font-headline text-2xl font-bold text-primary-base dark:text-primary-dark">Neural Node Tracking</h3>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Total IA Cost</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-headline font-black text-primary-base dark:text-primary-dark">$412.80</span>
                <span className="text-[10px] text-slate-400 font-medium">/mo</span>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Node ID</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Model Agent</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Tier</th>
                  <th className="px-8 py-4 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest">Usage</th>
                  <th className="px-8 py-4 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest">Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                <NodeRow id="#SN-992" model="Gemini 1.5 Pro" tier="Advanced" usage="8.2M tokens" balance="$124.50" active />
                <NodeRow id="#SN-102" model="Claude 3.5 Sonnet" tier="Advanced" usage="12.1M tokens" balance="$240.20" active />
                <NodeRow id="#SN-441" model="OpenClaw Base" tier="Free" usage="4.1M tokens" balance="$48.10" />
              </tbody>
            </table>
          </div>
        </section>

        {/* WORKFLOWS & IP BLOCKING */}
        <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-brand-surface dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-transparent dark:border-slate-800">
            <div className="flex items-center gap-3 mb-8">
              <Command size={20} className="text-secondary-base" />
              <h3 className="font-headline text-lg font-bold text-primary-base dark:text-primary-dark">Security Workflows</h3>
            </div>
            <div className="space-y-4">
              <WorkflowButton 
                title="Purge Compromised" 
                subtitle="Delete sessions & accounts" 
                icon={<Trash2 size={18} />} 
                danger 
              />
              <WorkflowButton 
                title="Provision Secure Ops" 
                subtitle="Create hardened admin seats" 
                icon={<UserPlus size={18} />} 
                secondary 
              />
            </div>
          </div>

          <div className="bg-brand-surface dark:bg-slate-900 p-8 rounded-3xl shadow-xl border-r-4 border-red-500/20 dark:border-red-500/10 border border-transparent dark:border-slate-800">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Ban size={20} className="text-red-500" />
                <h3 className="font-headline text-lg font-bold text-primary-base dark:text-primary-dark">Live IP Blocklist</h3>
              </div>
              <span className="text-[10px] font-black text-red-500 animate-pulse tracking-widest">LIVE</span>
            </div>
            <div className="space-y-3 font-mono">
              <IPItem ip="192.168.1.104" reason="BRUTE_FORCE" />
              <IPItem ip="45.2.122.9" reason="GEO_RESTRICT" />
              <IPItem ip="103.55.21.1" reason="TOR_EXIT_NODE" />
            </div>
          </div>
        </div>

        {/* COBALT BLUEPRINT SUMMARY */}
        <section className="col-span-12 lg:col-span-5 bg-gradient-to-br from-primary-base to-[#1a365d] rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h3 className="font-headline text-2xl font-bold mb-3">Cobalt Blueprint Engine</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-sm">
                Architectural integrity is maintained via the Cobalt validation layer. All IA actions are cross-referenced against the blueprint before execution.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-brand-surface/5 rounded-2xl backdrop-blur-md border border-white/10">
                <p className="text-[10px] uppercase font-black text-secondary-dark mb-1 tracking-widest">Protocol Sync</p>
                <p className="text-3xl font-headline font-bold">99.9%</p>
              </div>
              <div className="p-5 bg-brand-surface/5 rounded-2xl backdrop-blur-md border border-white/10">
                <p className="text-[10px] uppercase font-black text-secondary-dark mb-1 tracking-widest">IA Latency</p>
                <p className="text-3xl font-headline font-bold">12ms</p>
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
            <svg width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10H90V90H10V10ZM20 20V80H80V20H20Z" fill="white" />
              <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.5" />
              <line x1="10" y1="10" x2="90" y2="90" stroke="white" strokeWidth="0.5" />
              <line x1="90" y1="10" x2="10" y2="90" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
        </section>
      </div>
    </div>
  );
}

function ScriptItem({ id, title, desc, progress, synced, standby }: any) {
  return (
    <div className="flex items-center justify-between p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl group hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
      <div className="flex items-center gap-4">
        <code className="text-[10px] bg-primary-base dark:bg-primary-dark text-white dark:text-slate-900 px-2 py-1 rounded-sm font-mono font-black">{id}</code>
        <div>
          <h4 className="text-sm font-bold text-primary-base dark:text-primary-dark">{title}</h4>
          <p className="text-[11px] text-slate-500 font-medium">{desc}</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        {!standby && (
          <div className="w-32 bg-slate-200 dark:bg-slate-700 h-1 rounded-full overflow-hidden">
            <div 
              className={cn("h-full transition-all duration-1000", synced ? "bg-emerald-500 animate-pulse" : "bg-secondary-base")} 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
        <span className={cn(
          "text-xs font-black uppercase tracking-widest",
          synced ? "text-emerald-600" : standby ? "text-slate-400" : "text-secondary-base"
        )}>
          {synced ? 'Synced' : standby ? 'Standby' : `${progress}%`}
        </span>
      </div>
    </div>
  );
}

function RotationItem({ label, time, success, warning }: any) {
  return (
    <div className="flex justify-between items-center border-b border-white/10 pb-4">
      <span className="text-sm font-medium text-slate-300">{label}</span>
      <span className={cn(
        "text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 rounded",
        success ? "text-emerald-400 bg-emerald-400/10" : 
        warning ? "text-red-400 bg-red-400/10 animate-pulse" : "text-secondary-dark bg-brand-surface/5"
      )}>
        {time}
      </span>
    </div>
  );
}

function NodeRow({ id, model, tier, usage, balance, active }: any) {
  return (
    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-8 py-5 font-mono text-[11px] text-primary-base dark:text-primary-dark font-black">{id}</td>
      <td className="px-8 py-5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700">
            <Cpu size={16} className="text-secondary-base" />
          </div>
          <span className="text-sm font-bold text-primary-base dark:text-primary-dark">{model}</span>
        </div>
      </td>
      <td className="px-8 py-5">
        <span className={cn(
          "px-2 py-1 text-[10px] font-black rounded uppercase tracking-widest",
          tier === 'Advanced' ? "bg-secondary-base/10 text-secondary-base" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
        )}>
          {tier}
        </span>
      </td>
      <td className="px-8 py-5 text-right text-xs font-bold text-slate-500">{usage}</td>
      <td className="px-8 py-5 text-right font-headline font-black text-primary-base dark:text-primary-dark">{balance}</td>
    </tr>
  );
}

function WorkflowButton({ title, subtitle, icon, danger, secondary }: any) {
  return (
    <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-left group border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
      <div className="flex items-center gap-4">
        <div className={cn(
          "p-2 rounded-lg transition-colors",
          danger ? "bg-red-50 dark:bg-red-900/20 text-red-500" : "bg-secondary-base/10 text-secondary-base"
        )}>
          {icon}
        </div>
        <div>
          <h4 className="text-sm font-bold text-primary-base dark:text-primary-dark">{title}</h4>
          <p className="text-[11px] text-slate-500">{subtitle}</p>
        </div>
      </div>
      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 text-slate-400" />
    </button>
  );
}

function IPItem({ ip, reason }: any) {
  return (
    <div className="flex items-center justify-between text-[11px] p-3 bg-red-50/30 dark:bg-red-900/10 rounded-xl border-l-4 border-red-500/50">
      <span className="text-primary-base dark:text-primary-dark font-black tracking-wider">{ip}</span>
      <span className="text-red-600 dark:text-red-400 font-black uppercase text-[9px] tracking-widest bg-red-50 dark:bg-red-900/40 px-2 py-0.5 rounded-full">{reason}</span>
    </div>
  );
}

function ArrowRight({ className, size }: any) {
  return (
     <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
  )
}
