// ─────────────────────────────────────────────────────────────────────────────
// DADOS — edite aqui para adicionar, remover ou alterar qualquer informação
// ─────────────────────────────────────────────────────────────────────────────

const DATA = {
  // ── Data de atualização ───────────────────────────────────────────────────
  update: {
    date: "02/06/2026 às 18:52",
  },

  // ── Formação Acadêmica ────────────────────────────────────────────────────
  school: [
    {
      period: "2026/2029",
      imgSrc: "media/School/CUUAD.png",
      imgAlt: "Centro Universitário União das Américas Descomplica",
      courseUrl: "https://descomplica.com.br/faculdade/engenharia/engenharia-de-software/",
      courseTitle: "Graduação em Engenharia de Software",
      schoolUrl: "https://atendi.men/cuuad",
      schoolName: "Centro Universitário União das Américas Descomplica",
      location: "Minas Gerais, Brasil",
      active: true, // false = comentado/oculto
    },
    {
      period: "2026/2027",
      imgSrc: "media/School/SENAI.png",
      imgAlt: "Serviço Nacional de Aprendizagem Industrial",
      courseUrl: "https://www.fiemg.com.br/curso/tecnico-em-informatica-para-internet/",
      courseTitle: "Ensino Técnico em Informática para Internet",
      schoolUrl: "https://atendi.men/senai",
      schoolName: "Escola de Aprendizagem Industrial",
      location: "Minas Gerais, Brasil",
      active: false, // desativado
    },
    {
      period: "2025",
      imgSrc: "media/School/CESEC.png",
      imgAlt: "Centro Estadual de Educação Continuada",
      courseUrl: null,
      courseTitle: "Ensino Médio",
      schoolUrl: "https://atendi.men/cesec",
      schoolName: "Escola de Educação Continuada",
      location: "Minas Gerais, Brasil",
      active: true,
    },
    {
      period: "2016",
      imgSrc: "media/School/EEFA.png",
      imgAlt: "Escola Estadual Frei Anselmo",
      courseUrl: null,
      courseTitle: "Ensino Médio",
      schoolUrl: "https://atendi.men/eefa",
      schoolName: "Escola Frei Anselmo",
      location: "Minas Gerais, Brasil",
      active: true,
    },
    {
      period: "2007/2015",
      imgSrc: "media/School/EMFA.png",
      imgAlt: "Escola Municipal Frei Ambrósio",
      courseUrl: null,
      courseTitle: "Ensino Fundamental",
      schoolUrl: "https://atendi.men/emfa",
      schoolName: "Escola Frei Ambrósio",
      location: "Minas Gerais, Brasil",
      active: true,
    },
  ],

  // ── Certificações / Cursos ────────────────────────────────────────────────
  course: [
    {
      period: "2026",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/c6e5d865-9beb-4f10-b902-538131394bfc",
      certTitle: "Segurança da Informação para Todos",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://esr.rnp.br/",
      instructorName: "Secretaria de Governo Digital e Escola Superior de Redes/RNP",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/79add04c-ce16-4630-8fd4-2765fe3aa92b",
      certTitle: "Docência Plural - Formação em Interculturalidade e Bilinguismo",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://oei.int/",
      instructorName: "Organização dos Estados Ibero-Americanos",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/695e668b-a9db-4685-b700-5db524f49446",
      certTitle: "Fundamentos e Metodologia da Educação Corporativa",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://www.gov.br/pt-br/orgaos/secretaria-especial-da-receita-federal-do-brasil",
      instructorName: "Secretaria Especial da Receita Federal do Brasil",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/1bd48f5e-4de4-4d16-a43d-f595295ba7d1",
      certTitle: "Atuação do Encarregado na LGPD: A Função de Orientar",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://www.enap.gov.br/",
      instructorName: "Escola Nacional de Administração Pública",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/d6bae4bd-43dd-4587-ac8a-bec4fd070411",
      certTitle: "Segurança Cibernética: Controles 13 a 18 do CIS Controls",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/secretaria-de-governo-digital",
      instructorName: "Secretaria de Governo Digital",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/951a48f2-4441-4a01-94ac-f5a6aa4e0882",
      certTitle: "Segurança Cibernética: Controles 7 a 12 do CIS Controls",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/secretaria-de-governo-digital",
      instructorName: "Secretaria de Governo Digital",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/0d31cfc7-e417-4627-be7b-1bb6362dbc64",
      certTitle: "Segurança Cibernética: Controles 1 a 6 do CIS Controls",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/secretaria-de-governo-digital",
      instructorName: "Secretaria de Governo Digital",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/683d1c78-199b-4d49-8c64-7f5a5f90eabc",
      certTitle: "Fundamentos da Segurança Cibernética - Introdução ao CIS Controls",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/secretaria-de-governo-digital",
      instructorName: "Secretaria de Governo Digital",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/5fa90c93-95e0-4d0a-b7e8-59967dc8c485",
      certTitle: "Ética em IA",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://learn.microsoft.com/pt-br/",
      instructorName: "Microsoft",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/9a083c2b-89ff-4f45-a50d-5ce58c0a53fa",
      certTitle: "Fundamentos de Segurança da Informação na Transformação Digital",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/secretaria-de-governo-digital",
      instructorName: "Secretaria de Governo Digital",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/cdd9e62a-8d4b-473c-be2d-94c3edc19ef0",
      certTitle: "Como implementar a LGPD: bases, mecanismos e processos",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/secretaria-de-governo-digital",
      instructorName: "Secretaria de Governo Digital",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/49301bce-1b10-49a2-884c-731634796ebe",
      certTitle: "Planejamento e Organização Pessoal no Trabalho",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://www.gov.br/pt-br/orgaos/secretaria-especial-da-receita-federal-do-brasil",
      instructorName: "Secretaria Especial da Receita Federal do Brasil",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/2a5a4f71-cf25-4a50-8dfe-2369c62fd1be",
      certTitle: "Fundamentos da Lei Geral de Proteção de Dados (LGPD)",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://www.serpro.gov.br/",
      instructorName: "Serviço Federal de Processamento de Dados",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/afbc9295-25bf-4c90-a775-2af5a2630d48",
      certTitle: "Proteção de Dados Pessoais no Setor Público",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://www.gov.br/fazenda/pt-br",
      instructorName: "Ministério da Fazenda",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/2280d95e-662c-4145-90a1-cd270d8a0f59",
      certTitle: "Introdução à Lei Brasileira de Proteção de Dados Pessoais",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://itsrio.org/",
      instructorName: "ITS Rio",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/aa716d42-470f-4545-9d6a-f0024ad05656",
      certTitle: "2030 Agenda for Sustainable Development and e-Learning Design Basics",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://www.unssc.org/",
      instructorName: "United Nations System Staff College - UNSSC ONU",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/68b483a1-339b-4924-b26a-73a9b3e305c0",
      certTitle: "Aprendendo com Python",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://www.columbia.edu/",
      instructorName: "Columbia University",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/676427a1-ac68-4fa7-af02-1862fbe5d83b",
      certTitle: "Design Instrucional e Tecnologia com Articulate Storyline 360",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://www.columbia.edu/",
      instructorName: "Columbia University",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/f7a4bd13-df0d-4848-9b06-35fa9bb3d6f6",
      certTitle: "Introdução ao Processo Legislativo Municipal",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://www.enap.gov.br/",
      instructorName: "Escola Nacional de Administração Pública",
    },
    // {
    //   period: "",
    //   certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/",
    //   certTitle: "Docência Plural - Formação em Interculturalidade e Bilinguismo",
    //   schoolUrl: "https://atendi.men/evgov",
    //   schoolName: "Escola Virtual de Governo",
    //   instructorUrl: "https://www.bcb.gov.br/",
    //   instructorName: "Banco Central do Brasil",
    // },
    // {
    //   period: "",
    //   certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/",
    //   certTitle: "Fundamentos e Metodologia da Educação Corporativa",
    //   schoolUrl: "https://atendi.men/evgov",
    //   schoolName: "Escola Virtual de Governo",
    //   instructorUrl: "https://www.bcb.gov.br/",
    //   instructorName: "Banco Central do Brasil",
    // },
    {
      period: "",
      certUrl:
        "https://certificados.descomplica.com.br/graduacao/cdb356a0e4448794bcc832e6913390ec9d5703fa6d3b303a329477cb79ea5d6d",
      certTitle: "Programming Basics",
      schoolUrl: "https://atendi.men/cuuad",
      schoolName: "Centro Universitário União das Américas Descomplica",
      instructorUrl: "https://br.linkedin.com/in/oguscaetano",
      instructorName: "Prof. Gustavo Caetano",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/Zcqw212369268RDC",
      certTitle: "Habilidades de Resolução de Problemas",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://www.columbia.edu/",
      instructorName: "Columbia University",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/EUIq21236973Q2J1",
      certTitle: "Educação Financeira Pessoal",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://www.bcb.gov.br/",
      instructorName: "Banco Central do Brasil",
    },
    {
      period: "",
      certUrl: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/8It921226498QajW",
      certTitle: "Monitoração Eletrônica de Pessoas no Brasil",
      schoolUrl: "https://atendi.men/evgov",
      schoolName: "Escola Virtual de Governo",
      instructorUrl: "https://www.gov.br/mj/",
      instructorName: "Ministério da Justiça e Segurança Pública",
    },
    {
      period: "",
      certUrl:
        "https://certificados.descomplica.com.br/graduacao/66e214830ab9c2e50354dc246287b1079cd139540c71c688d9574fd3a3d00166",
      certTitle: "User Experience",
      schoolUrl: "https://atendi.men/cuuad",
      schoolName: "Centro Universitário União das Américas Descomplica",
      instructorUrl: "https://www.linkedin.com/in/luizchiavini/",
      instructorName: "Prof. Luiz Cláudio Chiavini Oliveira Júnior",
    },
    {
      period: "2025",
      certUrl:
        "https://certificados.descomplica.com.br/graduacao/4dfbaa724acdd11bbfda4ad1443c865f7b51927039621c9766316a93701eca55",
      certTitle: "Técnicas e Ferramentas para Projetos",
      schoolUrl: "https://atendi.men/cuuad",
      schoolName: "Centro Universitário União das Américas Descomplica",
      instructorUrl: "https://www.linkedin.com/in/giovannabaccarin/",
      instructorName: "Prof. Giovanna Baccarin",
    },
    {
      period: "",
      certUrl: "https://play.senai.br/student-api/certified/share/PLAY17662664341826",
      certTitle: "Contabilidade Básica",
      schoolUrl: "https://atendi.men/senaiplay",
      schoolName: "SENAI Play",
      instructorUrl: "https://www.instagram.com/professoraclaramos",
      instructorName: "Prof. Clara Ramos",
    },
    {
      period: "",
      certUrl:
        "https://certificados.descomplica.com.br/graduacao/98e2f7ff8ce4a2e68285b51573f202c2f488efa522c171e48072e81d859e121f",
      certTitle: "Soft Skills",
      schoolUrl: "https://atendi.men/cuuad",
      schoolName: "Centro Universitário União das Américas Descomplica",
      instructorUrl: "https://portadosfundos.com.br/producoes/",
      instructorName: "Porta dos Fundos",
    },
    {
      period: "",
      certUrl:
        "https://certificados.descomplica.com.br/graduacao/067f2ebdd95d20c2048b03e6cecd137f7a033c25a8db3205bcdcd1e7a906cab2",
      certTitle: "Produtividade e Organização",
      schoolUrl: "https://atendi.men/cuuad",
      schoolName: "Centro Universitário União das Américas Descomplica",
      instructorUrl: "https://www.linkedin.com/in/dehcarvalho/",
      instructorName: "Prof. Deborah Carvalho",
    },
    {
      period: "",
      certUrl:
        "https://certificados.descomplica.com.br/graduacao/90580e233124f0c52c137c5e2401ff720ca148097cdf8f2e80cef66553101e27",
      certTitle: "Introdução ao Desenvolvimento Web",
      schoolUrl: "https://atendi.men/cuuad",
      schoolName: "Centro Universitário União das Américas Descomplica",
      instructorUrl: "https://www.linkedin.com/in/henriquecesp/",
      instructorName: "Prof. Henrique Cruz",
    },
    {
      period: "",
      certUrl:
        "https://certificados.descomplica.com.br/graduacao/412e44013c99202960cf01edec0b0888ccd32e6ab3df27d7d27eeb8f12f21fab",
      certTitle: "Ferramentas e Aplicações da Inteligência Artificial",
      schoolUrl: "https://atendi.men/cuuad",
      schoolName: "Centro Universitário União das Américas Descomplica",
      instructorUrl: "https://www.linkedin.com/in/isaacdcesares/",
      instructorName: "Prof. Isaac D'Césares",
    },
    {
      period: "",
      certUrl:
        "https://certificados.descomplica.com.br/graduacao/08ef8b5c9a1b4543eb1ad5af863475134fb39a5666df5692c8bfe29591b4e447",
      certTitle: "Excel Básico",
      schoolUrl: "https://atendi.men/cuuad",
      schoolName: "Centro Universitário União das Américas Descomplica",
      instructorUrl: "https://atuarcursos.com/",
      instructorName: "Atuar Cursos",
    },
    {
      period: "2021",
      certUrl: null,
      certTitle: "Gestão de Projetos Socioambientais Usando IA",
      schoolUrl: "https://www.gov.br/trabalho-e-emprego/pt-br/servicos/trabalhador/qualificacao-profissional/caminho-digital",
      schoolName: "Escola do Trabalhador",
      instructorUrl: "https://learn.microsoft.com/training/",
      instructorName: "Microsoft",
    },
    {
      period: "2017",
      certUrl: null,
      certTitle: "Técnicas de Colagem em Calçados",
      schoolUrl: "https://atendi.men/senai",
      schoolName: "Serviço Nacional de Aprendizagem Industrial",
      instructorUrl: "https://www.amazonas.com.br/",
      instructorName: "Grupo Amazonas",
    },
    {
      period: "2015",
      certUrl: "https://www.jozuemarsh.com/notes/92/",
      certTitle: "Introdução à Fotografia",
      schoolUrl: "https://www.novaserrana.cam.mg.gov.br/",
      schoolName: "Câmara de Nova Serrana",
      instructorUrl: null,
      instructorName: "Prof. Janildo Carneiro",
    },
  ],

  // ── Atuação Profissional ──────────────────────────────────────────────────
  job: [
    {
      period: "2025/Atual",
      imgSrc: "media/Enterprise/Not-Found.png",
      imgAlt: "",
      linked: true, // true = item com classe "linked"
      roleUrl: null,
      roleTitle: "Assistente Administrativo",
      companyUrl: null,
      companyName: "Ricardo Componentes",
      modality: "Presencial • Nova Serrana, MG",
    },
    {
      period: "",
      imgSrc: null,
      imgAlt: "",
      linked: false,
      roleUrl: null,
      roleTitle: "Auxiliar Administrativo",
      companyUrl: null,
      companyName: "Ricardo Componentes",
      modality: "Presencial • Nova Serrana, MG",
    },
    {
      period: "2024/2025",
      imgSrc: "media/Enterprise/Jomar-Imobiliaria.png",
      imgAlt: "Jomar Imobiliária",
      linked: false,
      roleUrl: null,
      roleTitle: "Desenvolvedor Full Stack",
      companyUrl: "https://www.jomarimobiliaria.com.br/",
      companyName: "Jomar Imobiliária",
      modality: "Remoto • Nova Serrana, MG",
    },
    {
      period: "2022/2024",
      imgSrc: "media/Enterprise/Soul.png",
      imgAlt: "Soul",
      linked: false,
      roleUrl: null,
      roleTitle: "Desenvolvedor Full Stack",
      companyUrl: "https://www.soulplataforma.com/",
      companyName: "Soul",
      modality: "Híbrida • Nova Serrana, MG",
    },
    {
      period: "2022",
      imgSrc: "media/Enterprise/Itbee.png",
      imgAlt: "Itbee",
      linked: false,
      roleUrl: null,
      roleTitle: "Desenvolvedor de Aplicativo",
      companyUrl: "https://www.Itbee.com.br/",
      companyName: "Itbee",
      modality: "Remoto • Nova Serrana, MG",
    },
    {
      period: "2021",
      imgSrc: "media/Enterprise/Lynd.png",
      imgAlt: "Lynd",
      linked: false,
      roleUrl: null,
      roleTitle: "Técnico de Linha de Montagem",
      companyUrl: "https://www.lynd.com.br/",
      companyName: "Lynd Calçados",
      modality: "Presencial • Nova Serrana, MG",
    },
    {
      period: "2020/2021",
      imgSrc: "media/Enterprise/Roman-78.png",
      imgAlt: "Roman-78",
      linked: false,
      roleUrl: null,
      roleTitle: "Desenvolvedor Web",
      companyUrl: "https://www.roman78.com.br/",
      companyName: "Roman-78",
      modality: "Híbrida • Nova Serrana, MG",
    },
    {
      period: "2018/2019",
      imgSrc: "media/Enterprise/Jadlog.png",
      imgAlt: "Jadlog",
      linked: false,
      roleUrl: null,
      roleTitle: "Assistente Administrativo",
      companyUrl: "https://www.jadlog.com.br/",
      companyName: "Jadlog",
      modality: "Presencial • Nova Serrana, MG",
    },
    {
      period: "2017",
      imgSrc: "media/Enterprise/Black-Free.png",
      imgAlt: "Black Free",
      linked: false,
      roleUrl: null,
      roleTitle: "Técnico de Montagem de Calçados",
      companyUrl: "https://www.blackfree.com.br/",
      companyName: "Black Free Calçados",
      modality: "Presencial • Nova Serrana, MG",
    },
  ],

  // ── Idiomas ───────────────────────────────────────────────────────────────
  language: {
    basic: [
      { imgSrc: "media/Flag/Italy.png", name: "Italiano", url: "https://pt.duolingo.com/course/it/pt/", active: false },
      { imgSrc: "media/Flag/Germany.png", name: "Alemão", url: "https://pt.duolingo.com/course/de/pt/", active: false },
      { imgSrc: "media/Flag/France.png", name: "Francês", url: "https://pt.duolingo.com/course/fr/pt/", active: false },
      { imgSrc: "media/Flag/Spain.png", name: "Espanhol", url: "https://pt.duolingo.com/course/es/pt/", active: false },
      { imgSrc: "media/Flag/United-States.png", name: "Inglês", url: "https://pt.duolingo.com/course/en/pt/", active: true },
    ],
    native: [
      {
        imgSrc: "media/Flag/Brazil.png",
        name: '"Brasileiro" (Português)',
        url: "https://atendi.men/emfa",
        schoolName: "Escola Frei Ambrósio",
      },
    ],
  },

  // ── Prêmios e Títulos ─────────────────────────────────────────────────────
  award: [
    {
      period: "2025",
      title: "Membro Fundador da Organização Unidos Somos Mais Fortes",
      location: "Nova Serrana, MG",
      detail: "Tesoureiro • Conselho",
    },
    { period: "2017", title: "1º Lugar no Interclasse da EEFA", location: "Nova Serrana, MG", detail: "Futsal • EEFA" },
    { period: "2016", title: "1º Lugar no Interclasse da EEFA", location: "Nova Serrana, MG", detail: "Futsal • 1º A" },
    { period: "", title: "2º Lugar no Intercolegial de Nova Serrana", location: "Nova Serrana, MG", detail: "Futsal • EEFA" },
    { period: "2015", title: "1º Lugar no Interclasse da EMFA", location: "Nova Serrana, MG", detail: "Futsal • 1º A" },
    { period: "", title: "3º Lugar no Intercolegial de Nova Serrana", location: "Nova Serrana, MG", detail: "Futsal • EMFA" },
    { period: "2014", title: "1º Lugar no Interclasse da EMFA", location: "Nova Serrana, MG", detail: "Futsal • 1º A" },
    { period: "", title: "1º Lugar no Intercolegial de Nova Serrana", location: "Nova Serrana, MG", detail: "Futsal • EMFA" },
    { period: "2013", title: "2º Lugar no Interclasse da EMFA", location: "Nova Serrana, MG", detail: "Futsal • 1º A" },
  ],

  // ── Produções ─────────────────────────────────────────────────────────────
  production: {
    own: [
      {
        period: "2025",
        url: "https://www.youtube.com/watch?v=5YbPwWMYeQU",
        title: "Luxury and Progress",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        period: "",
        url: "https://www.youtube.com/watch?v=CNyYqTGtavg",
        title: "Soul",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        period: "2024",
        url: "https://www.youtube.com/watch?v=EFUJJurtffI",
        title: "Get It Up (VIP Remix)",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        period: "",
        url: "https://www.youtube.com/watch?v=ZEou6RmbadU",
        title: "Get It Up",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        period: "2022",
        url: "https://www.youtube.com/watch?v=8xB-i9omrz0",
        title: "Beija-Flor",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        period: "",
        url: "https://www.youtube.com/watch?v=Rw_aVQAXsuU",
        title: "Lost In A Box",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        period: "2019",
        url: "https://www.youtube.com/watch?v=Ls7WxZzpHAM",
        title: "Lavender Town",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        period: "",
        url: "https://www.youtube.com/watch?v=4ji4ASp5jxE",
        title: "Raven",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        period: "",
        url: "https://www.youtube.com/watch?v=hfUtlC4Z1R4",
        title: "Life",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        period: "",
        url: "https://www.youtube.com/watch?v=JoxxyxbKBSA&list=OLAK5uy_lDK8jUK50hyA8sWqy5lbdO543je_tGYKA&pp=0gcJCbAEOCosWNin",
        title: "2 0 1 9",
        format: "EP",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        period: "2018",
        url: "https://www.youtube.com/watch?v=kPXs6hi1_Ek",
        title: "Summer",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH & Pablo Ruan",
      },
      {
        period: "",
        url: "https://www.youtube.com/watch?v=l5wfmSMPHvg",
        title: "Filing (feat. Michael Mayo)",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH & DARKS Music",
      },
    ],
    featuring: [
      {
        period: "2020",
        url: "https://www.youtube.com/watch?v=zsno7r2FFWM",
        title: "Feel the Bass",
        format: "Single",
        artistUrl: "https://open.spotify.com/intl-pt/album/7zeb0mZyPkFR33HXmxBtjI?si=zYyKzgw4RluTfD6n0hkdUQ",
        artist: "D44RK & JOZÜEMARSH",
      },
      {
        period: "2019",
        url: "https://www.youtube.com/watch?v=oEAmQ7TBKdY",
        title: "Feelings (JOZÜEMARSH Remix)",
        format: "Single",
        artistUrl: "https://music.apple.com/album/feelings-joz%C3%BCemarsh-remix-single/1451002427",
        artist: "Pablo Ruan",
      },
      {
        period: "2018",
        url: "https://www.youtube.com/watch?v=_Alf6yqYokA",
        title: "Retro Party",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "BRØ DUBZ",
      },
      {
        period: "",
        url: "https://www.youtube.com/watch?v=HFki8OwAbRw",
        title: "Hello Jester4 (JOZÜEMARSH Remix)",
        format: "EP",
        artistUrl: "https://music.apple.com/album/hello-jester4-joz%C3%BCemarsh-remix/1434919493?i=1434919499",
        artist: "DishierJester4",
      },
    ],
  },

  // ── Eventos ───────────────────────────────────────────────────────────────
  event: [
    {
      period: "2025",
      url: "https://www.jozuemarsh.com/notes/46/",
      title: "Organização Unidos Somos Mais Fortes: Comemoração do Dia das Crianças",
      location: "Nova Serrana, MG",
      type: "Ação Social",
    },
    {
      period: "",
      url: "https://www.instagram.com/p/DPpJ5J6gZpX/",
      title: "Sicoob Credinova: Educação Financeira",
      location: "Nova Serrana, MG",
      type: "Palestra",
    },
    {
      period: "",
      url: "https://www.novaserrana.mg.gov.br/portal/noticias/0/3/6096/cesec-de-nova-serrana-celebra-15-anos-de-historia-com-solenidade-especial",
      title: "Comemoração do Aniversário de 15 Anos do CESEC",
      location: "Nova Serrana, MG",
      type: "Solenidade",
    },
    {
      period: "",
      url: null,
      title: "Marco de Fundação da Organização Unidos Somos Mais Fortes",
      location: "Nova Serrana, MG",
      type: "Assembleia",
    },
    {
      period: "2017",
      url: "https://www.jozuemarsh.com/notes/89/",
      title: "11ª Edição da Feira de Máquinas e Componentes para Calçados",
      location: "Nova Serrana, MG",
      type: "Feira",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// RENDERIZAÇÃO — não é necessário editar abaixo desta linha
// ─────────────────────────────────────────────────────────────────────────────

// Utilitários
const el = (selector) => document.querySelector(selector);
const link = (url, content, cls = "") =>
  url ? `<a href="${url}" target="_blank"${cls ? ` class="${cls}"` : ""}>${content}</a>` : content;

function renderItem(leftHtml, rightHtml, extraClass = "") {
  return `
    <div class="item${extraClass ? " " + extraClass : ""}">
      <div class="col end">${leftHtml}</div>
      <div class="col">${rightHtml}</div>
    </div>`;
}

function inject(sectionId, html) {
  const container = el(`#${sectionId} .content`);
  if (container) container.innerHTML = html;
}

// ── Data de atualização ───────────────────────────────────────────────────────
function renderUpdate() {
  const elements = document.querySelectorAll('[autoupdate="currentdate"]');

  const now = new Date();
  const date = now.toLocaleDateString("pt-BR");
  const time = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  const formattedDate = `${date} às ${time}`;

  elements.forEach((el) => {
    el.textContent = formattedDate;
  });

  const span = el('[autoupdate="changeddate"]');
  if (span) span.textContent = DATA.update.date;
}

// ── Formação Acadêmica ────────────────────────────────────────────────────────
function renderSchool() {
  const html = DATA.school
    .filter((d) => d.active !== false)
    .map((d) =>
      renderItem(
        `<span class="h6">${d.period || "&nbsp;"}</span>
       <img decoding="async" src="${d.imgSrc}" title="${d.imgAlt}" alt="${d.imgAlt}" loading="lazy" />`,
        `${link(d.courseUrl, `<span class="h5">${d.courseTitle}</span>`)}
       ${link(d.schoolUrl, `<span class="h6">${d.schoolName}</span>`)}
       <span class="h6">${d.location}</span>`
      )
    )
    .join("");
  inject("school", html);
}

// ── Certificações / Cursos ────────────────────────────────────────────────────
function renderCourse() {
  const html = DATA.course
    .map((d) =>
      renderItem(
        `<span class="h6">${d.period || "&nbsp;"}</span>`,
        `${link(d.certUrl, `<span class="h5">${d.certTitle}</span>`)}
     ${link(d.schoolUrl, `<span class="h6">${d.schoolName}</span>`)}
     ${link(d.instructorUrl, `<span class="h6">${d.instructorName}</span>`)}`
      )
    )
    .join("");
  inject("course", html);
}

// ── Atuação Profissional ──────────────────────────────────────────────────────
function renderJob() {
  const html = DATA.job
    .map((d) =>
      renderItem(
        `<span class="h6">${d.period || "&nbsp;"}</span>
        ${d.imgSrc ? `<img decoding="async" src="${d.imgSrc}" title="${d.imgAlt}" alt="${d.imgAlt}" loading="lazy" />` : '<div class="img"></div>'}`,
        `${link(d.roleUrl, `<span class="h5">${d.roleTitle}</span>`)}
        ${link(d.companyUrl, `<span class="h6">${d.companyName}</span>`)}
        <span class="h6">${d.modality}</span>`,
        d.linked ? "linked" : ""
      )
    )
    .join("");
  inject("job", html);
}

// ── Idiomas ───────────────────────────────────────────────────────────────────
function renderLanguage() {
  const section = el("#language");
  if (!section) return;
  const contents = section.querySelectorAll(".content");

  // Bloco Básico
  const basicHtml = [
    renderItem(`<span class="h6"><b>Básico</b></span>`, `<span class="h6"></span>`),
    ...DATA.language.basic
      .filter((d) => d.active !== false)
      .map((d) =>
        renderItem(
          `<img decoding="async" src="${d.imgSrc}" title="" alt="" loading="lazy" />`,
          `<span class="h6">${d.name}</span>
         ${link(d.url, `<span class="h6">Duolingo</span>`)}`
        )
      ),
  ].join("");

  // Bloco Nativo
  const nativeHtml = [
    renderItem(`<span class="h6"><b>Nativo</b></span>`, `<span class="h6"></span>`),
    ...DATA.language.native.map((d) =>
      renderItem(
        `<img decoding="async" src="${d.imgSrc}" title="" alt="" loading="lazy" />`,
        `<span class="h6">${d.name}</span>
       ${link(d.url, `<span class="h6">${d.schoolName}</span>`)}`
      )
    ),
  ].join("");

  //   if (contents[0]) contents[0].innerHTML = basicHtml;
  //   if (contents[1]) contents[1].innerHTML = nativeHtml;
  if (contents[0]) contents[0].innerHTML = [basicHtml + nativeHtml];
}

// ── Prêmios e Títulos ─────────────────────────────────────────────────────────
function renderAward() {
  const html = DATA.award
    .map((d) =>
      renderItem(
        `<span class="h6">${d.period || "&nbsp;"}</span>`,
        `<span class="h5">${d.title}</span>
     <span class="h6">${d.location}</span>
     <span class="h6">${d.detail}</span>`
      )
    )
    .join("");
  inject("award", html);
}

// ── Produções ─────────────────────────────────────────────────────────────────
function renderProduction() {
  const section = el("#production");
  if (!section) return;
  const contents = section.querySelectorAll(".content");

  const musicItem = (d) =>
    renderItem(
      `<span class="h6">${d.period || "&nbsp;"}</span>`,
      `${link(d.url, `<span class="h5">${d.title}</span>`)}
     <span class="h6">${d.format}</span>
     ${link(d.artistUrl, `<span class="h6">${d.artist}</span>`)}`
    );

  const ownHtml = [
    renderItem(`<span class="h6"><b>Músicas Publicadas</b></span>`, `<span class="h6"></span>`),
    ...DATA.production.own.map(musicItem),
  ].join("");

  const featHtml = [
    renderItem(`<span class="h6"><b>Participações em Músicas Publicadas</b></span>`, `<span class="h6"></span>`),
    ...DATA.production.featuring.map(musicItem),
  ].join("");

  //   if (contents[0]) contents[0].innerHTML = ownHtml;
  //   if (contents[1]) contents[1].innerHTML = featHtml;
  if (contents[0]) contents[0].innerHTML = [ownHtml + featHtml];
}

// ── Eventos ───────────────────────────────────────────────────────────────────
function renderEvent() {
  const html = DATA.event
    .map((d) =>
      renderItem(
        `<span class="h6">${d.period || "&nbsp;"}</span>`,
        `${link(d.url, `<span class="h5">${d.title}</span>`)}
     <span class="h6">${d.location}</span>
     <span class="h6">${d.type}</span>`
      )
    )
    .join("");
  inject("event", html);
}

// ── Padrão ────────────────────────────────────────────────────────────────────
function renderDefault(id) {
  const html = renderItem(
    `<span class="h6">Status</span>`,
    `<span class="h6">Informação</span>
     <span class="h6">Indisponível</span>`
  );
  inject(id, html);
}

// ── Expandir/Fechar Seções ────────────────────────────────────────────────────
function renderExpands() {
  // Accordion toggle for sections
  document.querySelectorAll("section h2.title").forEach((title) => {
    const section = title.closest("section");
    const content = section.querySelector(".content");
    const width = window.innerWidth;

    // Create toggle icon
    const icon = document.createElement("span");
    icon.classList.add("accordion-icon");
    icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
    title.prepend(icon);

    // Style title as clickable
    title.style.display = "flex";
    title.style.flexDirection = "row";
    title.style.flexWrap = "nowrap";
    title.style.alignContent = "center";
    title.style.justifyContent = "flex-start";
    title.style.alignItems = "center";
    title.style.gap = "12px";
    title.style.cursor = "pointer";
    title.style.userSelect = "none";

    // Set initial state based on .open class
    const isOpen = section.classList.contains("open");
    section.style.overflow = "hidden";
    section.style.transition = "max-height 0.4s ease, opacity 0.4s ease";
    // content.style.overflow = "hidden";
    // content.style.transition = "max-height 0.4s ease, opacity 0.4s ease";

    if (isOpen) {
      section.style.maxHeight = content.scrollHeight * 2 + (title.scrollHeight + (width <= 768 ? 24 : 48)) + "px";
      //   content.style.maxHeight = (content.scrollHeight * 2) + "px";
      content.style.opacity = "1";
      icon.classList.add("open");
    } else {
      section.style.maxHeight = title.scrollHeight + (width <= 768 ? 24 : 48) + "px";
      //   content.style.maxHeight = "0";
      content.style.opacity = "0";
    }

    title.addEventListener("click", () => {
      const expanded = icon.classList.contains("open");

      if (expanded) {
        section.style.maxHeight = title.scrollHeight + (width <= 768 ? 24 : 48) + "px";
        // content.style.maxHeight = "0";
        content.style.opacity = "0";
        icon.classList.remove("open");
        section.classList.remove("open");
      } else {
        section.style.maxHeight = content.scrollHeight * 2 + (title.scrollHeight + (width <= 768 ? 24 : 48)) + "px";
        // content.style.maxHeight = (content.scrollHeight * 2) + "px";
        content.style.opacity = "1";
        icon.classList.add("open");
        section.classList.add("open");
      }
    });
  });
}

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderUpdate();
  renderSchool();
  renderCourse();
  renderDefault("teaching"); // renderTeaching();
  renderJob();
  renderDefault("project"); // renderProject();
  renderLanguage();
  renderAward();
  renderProduction();
  renderDefault("magazine"); // renderMagazine();
  renderEvent();
  renderDefault("guidelines"); // renderGuidelines();
  renderDefault("education"); // renderEducation();
  renderDefault("other"); // renderOther();

  setTimeout(() => renderExpands(), 0);
});
