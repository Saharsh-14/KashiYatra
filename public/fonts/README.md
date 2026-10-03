# Fonts

Place the two approved webfont binaries here:

```
public/fonts/Caesura-Bold.woff2   →  --font-display
public/fonts/Peristiva.woff2      →  --font-editorial
```

The `@font-face` declarations in `styles/fonts.css` already point at these
paths, so dropping the files in activates both faces with no code change.

Until then the type stack falls through to a generic serif. No substitute
webfont is loaded — introducing a third family would break design.md §11.
