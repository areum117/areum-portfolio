import { decisionMatrix } from "../data/portfolio";

const keyTechnologies = new Set([
  "React",
  "TypeScript",
  "Django",
  "FastAPI",
  "LangGraph",
  "RAG",
  "SQL Agent",
  "AWS EC2 / RDS",
]);

export function ProjectConstellation() {
  const focusedDecisions = decisionMatrix.filter((item) => keyTechnologies.has(item.tech));

  return (
    <section className="flow-section decision-section" id="decisions">
      <div className="section-heading">
        <p className="section-label">기술 맥락</p>
        <h2>기술은 사용한 목록보다, 어떤 문제를 나눴는지 중심으로 정리했습니다.</h2>
      </div>
      <div className="decision-table" aria-label="기술을 사용한 맥락">
        {focusedDecisions.map((item) => (
          <article className="decision-row" key={item.tech}>
            <div>
              <strong>{item.tech}</strong>
              <span>{item.projects}</span>
            </div>
            <div>
              <p>{item.reason}</p>
              <p>{item.implementation}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
