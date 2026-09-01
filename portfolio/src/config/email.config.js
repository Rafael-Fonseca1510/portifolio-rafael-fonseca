/* =============================================================================
 *  📧 CONFIGURAÇÃO DE ENVIO DE E-MAIL (formulário de contato)
 * =============================================================================
 *
 *  Este arquivo centraliza TUDO relacionado ao envio de e-mail.
 *  ▶ Para trocar o e-mail que RECEBE as mensagens, altere apenas `toEmail`.
 *
 *  Usamos o EmailJS (https://www.emailjs.com) — gratuito e sem backend.
 *  Os 3 IDs abaixo vêm do painel do EmailJS (veja o passo a passo no README).
 *
 *  🔐 Boas práticas:
 *    - A "Public Key" do EmailJS é segura para ficar no front-end.
 *    - Ainda assim, deixamos os IDs em variáveis de ambiente (.env) para
 *      facilitar a troca sem mexer no código. Há um fallback abaixo caso
 *      você prefira colar direto aqui.
 * ========================================================================== */

export const emailConfig = {
  // ⭐ E-MAIL QUE VAI RECEBER AS MENSAGENS — troque só esta linha (ou o .env)!
  toEmail: import.meta.env.VITE_CONTACT_TO_EMAIL,

  // IDs do EmailJS (crie a conta e pegue no painel). Podem vir do .env.
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
}

// true quando todas as chaves necessárias estão preenchidas.
export const isEmailEnabled = () =>
  Boolean(emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey)

export default emailConfig
