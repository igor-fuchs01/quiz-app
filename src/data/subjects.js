/**
 * BANCO DE QUESTÕES
 * ---------------------------------------------------------------------
 * Cada item de SUBJECTS é uma matéria/módulo. Para criar uma nova,
 * copie um objeto e ajuste id / name / monogram / questions.
 *
 * Tipos de questão suportados (campo "type"):
 *
 * 1) "fill"  — arrastar e soltar
 *    {
 *      type: 'fill',
 *      template: 'texto com {{0}} e {{1}} como lacunas',
 *      blanksCorrect: ['resposta da lacuna 0', 'resposta da lacuna 1'],
 *      options: ['resposta 0', 'resposta 1', 'distratora A', 'distratora B'],
 *    }
 *
 * 2) "mcq" — múltipla escolha (A–E)
 *    {
 *      type: 'mcq',
 *      template: 'enunciado da pergunta',
 *      options: ['alternativa A', 'alternativa B', 'alternativa C'],
 *      correctIndex: 1, // 0 = A, 1 = B, 2 = C...
 *    }
 *
 * 3) "select" — dropdown
 *    {
 *      type: 'select',
 *      template: 'texto com {{0}} e {{1}} como lacunas',
 *      blanksOptions: [['op1', 'op2'], ['op1', 'op2', 'op3']],
 *      blanksCorrect: ['op1', 'op1'],
 *    }
 *
 * Campo extra "difficulty" (fácil | médio | difícil | super difícil) foi
 * incluído apenas como metadado de controle interno do banco (não é
 * obrigatório para a renderização do quiz).
 *
 * Conteúdo-fonte: Aula 01 (Introdução à Disciplina de TI) e Aula 02
 * (Introdução a Projetos de TI) — São Paulo Tech School.
 * As questões aplicam os conceitos a cenários hipotéticos, não apenas
 * repetem definições dos slides.
 * ---------------------------------------------------------------------
 */
import { TI } from "./questions/TI.js";
import { ARQCOMP } from "./questions/ARQCOMP.js";
import { SO } from "./questions/SO.js";
import { BD } from "./questions/BD.js";

export const SUBJECTS = [
  TI,
  ARQCOMP,
  SO,
  BD
];
