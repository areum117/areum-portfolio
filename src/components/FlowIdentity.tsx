import { caseStudies } from "../data/portfolio";

export function FlowIdentity() {
    return (
        <section className="flow-section overview-section" id="projects">
            <div className="section-heading">
                <p className="section-label">Projects</p>
            </div>
            <div className="overview-grid">
                {caseStudies.map((project) => (
                    <article className="overview-card" key={project.id}>
                        <div className="overview-card-title">
                            <h3>{project.title}</h3>
                        </div>
                        <p className="overview-summary">{project.overviewSummary}</p>
                        <div className="overview-role">
                            <p className="project-kind">서비스가 필요했던 이유</p>
                            <p>{project.serviceProblem}</p>
                        </div>
                        <div className="overview-role">
                            <p className="project-kind">{project.overviewRoleLabel}</p>
                            <p>{project.overviewRole}</p>
                        </div>
                        <div className="mini-tools">
                            {project.overviewTech.map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                        <a href={`#case-${project.id}`}>자세히 보기</a>
                    </article>
                ))}
            </div>
        </section>
    );
}
