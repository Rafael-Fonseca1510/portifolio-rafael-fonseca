import { profile } from '../config/profile.config'
import { sectionTitles, tr } from '../config/i18n'

export default function Experience({ lang }) {
  const t = sectionTitles.experience
  const experiences = profile.experiences

  return (
    <section id="experiencias" className="py-16 md:py-28">
      <div className="section-container">
        <p className="eyebrow mb-4">{tr(t.eyebrow, lang)}</p>
        <h2 className="mb-10 text-3xl font-bold text-white sm:text-4xl md:mb-12">
          {tr(t.heading, lang)}
        </h2>

        <div className="flex flex-col gap-4 sm:gap-5">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="glass-card group flex flex-col gap-4 p-5 transition-all duration-300 hover:border-accent/25 sm:flex-row sm:items-start sm:gap-6 sm:p-6"
            >
              {/* Avatar com iniciais */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 font-mono text-sm font-bold text-accent">
                {exp.initials}
              </div>

              {/* Conteúdo */}
              <div className="flex-1">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <h3 className="text-base font-semibold text-white">
                    {tr(exp.role, lang)}
                  </h3>
                  <span className="font-mono text-xs text-accent">
                    {tr(exp.period, lang)}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-slate-400">{exp.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {tr(exp.description, lang)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
