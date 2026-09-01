/* =============================================================================
 *  ✨ ARQUIVO DE CONFIGURAÇÃO DO PORTFÓLIO — EDITE APENAS ESTE ARQUIVO ✨
 * =============================================================================
 *
 *  📸 FOTOS:
 *    - Coloque suas imagens na pasta:  public/profile/
 *    - Referencie começando com "/profile/..."  (ex.: "/profile/rafael.jpg")
 *
 *  🌐 IDIOMAS:
 *    - Campos com { pt: "...", en: "..." } são bilíngues (toggle PT/EN no topo).
 *
 *  ⚠️  Itens marcados com  // TODO  ainda precisam dos seus dados.
 * ========================================================================== */

export const profile = {
  /* ---------------------------------------------------------------------------
   * 1) IDENTIDADE
   * ------------------------------------------------------------------------ */
  identity: {
    name: 'Rafael Lopes de Souza da Fonseca',
    firstName: 'Rafael',
    logo: 'rafaelfonseca.cloud',
    role: {
      pt: 'Arquiteto de Soluções em Nuvem | AWS Certified',
      en: 'Cloud Solutions Architect | AWS Certified',
    },
    greeting: {
      pt: 'OLÁ, EU SOU O RAFAEL FONSECA',
      en: 'HELLO, I AM RAFAEL FONSECA',
    },
    bio: {
      pt: 'Trabalho com arquitetura e operação de ambientes na AWS. Sou certificado em três trilhas da AWS — Cloud Practitioner, Solutions Architect – Associate e CloudOps Engineer – Associate — e atuo no dia a dia com sustentação de infraestrutura e FinOps, identificando oportunidades de melhoria em arquitetura, custo e confiabilidade nos ambientes dos clientes.',
      en: 'I work with cloud architecture and operations on AWS. I hold three AWS certifications — Cloud Practitioner, Solutions Architect – Associate and CloudOps Engineer – Associate — and my daily work spans infrastructure support and FinOps, finding opportunities to improve architecture, cost and reliability across client environments.',
    },
    bioSecondary: {
      pt: 'Acredito que uma boa arquitetura se prova na operação: ambiente bem desenhado é aquele que custa menos, quebra menos e é fácil de sustentar.',
      en: 'I believe good architecture proves itself in operations: a well-designed environment costs less, breaks less and is easy to maintain.',
    },
  },

  /* ---------------------------------------------------------------------------
   * 2) FOTO / MÍDIA DO HERO
   * ------------------------------------------------------------------------ */
  hero: {
    heroMedia: 'photo', // 'photo' | 'code'
    photo: '/profile/rafael.jpeg', // TODO: salve sua foto em public/profile/ com este nome
    favicon: null,
    cta: {
      primary: { pt: 'Ver Projetos', en: 'View Projects' },
      secondary: { pt: 'Entrar em Contato', en: 'Get in Touch' },
    },
  },

  /* ---------------------------------------------------------------------------
   * 3) PROJETOS EM DESTAQUE
   *    TODO: substitua pelos seus projetos reais (título, ano, repo, descrição).
   * ------------------------------------------------------------------------ */
  projects: [
    {
      id: 'projeto-1',
      year: '2025',
      title: 'AWS Health Abuse Alerting',
      description: {
        pt: 'Templates CloudFormation para alertar Abuse Events do AWS Health (spam, phishing, DDoS, port scan) em toda a AWS Organization via StackSets, com notificação por e-mail (SNS). Inclui variante standalone (por conta) e variante com hub central (EventBridge cross-account).',
        en: 'CloudFormation templates to alert on AWS Health Abuse Events (spam, phishing, DDoS, port scans) across an AWS Organization using StackSets, with email notifications (SNS). Includes both a standalone variant (per account) and a central hub variant (cross-account EventBridge).',
      },
      tags: ['AWS', 'Terraform', 'CloudFormation', 'IAM'],
      repo: 'https://github.com/seu-usuario/projeto-1',
      demo: '',
      image: '',
      preview: 'https://github.com/Rafael-Fonseca1510/Projeto-Health-Abuse-Event.git',
    },
    {
      id: 'projeto-2',
      year: '2025',
      title: 'Nome do Projeto 2',
      description: {
        pt: 'Descreva aqui o objetivo do projeto, o problema que ele resolve e os principais resultados alcançados.',
        en: 'Describe the project goal here, the problem it solves and the main results achieved.',
      },
      tags: ['FinOps', 'Cost Explorer', 'CloudWatch'],
      repo: 'https://github.com/seu-usuario/projeto-2',
      demo: '',
      image: '',
      preview: 'from-fuchsia-500/25 via-purple-500/10 to-transparent',
    },
    {
      id: 'projeto-3',
      year: '2024',
      title: 'Nome do Projeto 3',
      description: {
        pt: 'Descreva aqui o objetivo do projeto, o problema que ele resolve e os principais resultados alcançados.',
        en: 'Describe the project goal here, the problem it solves and the main results achieved.',
      },
      tags: ['EC2', 'VPC', 'Auto Scaling', 'Linux'],
      repo: 'https://github.com/seu-usuario/projeto-3',
      demo: '',
      image: '',
      preview: 'from-teal-500/20 via-cyan-500/10 to-transparent',
    },
    {
      id: 'projeto-4',
      year: '2024',
      title: 'Nome do Projeto 4',
      description: {
        pt: 'Descreva aqui o objetivo do projeto, o problema que ele resolve e os principais resultados alcançados.',
        en: 'Describe the project goal here, the problem it solves and the main results achieved.',
      },
      tags: ['Lambda', 'Python', 'S3', 'CI/CD'],
      repo: 'https://github.com/seu-usuario/projeto-4',
      demo: '',
      image: '',
      preview: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    },
  ],

  /* ---------------------------------------------------------------------------
   * 4) EXPERIÊNCIAS PROFISSIONAIS
   * ------------------------------------------------------------------------ */
  experiences: [
    {
      id: 'exp-1',
      initials: 'F1',
      role: { pt: 'Estagiário de Operações em Nuvem', en: 'Cloud Operations Intern' },
      company: 'Force One IT',
      period: { pt: 'Janeiro 2026 – Presente', en: 'January 2026 – Present' }, // TODO: informe o mês/ano de início
      description: {
        pt: 'Atuo na área de operação, dando sustentação a ambientes AWS de múltiplos clientes e participando das iniciativas de FinOps. O trabalho envolve acompanhar o consumo e identificar oportunidades de redução de custo, além de propor melhorias de arquitetura e de operação que tornem os ambientes mais eficientes, estáveis e fáceis de manter.',
        en: 'I work in the operations team, supporting AWS environments for multiple clients and taking part in FinOps initiatives. The role involves tracking usage and identifying cost-reduction opportunities, as well as proposing architecture and operational improvements that make environments more efficient, stable and easier to maintain.',
      },
    },
  ],

  /* ---------------------------------------------------------------------------
   * 5) CONTATO (cards clicáveis da seção final)
   *    icon: 'email' | 'whatsapp' | 'linkedin' | 'github' | 'phone' | 'site'
   * ------------------------------------------------------------------------ */
  contact: [
    { id: 'email',    label: 'E-mail',   icon: 'email',    value: 'rafaellopessouzafonseca@gmail.com', href: 'mailto:rafaellopessouzafonseca@gmail.com' },
    // TODO: preencha ou remova os cards abaixo
    { id: 'linkedin', label: 'LinkedIn', icon: 'linkedin', value: 'linkedin.com/in/rafael-lopes-souza-da-fonseca', href: 'https://www.linkedin.com/in/rafael-lopes-souza-da-fonseca-046850365?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
    { id: 'github',   label: 'GitHub',   icon: 'github',   value: 'github.com/sRafael-Fonseca1510',   href: 'https://github.com/Rafael-Fonseca1510' },
  ],

  /* ---------------------------------------------------------------------------
   * 6) REDES SOCIAIS (ícones do rodapé)
   * ------------------------------------------------------------------------ */
  socials: [
    // TODO: preencha as URLs reais
    { icon: 'github',   href: 'https://github.com/seu-usuario',     label: 'GitHub' },
    { icon: 'linkedin', href: 'https://linkedin.com/in/seu-perfil', label: 'LinkedIn' },
  ],

  /* ---------------------------------------------------------------------------
   * 7) TEXTOS DA SEÇÃO DE CONTATO + RODAPÉ
   * ------------------------------------------------------------------------ */
  contactSection: {
    lead: {
      pt: 'Fique à vontade para entrar em contato se quiser falar sobre arquitetura em nuvem, otimização de custos na AWS ou uma proposta de projeto.',
      en: 'Feel free to reach out if you want to talk about cloud architecture, AWS cost optimization or a project proposal.',
    },
  },
}

export default profile