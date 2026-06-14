// ─────────────────────────────────────────────────────────────────────────────
// DADOS — edite aqui para adicionar, remover ou alterar qualquer informação
// ─────────────────────────────────────────────────────────────────────────────

const DATA = {
  // ── Data de atualização ───────────────────────────────────────────────────
  update: {
    date: "14/06/2026 às 12:45",
  },

  // ── Formação Acadêmica ────────────────────────────────────────────────────
  school: [
    {
      active: false, // desativado
      text1: "2026/2027",
      imgSrc: "media/School/SENAI.png",
      imgAlt: "Serviço Nacional de Aprendizagem Industrial",
      link2: "https://www.fiemg.com.br/curso/tecnico-em-informatica-para-internet/",
      text2: "Ensino Técnico em Informática para Internet",
      link3: "https://atendi.men/senai",
      text3: "Escola de Aprendizagem Industrial",
      text4: "Minas Gerais, Brasil",
    },
    {
      active: true, // false = comentado/oculto
      text1: "2026/2029",
      imgSrc: "media/School/CUUAD.png",
      imgAlt: "Centro Universitário União das Américas Descomplica",
      link2: "https://descomplica.com.br/faculdade/engenharia/engenharia-de-software/",
      text2: "Graduação em Engenharia de Software",
      link3: "https://atendi.men/cuuad",
      text3: "Centro Universitário União das Américas Descomplica",
      text4: "Minas Gerais, Brasil",
    },
    {
      active: true,
      text1: "2025",
      imgSrc: "media/School/CESEC.png",
      imgAlt: "Centro Estadual de Educação Continuada",
      link2: null,
      text2: "Ensino Médio",
      link3: "https://atendi.men/cesec",
      text3: "Escola de Educação Continuada",
      text4: "Minas Gerais, Brasil",
    },
    {
      active: true,
      text1: "2016",
      imgSrc: "media/School/EEFA.png",
      imgAlt: "Escola Estadual Frei Anselmo",
      link2: null,
      text2: "Ensino Médio",
      link3: "https://atendi.men/eefa",
      text3: "Escola Frei Anselmo",
      text4: "Minas Gerais, Brasil",
    },
    {
      active: true,
      text1: "2007/2015",
      imgSrc: "media/School/EMFA.png",
      imgAlt: "Escola Municipal Frei Ambrósio",
      link2: null,
      text2: "Ensino Fundamental",
      link3: "https://atendi.men/emfa",
      text3: "Escola Frei Ambrósio",
      text4: "Minas Gerais, Brasil",
    },
  ],

  // ── Certificações / Cursos ────────────────────────────────────────────────
  course: [
    {
      text1: "2026",
      linked: true,
      imgSrc: "media/School/ENAP.png",
      imgAlt: "Escola Nacional de Administração Pública",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/c3ef2547-5382-4bba-beb3-0f530e1a8499",
      text2: "Comunicação Estratégica - Eixo 1 ao 4",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.enap.gov.br/",
      text4: "Escola Nacional de Administração Pública",
    },
    {
      text1: "&nbsp;",
      linked: false,
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/ebb064ec-a74b-409d-94fd-eb2fa2d1f92d",
      text2: "Autoconhecimento e Desenvolvimento Pessoal - Eixo 1 ao 3",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.enap.gov.br/",
      text4: "Escola Nacional de Administração Pública",
    },
    {
      text1: "2026",
      linked: false,
      imgSrc: "media/School/EVGB.png",
      imgAlt: "Escola Virtual de Governo",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/d89dc76b-b331-43e8-9a2e-5cc76a87713d",
      text2: "Engenharia de Dados e IA Aplicada para Gestores de TIC - Eixo 1 ao 4",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.enap.gov.br/",
      text4: "SGD, ENAP e SERPRO",
    },
    {
      text1: "2026",
      linked: false,
      imgSrc: "media/School/ENAP.png",
      imgAlt: "Escola Nacional de Administração Pública",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/75e3bc2e-d7b7-40c2-b9c0-66200cd3b68e",
      text2: "Inova: Gestão e Governança de Estatais - Eixo 1 ao 3",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.enap.gov.br/",
      text4: "Escola Nacional de Administração Pública",
    },
    {
      text1: "2026",
      imgSrc: "media/School/EVGB.png",
      imgAlt: "Escola Virtual de Governo",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/e4d6aabf-fc69-4b88-972f-84c26d70209d",
      text2: "Gestão de Pessoas nas Empresas Estatais",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.gov.br/gestao/pt-br/assuntos/estatais",
      text4: "Secretaria de Coordenação e Governança das Empresas Estatais",
    },
    {
      text1: "2026",
      imgSrc: "media/School/ENAP.png",
      imgAlt: "Escola Nacional de Administração Pública",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/c74db852-3767-492c-8632-ebf28bbc6e56",
      text2: "Compliance Anticorrupção em Empresas Estatais",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.enap.gov.br/",
      text4: "Escola Nacional de Administração Pública",
    },
    {
      text1: "2026",
      imgSrc: "media/Gov/SERPRO.png",
      imgAlt: "Serviço Federal de Processamento de Dados",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/2e07063d-3e5a-44c6-87bf-d93ef0766662",
      text2: "IA - Aplicações no Governo Federal",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.serpro.gov.br/",
      text4: "Serviço Federal de Processamento de Dados",
    },
    {
      text1: "2026",
      linked: true,
      imgSrc: "media/Gov/RF.png",
      imgAlt: "Receita Federal do Brasil",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/2a38f840-2ba8-4fae-9f55-785f91113d7a",
      text2: "Gestão Pessoal - Base da Liderança",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.gov.br/pt-br/orgaos/secretaria-especial-da-receita-federal-do-brasil",
      text4: "Secretaria Especial da Receita Federal do Brasil",
    },
    {
      text1: "&nbsp;",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/dad80d32-20e3-4d9d-afa7-5c849b382070",
      text2: "Comunicação não violenta",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.gov.br/pt-br/orgaos/secretaria-especial-da-receita-federal-do-brasil",
      text4: "Secretaria Especial da Receita Federal do Brasil",
    },
    {
      text1: "2026",
      imgSrc: "media/School/EVGB.png",
      imgAlt: "Escola Virtual de Governo",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/56ed6317-625b-4d2b-9d3b-332c61adfc20",
      text2: "Cultura Organizacional Ágil Aplicada ao Contexto Público",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/secretaria-de-governo-digital",
      text4: "Secretaria de Governo Digital",
    },
    {
      text1: "2026",
      linked: true,
      imgSrc: "media/School/ENAP.png",
      imgAlt: "Escola Nacional de Administração Pública",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/3734462d-44ae-4cee-a735-5e0a02b20162",
      text2: "Primeiros passos para uso de Linguagem Simples",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.enap.gov.br/",
      text4: "Escola Nacional de Administração Pública",
    },
    {
      text1: "&nbsp;",
      linked: true,
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/a54e4d93-f4e3-43d5-83f4-0d96f7b98920",
      text2: "Uso de Mídias Sociais na Comunicação Institucional",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.enap.gov.br/",
      text4: "Escola Nacional de Administração Pública",
    },
    {
      text1: "&nbsp;",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/94006f3e-1c60-4b9c-9005-7365fd96fcf9",
      text2: "Comunicação Pública e Comunicação de Governo",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.enap.gov.br/",
      text4: "Escola Nacional de Administração Pública",
    },
    {
      text1: "2026",
      imgSrc: "media/Gov/MDHC.png",
      imgAlt: "Ministério dos Direitos Humanos e Cidadania",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/67de4acc-ba0c-420f-bcea-96df5741a4d5",
      text2: "Acessibilidade na Comunicação",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.gov.br/mdh/pt-br",
      text4: "Ministério dos Direitos Humanos e Cidadania",
    },
    {
      text1: "2026",
      imgSrc: "media/Gov/SERPRO.png",
      imgAlt: "Serviço Federal de Processamento de Dados",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/cf6a2ac4-6b4f-42ae-bbb6-eb814885d6ab",
      text2: "Introdução à Ciência de Dados - Conceitos e Ferramentas",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.serpro.gov.br/",
      text4: "Serviço Federal de Processamento de Dados",
    },
    {
      text1: "2026",
      imgSrc: "media/School/RNP.png",
      imgAlt: "Escola Superior de Redes",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/c6e5d865-9beb-4f10-b902-538131394bfc",
      text2: "Segurança da Informação para Todos",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://esr.rnp.br/",
      text4: "Escola Superior de Redes",
    },
    {
      text1: "2026",
      imgSrc: "media/Enterprise/OEI.png",
      imgAlt: "Organização dos Estados Ibero-Americanos",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/79add04c-ce16-4630-8fd4-2765fe3aa92b",
      text2: "Docência Plural - Formação em Interculturalidade e Bilinguismo",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://oei.int/",
      text4: "Organização dos Estados Ibero-Americanos",
    },
    {
      text1: "2026",
      imgSrc: "media/Gov/RF.png",
      imgAlt: "Receita Federal do Brasil",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/695e668b-a9db-4685-b700-5db524f49446",
      text2: "Fundamentos e Metodologia da Educação Corporativa",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.gov.br/pt-br/orgaos/secretaria-especial-da-receita-federal-do-brasil",
      text4: "Secretaria Especial da Receita Federal do Brasil",
    },
    {
      text1: "2026",
      imgSrc: "media/School/ENAP.png",
      imgAlt: "Escola Nacional de Administração Pública",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/1bd48f5e-4de4-4d16-a43d-f595295ba7d1",
      text2: "Atuação do Encarregado na LGPD: A Função de Orientar",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.enap.gov.br/",
      text4: "Escola Nacional de Administração Pública",
    },
    {
      text1: "2026",
      linked: true,
      imgSrc: "media/School/EVGB.png",
      imgAlt: "Escola Virtual de Governo",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/d6bae4bd-43dd-4587-ac8a-bec4fd070411",
      text2: "Segurança Cibernética: Controles 13 a 18 do CIS Controls",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/secretaria-de-governo-digital",
      text4: "Secretaria de Governo Digital",
    },
    {
      text1: "&nbsp;",
      linked: true,
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/951a48f2-4441-4a01-94ac-f5a6aa4e0882",
      text2: "Segurança Cibernética: Controles 7 a 12 do CIS Controls",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/secretaria-de-governo-digital",
      text4: "Secretaria de Governo Digital",
    },
    {
      text1: "&nbsp;",
      linked: true,
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/0d31cfc7-e417-4627-be7b-1bb6362dbc64",
      text2: "Segurança Cibernética: Controles 1 a 6 do CIS Controls",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/secretaria-de-governo-digital",
      text4: "Secretaria de Governo Digital",
    },
    {
      text1: "&nbsp;",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/683d1c78-199b-4d49-8c64-7f5a5f90eabc",
      text2: "Fundamentos da Segurança Cibernética - Introdução ao CIS Controls",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/secretaria-de-governo-digital",
      text4: "Secretaria de Governo Digital",
    },
    {
      text1: "2026",
      imgSrc: "media/Enterprise/Microsoft.png",
      imgAlt: "Microsoft",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/5fa90c93-95e0-4d0a-b7e8-59967dc8c485",
      text2: "Ética em IA",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://learn.microsoft.com/pt-br/",
      text4: "Microsoft",
    },
    {
      text1: "2026",
      linked: true,
      imgSrc: "media/School/EVGB.png",
      imgAlt: "Escola Virtual de Governo",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/9a083c2b-89ff-4f45-a50d-5ce58c0a53fa",
      text2: "Fundamentos de Segurança da Informação na Transformação Digital",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/secretaria-de-governo-digital",
      text4: "Secretaria de Governo Digital",
    },
    {
      text1: "&nbsp;",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/cdd9e62a-8d4b-473c-be2d-94c3edc19ef0",
      text2: "Como implementar a LGPD: bases, mecanismos e processos",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.gov.br/governodigital/pt-br/estrategias-e-governanca-digital/secretaria-de-governo-digital",
      text4: "Secretaria de Governo Digital",
    },
    {
      text1: "2026",
      imgSrc: "media/Gov/RF.png",
      imgAlt: "Receita Federal do Brasil",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/49301bce-1b10-49a2-884c-731634796ebe",
      text2: "Planejamento e Organização Pessoal no Trabalho",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.gov.br/pt-br/orgaos/secretaria-especial-da-receita-federal-do-brasil",
      text4: "Secretaria Especial da Receita Federal do Brasil",
    },
    {
      text1: "2026",
      imgSrc: "media/Gov/SERPRO.png",
      imgAlt: "Serviço Federal de Processamento de Dados",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/2a5a4f71-cf25-4a50-8dfe-2369c62fd1be",
      text2: "Fundamentos da Lei Geral de Proteção de Dados (LGPD)",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.serpro.gov.br/",
      text4: "Serviço Federal de Processamento de Dados",
    },
    {
      text1: "2026",
      imgSrc: "media/School/EVGB.png",
      imgAlt: "Escola Virtual de Governo",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/afbc9295-25bf-4c90-a775-2af5a2630d48",
      text2: "Proteção de Dados Pessoais no Setor Público",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.gov.br/fazenda/pt-br",
      text4: "Ministério da Fazenda",
    },
    {
      text1: "2026",
      imgSrc: "media/Enterprise/ITS-Rio.png",
      imgAlt: "ITS Rio",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/2280d95e-662c-4145-90a1-cd270d8a0f59",
      text2: "Introdução à Lei Brasileira de Proteção de Dados Pessoais",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://itsrio.org/",
      text4: "ITS Rio",
    },
    {
      text1: "2026",
      imgSrc: "media/Enterprise/UNSSC.png",
      imgAlt: "United Nations System Staff College",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/aa716d42-470f-4545-9d6a-f0024ad05656",
      text2: "2030 Agenda for Sustainable Development and e-Learning Design Basics",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.unssc.org/",
      text4: "United Nations System Staff College",
    },
    {
      text1: "2026",
      linked: true,
      imgSrc: "media/School/CU.png",
      imgAlt: "Columbia University",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/68b483a1-339b-4924-b26a-73a9b3e305c0",
      text2: "Aprendendo com Python",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.columbia.edu/",
      text4: "Columbia University",
    },
    {
      text1: "&nbsp;",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/676427a1-ac68-4fa7-af02-1862fbe5d83b",
      text2: "Design Instrucional e Tecnologia com Articulate Storyline 360",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.columbia.edu/",
      text4: "Columbia University",
    },
    {
      text1: "2026",
      imgSrc: "media/School/ENAP.png",
      imgAlt: "Escola Nacional de Administração Pública",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/f7a4bd13-df0d-4848-9b06-35fa9bb3d6f6",
      text2: "Introdução ao Processo Legislativo Municipal",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.enap.gov.br/",
      text4: "Escola Nacional de Administração Pública",
    },
    // {
    //
    //   link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/",
    //   text2: "Docência Plural - Formação em Interculturalidade e Bilinguismo",
    //   link3: "https://atendi.men/evgov",
    //   text3: "Escola Virtual de Governo",
    //   link4: "https://www.bcb.gov.br/",
    //   text4: "Banco Central do Brasil",
    // },
    // {
    //
    //   link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/",
    //   text2: "Fundamentos e Metodologia da Educação Corporativa",
    //   link3: "https://atendi.men/evgov",
    //   text3: "Escola Virtual de Governo",
    //   link4: "https://www.bcb.gov.br/",
    //   text4: "Banco Central do Brasil",
    // },
    {
      text1: "2026",
      imgSrc: "media/School/CUUAD.png",
      imgAlt: "Centro Universitário União das Américas Descomplica",
      link2:
        "https://certificados.descomplica.com.br/graduacao/cdb356a0e4448794bcc832e6913390ec9d5703fa6d3b303a329477cb79ea5d6d",
      text2: "Programming Basics",
      link3: "https://atendi.men/cuuad",
      text3: "Centro Universitário União das Américas Descomplica",
      link4: "https://br.linkedin.com/in/oguscaetano",
      text4: "Prof. Gustavo Caetano",
    },
    {
      text1: "2026",
      imgSrc: "media/School/CU.png",
      imgAlt: "Columbia University",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/Zcqw212369268RDC",
      text2: "Habilidades de Resolução de Problemas",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.columbia.edu/",
      text4: "Columbia University",
    },
    {
      text1: "2026",
      imgSrc: "media/Enterprise/Banco-Central-do-Brasil.png",
      imgAlt: "Banco Central do Brasil",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/EUIq21236973Q2J1",
      text2: "Educação Financeira Pessoal",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.bcb.gov.br/",
      text4: "Banco Central do Brasil",
    },
    {
      text1: "2026",
      imgSrc: "media/Gov/MJSP.png",
      imgAlt: "Ministério da Justiça e Segurança Pública",
      link2: "https://www.escolavirtual.gov.br/documentos/validacao/certificadocheck/8It921226498QajW",
      text2: "Monitoração Eletrônica de Pessoas no Brasil",
      link3: "https://atendi.men/evgov",
      text3: "Escola Virtual de Governo",
      link4: "https://www.gov.br/mj/",
      text4: "Ministério da Justiça e Segurança Pública",
    },
    {
      text1: "2026",
      imgSrc: "media/School/CUUAD.png",
      imgAlt: "Centro Universitário União das Américas Descomplica",
      link2:
        "https://certificados.descomplica.com.br/graduacao/66e214830ab9c2e50354dc246287b1079cd139540c71c688d9574fd3a3d00166",
      text2: "User Experience",
      link3: "https://atendi.men/cuuad",
      text3: "Centro Universitário União das Américas Descomplica",
      link4: "https://www.linkedin.com/in/luizchiavini/",
      text4: "Prof. Luiz Cláudio Chiavini Oliveira Júnior",
    },
    {
      text1: "2025",
      imgSrc: "media/School/CUUAD.png",
      imgAlt: "Centro Universitário União das Américas Descomplica",
      link2:
        "https://certificados.descomplica.com.br/graduacao/4dfbaa724acdd11bbfda4ad1443c865f7b51927039621c9766316a93701eca55",
      text2: "Técnicas e Ferramentas para Projetos",
      link3: "https://atendi.men/cuuad",
      text3: "Centro Universitário União das Américas Descomplica",
      link4: "https://www.linkedin.com/in/giovannabaccarin/",
      text4: "Prof. Giovanna Baccarin",
    },
    {
      text1: "2025",
      imgSrc: "media/School/SENAI.png",
      imgAlt: "Serviço Nacional de Aprendizagem Industrial",
      link2: "https://play.senai.br/student-api/certified/share/PLAY17662664341826",
      text2: "Contabilidade Básica",
      link3: "https://atendi.men/senaiplay",
      text3: "SENAI Play",
      link4: "https://www.instagram.com/professoraclaramos",
      text4: "Prof. Clara Ramos",
    },
    {
      text1: "2025",
      linked: true,
      imgSrc: "media/School/CUUAD.png",
      imgAlt: "Centro Universitário União das Américas Descomplica",
      link2:
        "https://certificados.descomplica.com.br/graduacao/98e2f7ff8ce4a2e68285b51573f202c2f488efa522c171e48072e81d859e121f",
      text2: "Soft Skills",
      link3: "https://atendi.men/cuuad",
      text3: "Centro Universitário União das Américas Descomplica",
      link4: "https://portadosfundos.com.br/producoes/",
      text4: "Porta dos Fundos",
    },
    {
      text1: "&nbsp;",
      linked: true,
      link2:
        "https://certificados.descomplica.com.br/graduacao/067f2ebdd95d20c2048b03e6cecd137f7a033c25a8db3205bcdcd1e7a906cab2",
      text2: "Produtividade e Organização",
      link3: "https://atendi.men/cuuad",
      text3: "Centro Universitário União das Américas Descomplica",
      link4: "https://www.linkedin.com/in/dehcarvalho/",
      text4: "Prof. Deborah Carvalho",
    },
    {
      text1: "&nbsp;",
      linked: true,
      link2:
        "https://certificados.descomplica.com.br/graduacao/90580e233124f0c52c137c5e2401ff720ca148097cdf8f2e80cef66553101e27",
      text2: "Introdução ao Desenvolvimento Web",
      link3: "https://atendi.men/cuuad",
      text3: "Centro Universitário União das Américas Descomplica",
      link4: "https://www.linkedin.com/in/henriquecesp/",
      text4: "Prof. Henrique Cruz",
    },
    {
      text1: "&nbsp;",
      link2:
        "https://certificados.descomplica.com.br/graduacao/412e44013c99202960cf01edec0b0888ccd32e6ab3df27d7d27eeb8f12f21fab",
      text2: "Ferramentas e Aplicações da Inteligência Artificial",
      link3: "https://atendi.men/cuuad",
      text3: "Centro Universitário União das Américas Descomplica",
      link4: "https://www.linkedin.com/in/isaacdcesares/",
      text4: "Prof. Isaac D'Césares",
    },
    {
      text1: "2025",
      imgSrc: "media/Enterprise/Atuar-Cursos.png",
      imgAlt: "Atuar Cursos",
      link2:
        "https://certificados.descomplica.com.br/graduacao/08ef8b5c9a1b4543eb1ad5af863475134fb39a5666df5692c8bfe29591b4e447",
      text2: "Excel Básico",
      link3: "https://atendi.men/cuuad",
      text3: "Centro Universitário União das Américas Descomplica",
      link4: "https://atuarcursos.com/",
      text4: "Atuar Cursos",
    },
    {
      text1: "2021",
      imgSrc: "media/Enterprise/Microsoft.png",
      imgAlt: "Microsoft",
      link2: null,
      text2: "Gestão de Projetos Socioambientais Usando IA",
      link3: "https://www.gov.br/trabalho-e-emprego/pt-br/servicos/trabalhador/qualificacao-profissional/caminho-digital",
      text3: "Escola do Trabalhador",
      link4: "https://learn.microsoft.com/training/",
      text4: "Microsoft",
    },
    {
      text1: "2017",
      imgSrc: "media/School/SENAI.png",
      imgAlt: "Serviço Nacional de Aprendizagem Industrial",
      link2: null,
      text2: "Técnicas de Colagem em Calçados",
      link3: "https://atendi.men/senai",
      text3: "Serviço Nacional de Aprendizagem Industrial",
      link4: "https://www.amazonas.com.br/",
      text4: "Grupo Amazonas",
    },
    {
      text1: "2015",
      imgSrc: "media/School/ELNS.png",
      imgAlt: "Escola do Legislativo da Câmara Municipal de Nova Serrana",
      link2: "https://www.jozuemarsh.com/notes/92/",
      text2: "Introdução à Fotografia",
      link3: null,
      text3: "Escola do Legislativo",
      link4: "https://www.novaserrana.cam.mg.gov.br/",
      text4: "Câmara de Nova Serrana",
    },
  ],

  // ── Atuação Profissional ──────────────────────────────────────────────────
  job: [
    {
      text1: "2025/Atual",
      imgSrc: "media/Enterprise/Not-Found.png",
      imgAlt: "",
      linked: true, // true = item com classe "linked"
      link2: null,
      text2: "Assistente Administrativo",
      link3: null,
      text3: "Ricardo Componentes",
      text4: "Presencial • Nova Serrana, MG",
    },
    {
      imgSrc: null,
      imgAlt: "",
      linked: false,
      link2: null,
      text2: "Auxiliar Administrativo",
      link3: null,
      text3: "Ricardo Componentes",
      text4: "Presencial • Nova Serrana, MG",
    },
    {
      text1: "2024/2025",
      imgSrc: "media/Enterprise/Jomar-Imobiliaria.png",
      imgAlt: "Jomar Imobiliária",
      linked: false,
      link2: null,
      text2: "Desenvolvedor Full Stack",
      link3: "https://www.jomarimobiliaria.com.br/",
      text3: "Jomar Imobiliária",
      text4: "Remoto • Nova Serrana, MG",
    },
    {
      text1: "2022/2024",
      imgSrc: "media/Enterprise/Soul.png",
      imgAlt: "Soul",
      linked: false,
      link2: null,
      text2: "Desenvolvedor Full Stack",
      link3: "https://www.soulplataforma.com/",
      text3: "Soul",
      text4: "Híbrida • Nova Serrana, MG",
    },
    {
      text1: "2022",
      imgSrc: "media/Enterprise/Itbee.png",
      imgAlt: "Itbee",
      linked: false,
      link2: null,
      text2: "Desenvolvedor de Aplicativo",
      link3: "https://www.Itbee.com.br/",
      text3: "Itbee",
      text4: "Remoto • Nova Serrana, MG",
    },
    {
      text1: "2021",
      imgSrc: "media/Enterprise/Lynd.png",
      imgAlt: "Lynd",
      linked: false,
      link2: null,
      text2: "Técnico de Linha de Montagem",
      link3: "https://www.lynd.com.br/",
      text3: "Lynd Calçados",
      text4: "Presencial • Nova Serrana, MG",
    },
    {
      text1: "2020/2021",
      imgSrc: "media/Enterprise/Roman-78.png",
      imgAlt: "Roman-78",
      linked: false,
      link2: null,
      text2: "Desenvolvedor Web",
      link3: "https://www.roman78.com.br/",
      text3: "Roman-78",
      text4: "Híbrida • Nova Serrana, MG",
    },
    {
      text1: "2018/2019",
      imgSrc: "media/Enterprise/Jadlog.png",
      imgAlt: "Jadlog",
      linked: false,
      link2: null,
      text2: "Assistente Administrativo",
      link3: "https://www.jadlog.com.br/",
      text3: "Jadlog",
      text4: "Presencial • Nova Serrana, MG",
    },
    {
      text1: "2017",
      imgSrc: "media/Enterprise/Black-Free.png",
      imgAlt: "Black Free",
      linked: false,
      link2: null,
      text2: "Técnico de Montagem de Calçados",
      link3: "https://www.blackfree.com.br/",
      text3: "Black Free Calçados",
      text4: "Presencial • Nova Serrana, MG",
    },
  ],

  // ── Idiomas ───────────────────────────────────────────────────────────────
  language: {
    // basic: [
    //   { imgSrc: "media/Flag/Italy.png", name: "Italiano", url: "https://pt.duolingo.com/course/it/pt/", active: false },
    //   { imgSrc: "media/Flag/Germany.png", name: "Alemão", url: "https://pt.duolingo.com/course/de/pt/", active: false },
    //   { imgSrc: "media/Flag/France.png", name: "Francês", url: "https://pt.duolingo.com/course/fr/pt/", active: false },
    //   { imgSrc: "media/Flag/Spain.png", name: "Espanhol", url: "https://pt.duolingo.com/course/es/pt/", active: false },
    //   { imgSrc: "media/Flag/United-States.png", name: "Inglês", url: "https://pt.duolingo.com/course/en/pt/", active: true },
    // ],
    native: [
      {
        imgSrc: "media/Flag/Brazil.png",
        name: '"Brasileiro" (Português)',
        url: "https://atendi.men/emfa",
        text3: "Escola Frei Ambrósio",
      },
    ],
  },

  // ── Prêmios e Títulos ─────────────────────────────────────────────────────
  award: [
    {
      text1: "2025",
      imgSrc: "media/Enterprise/Unidos-Somos-Mais-Fortes.png",
      imgAlt: "Organização Unidos Somos Mais Fortes",
      text2: "Membro Fundador da Organização Unidos Somos Mais Fortes",
      text3: "Nova Serrana, MG",
      text4: "Tesoureiro • Conselho",
    },
    {
      text1: "2017",
      imgSrc: "media/School/EEFA.png",
      imgAlt: "Escola Estadual Frei Anselmo",
      text2: "1º Lugar no Interclasse da EEFA",
      text3: "Nova Serrana, MG",
      text4: "Futsal • 1º B",
    },
    {
      text1: "2016",
      linked: true,
      imgSrc: "media/School/EEFA.png",
      imgAlt: "Escola Estadual Frei Anselmo",
      text2: "1º Lugar no Interclasse da EEFA",
      text3: "Nova Serrana, MG",
      text4: "Futsal • 1º A",
    },
    {
      text1: "&nbsp;",
      text2: "2º Lugar no Intercolegial",
      text3: "Nova Serrana, MG",
      text4: "Futsal • EEFA",
    },
    {
      text1: "2015",
      linked: true,
      imgSrc: "media/School/EMFA.png",
      imgAlt: "Escola Municipal Frei Ambrósio",
      text2: "1º Lugar no Interclasse da EMFA",
      text3: "Nova Serrana, MG",
      text4: "Futsal • 9º A",
    },
    {
      text1: "&nbsp;",
      linked: true,
      text2: "3º Lugar no Intercolegial",
      text3: "Nova Serrana, MG",
      text4: "Futsal • EMFA",
    },
    {
      text1: "2014",
      linked: true,
      imgSrc: "media/School/EMFA.png",
      imgAlt: "Escola Municipal Frei Ambrósio",
      text2: "1º Lugar no Interclasse da EMFA",
      text3: "Nova Serrana, MG",
      text4: "Futsal • 8º A",
    },
    {
      text1: "&nbsp;",
      linked: true,
      text2: "1º Lugar no Intercolegial",
      text3: "Nova Serrana, MG",
      text4: "Futsal • EMFA",
    },
    {
      text1: "2013",
      imgSrc: "media/School/EMFA.png",
      imgAlt: "Escola Municipal Frei Ambrósio",
      text2: "2º Lugar no Interclasse da EMFA",
      text3: "Nova Serrana, MG",
      text4: "Futsal • 7º A",
    },
  ],

  // ── Produções ─────────────────────────────────────────────────────────────
  production: {
    own: [
      {
        text1: "2025",
        url: "https://www.youtube.com/watch?v=5YbPwWMYeQU",
        title: "Luxury and Progress",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        url: "https://www.youtube.com/watch?v=CNyYqTGtavg",
        title: "Soul",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        text1: "2024",
        url: "https://www.youtube.com/watch?v=EFUJJurtffI",
        title: "Get It Up (VIP Remix)",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        url: "https://www.youtube.com/watch?v=ZEou6RmbadU",
        title: "Get It Up",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        text1: "2022",
        url: "https://www.youtube.com/watch?v=8xB-i9omrz0",
        title: "Beija-Flor",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        url: "https://www.youtube.com/watch?v=Rw_aVQAXsuU",
        title: "Lost In A Box",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        text1: "2019",
        url: "https://www.youtube.com/watch?v=Ls7WxZzpHAM",
        title: "Lavender Town",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        url: "https://www.youtube.com/watch?v=4ji4ASp5jxE",
        title: "Raven",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        url: "https://www.youtube.com/watch?v=hfUtlC4Z1R4",
        title: "Life",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        url: "https://www.youtube.com/watch?v=JoxxyxbKBSA&list=OLAK5uy_lDK8jUK50hyA8sWqy5lbdO543je_tGYKA&pp=0gcJCbAEOCosWNin",
        title: "2 0 1 9",
        format: "EP",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH",
      },
      {
        text1: "2018",
        url: "https://www.youtube.com/watch?v=kPXs6hi1_Ek",
        title: "Summer",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH & Pablo Ruan",
      },
      {
        url: "https://www.youtube.com/watch?v=l5wfmSMPHvg",
        title: "Filing (feat. Michael Mayo)",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "JOZÜEMARSH & DARKS Music",
      },
    ],
    featuring: [
      {
        text1: "2020",
        url: "https://www.youtube.com/watch?v=zsno7r2FFWM",
        title: "Feel the Bass",
        format: "Single",
        artistUrl: "https://open.spotify.com/intl-pt/album/7zeb0mZyPkFR33HXmxBtjI?si=zYyKzgw4RluTfD6n0hkdUQ",
        artist: "D44RK & JOZÜEMARSH",
      },
      {
        text1: "2019",
        url: "https://www.youtube.com/watch?v=oEAmQ7TBKdY",
        title: "Feelings (JOZÜEMARSH Remix)",
        format: "Single",
        artistUrl: "https://music.apple.com/album/feelings-joz%C3%BCemarsh-remix-single/1451002427",
        artist: "Pablo Ruan",
      },
      {
        text1: "2018",
        url: "https://www.youtube.com/watch?v=_Alf6yqYokA",
        title: "Retro Party",
        format: "Single",
        artistUrl: "https://atendi.men/music",
        artist: "BRØ DUBZ",
      },
      {
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
      text1: "2026",
      link2:
        "https://unieducar.org.br/catalogo/seminario/seminario-e-forum-lei-geral-de-protecao-de-dados-lgpd-na-area-da-saude",
      text2: "Lei Geral de Proteção de Dados – LGPD na Área da Saúde",
      text3: "Online",
      text4: "Seminário",
    },
    {
      text1: "&nbsp;",
      link2: "https://palestras.online/#/validar-certificado/5I3PGJbHDO",
      text2: "Riscos Psicossociais e Saúde Mental do Trabalhador",
      text3: "Online",
      text4: "Palestra",
    },
    {
      text1: "2025",
      link2: "https://www.jozuemarsh.com/notes/46/",
      text2: "Organização Unidos Somos Mais Fortes: Comemoração do Dia das Crianças",
      text3: "Nova Serrana, MG",
      text4: "Ação Social",
    },
    {
      text1: "&nbsp;",
      link2: "https://www.instagram.com/p/DPpJ5J6gZpX/",
      text2: "Sicoob Credinova: Educação Financeira",
      text3: "Nova Serrana, MG",
      text4: "Palestra",
    },
    {
      text1: "&nbsp;",
      link2:
        "https://www.novaserrana.mg.gov.br/portal/noticias/0/3/6096/cesec-de-nova-serrana-celebra-15-anos-de-historia-com-solenidade-especial",
      text2: "Comemoração do Aniversário de 15 Anos do CESEC",
      text3: "Nova Serrana, MG",
      text4: "Solenidade",
    },
    {
      text1: "&nbsp;",
      link2: null,
      text2: "Marco de Fundação da Organização Unidos Somos Mais Fortes",
      text3: "Nova Serrana, MG",
      text4: "Assembleia",
    },
    {
      text1: "2017",
      link2: "https://www.jozuemarsh.com/notes/89/",
      text2: "11ª Edição da Feira de Máquinas e Componentes para Calçados",
      text3: "Nova Serrana, MG",
      text4: "Feira",
    },
  ],

  teaching: [
    {
      link1: "",
      text1: "Status",
      link2: "",
      text2: "Informação",
      link3: "",
      text3: "Indisponível",
      imgSrc: "",
      imgAlt: "",
    },
  ],
  project: [
    {
      link1: "",
      text1: "Status",
      link2: "",
      text2: "Informação",
      link3: "",
      text3: "Indisponível",
      imgSrc: "",
      imgAlt: "",
    },
  ],
  magazine: [
    {
      link1: "",
      text1: "Status",
      link2: "",
      text2: "Informação",
      link3: "",
      text3: "Indisponível",
      imgSrc: "",
      imgAlt: "",
    },
  ],
  guidelines: [
    {
      link1: "",
      text1: "Status",
      link2: "",
      text2: "Informação",
      link3: "",
      text3: "Indisponível",
      imgSrc: "",
      imgAlt: "",
    },
  ],
  education: [
    {
      link1: "",
      text1: "Status",
      link2: "",
      text2: "Informação",
      link3: "",
      text3: "Indisponível",
      imgSrc: "",
      imgAlt: "",
    },
  ],
  other: [
    {
      link1: "",
      text1: "Status",
      link2: "",
      text2: "Informação",
      link3: "",
      text3: "Indisponível",
      imgSrc: "",
      imgAlt: "",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// RENDERIZAÇÃO — não é necessário editar abaixo desta linha
// ─────────────────────────────────────────────────────────────────────────────

// Utilitários
const el = (selector) => document.querySelector(selector),
      link = (url, content, cls = "") =>
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

// ── Idiomas ───────────────────────────────────────────────────────────────────
function renderLanguage() {
  const section = el("#language");
  if (!section) return;
  const contents = section.querySelectorAll(".content");

  // Bloco Básico
  const basicHtml = DATA.language.basic
    ? [
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
      ]
    : [].join("");

  // Bloco Nativo
  const nativeHtml = [
    renderItem(`<span class="h6"><b>Nativo</b></span>`, `<span class="h6"></span>`),
    ...DATA.language.native.map((d) =>
      renderItem(
        `<img decoding="async" src="${d.imgSrc}" title="" alt="" loading="lazy" />`,
        `<span class="h6">${d.name}</span>
       ${link(d.url, `<span class="h6">${d.text3}</span>`)}`
      )
    ),
  ].join("");

  //   if (contents[0]) contents[0].innerHTML = basicHtml;
  //   if (contents[1]) contents[1].innerHTML = nativeHtml;
  if (contents[0]) contents[0].innerHTML = [basicHtml + nativeHtml];
}

// ── Produções ─────────────────────────────────────────────────────────────────
function renderProduction() {
  const section = el("#production");
  if (!section) return;
  const contents = section.querySelectorAll(".content");

  const musicItem = (d) =>
    renderItem(
      `<span class="h6">${d.text1 || "&nbsp;"}</span>`,
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

// ── Padrão ────────────────────────────────────────────────────────────────────
function renderSection(id) {
  try {
    if (!id) return;
    const html = DATA[id]
      .filter((d) => d.active !== false)
      .map((d) =>
        renderItem(
          `
          ${link(d.link1, d.text1 ? `<span class="h6 inlinetext" style="--line-clamp: 3;">${d.text1}</span>` : "")}
          ${d.imgSrc ? `<img decoding="async" src="${d.imgSrc}" title="${d.imgAlt || ""}" alt="${d.imgAlt || ""}" loading="lazy" />` : '<div class="img"></div>'}`,
          `
          ${link(d.link2, d.text2 ? `<span class="h5 inlinetext" style="--line-clamp: 2;">${d.text2}</span>` : "")}
          ${link(d.link3, d.text3 ? `<span class="h6 inlinetext" style="--line-clamp: 1;">${d.text3}</span>` : "")}
          ${link(d.link4, d.text4 ? `<span class="h6 inlinetext" style="--line-clamp: 1;">${d.text4}</span>` : "")}
          ${link(d.link5, d.text5 ? `<span class="h6 inlinetext" style="--line-clamp: 1;">${d.text5}</span>` : "")}`,
          d.linked ? "linked" : ""
        )
      )
      .join("");
    inject(id, html);
  } catch (error) {
    console.error(`Erro ao renderizar seção "${id}":`, error);
  }
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
  renderSection("school");
  renderSection("course");
  renderSection("teaching");
  renderSection("job");
  renderSection("project");
  // renderLanguage();
  renderSection("award");
  // renderProduction();
  renderSection("magazine");
  renderSection("event");
  renderSection("guidelines");
  renderSection("education");
  renderSection("other");

  setTimeout(() => renderExpands(), 0);
});
