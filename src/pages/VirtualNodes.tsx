import { 
  MoreVertical, 
  PlusCircle, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Gauge, 
  Activity,
  Plus,
  AlertTriangle
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function VirtualNodes() {
  return (
    <div className="max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="mb-20 grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-5xl font-headline font-bold text-primary-base dark:text-primary-dark mb-4 leading-tight editorial-header">
            Resource & <br/> Inventory Control
          </h2>
          <p className="max-w-xl text-slate-500 dark:text-slate-400 font-light text-lg">
            Manage physical hardware clusters and virtual allocations across the SNEP decentralized network with real-time provisioning capabilities.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4 flex justify-end gap-12 pb-2">
          <div className="text-right">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Global Availability</span>
            <span className="text-2xl font-headline font-bold text-primary-base dark:text-primary-dark">99.998%</span>
          </div>
          <div className="h-10 w-px bg-slate-200 dark:bg-slate-800"></div>
          <div className="text-right">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Active Nodes</span>
            <span className="text-2xl font-headline font-bold text-primary-base dark:text-primary-dark">1,204</span>
          </div>
        </div>
      </section>

      {/* Hardware Inventory Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-primary-base dark:text-primary-dark">Hardware Inventory</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Physical MiniPC Distribution</p>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-primary-base dark:text-primary-dark hover:underline transition-all">
            <PlusCircle size={16} />
            Register New Hardware
          </button>
        </div>

        <div className="bg-brand-surface dark:bg-slate-800 editorial-shadow rounded-lg overflow-hidden border border-transparent dark:border-slate-700">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Serial Number</th>
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Model</th>
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Status</th>
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Current Client</th>
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Uptime</th>
                <th className="px-8 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              <HardwareRow 
                serial="SNEP-MPC-8821-X" 
                model="v4 Pro Enterprise" 
                status="Active" 
                client="Aether Global Logistics" 
                uptime="142 Days" 
                statusColor="bg-[#3182ce] text-white"
              />
              <HardwareRow 
                serial="SNEP-MPC-9012-Y" 
                model="v4 Pro Enterprise" 
                status="Shipping" 
                client="Quantum Dynamics Inc." 
                uptime="--" 
                statusColor="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
              />
              <HardwareRow 
                serial="SNEP-MPC-1124-Z" 
                model="v3 Standard Mesh" 
                status="Maintenance" 
                client="Internal Sandbox" 
                uptime="12 Hours" 
                statusColor="bg-[#ffdad6] text-[#ba1a1a]"
              />
            </tbody>
          </table>
        </div>
      </section>

      {/* Virtual Management Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-primary-base dark:text-primary-dark">Virtual Instances</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Resource Allocation & Node Mapping</p>
          </div>
          <button className="bg-primary-base dark:bg-primary-dark text-white dark:text-slate-900 px-6 py-2.5 font-headline font-bold text-xs tracking-widest uppercase hover:opacity-90 transition-all shadow-lg active:scale-95">
            Provision VM
          </button>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Main Instance Table */}
          <div className="col-span-12 lg:col-span-8 bg-brand-surface dark:bg-slate-800 editorial-shadow rounded-lg overflow-hidden border border-transparent dark:border-slate-700">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary-base dark:bg-primary-dark text-white dark:text-slate-900">
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em]">Instance ID</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em]">Resources</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em]">Host Node</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em]">Utilization</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                <VirtualRow 
                  id="VM-TITAN-01" 
                  os="Ubuntu 22.04 LTS" 
                  cpu="8 vCPU" 
                  ram="32GB RAM" 
                  node="Node-Alpha-77" 
                  load={65} 
                />
                <VirtualRow 
                  id="VM-NIMBUS-09" 
                  os="Debian Core" 
                  cpu="4 vCPU" 
                  ram="16GB RAM" 
                  node="Node-Delta-12" 
                  load={12} 
                />
              </tbody>
            </table>
          </div>

          {/* Right Column Cards */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {/* Critical Alert Card */}
            <div className="bg-primary-base dark:bg-slate-900 p-8 text-white relative overflow-hidden group rounded-lg">
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">System Highlight</span>
                <h4 className="text-2xl font-headline font-bold mt-2">Critical Capacity Alert</h4>
                <p className="text-sm font-light mt-4 opacity-80 leading-relaxed">
                  Storage Cluster 'C-Omega' is approaching 85% capacity. Consider deploying a new node to prevent throttling.
                </p>
                <button className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-dark hover:text-white transition-colors">
                  Start Deployment
                  <ArrowRight size={14} />
                </button>
              </div>
              <div className="absolute -right-12 -bottom-12 opacity-10 scale-150 rotate-12 transition-transform group-hover:rotate-0 duration-700">
                <AlertTriangle size={120} />
              </div>
            </div>

            {/* Deployment Wizard Card */}
            <div className="bg-brand-surface dark:bg-slate-800 p-6 border-l-4 border-primary-base dark:border-primary-dark editorial-shadow rounded-r-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="font-headline font-bold text-primary-base dark:text-primary-dark">Node Deployment Wizard</h5>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">Automated Orchestration</p>
                </div>
                <Zap className="text-primary-base dark:text-primary-dark" size={20} />
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex-1 bg-slate-100 dark:bg-slate-700 h-1 rounded-full">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '66%' }}
                    className="bg-primary-base dark:bg-primary-dark h-full rounded-full" 
                  />
                </div>
                <span className="text-[10px] font-black text-primary-base dark:text-primary-dark">66%</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
                Initializing environment on <span className="font-bold">SNEP-MPC-9012-Y</span>...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Features */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-200 dark:border-slate-800 pt-12">
        <FeatureItem 
          icon={<ShieldCheck size={24} />} 
          title="Enterprise Security" 
          desc="All physical MiniPCs are equipped with hardware-level encryption and secure boot protocols to ensure virtual instance isolation."
        />
        <FeatureItem 
          icon={<Gauge size={24} />} 
          title="Dynamic Allocation" 
          desc="Our proprietary SNEP algorithm balances vCPU loads in real-time, migrating virtual machines between host nodes without downtime."
        />
        <FeatureItem 
          icon={<Activity size={24} />} 
          title="Telemetry Pipeline" 
          desc="System health metrics are pulled every 500ms from the hardware substrate, providing unprecedented resolution for analytics."
        />
      </section>

      {/* FAB */}
      <button className="fixed bottom-10 right-10 w-16 h-16 bg-primary-base dark:bg-primary-dark rounded-full shadow-2xl flex items-center justify-center text-white dark:text-slate-900 hover:scale-110 active:scale-95 transition-all duration-300 group z-50">
        <Plus className="group-hover:rotate-90 transition-transform duration-500" size={32} />
      </button>
    </div>
  );
}

