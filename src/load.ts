const elements = document.querySelectorAll('lt-tex, lt-chip, lt-split');
const done: string[] = []

for (let i = 0; i < elements.length; i++) {
  const tag = elements[i].tagName.toLowerCase().split('-')[1];
  if (done.includes(tag)) {
    continue
  };
  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.src = `https://manav.ch/r/dist:light?${tag}.js`;
  document.head.appendChild(script);

  done.push(tag);
};