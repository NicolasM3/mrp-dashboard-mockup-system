
import React, { useState } from 'react';
import { 
  Home, 
  User, 
  Menu, 
  LogOut, 
  Settings,
  BarChart3,
  Bell,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import MRPDashboard from './MRPDashboard';

const MRPLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: BarChart3, label: 'Relatórios', active: false },
    { icon: Settings, label: 'Configurações', active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className={`bg-slate-800 text-white transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'} flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <h1 className="text-xl font-bold text-white">MRP System</h1>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white hover:bg-slate-700"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-blue-600 text-white">
                AD
              </AvatarFallback>
            </Avatar>
            {sidebarOpen && (
              <div>
                <p className="font-medium text-white">Analista PCP</p>
                <p className="text-sm text-slate-300">admin@mrp.com</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Button
                  variant={item.active ? "secondary" : "ghost"}
                  className={`w-full justify-start text-white hover:bg-slate-700 ${
                    item.active ? 'bg-slate-700' : ''
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {sidebarOpen && <span className="ml-3">{item.label}</span>}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-700">
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-slate-700"
          >
            <LogOut className="h-5 w-5" />
            {sidebarOpen && <span className="ml-3">Logout</span>}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold text-gray-800">Dashboard Principal</h2>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Button>
              <div className="text-sm text-gray-600">
                Última atualização: {new Date().toLocaleString('pt-BR')}
              </div>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-auto">
          <MRPDashboard />
        </main>
      </div>
    </div>
  );
};

export default MRPLayout;
