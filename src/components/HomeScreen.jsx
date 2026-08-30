import SubjectCard from './SubjectCard.jsx';

export default function HomeScreen({ subjects, onStart }) {
  return (
    <section>
      <p className="home__intro">
        Escolha uma matéria para começar. Cada módulo reúne questões de
        arrastar-e-soltar, múltipla escolha e dropdown — responda todas para
        ver seu desempenho ao final.
      </p>
      <div className="subject-grid">
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} onStart={onStart} />
        ))}
      </div>
    </section>
  );
}