function HardwareRow({ serial, model, status, client, uptime, statusColor }: any) {
  return (
    <tr className="group hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors duration-200">
      <td className="px-8 py-5 font-headline font-medium text-primary-base dark:text-primary-dark">{serial}</td>
      <td className="px-8 py-5 text-sm text-slate-500 dark:text-slate-400">{model}</td>
      <td className="px-8 py-5">
        <span className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-tight rounded-sm",
          status === 'Active' ? "bg-secondary-fixed text-on-secondary-container dark:bg-brand-surface/10 dark:text-secondary-dark" : 
          status === 'Shipping' ? "bg-surface-container-high text-on-surface-variant dark:bg-slate-700 dark:text-slate-300" :
          "bg-error-container text-error"
        )}>
          <span className={cn(
            "w-1.5 h-1.5 rounded-full",
            status === 'Active' ? "bg-secondary-base" : 
            status === 'Shipping' ? "bg-outline" : 
            "bg-error"
          )}></span>
          {status}
        </span>
      </td>
      <td className="px-8 py-5 text-sm font-medium text-primary-base dark:text-primary-dark">{client}</td>
      <td className="px-8 py-5 text-sm text-slate-500 dark:text-slate-400">{uptime}</td>
      <td className="px-8 py-5 text-right">
        <button className="text-slate-400 hover:text-primary-base dark:hover:text-primary-dark transition-colors">
          <MoreVertical size={18} />
        </button>
      </td>
    </tr>
  );
}

function VirtualRow({ id, os, cpu, ram, node, load }: any) {
  return (
    <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
      <td className="px-6 py-6">
        <div className="flex flex-col">
          <span className="font-headline font-bold text-primary-base dark:text-primary-dark">{id}</span>
          <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider">{os}</span>
        </div>
      </td>
      <td className="px-6 py-6">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#3182ce]">{cpu}</span>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase">Core-X</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#3182ce]">{ram}</span>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase">ECC D5</span>
          </div>
        </div>
      </td>
      <td className="px-6 py-6 font-mono text-xs text-primary-base dark:text-primary-dark font-bold">{node}</td>
      <td className="px-6 py-6 min-w-[140px]">
        <div className="w-full bg-slate-100 dark:bg-slate-700 h-1 rounded-full overflow-hidden">
          <div className="bg-[#3182ce] h-full" style={{ width: `${load}%` }}></div>
        </div>
        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-1 block">{load}% Load</span>
      </td>
    </tr>
  );
}

function FeatureItem({ icon, title, desc }: any) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4 text-primary-base dark:text-primary-dark">
        {icon}
        <h6 className="font-headline font-bold text-primary-base dark:text-primary-dark uppercase text-sm tracking-tight">{title}</h6>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}
