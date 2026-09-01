import { useState, useEffect } from 'react'
import { IconButton, Drawer, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { profile } from '../config/profile.config'
import { navLinks, tr } from '../config/i18n'

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/5 bg-base-900/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#sobre" className="font-mono text-base font-bold text-white sm:text-lg">
          <span className="text-accent">&lt;</span> {profile.identity.logo}{' '}
          <span className="text-accent">/&gt;</span>
        </a>

        {/* Links desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-slate-400 transition-colors hover:text-accent"
            >
              {tr(link.label, lang)}
            </a>
          ))}

          <span className="h-5 w-px bg-white/10" />

          {/* Alternador de idioma */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
            <button
              onClick={() => setLang('pt')}
              className={lang === 'pt' ? 'text-accent' : 'text-slate-500'}
            >
              PT
            </button>
            <span className="text-slate-600">/</span>
            <button
              onClick={() => setLang('en')}
              className={lang === 'en' ? 'text-accent' : 'text-slate-500'}
            >
              EN
            </button>
          </div>
        </div>

        {/* Botão mobile */}
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ color: '#e2e8f0', display: { md: 'none' } }}
          aria-label="Abrir menu"
        >
          <MenuIcon />
        </IconButton>
      </nav>

      {/* Drawer mobile */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { backgroundColor: '#0a0e17', width: 260 } }}
      >
        <Box className="flex items-center justify-between p-4">
          <span className="font-mono text-sm text-accent">Menu</span>
          <IconButton onClick={() => setOpen(false)} sx={{ color: '#e2e8f0' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <div className="flex flex-col gap-1 px-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-mono text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-accent"
            >
              {tr(link.label, lang)}
            </a>
          ))}
          <div className="mt-4 flex items-center gap-3 px-3 font-mono text-xs">
            <button
              onClick={() => setLang('pt')}
              className={lang === 'pt' ? 'text-accent' : 'text-slate-500'}
            >
              PT
            </button>
            <span className="text-slate-600">/</span>
            <button
              onClick={() => setLang('en')}
              className={lang === 'en' ? 'text-accent' : 'text-slate-500'}
            >
              EN
            </button>
          </div>
        </div>
      </Drawer>
    </header>
  )
}
