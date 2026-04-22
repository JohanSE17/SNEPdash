import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'es';

export const translations = {
  en: {
    // Layout
    "app.title": "SNEP Virtual",
    "app.subtitle": "Operational Suite",
    "nav.infrastructure": "Infrastructure",
    "nav.financial": "Financial Ledger",
    "nav.security": "Security & IA",
    "nav.nodes": "Virtual Nodes",
    "nav.storage": "Storage Clusters",
    "nav.logistics": "Logistics & Supply",
    "nav.clients": "Client Portal",
    "nav.iam": "Identity Management",
    "nav.inventory": "Inventory",
    "nav.noder": "Noder Assistant",
    "nav.deploy": "Deploy",
    "nav.health": "System Health",
    "nav.settings": "Settings",
    "header.title": "SNEP Virtual Architecture",
    "header.global": "Global View",
    "header.logs": "Logs",
    "header.terminal": "Terminal",
    "header.search": "System search...",
    "header.lang.en": "English",
    "header.lang.es": "Spanish",
    
    // Overview
    "overview.globalOverview": "Global Unified Overview",
    "overview.monolith.1": "Infrastructure",
    "overview.monolith.2": "Monolith",
    "overview.network": "Network: Optimal",
    "overview.resync": "Re-Sync Nodes",
    "stat.vms": "Active VMs",
    "stat.revenue": "Monthly Revenue",
    "stat.projected": "Projected",
    "stat.health": "Node Health",
    "stat.alerts": "Alerts",
    "stat.support": "Support Queue",
    "stat.avg": "Avg",
    "token.tracker": "IA Token Tracker",
    "token.free": "Free (Claude/Gemini)",
    "token.advanced": "Advanced (Models)",
    "map.density": "Infrastructure Density",
    "map.desc": "Real-time node distribution across global sectors",
    "map.export": "Export Map",
    "map.live": "Live",
    "map.heatmap": "Heatmap",
    "map.sectors": "Active Sectors",
    "map.core": "Core Nodes",
    "map.edge": "Edge Clusters",
    "finance.title": "Financial Summary",
    "finance.client": "Client Investment",
    "finance.partner": "Partner Stake",
    "finance.capacity": "Capacity",
    "finance.yield": "Quarterly Yield",
    "security.title": "Security Protocol",
    "security.vuln": "Active Vulnerabilities",
    "security.leak": "Node UA-4 Leak",
    "security.leak_desc": "Potential unauthorized egress detected in Baltic sector.",
    "security.manual": "Manual Emergency Protocol",
    "security.keychain": "Emergency Keychain",
    "security.auth": "Requires Level 5 Biometric Auth",
    "modules.client": "Client Portal",
    "modules.client_desc": "42 new onboards pending verification in the EMEA cluster.",
    "modules.logistics": "Logistics",
    "modules.logistics_desc": "8 hardware nodes in transit to Frankfurt Tier-4 Facility.",
    "modules.ledger": "Financial Ledger",
    "modules.ledger_desc": "System automated reconciliation completed for Block-24.",
    "intel.live": "System Live",
    "intel.title": "Advanced Operational Intelligence",
    "intel.desc": "Consolidated telemetry from across the SNEP network, providing sub-millisecond precision on global infrastructure and logistics.",
    "intel.portal": "Deployment Portal",
    "intel.docs": "Documentation",
    "intel.smart": "Smart Suggestions",
    "intel.smart_desc": "AI-driven optimizations and best practices for your current nodes.",
    "intel.search": "Search optimizations (e.g., node)...",

    // Chatbot
    "bot.title": "Noder Assistant",
    "bot.subtitle": "Secure AI Terminal",
    "bot.connected": "Connected",
    "bot.placeholder": "Type to Noder...",
    "bot.state": "State",
    "bot.protocol": "Protocol Activated",
    "bot.msg1": "Emergency activation detected. Are you the account owner?",
    "bot.now": "Noder Bot • Now",
    "bot.yes": "Yes, it's me",
    "bot.accidental": "Accidental Activation",
    "bot.mitigation.title": "Mitigation",
    "bot.mitigation.ip": "Blocking IP",
    "bot.mitigation.progress": "In progress...",
    "bot.mitigation.tokens": "Rotating tokens",
    "bot.mitigation.db": "Migrating DB",
    "bot.mitigation.wait": "Waiting for rotation...",
    "bot.cred.ready": "Protocol ready. Previous credentials",
    "bot.cred.deleted": "permanently deleted",
    "bot.cred.update": "Please, update your access:",
    "bot.cred.web": "WEB Access",
    "bot.cred.user": "User",
    "bot.cred.pass": "Password",
    "bot.cred.api": "API Key",
    "bot.cred.copy": "Copy",
    "bot.cred.warn": "Temporary credentials in this view. Request rotation when finished.",
    "bot.cred.understood": "Understood",
    "bot.comp.layer": "Secure Layer",
    "bot.comp.title1": "Migration",
    "bot.comp.title2": "Complete",
    "bot.comp.desc": "Your environment has been successfully shielded and all databases synchronized.",
    "bot.comp.btn": "Go to Dashboard",
    
    // Suggestion cards
    "suggest.rebalance.title": "Node Rebalancing",
    "suggest.rebalance.desc": "Consider shifting load from DB-Cluster-A to secondary replica to stabilize thermal thresholds.",
    "suggest.cold.title": "Cold Storage",
    "suggest.cold.desc": "Archiving logistics data older than 90 days could reduce query latency by ~14%.",
    "suggest.audit.title": "Security Audit",
    "suggest.audit.desc": "3 IAM profiles haven't rotated their Level 5 biometric keys in 60 days."
  },
  es: {
    // Layout
    "app.title": "SNEP Virtual",
    "app.subtitle": "Suite Operacional",
    "nav.infrastructure": "Infraestructura",
    "nav.financial": "Libro Financiero",
    "nav.security": "Seguridad e IA",
    "nav.nodes": "Nodos Virtuales",
    "nav.storage": "Clústeres de Almacenamiento",
    "nav.logistics": "Logística y Suministro",
    "nav.clients": "Portal de Clientes",
    "nav.iam": "Gestión de Identidad",
    "nav.inventory": "Inventario",
    "nav.noder": "Asistente Noder",
    "nav.deploy": "Desplegar",
    "nav.health": "Salud del Sistema",
    "nav.settings": "Ajustes",
    "header.title": "Arquitectura Virtual SNEP",
    "header.global": "Vista Global",
    "header.logs": "Registros",
    "header.terminal": "Terminal",
    "header.search": "Búsqueda del sistema...",
    "header.lang.en": "Inglés",
    "header.lang.es": "Español",
    
    // Overview
    "overview.globalOverview": "Visión Global Unificada",
    "overview.monolith.1": "Monolito de",
    "overview.monolith.2": "Infraestructura",
    "overview.network": "Red: Óptima",
    "overview.resync": "Sincronizar Nodos",
    "stat.vms": "VMs Activas",
    "stat.revenue": "Ingresos Mensuales",
    "stat.projected": "Proyectado",
    "stat.health": "Salud del Nodo",
    "stat.alerts": "Alertas",
    "stat.support": "Cola de Soporte",
    "stat.avg": "Prom",
    "token.tracker": "Rastreador de Tokens IA",
    "token.free": "Gratis (Claude/Gemini)",
    "token.advanced": "Avanzado (Modelos)",
    "map.density": "Densidad de Infraestructura",
    "map.desc": "Distribución de nodos en tiempo real en los sectores globales",
    "map.export": "Exportar Mapa",
    "map.live": "En vivo",
    "map.heatmap": "Mapa de Calor",
    "map.sectors": "Sectores Activos",
    "map.core": "Nodos Principales",
    "map.edge": "Clústeres de Borde",
    "finance.title": "Resumen Financiero",
    "finance.client": "Inversión del Cliente",
    "finance.partner": "Participación de Socios",
    "finance.capacity": "Capacidad",
    "finance.yield": "Rendimiento Trimestral",
    "security.title": "Protocolo de Seguridad",
    "security.vuln": "Vulnerabilidades Activas",
    "security.leak": "Fuga Nodo UA-4",
    "security.leak_desc": "Posible salida no autorizada detectada en el sector Báltico.",
    "security.manual": "Protocolo Manual de Emergencia",
    "security.keychain": "Llavero de Emergencia",
    "security.auth": "Requiere Autenticación Biométrica Nivel 5",
    "modules.client": "Portal de Clientes",
    "modules.client_desc": "42 nuevas integraciones pendientes de verificación en EMEA.",
    "modules.logistics": "Logística",
    "modules.logistics_desc": "8 nodos de hardware en tránsito a Frankfurt Tier-4.",
    "modules.ledger": "Libro Financiero",
    "modules.ledger_desc": "Reconciliación automatizada completada para el Bloque-24.",
    "intel.live": "Sistema en Línea",
    "intel.title": "Inteligencia Operacional Avanzada",
    "intel.desc": "Telemetría consolidada de toda la red SNEP, brindando precisión inferior a un milisegundo en la infraestructura y logística global.",
    "intel.portal": "Portal de Despliegue",
    "intel.docs": "Documentación",
    "intel.smart": "Sugerencias Inteligentes",
    "intel.smart_desc": "Optimizaciones y mejores prácticas basadas en IA para sus nodos.",
    "intel.search": "Buscar optimizaciones (ej., nodo)...",

    // Chatbot
    "bot.title": "Asistente Noder",
    "bot.subtitle": "Terminal Seguro de IA",
    "bot.connected": "Conectado",
    "bot.placeholder": "Escriba a Noder...",
    "bot.state": "Estado",
    "bot.protocol": "Protocolo Activado",
    "bot.msg1": "Se detectó una activación de emergencia. ¿Es usted el titular?",
    "bot.now": "Noder Bot • Ahora",
    "bot.yes": "Sí, soy yo",
    "bot.accidental": "Activación Accidental",
    "bot.mitigation.title": "Mitigación",
    "bot.mitigation.ip": "Bloqueando IP",
    "bot.mitigation.progress": "En curso...",
    "bot.mitigation.tokens": "Rotando tokens",
    "bot.mitigation.db": "Migrando DB",
    "bot.mitigation.wait": "Esperando rotación...",
    "bot.cred.ready": "Protocolo listo. Credenciales anteriores",
    "bot.cred.deleted": "eliminadas",
    "bot.cred.update": "permanentemente. Por favor, actualice sus accesos:",
    "bot.cred.web": "Acceso WEB",
    "bot.cred.user": "Usuario",
    "bot.cred.pass": "Contraseña",
    "bot.cred.api": "API Key",
    "bot.cred.copy": "Copiar",
    "bot.cred.warn": "Credenciales temporales en esta vista. Solicite rotación cuando finalice.",
    "bot.cred.understood": "Entendido",
    "bot.comp.layer": "Capa Segura",
    "bot.comp.title1": "Migración",
    "bot.comp.title2": "Completa",
    "bot.comp.desc": "Su entorno ha sido blindado exitosamente y todas las bases de datos sincronizadas.",
    "bot.comp.btn": "Ir al Dashboard",
    
    // Suggestion cards
    "suggest.rebalance.title": "Rebalanceo de Nodos",
    "suggest.rebalance.desc": "Considere cambiar carga de DB-Cluster-A a la réplica para estabilizar umbrales térmicos.",
    "suggest.cold.title": "Almacenamiento en Frío",
    "suggest.cold.desc": "Archivar datos de logística de más de 90 días podría reducir latencia en ~14%.",
    "suggest.audit.title": "Auditoría de Seguridad",
    "suggest.audit.desc": "3 perfiles IAM no han rotado sus claves biométricas Nivel 5 en 60 días."
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  // Make `t` strictly typed if we want, or loose
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('language') as Language) || 'es';
    }
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    const langDict = translations[language] as Record<string, string>;
    return langDict[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
