import { useState } from 'react';
import { cn } from '../lib/utils';
import { 
  Shield, 
  Settings, 
  History, 
  MessageSquare,
  Send,
  AlertTriangle,
  Bot,
  Activity,
  CheckCircle,
  Copy,
  Eye,
  Download,
  Terminal,
  Globe,
  Database,
  Lock,
  Loader2,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function NoderAssistant() {
  const [phase, setPhase] = useState<'validation' | 'mitigation' | 'credentials' | 'completed'>('validation');

  const advancePhase = (next: 'mitigation' | 'credentials' | 'completed') => {
    setPhase(next);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col relative min-h-[calc(100vh-12rem)] animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Module Header */}
      <header className="mb-8 flex items-center justify-between border-b border-brand-border/50 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-pastel-indigo/10 flex items-center justify-center text-pastel-indigo">
            <Bot size={24} />
          </div>
          <div>
            <h1 className="font-headline font-bold text-lg text-text-primary uppercase tracking-tight">SNEP Assistant</h1>
            <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold">Secure AI Terminal</p>
          </div>
        </div>
        {phase !== 'completed' && <AlertCircle className="text-pastel-rose animate-pulse" size={24} />}
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative pb-32">
        <AnimatePresence mode="wait">
          {phase === 'validation' && <ValidationPhase key="validation" onConfirm={() => advancePhase('mitigation')} />}
          {phase === 'mitigation' && <MitigationPhase key="mitigation" onComplete={() => advancePhase('credentials')} />}
          {phase === 'credentials' && <CredentialsPhase key="credentials" onNext={() => advancePhase('completed')} />}
          {phase === 'completed' && <CompletedPhase key="completed" />}
        </AnimatePresence>
      </div>

    </div>
  );
}

/* =========================================================
   PHASE 1: Validation
   ========================================================= */
