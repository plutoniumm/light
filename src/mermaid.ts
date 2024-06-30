import { LitElement, html, css } from 'lit';
import mermaid from 'mermaid';
const PREFIX = "lt";

/*
<lt-mmd>
  flowchart TD
  A[Christmas] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
</lt-mmd>
*/
class Mermaid extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      cursor: pointer;
      user-select: none;
    }
    .mmd{
      font-family: monospace;
      white-space: pre;
    }
  `;

  render () {
    return html`
      <div class="mmd">
        <slot></slot>
      </div>
    `;
  };

  firstUpdated () {
    const theme = this.getAttribute('theme') || "base";
    const element = this.shadowRoot?.querySelector('.mmd') as HTMLElement;
    const text = this.innerHTML.trim()
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');

    const API = mermaid.mermaidAPI;
    API.initialize({ securityLevel: 'loose', theme });
    API.render('graphDiv', text).then(({ svg }) => {
      element.innerHTML = svg;
    });
  }
}

customElements.define(`${PREFIX}-mmd`, Mermaid);