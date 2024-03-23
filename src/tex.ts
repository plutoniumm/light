import { LitElement, html, css } from 'lit';
import katex from 'katex';
const PREFIX = "lt";

/*
<lt-tex display>
  \int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
</lt-tex>
*/
class Tex extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      cursor: pointer;
      user-select: none;
    }
  `;

  render () {
    return html`
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css">
      <div class="tex">
      <slot></slot>
      </div>
    `;
  }

  firstUpdated () {
    let displayMode = this.hasAttribute('display');

    const cont = this.shadowRoot?.querySelector('.tex') as HTMLElement;
    const text = this.innerText;
    if (!text) return;
    if (text) {
      katex.render(text, cont, {
        displayMode, throwOnError: false
      });
    }
  }
}

customElements.define(`${PREFIX}-tex`, Tex);