import { caseStudies } from "../data/portfolio";

function resolveAssetPath(src: string) {
  if (/^(https?:|mailto:|#)/.test(src)) {
    return src;
  }

  const basePath = import.meta.env.BASE_URL;
  return `${basePath}${src.replace(/^\/+/, "")}`;
}

export function FeaturedIsland() {
  return (
    <section className="flow-section case-section" id="cases">
      <div className="section-heading">
        <p className="section-label">프로젝트 회고</p>
        <h2>프로젝트마다 어떤 흐름을 만들었는지 중심으로 정리했습니다.</h2>
      </div>

      <div className="case-list">
        {caseStudies.map((project) => {
          if ("mainCase" in project && project.mainCase) {
            const mainCase = project.mainCase;
            const mainMedia = project.media ?? [];

            return (
              <article className="case-study case-study--main" id={`case-${project.id}`} key={project.id}>
                <header className="case-header main-case-header">
                  <div>
                    <p className="section-label">{project.type}</p>
                    <h2>{mainCase.headline}</h2>
                    <div className="main-case-intro">
                      {mainCase.intro.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  <div className="repo-links">
                    {project.repoLinks.map((link) => (
                      <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </header>

                <div className="main-case-layout">
                  <section className="main-case-copy" aria-label={`${project.title} 필요성`}>
                    <p className="section-label">{mainCase.needTitle}</p>
                    <p>{mainCase.need}</p>
                  </section>

                  <section className="main-flow-section" aria-label={`${project.title} 서비스 흐름`}>
                    <h3>{mainCase.flowTitle}</h3>
                    <ol className="main-flow-steps">
                      {mainCase.flow.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </section>

                  <section className="main-case-copy" aria-label={`${project.title} 구현 구조`}>
                    <h3>{mainCase.structureTitle}</h3>
                    {mainCase.structure.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>

                  {mainMedia.length > 0 ? (
                    <section className="main-media-section" aria-label={`${project.title} 아키텍처와 데모`}>
                      <h3>아키텍처와 데모</h3>
                      <div className="main-media-grid">
                        {mainMedia.map((media) => (
                          <figure className="media-card" key={media.src}>
                            {media.type === "video" ? (
                              <video
                                src={resolveAssetPath(media.src)}
                                controls
                                muted
                                playsInline
                                preload="metadata"
                                aria-label={media.alt}
                              />
                            ) : (
                              <img src={resolveAssetPath(media.src)} alt={media.alt} />
                            )}
                            <figcaption>{media.caption}</figcaption>
                          </figure>
                        ))}
                      </div>
                    </section>
                  ) : null}

                  <div className="main-case-split">
                    <section className="main-role-card" aria-label={`${project.title} 담당 역할`}>
                      <h3>{mainCase.roleTitle}</h3>
                      <ul className="role-list role-list--compact">
                        {mainCase.roles.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  <section className="main-case-copy main-case-improvement" aria-label={`${project.title} 개선점`}>
                    <h3>{mainCase.improvementTitle}</h3>
                    <p>{mainCase.improvement}</p>
                  </section>
                </div>
              </article>
            );
          }

          if ("focusCase" in project && project.focusCase) {
            const focusCase = project.focusCase;
            const architectureMedia = project.media?.[0];
            const demoMedia = project.media?.slice(1) ?? [];

            return (
              <article className="case-study case-study--focus" id={`case-${project.id}`} key={project.id}>
                <header className="case-header main-case-header">
                  <div>
                    <p className="section-label">{project.type}</p>
                    <h2>{focusCase.headline}</h2>
                    <div className="main-case-intro">
                      {focusCase.intro.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  <div className="repo-links">
                    {project.repoLinks.map((link) => (
                      <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </header>

                <div className="focus-case-layout">
                  <section className="focus-architecture" aria-label={`${project.title} 아키텍처와 흐름`}>
                    <div>
                      <h3>{focusCase.flowTitle}</h3>
                      <ol className="main-flow-steps focus-flow-steps">
                        {focusCase.flow.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    </div>
                    {architectureMedia ? (
                      <figure className="media-card focus-architecture-media">
                        <img src={resolveAssetPath(architectureMedia.src)} alt={architectureMedia.alt} />
                        <figcaption>{architectureMedia.caption}</figcaption>
                      </figure>
                    ) : null}
                  </section>

                  <section className="main-case-copy" aria-label={`${project.title} 설계 맥락`}>
                    <h3>{focusCase.contextTitle}</h3>
                    <p>{focusCase.context}</p>
                  </section>

                  {demoMedia.length > 0 ? (
                    <section className="focus-demo-section" aria-label={`${project.title} 데모 영상`}>
                      <h3>데모 영상</h3>
                      <div className="focus-demo-grid">
                        {demoMedia.map((media) => (
                          <figure className="media-card focus-demo-media" key={media.src}>
                            {media.type === "video" ? (
                              <video
                                src={resolveAssetPath(media.src)}
                                controls
                                muted
                                playsInline
                                preload="metadata"
                                aria-label={media.alt}
                              />
                            ) : (
                              <img src={resolveAssetPath(media.src)} alt={media.alt} />
                            )}
                            <figcaption>{media.caption}</figcaption>
                          </figure>
                        ))}
                      </div>
                    </section>
                  ) : null}

                  <div className="main-case-split focus-case-split">
                    <section className="main-role-card" aria-label={`${project.title} 담당 역할`}>
                      <h3>{focusCase.roleTitle}</h3>
                      <ul className="role-list role-list--compact">
                        {focusCase.roles.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="main-decision-panel" aria-label={`${project.title} 기술 그룹`}>
                      <h3>{focusCase.techTitle}</h3>
                      <div className="focus-tech-list">
                        {focusCase.techGroups.map((item) => (
                          <article className="focus-tech-item" key={item.title}>
                            <h4>{item.title}</h4>
                            <p className="quiet-note">{item.stack}</p>
                            <p>{item.text}</p>
                          </article>
                        ))}
                      </div>
                    </section>
                  </div>

                  <section className="main-case-copy main-case-improvement" aria-label={`${project.title} 개선점`}>
                    <h3>{focusCase.improvementTitle}</h3>
                    <p>{focusCase.improvement}</p>
                  </section>
                </div>
              </article>
            );
          }

          if ("noteCase" in project && project.noteCase) {
            const noteCase = project.noteCase;

            return (
              <article className="case-study case-note-card short-case" id={`case-${project.id}`} key={project.id}>
                <header className="case-note-header">
                  <div>
                    <p className="section-label">{project.type}</p>
                    <h2>{noteCase.headline}</h2>
                  </div>
                  <div className="repo-links">
                    {project.repoLinks.map((link) => (
                      <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </header>

                <div className="case-note-grid">
                  <section className="case-note-copy" aria-label={`${project.title} 설명`}>
                    {noteCase.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>

                  <aside className="case-note-side" aria-label={`${project.title} 요약`}>
                    <ol className="case-note-flow">
                      {noteCase.flow.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>

                    <div className="case-note-role">
                      <h3>{noteCase.roleTitle}</h3>
                      <ul className="role-list role-list--compact">
                        {noteCase.roles.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </aside>
                </div>

                <section className="case-note-learning" aria-label={`${project.title} 배운 점`}>
                  <h3>{noteCase.learningTitle}</h3>
                  <p>{noteCase.learning}</p>
                </section>
              </article>
            );
          }

          return null;
        })}
      </div>
    </section>
  );
}
