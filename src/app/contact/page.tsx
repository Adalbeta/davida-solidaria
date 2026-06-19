"use client";

import { useI18n } from "../../context/I18nContext";
import { Mail, MessageCircle, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import FadeIn from "../../components/FadeIn";
import Link from "next/link";

export default function Contact() {
  const { t } = useI18n();

  return (
    <div className="container" style={{ padding: "4rem 1.5rem", maxWidth: "900px" }}>
      <FadeIn>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", textAlign: "center", color: "var(--primary)", fontWeight: "700" }}>
          {t("contact.title")}
        </h1>
        <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "1.2rem", marginBottom: "4rem", maxWidth: "600px", marginInline: "auto" }}>
          {t("contact.subtitle")}
        </p>
      </FadeIn>
      
      <div className="grid-2">
        <FadeIn delay={100}>
          <div className="glass-card" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", fontWeight: "600" }}>Informações</h2>
            
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ background: "rgba(59,130,246,0.1)", padding: "0.75rem", borderRadius: "50%" }}>
                <Mail color="var(--primary)" />
              </div>
              <div>
                <p style={{ fontWeight: "600" }}>Email</p>
                <p style={{ color: "var(--text-muted)" }}>{t("contact.email")}</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ background: "rgba(59,130,246,0.1)", padding: "0.75rem", borderRadius: "50%" }}>
                <Phone color="var(--primary)" />
              </div>
              <div>
                <p style={{ fontWeight: "600" }}>Telefone</p>
                <p style={{ color: "var(--text-muted)" }}>{t("contact.phone")}</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ background: "rgba(59,130,246,0.1)", padding: "0.75rem", borderRadius: "50%" }}>
                <MapPin color="var(--primary)" />
              </div>
              <div>
                <p style={{ fontWeight: "600" }}>Sede</p>
                <p style={{ color: "var(--text-muted)" }}>{t("contact.address")}</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ background: "rgba(59,130,246,0.1)", padding: "0.75rem", borderRadius: "50%" }}>
                <Clock color="var(--primary)" />
              </div>
              <div>
                <p style={{ fontWeight: "600" }}>Disponibilidade</p>
                <p style={{ color: "var(--text-muted)" }}>{t("contact.hours")}</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="glass-card" style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <MessageCircle size={48} color="var(--success)" style={{ marginBottom: "1.5rem" }} />
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: "600" }}>WhatsApp</h2>
            <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
              Precisa de resposta rápida? Fale connosco diretamente pelo WhatsApp.
            </p>
            <a href="https://wa.me/447418375239" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: "var(--success)", color: "white", width: "100%", marginBottom: "1rem" }}>
              <MessageCircle size={20} />
              {t("contact.whatsapp_btn")}
            </a>
            <Link href="/request" className="btn btn-outline" style={{ width: "100%" }}>
              {t("contact.form_btn")}
              <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
