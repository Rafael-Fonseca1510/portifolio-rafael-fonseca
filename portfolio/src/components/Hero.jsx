import { Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { profile } from '../config/profile.config'
import { tr } from '../config/i18n'

// Janela de código estilizada (usada quando heroMedia === 'code')
function CodeWindow() {
  return (
    <div className="glass-card overflow-hidden shadow-card">
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-relaxed sm:p-6 sm:text-[13px]">
<span className="text-slate-500">1</span>  <span className="text-fuchsia-400">const</span> <span className="text-cyan-300">dev</span> <span className="text-slate-400">=</span> {'{'}
<span className="text-slate-500">2</span>    <span className="text-sky-300">nome</span>: <span className="text-emerald-300">'{profile.identity.name}'</span>,
<span className="text-slate-500">3</span>    <span className="text-sky-300">stack</span>: [<span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'Node'</span>, <span className="text-emerald-300">'TS'</span>],
<span className="text-slate-500">4</span>    <span className="text-sky-300">foco</span>: <span className="text-emerald-300">'Full Stack'</span>,
<span className="text-slate-500">5</span>    <span className="text-sky-300">disponivel</span>: <span className="text-orange-300">true</span>,
<span className="text-slate-500">6</span>  {'}'};
<span className="text-slate-500">7</span>
<span className="text-slate-500">8</span>  <span className="text-fuchsia-400">function</span> <span className="text-yellow-200">construir</span>(<span className="text-orange-300">ideia</span>) {'{'}
<span className="text-slate-500">9</span>    <span className="text-fuchsia-400">return</span> dev.<span className="text-yellow-200">transformar</span>(ideia);
<span className="text-slate-500">10</span> {'}'}
      </pre>
    </div>
  )
}

// Foto de perfil com moldura e brilho (usada quando heroMedia === 'photo')
function ProfilePhoto() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 to-transparent blur-2xl" />
      <div className="glass-card relative overflow-hidden shadow-card">
        <img
          src={profile.hero.photo}
          alt={profile.identity.name}
          className="aspect-square w-full object-cover"
          loading="eager"
        />
        {/* Overlay sutil para integrar ao tema dark */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-900/60 via-transparent to-transparent" />
      </div>
    </div>
  )
}

export default function Hero({ lang }) {
  const { identity, hero } = profile

  return (
    <section
      id="sobre"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pt-40 md:pb-28"
    >
      {/* Orbe de brilho decorativo */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-slate-300/10 to-accent/5 blur-3xl" />

      <div className="section-container grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Coluna de texto */}
        <div className="animate-fade-up">
          <p className="eyebrow mb-5">{tr(identity.greeting, lang)}</p>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {tr(identity.role, lang)}
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {tr(identity.bio, lang)}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
            {tr(identity.bioSecondary, lang)}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              href="#projetos"
              variant="contained"
              color="primary"
              className="!shadow-glow"
              fullWidth={false}
            >
              {tr(hero.cta.primary, lang)}
            </Button>
            <Button
              href="#contato"
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: '#e2e8f0',
                borderColor: 'rgba(255,255,255,0.15)',
                '&:hover': { borderColor: '#22d3ee', color: '#22d3ee' },
              }}
            >
              {tr(hero.cta.secondary, lang)}
            </Button>
          </div>
        </div>

        {/* Coluna de mídia: foto ou janela de código (definido no config) */}
        <div className="animate-fade-up [animation-delay:150ms]">
          {hero.heroMedia === 'photo' ? <ProfilePhoto /> : <CodeWindow />}
        </div>
      </div>
    </section>
  )
}
