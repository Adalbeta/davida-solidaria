"use client";

import { useI18n } from "../context/I18nContext";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "2rem 0", marginTop: "4rem" }}>
      <div className="container" style={{ textAlign: "center", color: "var(--text-muted)" }}>
        <p>&copy; {new Date().getFullYear()} Dádiva Solidária. All rights reserved.</p>
        <p style={{ marginTop: "0.5rem" }}>{t("contact.email")}</p>
      </div>
    </footer>
  );
}
