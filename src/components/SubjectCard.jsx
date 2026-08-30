export default function SubjectCard({ subject, onStart }) {
  return (
    <div className="subject-card" onClick={() => onStart(subject)}>
      <div className="subject-card__top">
        <span className="subject-card__monogram">{subject.monogram}</span>
        <h3>{subject.name}</h3>
      </div>
      <p>{subject.description}</p>
      <div className="subject-card__meta">
        {subject.questions.length} questões
      </div>
      <button className="btn btn-primary">Iniciar módulo</button>
    </div>
  );
}
