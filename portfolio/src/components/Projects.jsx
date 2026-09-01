import ProjectCard from './ProjectCard'
import { profile } from '../config/profile.config'
import { sectionTitles, tr } from '../config/i18n'

export default function Projects({ lang }) {
  const t = sectionTitles.projects
  const projects = profile.projects

  return (
    <section id="projetos" className="relative overflow-hidden py-16 md:py-28">
      {/* Orbe decorativo à direita */}
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-gradient-to-bl from-slate-300/10 to-transparent blur-3xl" />

      <div className="section-container">
        <p className="eyebrow mb-4">{tr(t.eyebrow, lang)}</p>
        <h2 className="mb-12 text-3xl font-bold text-white sm:text-4xl md:mb-16">
          {tr(t.heading, lang)}
        </h2>

        {/* Timeline central com cartões alternados (vira lista simples no mobile) */}
        <div className="relative">
          {/* Linha vertical central (apenas desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent/40 via-white/10 to-transparent md:block" />

          <div className="flex flex-col gap-8 sm:gap-12 md:gap-16">
            {projects.map((project, index) => {
              const isLeft = index % 2 === 0
              return (
                <div
                  key={project.id}
                  className="relative grid items-center gap-6 md:grid-cols-2 md:gap-10"
                >
                  {/* Marcador de ano na linha central (desktop) */}
                  <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 flex-col items-center md:flex">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-accent/50 bg-base-900">
                      <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
                    </span>
                    <span className="mt-1 font-mono text-xs text-accent">
                      {project.year}
                    </span>
                  </div>

                  {/* Badge de ano no mobile (aparece acima do card) */}
                  <span className="font-mono text-xs text-accent md:hidden">
                    ● {project.year}
                  </span>

                  {/* Cartão posicionado à esquerda ou à direita (desktop) */}
                  {isLeft ? (
                    <>
                      <div className="md:pr-10">
                        <ProjectCard project={project} lang={lang} />
                      </div>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <div className="md:pl-10">
                        <ProjectCard project={project} lang={lang} />
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
