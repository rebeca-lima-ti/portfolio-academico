export let Tecnologias = Object.freeze({
  css: "CSS",
  ejs: "EJS",
  express: "Express",
  flask: "Flask",
  html: "HTML",
  javascript: "JavaScript",
  mysql: "MySQL",
  node: "Node.js",
  pandas: "Pandas",
  python: "Python",
  react: "React",
  typescript: "TypeScript",
});

export let estudante = {
  nome: "Rebeca Lima Nunes",
  curso: "Desenvolvimento de Sistemas Multiplataforma",
  instituicao: "Fatec SJC Jessen Vidal",
  anoIngresso: 2025,
};

export let disciplinas = [
  "Algoritmos e Lógica de Programação",
  "Banco de Dados - Relacional",
  "Design Digital",
  "Desenvolvimento Web I",
  "Desenvolvimento Web II",
  "Engenharia de Software I",
  "Engenharia de Software II",
  "Estrutura de Dados",
  "Matemática para Computação",
  "Modelagem de Banco de Dados",
  "Sistemas Operacionais e Redes de Computadores",
  "Técnica de Programação I",
]

export let projetos = [
  {
    titulo: "API 1º Semestre - Site para Análise de Exportação e Importação das Cidade do Estado de São Paulo",
    descricao: "Este projeto é uma API (Aprendizado por Projetos Integrados) desenvolvida durante o primeiro semestre do curso de Desenvolvimento de Software Multiplataforma da Fatec de São José dos Campos para monitoramento de tendências do mercado de importação e exportação no estado de São Paulo. Neste projeto eu fiz parte do Dev Team (Equipe de desenvolvimento) da equipe Chronos, administrando principalmente o banco de dados e qualquer questão referente a ele, além de atualizar periodicamente as informações do projeto no GitHub.",
    link: "https://github.com/Team-Chronos/API-DSM-1SEMESTRE-2025",
    techs: [Tecnologias.flask, Tecnologias.python, Tecnologias.pandas, Tecnologias.css, Tecnologias.html, Tecnologias.mysql, Tecnologias.javascript],
  },
  {
    titulo: "API 2º Semestre - Plataforma Integrada para Gestão Administrativa, Comercial e Operacional",
    descricao: "Desenvolver uma plataforma única que centralize e padronize processos administrativos, comerciais e operacionais, facilitando a visualização das informações, notificações e relatórios, garantindo maior eficiência e controle para a empresa.",
    link: "https://github.com/Team-Chronos/API-DSM-2SEMESTRE-2025",
    techs: [Tecnologias.node, Tecnologias.express, Tecnologias.mysql, Tecnologias.react, Tecnologias.html, Tecnologias.css, Tecnologias.javascript, Tecnologias.typescript]
  },
  {
    titulo: "Site - Pizzaria Casabella",
    descricao: "Um site desenvolvido no curso de Bootstrap do Senac.",
    link: "https://github.com/Team-Chronos/API-DSM-2SEMESTRE-2025",
    techs: [Tecnologias.html, Tecnologias.css, Tecnologias.javascript]
  },
];

export let contato = {
  email: "becaln.ti0@gmail.com",
  telefone: "(12) 98210-4083",
};