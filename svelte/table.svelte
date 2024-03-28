<script lang="ts">
  // 0th row is id, first row is header, 2nd row is types
  // rest of the rows are data
  export let input: any[] = [];
  let [ids, headers, types, ...data] = input;

  const sorts = {
    Number: (a: number, b: number) => a - b,
    default: (a: string, b: string) => a.localeCompare(b),
  };

  $: mode = 0;

  console.log(ids, headers, types, data);

  const lens: number[] = [];
  // min len for each COL
  for (let i = 0; i < headers.length; i++) {
    for (let j = 0; j < data.length; j++) {
      lens[i] = Math.max(lens[i] || 0, data[j][i].length);
    }
  }
</script>

<table xmlns:svg="http://www.w3.org/2000/svg">
  <tr>
    {#each headers as header, index}
      <th style="position: relative;min-width{lens[index] * 10}px">
        {header}
        <button style="position: absolute; right: 0; top: 0;">
          <svg viewBox="0 0 32 32" fill="currentcolor">
            {#if mode == 0}
              <path d="M30 22 L16 6 2 22 Z" />
            {:else if mode == 1}
              <path d="M30 10 L16 26 2 10 Z" />
            {:else}
              <path d="M 26 16 L 16 26 L 6 16 Z M 26 15.5 L 16 6 L 6 15.5" />
            {/if}
          </svg>
        </button>
      </th>
    {/each}
  </tr>
  {#each data as row}
    <tr>
      {#each row as cell}
        <td>{cell}</td>
      {/each}
    </tr>
  {/each}
</table>

<style>
  svg,
  svg * {
    pointer-events: none !important;
  }
  svg {
    width: 1.25em;
    height: 1.25em;
    vertical-align: middle;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
    fill: #000;
  }
</style>
