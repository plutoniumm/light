import { LitElement, html, css } from 'lit';
import katex from 'katex';
import { PREFIX } from './config.js';

/*
<light-split ratios="1:1" {vertical} {disabled}>
  <div slot="left">Left</div>
  <div slot="right">Right</div>
</light-split>
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

    const cont = this.shadowRoot?.querySelector('.tex');
    const text = this.innerText;
    console.log(text);
    if (!text) return;
    if (text) {
      katex.render(text, cont, {
        displayMode, throwOnError: false
      });
      // console.log(str);
      // text.innerHTML = str;
    }
  }
}

customElements.define(`${PREFIX}-tex`, Tex);