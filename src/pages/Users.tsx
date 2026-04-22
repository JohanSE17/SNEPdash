import { Search, MoreHorizontal } from 'lucide-react';

const users = [
  { id: '10293', name: 'Alice Freeman', email: 'alice.f@example.com', role: 'Admin', status: 'Active' },
  { id: '10294', name: 'Bob Smith', email: 'bob.smith@example.com', role: 'Editor', status: 'Offline' },
  { id: '10295', name: 'Charlie Davis', email: 'c.davis@example.com', role: 'Viewer', status: 'Active' },
  { id: '10296', name: 'Diana Ross', email: 'diana.r@example.com', role: 'Editor', status: 'Pending' },
  { id: '10297', name: 'Evan Thomas', email: 'evan.t@example.com', role: 'Viewer', status: 'Offline' },
  { id: '10298', name: 'Fiona Gallagher', email: 'fiona.g@example.com', role: 'Admin', status: 'Active' },
  { id: '10299', name: 'George Harris', email: 'g.harris@example.com', role: 'Viewer', status: 'Active' },
];

export default function Users() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">User Management</h1>
          <p className="text-sm text-text-muted">Manage system users and permissions.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-pastel-blue text-bg-base rounded-md text-sm font-medium hover:bg-pastel-blue/90 transition-colors">
            Add User
          </button>
        </div>
      </div>
      
      <div className="bg-bg-surface border border-border-subtle rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-border-subtle flex items-center justify-between">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
            <input 
              type="text" 
              placeholder="Search users..." 
              className="w-64 py-1.5 pl-9 pr-4 text-sm bg-bg-base border border-border-subtle rounded-md focus:outline-none focus:border-pastel-blue focus:ring-1 focus:ring-pastel-blue placeholder:text-text-muted text-text-primary transition-colors"
            />
          </div>
        </div>
        
        {/* Data Grid based on Technical Dashboard Recipe */}
        <div className="w-full">
          <div className="grid grid-cols-[80px_minmax(150px,1fr)_minmax(200px,1.5fr)_100px_100px_50px] px-4 py-3 border-b border-border-subtle bg-bg-base">
             <div className="font-serif italic text-[11px] uppercase tracking-wide opacity-70 text-text-muted">ID</div>
             <div className="font-serif italic text-[11px] uppercase tracking-wide opacity-70 text-text-muted">Name</div>
             <div className="font-serif italic text-[11px] uppercase tracking-wide opacity-70 text-text-muted">Email</div>
             <div className="font-serif italic text-[11px] uppercase tracking-wide opacity-70 text-text-muted">Role</div>
             <div className="font-serif italic text-[11px] uppercase tracking-wide opacity-70 text-text-muted">Status</div>
             <div className="font-serif italic text-[11px] uppercase tracking-wide opacity-70 text-text-muted flex justify-center">Acts</div>
          </div>
          
          <div className="divide-y divide-border-subtle">
            {users.map((user) => (
              <div 
                key={user.id} 
                className="grid grid-cols-[80px_minmax(150px,1fr)_minmax(200px,1.5fr)_100px_100px_50px] px-4 py-3 items-center group hover:bg-pastel-blue hover:text-bg-base transition-colors cursor-pointer"
              >
                <div className="font-mono text-sm tracking-tight text-text-muted group-hover:text-bg-base/80">{user.id}</div>
                <div className="text-sm font-medium">{user.name}</div>
                <div className="font-mono text-xs tracking-tight text-text-secondary group-hover:text-bg-base/90">{user.email}</div>
                <div className="text-sm">{user.role}</div>
                <div>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${
                    user.status === 'Active' ? 'bg-pastel-green/10 text-pastel-green border-pastel-green/20 group-hover:bg-bg-base group-hover:text-pastel-green' :
                    user.status === 'Pending' ? 'bg-pastel-yellow/10 text-pastel-yellow border-pastel-yellow/20 group-hover:bg-bg-base group-hover:text-pastel-yellow' :
                    'bg-text-muted/10 text-text-muted border-text-muted/20 group-hover:bg-bg-base group-hover:text-text-muted'
                  }`}>
                    {user.status}
                  </span>
                </div>
                <div className="flex justify-center text-text-muted group-hover:text-bg-base/70">
                  <MoreHorizontal size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
