// Helper de tradução: recebe um campo que pode ser string simples
// ou um objeto { pt, en } e devolve o texto no idioma atual.
export function tr(field, lang = 'pt') {
  if (field == null) return ''
  if (typeof field === 'string') return field
  return field[lang] ?? field.pt ?? field.en ?? ''
}

// Rótulos de navegação (bilíngues).
export const navLinks = [
  { label: { pt: 'Sobre Mim', en: 'About' }, href: '#sobre' },
  { label: { pt: 'Projetos', en: 'Projects' }, href: '#projetos' },
  { label: { pt: 'Experiências', en: 'Experience' }, href: '#experiencias' },
  { label: { pt: 'Contato', en: 'Contact' }, href: '#contato' },
]

// Títulos das seções (bilíngues).
export const sectionTitles = {
  projects: {
    eyebrow: { pt: 'Portfólio', en: 'Portfolio' },
    heading: { pt: 'Projetos em Destaque', en: 'Featured Projects' },
  },
  experience: {
    eyebrow: { pt: 'Trajetória', en: 'Journey' },
    heading: { pt: 'Experiências Profissionais', en: 'Professional Experience' },
  },
  contact: {
    eyebrow: { pt: 'Vamos Conversar', en: "Let's Talk" },
    heading: {
      pt: 'Gostaria de criar algo juntos?',
      en: 'Would you like to build something together?',
    },
    form: {
      name: { pt: '01. NOME COMPLETO', en: '01. FULL NAME' },
      namePh: { pt: 'Ex: Maria Silva', en: 'Ex: Mary Smith' },
      email: { pt: '02. ENDEREÇO DE E-MAIL', en: '02. EMAIL ADDRESS' },
      emailPh: { pt: 'Ex: maria@provedor.com', en: 'Ex: mary@provider.com' },
      message: { pt: '03. MENSAGEM', en: '03. MESSAGE' },
      messagePh: {
        pt: 'Escreva sua ideia ou proposta de projeto...',
        en: 'Write your idea or project proposal...',
      },
      send: { pt: 'Enviar Mensagem', en: 'Send Message' },
      success: {
        pt: 'Mensagem pronta para envio! (demo)',
        en: 'Message ready to send! (demo)',
      },
    },
  },
}
