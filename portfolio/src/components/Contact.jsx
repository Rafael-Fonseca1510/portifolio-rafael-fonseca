import { useState } from 'react'
import { Button, TextField, Snackbar, Alert, CircularProgress } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import emailjs from '@emailjs/browser'
import { profile } from '../config/profile.config'
import { sectionTitles, tr } from '../config/i18n'
import { iconMap } from './icons'
import { emailConfig, isEmailEnabled } from '../config/email.config'

export default function Contact({ lang }) {
  const t = sectionTitles.contact
  const f = t.form
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  // feedback: { open, severity: 'success' | 'error', text }
  const [feedback, setFeedback] = useState({ open: false, severity: 'success', text: '' })

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Se o EmailJS ainda não foi configurado, avisa em vez de fingir que enviou.
    if (!isEmailEnabled()) {
      setFeedback({
        open: true,
        severity: 'error',
        text:
          lang === 'en'
            ? 'Email service is not configured yet. Check src/config/email.config.js.'
            : 'O serviço de e-mail ainda não foi configurado. Verifique src/config/email.config.js.',
      })
      return
    }

    try {
      setSending(true)

      // Parâmetros enviados ao template do EmailJS.
      // Os nomes (from_name, reply_to, message, to_email) devem bater com o template.
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
          to_email: emailConfig.toEmail, // destino controlado pelo config
        },
        { publicKey: emailConfig.publicKey },
      )

      setFeedback({ open: true, severity: 'success', text: tr(f.success, lang) })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setFeedback({
        open: true,
        severity: 'error',
        text:
          lang === 'en'
            ? 'Something went wrong while sending. Please try again.'
            : 'Algo deu errado ao enviar. Tente novamente.',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contato" className="py-16 md:py-28">
      <div className="section-container">
        <p className="eyebrow mb-4">{tr(t.eyebrow, lang)}</p>
        <h2 className="mb-10 text-3xl font-bold text-white sm:text-4xl md:mb-14">
          {tr(t.heading, lang)}
        </h2>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Coluna de informações de contato */}
          <div>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              {tr(profile.contactSection.lead, lang)}
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {profile.contact.map((item) => {
                const Icon = iconMap[item.icon] ?? iconMap.site
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card flex items-center gap-4 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-base-800"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                      <Icon fontSize="small" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500">{item.label}</p>
                      <p className="truncate font-mono text-sm text-slate-200">{item.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="glass-card flex flex-col gap-5 p-5 sm:p-8">
            <div>
              <label className="mb-2 block font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                {tr(f.name, lang)}
              </label>
              <TextField fullWidth required name="name" value={form.name} onChange={handleChange} placeholder={tr(f.namePh, lang)} size="small" />
            </div>
            <div>
              <label className="mb-2 block font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                {tr(f.email, lang)}
              </label>
              <TextField fullWidth required type="email" name="email" value={form.email} onChange={handleChange} placeholder={tr(f.emailPh, lang)} size="small" />
            </div>
            <div>
              <label className="mb-2 block font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                {tr(f.message, lang)}
              </label>
              <TextField fullWidth required multiline minRows={4} name="message" value={form.message} onChange={handleChange} placeholder={tr(f.messagePh, lang)} />
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={sending}
                endIcon={sending ? <CircularProgress size={16} color="inherit" /> : <SendIcon />}
                className="!shadow-glow"
              >
                {sending ? (lang === 'en' ? 'Sending...' : 'Enviando...') : tr(f.send, lang)}
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Snackbar
        open={feedback.open}
        autoHideDuration={5000}
        onClose={() => setFeedback((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity={feedback.severity}
          variant="filled"
          onClose={() => setFeedback((s) => ({ ...s, open: false }))}
        >
          {feedback.text}
        </Alert>
      </Snackbar>
    </section>
  )
}
