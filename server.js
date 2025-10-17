import express from 'express';
import { readData, writeData } from './data/db.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('index', { nome: 'Rebeca Lima' }));

app.get('/sobre', (req, res) => {
  const estudante = {
    nome: 'Rebeca Lima',
    curso: 'Desenvolvimento de Sistemas',
    instituicao: 'FATEC São Paulo',
    ano: 2024
  };
  res.render('sobre', { estudante });
});

app.get('/disciplinas', async (req, res) => {
  const data = await readData();
  res.render('disciplinas', { disciplinas: data.disciplinas });
});

app.post('/disciplinas', async (req, res) => {
  const data = await readData();
  const nova = {
    id: Date.now(),
    nome: req.body.nome,
    progresso: Number(req.body.progresso)
  };
  data.disciplinas.push(nova);
  await writeData(data);
  res.redirect('/disciplinas');
});

app.post('/disciplinas/deletar/:id', async (req, res) => {
  const data = await readData();
  const id = parseInt(req.params.id);
  data.disciplinas = data.disciplinas.filter(d => d.id !== id);
  await writeData(data);
  res.redirect('/disciplinas');
});

app.get('/projetos', async (req, res) => {
  const data = await readData();
  res.render('projetos', { projetos: data.projetos });
});

app.post('/projetos', async (req, res) => {
  const data = await readData();
  const novo = {
    id: Date.now(),
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    concluido: req.body.concluido === 'on'
  };
  data.projetos.push(novo);
  await writeData(data);
  res.redirect('/projetos');
});

app.post('/projetos/deletar/:id', async (req, res) => {
  const data = await readData();
  const id = parseInt(req.params.id);
  data.projetos = data.projetos.filter(p => p.id !== id);
  await writeData(data);
  res.redirect('/projetos');
});

app.get('/dashboard', async (req, res) => {
  const data = await readData();
  const stats = {
    totalDisciplinas: data.disciplinas.length,
    totalProjetos: data.projetos.length,
    concluidos: data.projetos.filter(p => p.concluido).length,
    tecnologias: data.disciplinas.map(d => d.nome),
    progresso: data.disciplinas.map(d => d.progresso)
  };
  res.render('dashboard', { stats });
});

app.get('/contato', (req, res) => res.render('contato'));

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
