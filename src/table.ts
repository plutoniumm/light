import type { SvelteComponent } from 'svelte';
import Table from '../svelte/table.svelte';
const PREFIX = 'lt';

class SvTable extends HTMLElement {
  el: SvelteComponent;

  idfy = (s: string) => s.toLowerCase().replace(/\s/g, "-")

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const inner = this.innerHTML;
    const input: any[] = inner.trim().split(';').slice(0, -1);
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim()
        .split(',')
        .map((v: string) => v.trim());
    };

    // add id as the 0th element
    input.unshift(input[0].map(this.idfy));

    // process types
    const types = input[2];
    for (let i = 0; i < types.length; i++) {
      const type = types[i];
      console.log(type);
      if (type === 'Number') {
        for (let j = 3; j < input.length; j++) {
          input[j][i] = Number(input[j][i]);
        }
      }
    };

    this.el = new Table({
      target: shadowRoot,
      props: { input },
    })
  }
  disconnectedCallback (): void {
    this.el?.$destroy();
  }
}

customElements.define(PREFIX + '-table', SvTable)