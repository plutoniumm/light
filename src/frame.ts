import { LitElement, html, css } from 'lit';
const PREFIX = "lt";

/*
<lt-frame>
  <template>
    raw dogging html
  </template>
</lt-frame>
*/
// onclick it should become editable
class Frame extends LitElement {
  static styles = css`
    :host {
      display: block;
      cursor: pointer;
    }
    .frame {
      display: none;
    }
    iframe {
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  `;

  render () {
    return html`
      <div class="frame">
        <slot></slot>
      </div>
      <iframe frameborder="1"></iframe>
    `;
  };

  firstUpdated () {
    let ifrm: any = this?.shadowRoot?.querySelector('iframe');
    if (ifrm === null) return;

    ifrm = ifrm.contentWindow || ifrm?.contentDocument || ifrm?.contentDocument
    ifrm = ifrm?.document || ifrm;

    const value = this.innerHTML.replace(/<template>/g, '').replace(/<\/template>/g, '').trim();

    ifrm.open();
    ifrm.write(value);
    ifrm.close();
  }
}

customElements.define(`${PREFIX}-frame`, Frame);