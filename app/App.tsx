import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CoreIdentitySection } from './components/CoreIdentitySection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { MapSection } from './components/MapSection';
import { SkillsSection } from './components/SkillsSection';
import { AcademicTrainingSection } from './components/AcademicTrainingSection';
import { CertificationsSection } from './components/CertificationsSection';
import { VolunteeringSection } from './components/VolunteeringSection';
import { FutureDirectionSection } from './components/FutureDirectionSection';
import { GitHubSection } from './components/GitHubSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <CoreIdentitySection />
        <ExperienceSection />
        <AcademicTrainingSection />
        <ProjectsSection />
        <MapSection />
        <SkillsSection />
        <CertificationsSection />
        <VolunteeringSection />
        <FutureDirectionSection />
        <GitHubSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
