import { stackUsage } from "../data/portfolio";

export function StackToolkit() {
  return (
    <section className="flow-section stack-section" id="stack">
      <div className="section-heading">
        <p className="section-label">Stack</p>
        <h2>프로젝트에서 맡았던 역할 기준으로 기술을 묶었습니다.</h2>
      </div>
      <div className="toolkit-grid">
        {stackUsage.map((group) => (
          <article className="toolkit-box" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="tool-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
