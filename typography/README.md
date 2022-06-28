# Typography

- iosevka custom:

  - 300, 400, 500
  - regular/italic
  - jetbrains mono
  - javascript ligatures
  - 'cv71' 2 - zero - iosevka 0
  - 'cv86' 1 - parentheses - iosevka ()

- private-build-plans.toml

```
[buildPlans.iosevka-custom]
family = "Iosevka Custom"
spacing = "normal"
serifs = "sans"
no-cv-ss = false

  [buildPlans.iosevka-custom.variants]
  inherits = "ss14"

    [buildPlans.iosevka-custom.variants.design]
    zero = "slashed"
    paren = "normal"

  [buildPlans.iosevka-custom.ligations]
  inherits = "javascript"

[buildPlans.iosevka-custom.weights.light]
shape = 300
menu = 300
css = 300

[buildPlans.iosevka-custom.weights.regular]
shape = 400
menu = 400
css = 400

[buildPlans.iosevka-custom.weights.medium]
shape = 500
menu = 500
css = 500

[buildPlans.iosevka-custom.slopes.upright]
angle = 0
shape = "upright"
menu = "upright"
css = "normal"

[buildPlans.iosevka-custom.slopes.italic]
angle = 9.4
shape = "italic"
menu = "italic"
css = "italic"
```
