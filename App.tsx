import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { DemoNoticeBanner } from './components/layout/DemoNoticeBanner';
import { Toast } from './components/common/Toast';

import { DashboardView } from './components/dashboard/DashboardView';
import { AttendanceView } from './components/attendance/AttendanceView';
import { EngagementView } from './components/engagement/EngagementView';
import { MediaAnalysisView } from './components/media/MediaAnalysisView';
import { ReportsView } from './components/reports/ReportsView';
import { SettingsView } from './components/settings/SettingsView';

const AppContent: React.FC = () => {
  const { currentView, toast, dismissToast } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Top Demo Disclaimer Banner */}
      <DemoNoticeBanner />

      {/* Main Layout Container */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Sidebar */}
        <Sidebar
          isMobileOpen={isMobileMenuOpen}
          setIsMobileOpen={setIsMobileMenuOpen}
        />

        {/* Content Area */}
        <div className="flex-1 flex flex-col min-w-0 lg:ml-64 transition-all duration-300">
          {/* Header */}
          <Header onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

          {/* Page View Body */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
            {currentView === 'dashboard' && <DashboardView />}
            {currentView === 'attendance' && <AttendanceView />}
            {currentView === 'engagement' && <EngagementView />}
            {currentView === 'media' && <MediaAnalysisView />}
            {currentView === 'reports' && <ReportsView />}
            {currentView === 'settings' && <SettingsView />}
          </main>
        </div>
      </div>

      {/* Global Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={dismissToast}
        />
      )}
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
