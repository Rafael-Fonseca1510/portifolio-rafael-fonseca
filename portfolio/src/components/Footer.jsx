import { IconButton } from '@mui/material'
import { profile } from '../config/profile.config'
import { iconMap } from './icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center font-mono text-xs text-slate-500 sm:text-left">
          © {year} {profile.identity.name}. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-1">
          {profile.socials.map(({ icon, href, label }) => {
            const Icon = iconMap[icon] ?? iconMap.site
            return (
              <IconButton
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                aria-label={label}
                sx={{ color: '#64748b', '&:hover': { color: '#22d3ee' } }}
              >
                <Icon fontSize="small" />
              </IconButton>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
