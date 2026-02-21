const problems = [
  { text: 'Facturas vencidas', icon: 'bi bi-file-earmark-x' },
  { text: 'Contratos incumplidos', icon: 'bi bi-file-earmark-break' },
  { text: 'Excusas constantes', icon: 'bi bi-chat-left-dots' },
  { text: 'Riesgo de prescripción', icon: 'bi bi-hourglass-split' },
];

const FourthSection = () => {
  return (
    <section className='fourth-section'>
      <div className="fourth-section__box">
        <h2 className="paragraph paragraph--xl u-center-text blue">
          ¿Tu cliente no responde?
        </h2>
        
        <div className="fourth-section__problems">
          {problems.map((problem) => (
            <div key={problem.text} className="fourth-section__problem">
              <i className={`${problem.icon} fourth-section__icon`}></i>
              <p className="paragraph paragraph--md">{problem.text}</p>
            </div>
          ))}
        </div>

        <div className="fourth-section__warning u-mt-30">
          <p className="paragraph paragraph--lg u-center-text gray">
            Cada día que pasa, tu probabilidad de recuperación baja.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
