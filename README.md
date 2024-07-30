Documentação do Projeto de Camisetas Personalizadas
Visão Geral
Este projeto consiste em um sistema de e-commerce para camisetas personalizadas. Ele inclui uma aplicação frontend desenvolvida com React e um backend em Node.js com Express que gerencia uploads de imagens e fornece APIs para o frontend.

Estrutura do Projeto
Frontend: Aplicação React para exibir produtos, detalhes dos produtos e gerenciar uploads de arquivos.
Backend: Servidor Node.js com Express para gerenciar uploads e fornecer APIs para o frontend.
Frontend
Tecnologias Utilizadas
React: Biblioteca JavaScript para construir interfaces de usuário.
React Router: Biblioteca para gerenciar a navegação entre páginas.
React Icons: Biblioteca para ícones de redes sociais.
CSS: Para estilização dos componentes.
Estrutura de Componentes
Footer: Componente de rodapé com informações de contato e links sociais.
Help: Página com perguntas frequentes e informações de contato.
MainContent: Componente principal da página inicial com imagens em círculo.
ProductDetails: Página que exibe detalhes de um produto específico.
ProductGrid: Componente que exibe uma grade de produtos.
ProductList: Componente que exibe uma lista de produtos.
TrocasDevolucoes: Página com política de trocas e devoluções.
Configuração
Instalação das Dependências

Navegue até o diretório do frontend e instale as dependências:

bash
Copiar código
cd frontend
npm install
Executar o Servidor de Desenvolvimento

Inicie o servidor de desenvolvimento do React:

bash
Copiar código
npm start
A aplicação estará disponível em http://localhost:3000.

Backend
Tecnologias Utilizadas
Node.js: Ambiente de execução para JavaScript no servidor.
Express: Framework para criar o servidor HTTP.
Multer: Middleware para manipulação de uploads de arquivos.
CORS: Middleware para permitir requisições de origens diferentes.
Path: Módulo Node.js para manipulação de caminhos de arquivos.
Estrutura de Endpoints
POST /upload

Descrição: Faz o upload de um arquivo de imagem.
Headers:
Content-Type: multipart/form-data
Body:
image: Arquivo de imagem a ser carregado.
Response:
json
Copiar código
{
  "file": "uploads/filename.ext"
}
Servir Arquivos Estáticos

Descrição: Arquivos na pasta uploads/ podem ser acessados diretamente via URLs.
URL: http://localhost:5000/uploads/filename.ext
Configuração
Instalação das Dependências

Navegue até o diretório do backend e instale as dependências:

bash
Copiar código
cd backend
npm install
Configuração de Variáveis de Ambiente

Crie um arquivo .env na raiz do diretório do backend com o seguinte conteúdo:

makefile
Copiar código
PORT=5000
UPLOAD_PATH=uploads
Executar o Servidor

Inicie o servidor Node.js:

bash
Copiar código
npm start
O servidor estará disponível em http://localhost:5000.

Código
Servidor Express
javascript
Copiar código
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uploadPath = process.env.UPLOAD_PATH || 'uploads';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 } // Limite de 5MB
});

app.use(cors({
  origin: 'http://localhost:3001' // Permitir somente a origem do seu frontend
}));

app.post('/upload', upload.single('image'), (req, res) => {
  res.json({ file: `${uploadPath}/${req.file.filename}` });
});

app.use('/uploads', express.static(path.join(__dirname, uploadPath)));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
Testes
Frontend
Verifique se todos os componentes estão funcionando como esperado.
Teste a navegação entre páginas e o comportamento dos formulários.
Backend
Utilize ferramentas como Postman para testar o upload de arquivos e verificar se os arquivos são salvos corretamente.
Considerações Finais
Segurança: Certifique-se de validar e sanitizar os arquivos carregados para evitar problemas de segurança.
Escalabilidade: Considere o uso de soluções como armazenamento em nuvem para lidar com um grande volume de uploads.


