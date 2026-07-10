const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Work Notes", href: "#cases" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <a className="site-logo" href="#top" aria-label="처음으로 이동">
        areum.dev
      </a>
      <nav className="site-nav" aria-label="주요 섹션">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            <span aria-hidden="true" />
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
