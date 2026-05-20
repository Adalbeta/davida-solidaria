"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "../context/I18nContext";
import { useTheme } from "../context/ThemeContext";
import { Heart, Globe, Menu, X, Moon, Sun } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { t, language, setLanguage } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Heart className={styles.logoIcon} />
          <span>Dádiva Solidária</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ""}`}>
          <Link href="/" onClick={closeMenu}>{t("nav.home")}</Link>
          <Link href="/about" onClick={closeMenu}>{t("nav.about")}</Link>
          <Link href="/request" onClick={closeMenu}>{t("nav.request")}</Link>
          <Link href="/contact" onClick={closeMenu}>{t("nav.contact")}</Link>
          
          <button onClick={toggleLanguage} className={styles.langBtnMobile}>
            <Globe size={18} />
            {language === "pt" ? "EN" : "PT"}
          </button>
        </nav>

        <div className={styles.actions}>
          {mounted && (
            <button onClick={toggleTheme} className={styles.themeBtn} aria-label="Toggle Theme">
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          )}
          <button onClick={toggleLanguage} className={styles.langBtnDesktop}>
            <Globe size={18} />
            {language === "pt" ? "EN" : "PT"}
          </button>
          
          <button className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}
