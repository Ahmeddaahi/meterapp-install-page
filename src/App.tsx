import { motion } from 'framer-motion';
import { Download, Shield, Zap, Globe, Github, Smartphone, MapPin } from 'lucide-react';
import './App.css';

const PWA_URL = 'https://ahmeddaahi.github.io/meter-calculator/';
const APK_URL = '/taxi-meter.apk';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar glass">
        <a href="#" className="logo">
          <Smartphone size={24} />
          TAXI METER
        </a>
        <div className="nav-links">
          <a href="#features" className="nav-link">Features</a>
          <a href={PWA_URL} target="_blank" rel="noopener noreferrer" className="btn-download small">
            OPEN APP
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <motion.div {...fadeInUp}>
          <div className="badge glass">SOLVING THE ROAD</div>
          <h1>Precision Meters <br /><span>In Your Pocket</span></h1>
          <p>
            Experience the most professional and reliable taxi meter app.
            Works 100% offline with GPS precision and custom fare settings.
          </p>
          <div className="hero-actions">
            <a href={PWA_URL} target="_blank" rel="noopener noreferrer" className="btn-download">
              <Globe size={20} />
              OPEN WEB APP
            </a>
            <a href={APK_URL} download className="btn-download secondary">
              <Download size={20} />
              DOWNLOAD APK
            </a>
          </div>
          <p className="install-note">Available for Android (APK) and iOS/Android (PWA)</p>
        </motion.div>

        {/* Mockup Animation */}
        <motion.div
          className="mockup-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="phone-mockup">
            <div className="mockup-screen">
              <div className="mockup-logo">🚕</div>
              <div className="mockup-content">
                <div className="mockup-line"></div>
                <div className="mockup-line short"></div>
                <div className="mockup-btn"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section id="features" className="features-section">
        <motion.div
          className="features-grid"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <FeatureCard
            icon={<Zap size={24} />}
            title="Blazing Fast"
            description="Instant fare calculations with zero latency, even in rural areas."
          />
          <FeatureCard
            icon={<Shield size={24} />}
            title="Privacy First"
            description="All data stays on your device. We don't track your location or rides."
          />
          <FeatureCard
            icon={<MapPin size={24} />}
            title="GPS Precision"
            description="Highly accurate distance tracking using advanced satellite technology."
          />
          <FeatureCard
            icon={<Globe size={24} />}
            title="Offline Ready"
            description="No internet? No problem. The app works perfectly without a connection."
          />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer glass">
        <div className="footer-content">
          <div className="footer-logo">
            <Smartphone size={20} />
            TAXI METER
          </div>
          <p>© 2026 Ahmed D. Built for the modern road.</p>
          <div className="social-links">
            <a href="https://github.com/Ahmeddaahi/meter-calculator" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      className="feature-card glass"
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
      }}
    >
      <div className="icon-box">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

export default App;
