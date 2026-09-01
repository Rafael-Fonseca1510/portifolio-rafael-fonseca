import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { profile } from './config/profile.config'
import { tr } from './config/i18n'

export default function App() {
  // Estado global de idioma (PT/EN) controlado pelo toggle da Navbar.
  const [lang, setLang] = useState('pt')

  // Aplica título da aba e favicon a partir do config (personalizável por membro).
  useEffect(() => {
    document.title = `${profile.identity.name} — ${tr(profile.identity.role, lang)}`
    if (profile.hero.favicon) {
      let link = document.querySelector("link[rel='icon']")
      if (!link) {
        link = document.createElement('link')
        link.rel = 'icon'
        document.head.appendChild(link)
      }
      link.href = profile.hero.favicon
    }
  }, [lang])

  return (
    <div className="min-h-screen overflow-x-hidden bg-base-900">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer />
    </div>
  )
}
