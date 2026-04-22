import { NavLink, Outlet } from 'react-router-dom';
import { 
  Cloud, 
  Server, 
  Database, 
  Users, 
  Key, 
  Network,
  Plus,
  Activity,
  Settings,
  Search,
  Bell,
  HelpCircle,
  Sun,
  Moon,
  Wallet,
  ShieldCheck,
  Truck,
  ChevronsLeft,
  ChevronsRight,
  Package,
  Bot
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

import NoderChatWidget from './NoderChatWidget';
import { useLanguage } from '../contexts/LanguageContext';

export default function DashboardLayout() {
  const { t, language, setLanguage } = useLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <div className="flex bg-brand-bg text-text-primary font-body antialiased transition-colors duration-300 min-h-screen">
      {/* Sidebar */}
      <aside className={cn(
        "fixed h-full bg-brand-surface shadow-[20px_0_40px_rgba(0,0,0,0.3)] flex flex-col py-8 px-4 border-r border-brand-border transition-all duration-300 z-50",
        isSidebarOpen ? "w-64" : "w-24 items-center px-2"
      )}>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-12 bg-brand-surface border border-brand-border rounded-lg flex items-center justify-center hover:bg-brand-bg z-50 cursor-pointer shadow-md text-text-secondary hover:text-text-primary transition-colors"
        >
          {isSidebarOpen ? '«' : '»'}
        </button>

        <div className={cn("mb-12 flex items-center gap-3 transition-all", isSidebarOpen ? "px-2" : "justify-center")}>
          <img src="/brand.png" alt="Brand Logo" className="w-8 h-8 object-contain shrink-0" />
          {isSidebarOpen && (
             <div>
              <h1 className="text-xl font-headline font-black text-pastel-indigo tracking-tight uppercase leading-tight drop-shadow-[0_0_8px_rgba(165,180,252,0.4)]">{t('app.title')}</h1>
              <p className="text-[10px] tracking-widest text-text-muted font-bold uppercase mt-0.5">{t('app.subtitle')}</p>
            </div>
          )}
        </div>

        <nav className="flex-1 space-y-2 w-full">
          <SidebarLink to="/" icon={<Cloud size={20} />} label={t('nav.infrastructure')} isOpen={isSidebarOpen} />
          {isSidebarOpen && (
            <nav className="ml-8 mb-4 space-y-1 border-l border-brand-border/50 pl-2">
              <NavLink 
                to="/financials" 
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all rounded-lg",
                  isActive ? "text-pastel-teal bg-pastel-teal/10" : "text-text-secondary hover:text-text-primary hover:bg-brand-surface/60"
                )}
              >
                {t('nav.financial')}
              </NavLink>
              <NavLink 
                to="/security" 
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all rounded-lg",
                  isActive ? "text-pastel-teal bg-pastel-teal/10" : "text-text-secondary hover:text-text-primary hover:bg-brand-surface/60"
                )}
              >
                {t('nav.security')}
              </NavLink>
            </nav>
          )}
          <SidebarLink to="/nodes" icon={<Server size={20} />} label={t('nav.nodes')} isOpen={isSidebarOpen} />
          <SidebarLink to="/storage" icon={<Database size={20} />} label={t('nav.storage')} isOpen={isSidebarOpen} />
          {isSidebarOpen && (
            <nav className="ml-8 mb-4 space-y-1 border-l border-brand-border/50 pl-2">
              <NavLink 
                to="/storage/Logistics_&_Supply_Chain_Management" 
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all rounded-lg",
                  isActive ? "text-pastel-teal bg-pastel-teal/10" : "text-text-secondary hover:text-text-primary hover:bg-brand-surface/60"
                )}
              >
                {t('nav.logistics')}
              </NavLink>
            </nav>
          )}
          <SidebarLink to="/clients" icon={<Users size={20} />} label={t('nav.clients')} isOpen={isSidebarOpen} />
          <SidebarLink to="/iam" icon={<Key size={20} />} label={t('nav.iam')} isOpen={isSidebarOpen} />
          <SidebarLink to="/inventory" icon={<Package size={20} />} label={t('nav.inventory')} isOpen={isSidebarOpen} />
          
          <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={cn(
              "flex items-center px-4 py-3 transition-all duration-300 rounded-xl group w-full",
              isChatOpen 
                ? "text-pastel-indigo bg-brand-surface font-bold border border-brand-border"
                : "text-text-secondary font-medium hover:bg-brand-surface/50 hover:text-text-primary",
              !isSidebarOpen && "justify-center px-0 border border-transparent"
            )}
            title={!isSidebarOpen ? t('nav.noder') : undefined}
          >
            <span className={cn("shrink-0 transition-transform", !isSidebarOpen && "group-hover:scale-110")}>
              <Bot size={20} />
            </span>
            {isSidebarOpen && (
              <span className="ml-3 font-headline tracking-tight font-bold text-xs truncate uppercase opacity-100 transition-opacity">
                {t('nav.noder')}
              </span>
            )}
          </button>
        </nav>

        <div className="mt-auto pt-8 border-t border-brand-border w-full">
          <button className={cn("bg-pastel-indigo text-brand-bg py-3 rounded-lg font-bold text-sm mb-6 flex items-center justify-center gap-2 transition-transform shadow-lg shadow-pastel-indigo/20 w-full hover:scale-105 active:scale-95", isSidebarOpen ? "px-4" : "px-0")}>
            <Plus size={16} />
            {isSidebarOpen && t('nav.deploy')}
          </button>
          <div className="space-y-2">
            <SidebarLink to="/health" icon={<Activity size={20} />} label={t('nav.health')} isOpen={isSidebarOpen} />
            <SidebarLink to="/settings" icon={<Settings size={20} />} label={t('nav.settings')} isOpen={isSidebarOpen} />
          </div>
        </div>
      </aside>

      <div className={cn("flex-1 overflow-hidden flex flex-col transition-all duration-300 w-full relative", isSidebarOpen ? "ml-64 pl-4" : "ml-24 pl-4")}>
        {/* Floating Header */}
        <nav className={cn(
          "fixed top-4 right-4 z-40 h-16 transition-all duration-300 rounded-2xl flex items-center justify-between px-6 gap-8 glass shadow-2xl",
          isSidebarOpen ? "left-[17rem]" : "left-[7rem]"
        )}>
          <div className="flex items-center gap-4 shrink-0">
            <img src="/brand.png" alt="Brand Logo" className="w-8 h-8 object-contain drop-shadow-[0_0_8px_rgba(165,180,252,0.4)]" />
            <span className="font-headline font-black text-xl tracking-tight text-text-primary hidden md:block">{t('header.title')}</span>
            <div className="h-4 w-px bg-brand-border hidden lg:block"></div>
            
            <div className="hidden lg:flex items-center gap-6 text-sm tracking-wide">
              <HeaderLink to="/" label={t('header.global')} />
              <HeaderLink to="/logs" label={t('header.logs')} />
              <HeaderLink to="/terminal" label={t('header.terminal')} />
            </div>
          </div>

          <div className="flex items-center gap-5">
            {/* Language Switcher */}
            <div className="relative group/lang">
               <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-brand-border bg-brand-surface/60 hover:bg-brand-bg transition-colors text-xs font-bold uppercase tracking-widest text-text-secondary hover:text-pastel-indigo">
                 {language === 'en' ? 'EN' : 'ES'}
                 <span className="text-[8px]">▼</span>
               </button>
               <div className="absolute top-full right-0 mt-2 w-32 bg-brand-surface border border-brand-border shadow-2xl rounded-xl opacity-0 invisible group-hover/lang:opacity-100 group-hover/lang:visible transition-all flex flex-col overflow-hidden z-50">
                  <button 
                    onClick={() => setLanguage('en')}
                    className={cn(
                      "px-4 py-3 text-xs font-bold uppercase tracking-widest text-left hover:bg-pastel-indigo/10 transition-colors",
                      language === 'en' ? 'text-pastel-indigo bg-brand-bg' : 'text-text-secondary'
                    )}
                  >
                    English
                  </button>
                  <button 
                    onClick={() => setLanguage('es')}
                    className={cn(
                      "px-4 py-3 text-xs font-bold uppercase tracking-widest text-left hover:bg-pastel-indigo/10 transition-colors",
                      language === 'es' ? 'text-pastel-indigo bg-brand-bg' : 'text-text-secondary'
                    )}
                  >
                    Español
                  </button>
               </div>
            </div>

            <div className="relative hidden xl:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted w-4 h-4" />
              <input 
                placeholder={t('header.search')}
                className="bg-brand-surface/60 border border-brand-border rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-pastel-indigo/50 transition-colors w-48 2xl:w-64 placeholder:text-text-muted text-text-primary" 
                type="text" 
              />
            </div>

            <button 
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-surface border border-brand-border hover:bg-brand-bg transition-all text-text-secondary hover:text-pastel-indigo"
            >
              <AnimatePresence mode="wait">
                {theme === 'light' ? (
                  <motion.div key="sun" initial={{ scale: 0.5, opacity: 0, rotate: -45 }} animate={{ scale: 1, opacity: 1, rotate: 0 }} exit={{ scale: 0.5, opacity: 0, rotate: 45 }}>
                    <Sun size={16} />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ scale: 0.5, opacity: 0, rotate: -45 }} animate={{ scale: 1, opacity: 1, rotate: 0 }} exit={{ scale: 0.5, opacity: 0, rotate: 45 }}>
                    <Moon size={16} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <button className="relative p-2 text-text-secondary hover:text-text-primary transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-pastel-rose rounded-full animate-pulse"></span>
            </button>
            <button className="text-text-secondary hover:text-text-primary transition-colors hidden sm:block"><HelpCircle size={20} /></button>

            <div className="w-px h-6 bg-brand-border hidden sm:block"></div>

            {/* Avatar Snippet Provided by User */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-semibold text-text-primary">OPS-7721</p>
                <p className="text-[10px] text-text-muted">Command Center</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center group-hover:border-pastel-indigo transition-colors overflow-hidden">
                <img alt="Avatar" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100" />
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto pt-28 px-4 sm:px-8 pb-12 w-full max-w-[1600px] mx-auto">
          <Outlet />
        </main>
      </div>

      {/* Persistent global Chatbot Widget */}
      <NoderChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Global Actions FAB */}
      <div className="fixed bottom-10 right-10 z-[110] flex items-end gap-3">
        {/* Noder Toggle Button */}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 border",
            isChatOpen 
              ? "bg-pastel-indigo text-brand-bg border-transparent" 
              : "bg-brand-surface text-pastel-indigo border-brand-border"
          )}
        >
          <Bot size={24} />
        </button>

        {/* Global Plus Action (Moved from DashboardOverview) */}
        <button className="bg-pastel-indigo text-brand-bg w-16 h-16 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center hover:scale-110 active:scale-90 transition-all hover:rotate-90 border-2 border-brand-surface/20">
          <Plus size={32} />
        </button>
      </div>

    </div>
  );
}

function SidebarLink({ to, icon, label, isOpen }: { to: string, icon: React.ReactNode, label: string, isOpen: boolean }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn(
        "flex items-center px-4 py-3 transition-all duration-300 rounded-xl group",
        isActive 
          ? "text-pastel-indigo bg-brand-surface font-bold border border-brand-border"
          : "text-text-secondary font-medium hover:bg-brand-surface/50 hover:text-text-primary",
        !isOpen && "justify-center px-0"
      )}
      title={!isOpen ? label : undefined}
    >
      <span className={cn("shrink-0 transition-transform", !isOpen && "group-hover:scale-110")}>{icon}</span>
      {isOpen && (
        <span className="ml-3 font-headline tracking-tight font-bold text-xs truncate uppercase opacity-100 transition-opacity">
          {label}
        </span>
      )}
    </NavLink>
  );
}

function HeaderLink({ to, label }: { to: string, label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn(
        "pb-1 transition-colors border-b-2 font-bold",
        isActive 
          ? "text-pastel-indigo border-pastel-indigo"
          : "text-text-secondary border-transparent hover:text-text-primary hover:border-pastel-indigo/30"
      )}
    >
      {label}
    </NavLink>
  );
}
