import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import { IconButton } from '@mui/material'
import { tr } from '../config/i18n'

// Cartão individual de projeto (imagem/preview, título, descrição e tags).
export default function ProjectCard({ project, lang }) {
  return (
    <article className="group glass-card overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow">
      {/* Preview visual: imagem real (se houver) ou gradiente representando o mockup */}
      {project.image ? (
        <div className="relative h-44 overflow-hidden sm:h-48">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ) : (
        <div className={`relative h-44 bg-gradient-to-br sm:h-48 ${project.preview}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-24 w-40 rounded-lg border border-white/10 bg-base-900/40 backdrop-blur-sm" />
          </div>
        </div>
      )}

      {/* Corpo do cartão */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <div className="flex flex-shrink-0">
            {project.demo && (
              <IconButton
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ color: '#64748b', '&:hover': { color: '#22d3ee' } }}
                aria-label={`Demo do projeto ${project.title}`}
              >
                <LaunchIcon fontSize="small" />
              </IconButton>
            )}
            <IconButton
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{ color: '#64748b', '&:hover': { color: '#22d3ee' } }}
              aria-label={`Repositório do projeto ${project.title}`}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {tr(project.description, lang)}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
