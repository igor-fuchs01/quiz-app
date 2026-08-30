# Módulo de Estudos — Banco de Questões (React)

App de quiz para estudo, com três tipos de questão: arrastar-e-soltar,
múltipla escolha (A–E) e dropdown. Cada matéria é um módulo independente.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

Para gerar uma versão de produção (arquivos estáticos prontos para hospedar):

```bash
npm run build
npm run preview   # opcional, para testar o build localmente
```

## Estrutura do projeto

```
src/
  data/subjects.js          → banco de questões (é aqui que você edita/adiciona)
  utils/grading.js          → correção das respostas e textos de revisão
  components/
    AppHeader.jsx
    HomeScreen.jsx
    SubjectCard.jsx
    ProgressBar.jsx
    QuizScreen.jsx
    ResultsScreen.jsx
    ReviewItem.jsx
    questions/
      FillBlankQuestion.jsx      → tipo "fill" (arrastar e soltar)
      MultipleChoiceQuestion.jsx → tipo "mcq" (A–E)
      SelectQuestion.jsx        → tipo "select" (dropdown)
  styles/index.css           → todo o design (tokens de cor/tipografia no topo)
```

## Como adicionar questões e matérias

Abra `src/data/subjects.js`. Cada matéria é um objeto dentro do array
`SUBJECTS`, com um array `questions`. O arquivo tem comentários explicando
o formato exato dos três tipos de questão (`fill`, `mcq`, `select`).
Não é necessário escrever explicação da resposta — apenas o valor correto.

Para criar uma matéria nova, copie um objeto existente e ajuste
`id`, `name`, `monogram`, `description` e `questions`.
