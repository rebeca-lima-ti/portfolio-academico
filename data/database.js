export let Tecnologias = Object.freeze({
  node: "Node.js",
  express: "Express",
  ejs: "EJS",
  mysql: "MySQL",
  react: "React",
  pandas: "Pandas",
  flask: "Flask",
  python: "Python",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  typescript: "TypeScript",
});

export const estudante = {
  nome: "Rebeca Lima Nunes",
  curso: "Desenvolvimento de Sistemas Multiplataforma",
  instituicao: "Fatec Profº Jessen Vidal - SJC",
  anoIngresso: 2025,
};

export let disciplinas = [
  "Design Digital",
  "Desenvolvimento Web I",
  "Engenharia de Software I",
  "Sistemas Operacionais e Redes de Computadores",
  "Algoritmos e Lógica de Programação",
  "Modelagem de Banco de Dados",
  "Banco de Dados - Relacional",
  "Engenharia de Software II",
  "Desenvolvimento Web II",
  "Estrutura de Dados",
  "Matemática para Computação",
  "Técnica de Programação I",
]

export let projetos = [
  {
    titulo: "API1 1/2025 - Site para Análise de Exportação e Importação das Cidade do Estado de São Paulo",
    descricao: "Desenvolvemos uma plataforma web com dados sobre o desempenho dos municípios do Estado de São Paulo no comércio exterior, com base em informações públicas do Ministério do Desenvolvimento. A proposta é fornecer dados claros e acessíveis para auxiliar na tomada de decisões.",
    link: "https://github.com/Team-Chronos/API-DSM-1SEMESTRE-2025",
    techs: [Tecnologias.flask, Tecnologias.python, Tecnologias.pandas, Tecnologias.css, Tecnologias.html, Tecnologias.mysql, Tecnologias.javascript],
  },
  {
    titulo: "API2 2/2025 - Plataforma Integrada para Gestão Administrativa, Comercial e Operacional",
    descricao: "Desenvolver uma plataforma única que centralize e padronize processos administrativos, comerciais e operacionais, facilitando a visualização das informações, notificações e relatórios, garantindo maior eficiência e controle para a empresa.",
    link: "https://github.com/Team-Chronos/API-DSM-2SEMESTRE-2025",
    techs: [Tecnologias.node, Tecnologias.express, Tecnologias.mysql, Tecnologias.react, Tecnologias.html, Tecnologias.css, Tecnologias.javascript, Tecnologias.typescript]
  },
];

export const contato = {
  email: "becaln.ti0@gmail.com",
  telefone: "(12) 99210-4083",
};