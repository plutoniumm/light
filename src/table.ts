import type { SvelteComponent } from 'svelte';
import Table from '../svelte/table.svelte';
const PREFIX = 'lt';

class SvTable extends HTMLElement {
  _element: SvelteComponent;

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    this._element = new Table({
      target: shadowRoot,
      props: {
        items: this.getAttribute('items').split(','),
      },
    })
  }
  disconnectedCallback (): void {
    this._element?.$destroy();
  }
}

customElements.define(PREFIX + '-table', SvTable)