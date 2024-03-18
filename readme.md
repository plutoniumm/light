## light

sensible lit components

## Include
```html
<script type="module" src="https://manav.ch/r/dist:light?<MODULE>.js"></script>
<!-- example: chip.js or split.js -->
```

### split
```html
<!-- default ratio is horizontal 1:1 -->
<light-split disabled>
  <!-- disabled prevents resizing -->
  <div slot="a">1</div>
  <div slot="b">2</div>
</light-split>

<!-- custom ratio -->
<light-split vertical ratio="1:2">
  <div slot="a">1</div>
  <div slot="b">2</div>
</light-split>
```

### chip
```html
<light-chip>chip</light-chip>

<!-- bg col and smaller -->
<light-chip bg="#f00" scale="0.5">chip</light-chip>
<!-- bg can only be hex or rgb -->
```