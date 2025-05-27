import React, { useState, useEffect } from 'react';
import styles from './Sidebar.module.css';
import { mainLinks, bottomLinks, settingLink } from '../../data/navigationLinks.jsx';
import { FiMenu, FiX } from 'react-icons/fi';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleLinkClick = (idx) => {
    setActiveIndex(idx);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {isMobile && !sidebarOpen && (
        <button
          className={styles.sidebarToggle}
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu size={24} />
        </button>
      )}

      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
        {isMobile && sidebarOpen && (
          <button
            className={styles.sidebarClose}
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <FiX size={28} />
          </button>
        )}
        <div className={styles.sidebarContent}>
          <div className={styles.logo}>
            Health<span>care.</span>
          </div>

          <div className={styles.sectionTitle}>General</div>
          <nav className={styles.mainNav}>
            <ul className={styles.navList}>
              {mainLinks.map((link, idx) => (
                <li
                  key={idx}
                  className={`${styles.navItem} ${activeIndex === idx ? styles.active : ''}`}
                  onClick={() => handleLinkClick(idx)}
                >
                  <span className={styles.icon}>{link.icon}</span>
                  <span>{link.label}</span>
                </li>
              ))}
            </ul>
          </nav>

          <div className={`${styles.sectionTitle} ${styles.toolsTitle}`}>Tools</div>

          <nav className={styles.bottomNav}>
            <ul className={styles.navList}>
              {bottomLinks.map((link, idx) => (
                <li
                  key={idx}
                  className={styles.navItem}
                  onClick={() => isMobile && setSidebarOpen(false)}
                >
                  <span className={styles.icon}>{link.icon}</span>
                  <span>{link.label}</span>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className={styles.settingItem}
          onClick={() => isMobile && setSidebarOpen(false)}
        >
          <span className={styles.icon}>{settingLink.icon}</span>
          <span>{settingLink.label}</span>
        </div>
      </aside>

      {isMobile && sidebarOpen && (
        <div
          className={styles.overlay}
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;