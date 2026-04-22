export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">Settings</h1>
          <p className="text-sm text-text-muted">Manage your dashboard preferences.</p>
        </div>
      </div>
      
      <div className="max-w-2xl bg-bg-surface border border-border-subtle rounded-xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-border-subtle">
          <h2 className="text-lg font-medium text-text-primary">Profile settings</h2>
          <p className="text-sm text-text-muted mt-1">Update your account information.</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-secondary uppercase tracking-wider text-[11px]">Display Name</label>
            <input type="text" defaultValue="Johan SE17" className="w-full bg-bg-base border border-border-subtle rounded-md px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-pastel-blue focus:ring-1 focus:ring-pastel-blue" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-secondary uppercase tracking-wider text-[11px]">Email</label>
            <input type="email" defaultValue="johan@example.com" className="w-full bg-bg-base border border-border-subtle rounded-md px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-pastel-blue focus:ring-1 focus:ring-pastel-blue" />
          </div>
          
          <div className="pt-4 border-t border-border-subtle flex justify-end">
            <button className="px-4 py-2 bg-pastel-blue text-bg-base rounded-md text-sm font-medium hover:bg-pastel-blue/90 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
