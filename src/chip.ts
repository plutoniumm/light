import { LitElement, html, css } from 'lit';

/*
<light-split ratios="1:1" {vertical} {disabled}>
  <div slot="left">Left</div>
  <div slot="right">Right</div>
</light-split>
*/
class Chip extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      padding: 7px 12px;
      border-radius: 5px;
      overflow: hidden;
      line-height: 1.5;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      user-select: none;
    }
    .chip:hover {
      filter: brightness(1.1);
    }
  `;

  norm = (x: number): number =>
    x < 0.03928
      ? x / 12.92
      : Math.pow((x + 0.055) / 1.055, 2.4);

  rlum = (r: number, g: number, b: number): number =>
    this.norm(r) * 0.2126 +
    this.norm(g) * 0.7152 +
    this.norm(b) * 0.0722;

  contrast = (a: number[], b: number[]): number => {
    const l1 = this.rlum(a[0], a[1], a[2]) + 0.05;
    const l2 = this.rlum(b[0], b[1], b[2]) + 0.05;
    return l1 / l2;
  }

  toRGB = (any: string) => {
    // we will ignore the alpha channel
    if (any.startsWith('#')) {
      // hex3,hex4->hex6
      if (any.length === 4 || any.length === 5) {
        any = "#" +
          any[1] + any[1] +
          any[2] + any[2] +
          any[3] + any[3];
      }
      // hex6->rgb
      if (any.length === 7) {
        return [
          parseInt(any.slice(1, 3), 16),
          parseInt(any.slice(3, 5), 16),
          parseInt(any.slice(5, 7), 16)
        ];
      }
    }
    // rgb->rgb
    if (any.includes(',')) {
      return any.split(',').map(x => parseInt(x));
    }
    // it should choose black by default
    return [0, 0, 0];
  }

  render () {
    return html`
      <div class="chip">
        <slot></slot>
      </div>
    `;
  }

  firstUpdated () {
    const bg = this.getAttribute('bg');
    if (bg) {
      const rgb = this.toRGB(bg);
      const contrast = 1 / this.contrast(rgb, [255, 255, 255]);
      if (contrast > 4.5) {
        this.style.color = 'white';
      } else {
        this.style.color = 'black';
      }
      this.style.backgroundColor = bg;
    } else {
      this.style.backgroundColor = '#888';
      this.style.color = '#000';
    }
    let scale: any = this.getAttribute('scale');
    if (scale) {
      scale = parseFloat(scale);
      if (isNaN(scale)) {
        scale = 1;
      };
      this.style.transform = `scale(${scale})`;
    }
  }
}

customElements.define('light-chip', Chip);