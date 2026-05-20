"use client";

import { useI18n } from "../../context/I18nContext";
import { Info, MapPin, Target, Shield, Heart, Users } from "lucide-react";
import FadeIn from "../../components/FadeIn";
import Image from "next/image";

export default function About() {
  const { t } = useI18n();

  return (
    <div className="container" style={{ padding: "4rem 1.5rem" }}>
      <FadeIn>
        <h1 style={{ fontSize: "3rem", marginBottom: "3rem", textAlign: "center", color: "var(--primary)", fontWeight: "700" }}>
          {t("about.title")}
        </h1>
      </FadeIn>
      
      <div className="grid-2" style={{ marginBottom: "2rem", gap: "2rem" }}>
        <FadeIn delay={100} direction="up">
          <div className="glass-card" style={{ height: "100%", overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', width: '100%', height: '250px' }}>
              <Image src="/images/team.jpg" alt="História da equipa" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '2rem', flex: 1 }}>
              <Info size={36} color="var(--primary)" style={{ marginBottom: "1rem" }} />
              <h2 style={{ marginBottom: "1rem", fontSize: "1.75rem", fontWeight: "600" }}>História</h2>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.8", fontSize: "1.1rem" }}>{t("about.history")}</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200} direction="up">
          <div className="glass-card" style={{ height: "100%", overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', width: '100%', height: '250px' }}>
              <Image src="/images/europe.jpg" alt="Localização Europa" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '2rem', flex: 1 }}>
              <MapPin size={36} color="var(--primary)" style={{ marginBottom: "1rem" }} />
              <h2 style={{ marginBottom: "1rem", fontSize: "1.75rem", fontWeight: "600" }}>Localização</h2>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.8", fontSize: "1.1rem" }}>{t("about.location")}</p>
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={300} direction="up">
        <div className="glass-card" style={{ marginBottom: "5rem", overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'relative', width: '100%', height: '350px' }}>
            <Image src="/images/view.jpg" alt="Ações e Visão" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ padding: '3rem 2rem' }}>
            <Target size={36} color="var(--primary)" style={{ marginBottom: "1rem" }} />
            <h2 style={{ marginBottom: "1rem", fontSize: "1.75rem", fontWeight: "600" }}>As Nossas Ações</h2>
            <p style={{ color: "var(--text-muted)", lineHeight: "1.8", fontSize: "1.1rem" }}>{t("about.actions")}</p>
          </div>
        </div>
      </FadeIn>

      {/* Nossos Valores Section */}
      <FadeIn>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "3rem", textAlign: "center", color: "var(--primary)", fontWeight: "700" }}>
          {t("about.values_title")}
        </h2>
      </FadeIn>
      <div className="grid-3">
        <FadeIn delay={100}>
          <div className="glass-card" style={{ textAlign: "center", padding: "3rem 2rem", height: "100%" }}>
            <Shield size={48} color="var(--success)" style={{ margin: "0 auto 1.5rem auto" }} />
            <h3 style={{ fontSize: "1.35rem", fontWeight: "600" }}>{t("about.value1")}</h3>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="glass-card" style={{ textAlign: "center", padding: "3rem 2rem", height: "100%" }}>
            <Heart size={48} color="var(--error)" style={{ margin: "0 auto 1.5rem auto" }} />
            <h3 style={{ fontSize: "1.35rem", fontWeight: "600" }}>{t("about.value2")}</h3>
          </div>
        </FadeIn>
        <FadeIn delay={300}>
          <div className="glass-card" style={{ textAlign: "center", padding: "3rem 2rem", height: "100%" }}>
            <Users size={48} color="var(--primary)" style={{ margin: "0 auto 1.5rem auto" }} />
            <h3 style={{ fontSize: "1.35rem", fontWeight: "600" }}>{t("about.value3")}</h3>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
