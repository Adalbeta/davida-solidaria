"use client";

import { useState, useRef } from "react";
import { useI18n } from "../../context/I18nContext";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import FadeIn from "../../components/FadeIn";

export default function RequestForm() {
  const { t } = useI18n();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    location: "",
    need_type: "medical",
    description: "",
    amount: "",
    urgency: "medium",
    doc_link: "",
    doc_desc: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Por favor, complete o reCAPTCHA.");
      return;
    }

    setStatus("loading");

    const templateParams = {
      ...formData,
      request_id: `REQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      submission_date: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  templateParams,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
);
      setStatus("success");
      setFormData({
        fullname: "", email: "", phone: "", location: "", need_type: "medical", description: "",
        amount: "", urgency: "medium", doc_link: "", doc_desc: "", consent: false,
      });
      if (recaptchaRef.current) recaptchaRef.current.reset();
      setCaptchaValue(null);
    } catch (error) {
      console.error("EmailJS Error:", JSON.stringify(error, null, 2));
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="container animate-fade-in" style={{ padding: "4rem 1.5rem", maxWidth: "600px", textAlign: "center" }}>
        <div className="glass-card">
          <CheckCircle2 size={64} color="var(--success)" style={{ margin: "0 auto 1.5rem auto" }} />
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Sucesso!</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>{t("request.success")}</p>
          <button className="btn btn-primary" onClick={() => setStatus("idle")} style={{ marginTop: "2rem" }}>
            Novo Pedido
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: "4rem 1.5rem", maxWidth: "800px" }}>
      <FadeIn>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem", textAlign: "center" }}>{t("request.title")}</h1>
      </FadeIn>
      
      {status === "error" && (
        <FadeIn>
          <div style={{ background: "#fee2e2", border: "1px solid var(--error)", color: "var(--error)", padding: "1rem", borderRadius: "var(--radius)", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <AlertCircle size={20} />
            {t("request.error")}
          </div>
        </FadeIn>
      )}

      <FadeIn delay={100}>
        <form onSubmit={handleSubmit} className="glass-card">
        {/* Section 1: Personal Info */}
        <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--primary)", borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem" }}>
          {t("request.personal_info")}
        </h3>
        <div className="grid-2">
          <div className="input-group">
            <label className="input-label">{t("request.fullname")} *</label>
            <input type="text" name="fullname" required className="input-field" value={formData.fullname} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label className="input-label">{t("request.email")} *</label>
            <input type="email" name="email" required className="input-field" value={formData.email} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label className="input-label">{t("request.phone")} *</label>
            <input type="tel" name="phone" required className="input-field" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label className="input-label">{t("request.location")} *</label>
            <input type="text" name="location" required className="input-field" value={formData.location} onChange={handleChange} />
          </div>
        </div>

        {/* Section 2: Request Details */}
        <h3 style={{ fontSize: "1.25rem", margin: "2rem 0 1rem 0", color: "var(--primary)", borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem" }}>
          {t("request.request_details")}
        </h3>
        <div className="input-group">
          <label className="input-label">{t("request.need_type")} *</label>
          <select name="need_type" required className="input-field" value={formData.need_type} onChange={handleChange}>
            <option value="medical">{t("request.medical")}</option>
            <option value="food">{t("request.food")}</option>
            <option value="education">{t("request.education")}</option>
            <option value="other">{t("request.other")}</option>
          </select>
        </div>
        <div className="input-group">
          <label className="input-label">{t("request.description")} *</label>
          <textarea name="description" required className="input-field" rows={4} value={formData.description} onChange={handleChange}></textarea>
        </div>

        {/* Section 3: Financial */}
        <h3 style={{ fontSize: "1.25rem", margin: "2rem 0 1rem 0", color: "var(--primary)", borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem" }}>
          {t("request.financial_info")}
        </h3>
        <div className="grid-2">
          <div className="input-group">
            <label className="input-label">{t("request.amount")}</label>
            <input type="text" name="amount" placeholder="Ex: 500€" className="input-field" value={formData.amount} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label className="input-label">{t("request.urgency")} *</label>
            <select name="urgency" required className="input-field" value={formData.urgency} onChange={handleChange}>
              <option value="low">{t("request.low")}</option>
              <option value="medium">{t("request.medium")}</option>
              <option value="high">{t("request.high")}</option>
            </select>
          </div>
        </div>

        {/* Section 4: Documents */}
        <h3 style={{ fontSize: "1.25rem", margin: "2rem 0 1rem 0", color: "var(--primary)", borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem" }}>
          {t("request.documents")}
        </h3>
        <div className="input-group">
          <label className="input-label">{t("request.doc_link")}</label>
          <input type="url" name="doc_link" placeholder="https://" className="input-field" value={formData.doc_link} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label className="input-label">{t("request.doc_desc")}</label>
          <textarea name="doc_desc" className="input-field" rows={2} value={formData.doc_desc} onChange={handleChange}></textarea>
        </div>

        {/* Consent & Captcha */}
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <label style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", cursor: "pointer" }}>
            <input type="checkbox" name="consent" required checked={formData.consent} onChange={handleChange} style={{ marginTop: "0.25rem" }} />
            <span style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>{t("request.consent")}</span>
          </label>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={(val) => setCaptchaValue(val)}
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: "100%", fontSize: "1.1rem" }} disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              {t("request.submitting")}
            </>
          ) : (
            t("request.submit")
          )}
          </button>
        </form>
      </FadeIn>
    </div>
  );
}
