class GamesFooter extends HTMLElement {
  LINKS = Object.freeze([
    { href: "https://chaos-chess.ogbizi.com/", title: "Chaos Chess", icon: "https://chaos-chess.ogbizi.com/favicon.ico" },
    { href: "https://disnumber.com/", title: "Disnumber", icon: "https://disnumber.com/favicon.ico" },
    { href: "https://paint.ogbizi.com/", title: "PAINT by COLOURS", icon: "https://paint.ogbizi.com/favicon.ico" },
    { href: "https://scrabblex.ogbizi.com/", title: "Scrabblex", icon: "https://scrabblex.ogbizi.com/favicon.ico" },
    { href: "https://wordsync.ogbizi.com/", title: "Word Sync", icon: "https://wordsync.ogbizi.com/favicon.ico" },
  ]);

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const currentAppId = window.location.href.split("://")[1].split(".")[0];
    /** @type {typeof this.LINKS[number]} */
    let currentAppLink = null;
    const otherAppLinks = this.LINKS.filter((link) => {
      const isCurrentApp = link.href.includes(currentAppId);
      if (isCurrentApp) {
        currentAppLink = link;
      }
      return !isCurrentApp;
    });

    const footerStyles = [
      "margin: 8px",
      "padding-top: 6px",
      "gap: 16px",
      "display: flex",
      "flex-direction: column",
      "justify-items: center",
      "align-content: center",
      "text-align: center",
    ].join(";");
    const linkStyles = `width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; color: currentColor`;

    const currentYear = new Date().getFullYear();

    this.shadowRoot.innerHTML = `
    <footer style="${footerStyles}">
      <span>${currentAppLink?.title || 'Ogbizi'} © ${currentYear}</span>
      <span>Other Games</span>
      <span style="display: flex; gap: 4px; align-items: center; justify-content: center;">
      ${otherAppLinks
        .map((link) => `<a href="${link.href}" target="_blank" style="${linkStyles}"><img alt="${link.title}" width="24" src="${link.icon}"></a>`)
        .join("")}
      </span>
      <span>
      <a href="https://quantumbrackets.com/contact#:~:text=%2B1-,How%20Can%20We%20Help" target="_blank" rel="noopener noreferrer" style="${linkStyles}" aria-label="Quantum Brackets"><img src="https://images.squarespace-cdn.com/content/v1/5bfbd1ad9d5abb4375832c87/1543230554854-YU54RXE45P4AAMT5G8RD/icon_512.png?format=2500w" alt="Quantum Brackets Logo" width="16" height="16"></a>
      <a href="https://www.patreon.com/cw/juju_bard" target="_blank" rel="noopener noreferrer" style="${linkStyles}" aria-label="Support"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 16px; height: 16px;" data-ai-hint="coffee donation"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg></a>
      </span>
    </footer>
    `;
  }
}

customElements.define("games-footer", GamesFooter);
