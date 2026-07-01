// 🪟 Component 1: The Floating Window Template
class WindowPanel extends HTMLElement {
    connectedCallback() {
        // Fetch properties set directly in the HTML tag
        const title = this.getAttribute('title') || 'system.bin';
        const innerContent = this.innerHTML; // Grab whatever you wrote inside the tag

        // Inject standard semantic elements inside our custom tag shell
        this.innerHTML = `
            <section class="window-panel">
                <header class="window-titlebar">
                    <span class="window-dots"></span>
                    <span class="window-title">${title}</span>
                </header>
                <article class="window-body">
                    ${innerContent}
                </article>
            </section>
        `;
    }
}
customElements.define('window-panel', WindowPanel);

// 🏷️ Component 2: Your Custom Highlight Tag
class HighlightText extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<span class="highlight">${this.innerHTML}</span>`;
    }
}
customElements.define('highlight-text', HighlightText);

// 🎮 Component 3: Project Display Rows
class ProjectCard extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Untitled';
        const type = this.getAttribute('type') || 'File';
        const status = this.getAttribute('status') || 'Idle';
        
        this.innerHTML = `
            <div class="project-row">
                <div class="project-info">
                    <h4>${title}</h4>
                    <span>[${type}]</span>
                </div>
                <div class="project-status">${status}</div>
            </div>
        `;
    }
}
customElements.define('project-card', ProjectCard);

// 🕒 System Status Clock
function updateSystemClock() {
    const clockElement = document.getElementById('nav-clock');
    if (clockElement) {
        clockElement.textContent = new Date().toLocaleTimeString();
    }
}
setInterval(updateSystemClock, 1000);
updateSystemClock();

