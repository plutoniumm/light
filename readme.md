## light

sensible lit components

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