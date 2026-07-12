import { hero } from "../data/portfolio";

export function HeroFlow() {
    return (
        <section className="hero-flow flow-section" id="top">
            <div className="hero-copy">
                <h1>{hero.title}</h1>
                <p>{hero.description}</p>
                <div className="hero-links">
                    {hero.links.map((link) => (
                        <a href={link.href} key={link.label}>
                            {link.label}
                            <span aria-hidden="true">→</span>
                        </a>
                    ))}
                </div>
            </div>

            <aside className="capability-card profile-card" aria-label="프로필 카드">
                <p className="card-eyebrow">Profile</p>
                <div className="profile-layout">
                    <div className="profile-media">
                        <img
                            className="profile-image"
                            src={`${import.meta.env.BASE_URL}${hero.image}`}
                            alt="프로필 이미지"
                        />
                    </div>
                    <div className="profile-info">
                        <p className="card-name">{hero.name}</p>
                        <p className="card-title">{hero.label}</p>

                        <div className="profile-section">
                            <p className="profile-section-title">Education</p>
                            <ul className="profile-list">
                                {hero.education.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="profile-section profile-interests">
                    <p className="profile-section-title">Interests</p>
                    <div className="profile-tags">
                        {hero.interests.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </div>
            </aside>
        </section>
    );
}
