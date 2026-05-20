"use client";

import Link from "next/link";
import { useI18n } from "../context/I18nContext";
import styles from "./page.module.css";
import { ArrowRight, HeartHandshake, ClipboardList, Search, ShieldCheck, Users, Utensils, MapPin } from "lucide-react";
import FadeIn from "../components/FadeIn";
import CountUp from "../components/CountUp";
import Image from "next/image";

export default function Home() {
  const { t } = useI18n();

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <FadeIn direction="up">
                <h1 className={styles.title}>{t("home.title")}</h1>
              </FadeIn>
              <FadeIn direction="up" delay={100}>
                <p className={styles.subtitle}>{t("home.subtitle")}</p>
              </FadeIn>
              <FadeIn direction="up" delay={200}>
                <Link href="/request" className={`btn btn-primary ${styles.ctaBtn}`}>
                  {t("home.cta")}
                  <ArrowRight size={20} />
                </Link>
              </FadeIn>
            </div>
            <FadeIn direction="right" delay={300}>
              <div className={styles.heroImageWrapper}>
                <Image
                  src="/images/family-donation.jpg"
                  alt="Family Donation"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  className={styles.heroImage}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionGrid}>
            <FadeIn direction="up">
              <div className={`glass-card ${styles.missionCard}`}>
                <div className={styles.missionIcon}>
                  <HeartHandshake size={48} />
                </div>
                <h2 className={styles.missionTitle}>{t("home.mission_title")}</h2>
                <p className={styles.missionDesc}>{t("home.mission_desc")}</p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={200}>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/images/donation-box.jpg" 
                  alt="Donation Box" 
                  fill 
                  style={{ objectFit: 'cover' }}
                  className={styles.roundedImage}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className={styles.howItWorksSection}>
        <div className="container">
          <FadeIn>
            <h2 className={styles.sectionTitle}>{t("home.how_it_works_title")}</h2>
          </FadeIn>
          <div className="grid-3">
            <FadeIn delay={100}>
              <div className={`glass-card ${styles.stepCard}`}>
                <ClipboardList size={40} className={styles.stepIcon} />
                <h3 className={styles.stepTitle}>{t("home.step1_title")}</h3>
                <p className={styles.stepDesc}>{t("home.step1_desc")}</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className={`glass-card ${styles.stepCard}`}>
                <Search size={40} className={styles.stepIcon} />
                <h3 className={styles.stepTitle}>{t("home.step2_title")}</h3>
                <p className={styles.stepDesc}>{t("home.step2_desc")}</p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className={`glass-card ${styles.stepCard}`}>
                <ShieldCheck size={40} className={styles.stepIcon} />
                <h3 className={styles.stepTitle}>{t("home.step3_title")}</h3>
                <p className={styles.stepDesc}>{t("home.step3_desc")}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className={styles.impactSection}>
        <div className="container">
          <FadeIn>
            <h2 className={styles.sectionTitle}>{t("home.impact_title")}</h2>
          </FadeIn>
          <div className="grid-3">
            <FadeIn delay={100}>
              <div className={`glass-card ${styles.impactCard}`}>
                <Users size={48} className={styles.impactIcon} />
                <div style={{ fontSize: "3rem", fontWeight: "800", margin: "1rem 0" }}>
                  <CountUp end={500} prefix="+" duration={2000} />
                </div>
                <p className={styles.impactText}>{t("home.impact_1")}</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className={`glass-card ${styles.impactCard}`}>
                <Utensils size={48} className={styles.impactIcon} />
                <div style={{ fontSize: "3rem", fontWeight: "800", margin: "1rem 0" }}>
                  <CountUp end={2000} prefix="+" duration={2500} />
                </div>
                <p className={styles.impactText}>{t("home.impact_2")}</p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className={`glass-card ${styles.impactCard}`}>
                <MapPin size={48} className={styles.impactIcon} />
                <div style={{ fontSize: "3rem", fontWeight: "800", margin: "1rem 0" }}>
                  <CountUp end={18} prefix="+" duration={1500} />
                </div>
                <p className={styles.impactText}>{t("home.impact_3")}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