function ValidationPhase({ onConfirm }: { onConfirm: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      className="p-4 flex flex-col min-h-full"
    >
      {/* Emergency Status Banner */}
      <div className="mb-6 rounded-xl p-5 overflow-hidden relative shadow-lg shadow-pastel-indigo/5 border border-pastel-indigo/20 bg-gradient-to-br from-brand-surface to-[#002045]">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-pastel-indigo/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <span className="font-label text-[9px] font-black tracking-[0.15em] text-pastel-teal block mb-1 uppercase">Estado del Sistema</span>
            <h2 className="font-headline text-xl font-bold text-text-primary tracking-tight leading-tight shrink-0">Protocolo de Emergencia Activado</h2>
          </div>
          <div className="bg-brand-surface/10 p-2 rounded-full shrink-0 ml-4">
            <Activity className="text-white" size={24} />
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 space-y-4">
        <div className="flex flex-col items-start w-[85%]">
          <div className="bg-brand-surface shadow-md rounded-tr-2xl rounded-br-2xl rounded-bl-lg p-4 border border-brand-border">
            <p className="text-sm leading-relaxed text-text-secondary">
              <span className="font-bold text-pastel-indigo block mb-1 flex items-center gap-2"><Bot size={14}/> SNEP Virtual Guard</span>
              Se ha detectado una activación manual del llavero de emergencia. Estamos monitoreando su ubicación en tiempo real.
            </p>
          </div>
          <span className="text-[9px] font-label text-text-muted mt-1 ml-1 uppercase tracking-wider">Ahora mismo</span>
        </div>

        <div className="flex flex-col items-start w-[85%]">
          <div className="bg-brand-surface shadow-md border-l-4 border-pastel-teal rounded-tr-2xl rounded-br-2xl rounded-bl-lg p-4">
            <p className="text-sm leading-relaxed text-text-secondary">
              Por favor, valide su identidad para descartar una activación accidental. ¿Es usted el titular de la cuenta?
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <button 
                onClick={onConfirm}
                className="w-full bg-pastel-indigo text-brand-bg font-label font-bold py-3 rounded-xl hover:opacity-90 transition-opacity text-[10px] tracking-widest uppercase shadow-lg shadow-pastel-indigo/20"
              >
                Sí, soy yo
              </button>
              <button className="w-full bg-brand-bg border border-brand-border text-text-secondary font-label font-bold py-3 rounded-xl hover:bg-brand-surface transition-colors text-[10px] tracking-widest uppercase">
                Activación Accidental
              </button>
            </div>
          </div>
        </div>

        {/* Asymmetric Map Box */}
        <div className="ml-auto w-[90%] mt-4">
          <div className="glass border border-brand-border rounded-2xl p-4 shadow-xl shadow-black/20">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-brand-bg shrink-0 grayscale opacity-80 border border-brand-border">
                <img alt="Map Tracker" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp9p32v-5NX3nxMJSRXAbhk5e7ImCZPHe5Az7gZmXKtLOCMU_3-gDGsbfA2bsy_zN52eotgaZlDZbqVmXmdWf65uu7_x3O-asOL4fNFYZk_6wGYOgLAP9aaD_SocAVnWN6EVs319LYJhZW_ZX-sFqf78okPgxLrB1qMXEo8oI8vq8rwxjSGZ8Cp3K428lzGyqkIB4u5E-6zrVjp3mQ-d_ZxgFP28o3qYn_AJ1wxdbg8yqq_lNS1WbD5CpcQ_n8T1OFHqwqJnzxT4w" />
              </div>
              <div className="flex-1">
                <span className="font-label text-[9px] font-bold text-pastel-teal uppercase tracking-[0.1em]">Geolocalización Activa</span>
                <div className="h-[2px] w-full bg-brand-surface mt-1 mb-2 overflow-hidden rounded-full">
                  <div className="h-full bg-pastel-teal w-2/3 animate-pulse"></div>
                </div>
                <p className="text-[10px] font-medium text-text-muted leading-tight">Enviando coordenadas GPS a centro de respuesta SNEP...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 w-full pt-4 pb-2 bg-gradient-to-t from-brand-bg via-brand-bg to-transparent">
        <div className="relative flex items-center bg-brand-surface glass rounded-2xl shadow-lg p-2 px-4 border border-brand-border max-w-2xl mx-auto">
          <input className="w-full bg-transparent border-none focus:outline-none text-sm py-3 text-text-primary placeholder:text-text-muted" placeholder="Escriba aquí..." type="text" />
          <button className="bg-pastel-indigo text-brand-bg p-3 rounded-xl hover:scale-105 active:scale-95 transition-all">
            <Send size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   PHASE 2: Mitigation in Progress
   ========================================================= */
function MitigationPhase({ onComplete }: { onComplete: () => void }) {
  // Auto-advance for preview purposes after 6 seconds
  useState(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 6000);
    return () => clearTimeout(timer);
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      className="p-6 flex flex-col"
    >
      <div className="mb-8 relative">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-pastel-indigo/10 rounded-full blur-3xl"></div>
        <div className="flex flex-col gap-2 relative z-10">
          <span className="font-label text-[10px] font-bold tracking-[0.15em] text-pastel-teal uppercase">Protocolo Activo</span>
          <h2 className="font-headline text-4xl font-black tracking-tight text-text-primary leading-none">Mitigación <br/>en tiempo real</h2>
          <p className="text-text-secondary text-sm mt-4 leading-relaxed">
            SNEP Virtual Architecture ha detectado una anomalía estructural. Iniciando procedimientos de aislamiento y blindaje automático.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* Action 1 */}
        <div className="bg-brand-surface glass rounded-xl p-5 shadow-xl border border-brand-border relative overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-pastel-teal"></div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-bg border border-brand-border flex items-center justify-center">
                <AlertTriangle size={18} className="text-pastel-indigo" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-text-primary text-sm tracking-tight">Bloqueando IP sospechosa</h3>
                <p className="font-label text-[9px] text-text-muted tracking-wider uppercase">Origen: 192.168.1.104</p>
              </div>
            </div>
            <div className="relative w-8 h-8 flex items-center justify-center">
               <Loader2 size={24} className="text-pastel-teal animate-spin" />
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] font-medium">
            <span className="text-pastel-teal animate-pulse">En curso...</span>
            <span className="text-text-secondary">78%</span>
          </div>
        </div>

        {/* Action 2 */}
        <div className="bg-brand-surface glass rounded-xl p-5 shadow-xl border border-brand-border relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-pastel-indigo/50"></div>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-bg border border-brand-border flex items-center justify-center">
                <Lock size={18} className="text-pastel-indigo" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-text-primary text-sm tracking-tight">Rotando credenciales WEB</h3>
                <p className="font-label text-[9px] text-text-muted tracking-wider uppercase">Token de Sesión Global</p>
              </div>
            </div>
          </div>
          <div className="h-1.5 w-full bg-brand-bg rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: "85%" }} 
              transition={{ duration: 5 }}
              className="h-full bg-pastel-indigo rounded-full"
            />
          </div>
          <div className="mt-3 flex justify-between items-center">
            <span className="text-[9px] font-label text-text-muted uppercase tracking-widest">Calculando nuevos hashes</span>
            <span className="text-[11px] font-bold text-pastel-indigo">Calculando...</span>
          </div>
        </div>

        {/* Action 3 */}
        <div className="bg-brand-surface glass rounded-xl p-5 shadow-xl border border-brand-border relative overflow-hidden opacity-50">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-text-muted/30"></div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-bg border border-brand-border flex items-center justify-center">
                <Database size={18} className="text-text-muted" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-text-primary text-sm tracking-tight">Migrando base de datos</h3>
                <p className="font-label text-[9px] text-text-muted tracking-wider uppercase">Cluster: DB-Shadow-01</p>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-text-muted italic ml-14">Esperando rotación de credenciales...</p>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   PHASE 3: New Credentials
   ========================================================= */
function CredentialsPhase({ onNext }: { onNext: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
      className="flex flex-col max-w-2xl mx-auto w-full"
    >
      <div className="mb-8 mt-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-pastel-indigo shadow-lg shrink-0">
            <Shield size={24} />
          </div>
          <div className="flex-1">
            <p className="font-label text-xs uppercase tracking-widest text-text-muted mb-2">System Security</p>
            <div className="p-5 rounded-2xl rounded-tl-none bg-brand-surface border border-brand-border shadow-xl">
              <p className="text-sm text-text-secondary leading-relaxed">
                Protocolo completado. Las credenciales anteriores han sido <span className="text-pastel-rose font-bold italic">eliminadas</span> permanentemente. Por favor, actualice sus accesos:
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* WEB Credentials */}
        <div className="glass bg-brand-surface/50 rounded-2xl p-6 border border-brand-border relative group hover:bg-brand-surface transition-colors">
          <div className="absolute -left-0.5 top-6 w-1 h-16 bg-pastel-teal rounded-full"></div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-headline font-bold text-xl text-text-primary">Servicio WEB</h3>
              <p className="font-label text-[10px] text-text-muted uppercase tracking-widest mt-1">Console Access</p>
            </div>
            <Globe className="text-text-muted/50" size={24} />
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="font-label text-[10px] text-text-muted uppercase tracking-widest mb-2 block">Usuario</label>
              <div className="flex items-center justify-between bg-brand-bg rounded-xl px-4 py-3 border border-brand-border">
                <span className="text-text-primary font-mono text-sm">admin_snep_v4</span>
                <Copy size={16} className="text-text-muted hover:text-pastel-indigo cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <label className="font-label text-[10px] text-text-muted uppercase tracking-widest mb-2 block">Contraseña</label>
              <div className="flex items-center justify-between bg-brand-bg rounded-xl px-4 py-3 border border-brand-border">
                <span className="text-text-primary font-mono text-sm tracking-widest">••••••••••••••</span>
                <Eye size={16} className="text-text-muted hover:text-pastel-indigo cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* API Credentials */}
        <div className="glass bg-brand-surface/50 rounded-2xl p-6 border border-brand-border relative group hover:bg-brand-surface transition-colors">
          <div className="absolute -left-0.5 top-6 w-1 h-16 bg-pastel-indigo rounded-full"></div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-headline font-bold text-xl text-text-primary">EndPoint API</h3>
              <p className="font-label text-[10px] text-text-muted uppercase tracking-widest mt-1">REST Interface</p>
            </div>
            <Terminal className="text-text-muted/50" size={24} />
          </div>
          <div>
            <label className="font-label text-[10px] text-text-muted uppercase tracking-widest mb-2 block">API Key</label>
            <div className="flex items-center justify-between bg-brand-bg rounded-xl px-4 py-3 border border-brand-border">
              <span className="text-text-primary font-mono text-sm truncate">snep_live_9k2m1z0p...</span>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-brand-surface border border-brand-border rounded-lg hover:border-pastel-indigo transition-colors">
                <Copy size={14} className="text-text-secondary" />
                <span className="text-[10px] font-bold uppercase">Copiar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Warning & Next Action */}
        <div className="p-6 bg-pastel-rose/10 border border-pastel-rose/20 rounded-2xl flex flex-col gap-4">
          <div className="flex gap-4">
            <AlertTriangle className="text-pastel-rose shrink-0" size={24} />
            <div>
              <h4 className="text-pastel-rose font-headline font-bold text-sm uppercase tracking-wide">Aviso Crítico</h4>
              <p className="text-text-secondary text-xs mt-2 leading-relaxed">
                Estas credenciales son de un solo uso en la vista de chatbot. Deberá solicitar una nueva rotación una vez finalice.
              </p>
            </div>
          </div>
          <button 
            onClick={onNext}
            className="mt-2 w-full bg-brand-bg border border-pastel-rose/50 text-pastel-rose font-bold py-4 rounded-xl hover:bg-pastel-rose hover:text-brand-bg transition-all uppercase tracking-widest text-xs"
          >
            Entendido
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   PHASE 4: Completed Migration
   ========================================================= */
function CompletedPhase() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center max-w-2xl mx-auto w-full pt-16"
    >
      <div className="w-full mb-12 relative flex flex-col items-center text-center">
        <div className="absolute -top-16 -left-16 w-80 h-80 bg-pastel-teal/10 rounded-full blur-[80px]"></div>
        <div className="absolute top-0 -right-16 w-64 h-64 bg-pastel-indigo/10 rounded-full blur-[60px]"></div>
        
        <div className="w-32 h-32 bg-brand-surface border border-brand-border rounded-full flex items-center justify-center shadow-2xl mb-10 relative z-10">
          <CheckCircle size={56} className="text-pastel-teal" />
        </div>
        
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-pastel-teal mb-4 font-label relative z-10">Status: Secure Layer Active</p>
        <h2 className="text-5xl font-headline font-black tracking-tight text-text-primary mb-6 leading-tight relative z-10">Migración <br/>Completada</h2>
        <p className="text-text-secondary text-lg leading-relaxed mb-4 relative z-10 max-w-lg mx-auto">
          La base de datos ha sido transferida íntegramente al nuevo usuario propietario. Su entorno de arquitectura virtual está ahora blindado y listo para operar.
        </p>
      </div>

      <div className="w-full glass bg-brand-surface p-8 rounded-2xl shadow-xl border-l-4 border-pastel-teal mb-12 relative z-10">
        <div className="flex gap-5 items-start">
          <div className="w-12 h-12 rounded-full bg-pastel-indigo/20 flex items-center justify-center shrink-0">
            <Bot size={24} className="text-pastel-indigo" />
          </div>
          <div className="flex-1">
            <p className="font-bold text-text-primary text-base mb-2">SNEP Virtual Bot</p>
            <p className="text-sm text-text-secondary leading-relaxed italic">
              "Operación exitosa. Todos los nodos han sido sincronizados con las nuevas credenciales. El acceso anterior ha sido revocado permanentemente."
            </p>
          </div>
        </div>
      </div>

      {/* Action Grid */}
      <div className="w-full grid grid-cols-1 gap-4 mb-16 relative z-10">
        <button className="group relative bg-pastel-indigo text-brand-bg px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 overflow-hidden transition-all hover:scale-[1.02] shadow-lg shadow-pastel-indigo/20">
          <span className="relative z-10 text-sm tracking-wide">Ir al nuevo Dashboard</span>
          <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="group bg-brand-surface border border-brand-border px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-bg transition-colors">
          <MessageSquare size={20} className="text-pastel-teal" />
          <span className="text-sm text-text-primary tracking-wide">Hablar con un Socio</span>
        </button>
      </div>

      {/* Metadata */}
      <div className="w-full opacity-60 flex flex-col items-center gap-2 relative z-10">
        <div className="flex items-center gap-2 text-[10px] font-label tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-pastel-teal shadow-[0_0_8px_rgba(45,212,191,0.6)]"></span>
          <span className="text-text-muted">End-to-End Encrypted</span>
        </div>
        <p className="text-[10px] font-label text-center text-text-muted">Ref: ARC-MIG-2024-X92</p>
      </div>
    </motion.div>
  );
}
