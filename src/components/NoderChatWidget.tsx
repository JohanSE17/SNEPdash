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
  Terminal,
  Globe,
  Database,
  Lock,
  Loader2,
  AlertCircle,
  ArrowRight,
  X,
  Minimize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function NoderChatWidget({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { t } = useLanguage();
  const [phase, setPhase] = useState<'validation' | 'mitigation' | 'credentials' | 'completed'>('validation');

  const advancePhase = (next: 'mitigation' | 'credentials' | 'completed') => {
    setPhase(next);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-28 right-10 z-[100] w-[400px] max-h-[75vh] min-h-[600px] flex flex-col bg-brand-bg rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-brand-border overflow-hidden"
        >
          {/* Header */}
          <header className="px-5 py-4 border-b border-brand-border/50 flex items-center justify-between bg-brand-surface/80 backdrop-blur-md z-10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-pastel-indigo/10 flex items-center justify-center text-pastel-indigo">
                <Bot size={18} />
              </div>
              <div>
                <h2 className="font-headline font-bold text-sm text-text-primary uppercase tracking-tight leading-none">{t('bot.title')}</h2>
                <p className="text-[9px] text-pastel-teal uppercase tracking-widest font-bold mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-pastel-teal animate-pulse"></span>
                  {t('bot.connected')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={onClose} className="p-2 text-text-muted hover:text-text-primary transition-colors hover:bg-brand-bg rounded-lg">
                <Minimize2 size={16} />
              </button>
            </div>
          </header>

          {/* Chat Content */}
          <div className="flex-1 overflow-y-auto no-scrollbar bg-gradient-to-b from-brand-bg to-brand-surface relative flex flex-col">
            <div className="p-5 flex-1 w-full pb-20">
                <AnimatePresence mode="wait">
                    {phase === 'validation' && <ValidationPhase key="validation" onConfirm={() => advancePhase('mitigation')} />}
                    {phase === 'mitigation' && <MitigationPhase key="mitigation" onComplete={() => advancePhase('credentials')} />}
                    {phase === 'credentials' && <CredentialsPhase key="credentials" onNext={() => advancePhase('completed')} />}
                    {phase === 'completed' && <CompletedPhase key="completed" />}
                </AnimatePresence>
            </div>
            
            {/* Input Footer (only show if not completed) */}
            {phase !== 'completed' && (
              <div className="absolute bottom-0 w-full p-4 bg-brand-surface/90 backdrop-blur-md border-t border-brand-border">
                <div className="relative flex items-center bg-brand-bg rounded-xl shadow-inner p-1 pl-3 border border-brand-border shadow-black/20">
                  <input className="w-full bg-transparent border-none focus:outline-none text-xs py-2 text-text-primary placeholder:text-text-muted" placeholder={t('bot.placeholder')} type="text" />
                  <button className="bg-pastel-indigo text-brand-bg p-2 rounded-lg hover:scale-105 active:scale-95 transition-all">
                    <Send size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =========================================================
   PHASE 1: Validation
   ========================================================= */
function ValidationPhase({ onConfirm }: { onConfirm: () => void }) {
  const { t } = useLanguage();
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-4">
      {/* Alert */}
      <div className="rounded-xl p-4 relative overflow-hidden bg-gradient-to-br from-brand-surface to-[#002045] border border-pastel-indigo/20">
        <div className="absolute top-0 right-0 -mt-2 -mr-2 w-16 h-16 bg-pastel-indigo/20 rounded-full blur-2xl"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <span className="font-label text-[8px] font-black tracking-[0.15em] text-pastel-teal block mb-1 uppercase">{t('bot.state')}</span>
            <h3 className="font-headline text-sm font-bold text-text-primary tracking-tight leading-tight">{t('bot.protocol')}</h3>
          </div>
          <Activity className="text-white shrink-0 ml-2 animate-pulse" size={18} />
        </div>
      </div>

      <div className="space-y-4 pt-2">
        {/* Noder Message */}
        <div className="flex flex-col w-[90%]">
          <div className="bg-brand-surface shadow-md rounded-tr-xl rounded-br-xl rounded-bl-sm p-3 border border-brand-border">
             <p className="text-xs leading-relaxed text-text-secondary">
              {t('bot.msg1')}
            </p>
          </div>
          <span className="text-[8px] font-label text-text-muted mt-1 ml-1 uppercase tracking-wider">{t('bot.now')}</span>
        </div>

        {/* Noder Interactive Message */}
        <div className="flex flex-col w-[90%]">
          <div className="bg-brand-surface shadow-md border-l-2 border-pastel-teal rounded-tr-xl rounded-br-xl rounded-bl-sm p-3">
            <div className="flex flex-col gap-2 w-full mt-1">
              <button onClick={onConfirm} className="w-full bg-pastel-indigo text-brand-bg font-label font-bold py-2 rounded-lg hover:opacity-90 transition-opacity text-[10px] tracking-widest uppercase shadow-md shadow-pastel-indigo/20">
                {t('bot.yes')}
              </button>
              <button className="w-full bg-brand-bg border border-brand-border text-text-secondary font-label font-bold py-2 rounded-lg hover:bg-brand-surface transition-colors text-[10px] tracking-widest uppercase">
                {t('bot.accidental')}
              </button>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

/* =========================================================
   PHASE 2: Mitigation in Progress
   ========================================================= */
function MitigationPhase({ onComplete }: { onComplete: () => void }) {
  const { t } = useLanguage();
  useState(() => {
    const timer = setTimeout(() => { onComplete(); }, 6000);
    return () => clearTimeout(timer);
  });

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-4">
      <div className="mb-2">
        <h3 className="font-headline text-2xl font-black tracking-tight text-text-primary leading-none text-center">{t('bot.mitigation.title')}</h3>
      </div>

      <div className="flex flex-col gap-3">
        {/* Action 1 */}
        <div className="bg-brand-surface rounded-xl p-3 shadow-md border border-brand-border relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-pastel-teal"></div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <AlertTriangle size={14} className="text-pastel-indigo" />
              <h4 className="font-headline font-bold text-text-primary text-xs tracking-tight">{t('bot.mitigation.ip')}</h4>
            </div>
            <Loader2 size={14} className="text-pastel-teal animate-spin" />
          </div>
          <div className="flex justify-between items-center text-[9px] font-medium text-text-secondary">
            <span>{t('bot.mitigation.progress')}</span>
            <span>78%</span>
          </div>
        </div>

        {/* Action 2 */}
        <div className="bg-brand-surface rounded-xl p-3 shadow-md border border-brand-border relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-pastel-indigo/50"></div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Lock size={14} className="text-pastel-indigo" />
              <h4 className="font-headline font-bold text-text-primary text-xs tracking-tight">{t('bot.mitigation.tokens')}</h4>
            </div>
          </div>
          <div className="h-1 w-full bg-brand-bg rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 5 }} className="h-full bg-pastel-indigo rounded-full" />
          </div>
        </div>

        {/* Action 3 */}
        <div className="bg-brand-surface rounded-xl p-3 shadow-md border border-brand-border relative overflow-hidden opacity-50">
          <div className="flex items-center gap-2 mb-1">
            <Database size={14} className="text-text-muted" />
            <h4 className="font-headline font-bold text-text-primary text-xs tracking-tight">{t('bot.mitigation.db')}</h4>
          </div>
          <p className="text-[9px] text-text-muted italic ml-6">{t('bot.mitigation.wait')}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   PHASE 3: New Credentials
   ========================================================= */
function CredentialsPhase({ onNext }: { onNext: () => void }) {
  const { t } = useLanguage();
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-4">
      <div className="flex items-start gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-pastel-indigo shrink-0">
          <Shield size={20} />
        </div>
        <div className="flex-1">
          <p className="text-xs text-text-secondary leading-snug">
            {t('bot.cred.ready')} <span className="text-pastel-rose font-bold">{t('bot.cred.deleted')}</span> {t('bot.cred.update')}
          </p>
        </div>
      </div>

      {/* WEB Credentials */}
      <div className="bg-brand-surface/50 rounded-xl p-4 border border-brand-border relative">
        <div className="absolute -left-0.5 top-5 w-1 h-10 bg-pastel-teal rounded-full"></div>
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-headline font-bold text-sm text-text-primary">{t('bot.cred.web')}</h3>
          <Globe className="text-text-muted" size={16} />
        </div>
        
        <div className="space-y-3">
          <div>
            <label className="font-label text-[9px] text-text-muted uppercase tracking-widest mb-1 block">{t('bot.cred.user')}</label>
            <div className="flex items-center justify-between bg-brand-bg rounded-lg px-3 py-2 border border-brand-border">
              <span className="text-text-primary font-mono text-xs">admin_snep_v4</span>
              <Copy size={12} className="text-text-muted hover:text-pastel-indigo cursor-pointer" />
            </div>
          </div>
          <div>
            <label className="font-label text-[9px] text-text-muted uppercase tracking-widest mb-1 block">{t('bot.cred.pass')}</label>
            <div className="flex items-center justify-between bg-brand-bg rounded-lg px-3 py-2 border border-brand-border">
              <span className="text-text-primary font-mono text-xs">••••••••••••••</span>
              <Eye size={12} className="text-text-muted hover:text-pastel-indigo cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Warning & Target */}
      <div className="p-4 bg-pastel-rose/10 border border-pastel-rose/20 rounded-xl flex flex-col gap-3">
        <div className="flex gap-2 items-start">
          <AlertTriangle className="text-pastel-rose shrink-0" size={16} />
          <p className="text-[10px] text-text-secondary leading-relaxed">
            {t('bot.cred.warn')}
          </p>
        </div>
        <button onClick={onNext} className="mt-1 w-full bg-brand-bg shadow-sm border border-pastel-rose/30 text-pastel-rose font-bold py-2.5 rounded-lg hover:bg-pastel-rose/10 transition-colors uppercase tracking-widest text-[9px]">
          {t('bot.cred.understood')}
        </button>
      </div>
    </motion.div>
  );
}

/* =========================================================
   PHASE 4: Completed
   ========================================================= */
function CompletedPhase() {
  const { t } = useLanguage();
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-8">
      <div className="w-20 h-20 bg-brand-surface border border-brand-border rounded-full flex items-center justify-center shadow-lg mb-6 text-pastel-teal">
        <CheckCircle size={32} />
      </div>
      
      <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-pastel-teal mb-3">{t('bot.comp.layer')}</p>
      <h2 className="text-2xl font-headline font-black text-text-primary mb-4 leading-tight">{t('bot.comp.title1')} <br/>{t('bot.comp.title2')}</h2>
      
      <p className="text-xs text-text-secondary leading-relaxed mb-6 px-4">
        {t('bot.comp.desc')}
      </p>

      <div className="w-full flex flex-col gap-3 px-2">
        <button className="bg-pastel-indigo text-brand-bg py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-pastel-indigo/20 text-xs hover:scale-105 transition-transform">
          {t('bot.comp.btn')} <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}
