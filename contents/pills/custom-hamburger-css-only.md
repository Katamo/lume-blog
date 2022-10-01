---
title: CSS only hamburger with interaction
description: Custom CSS hamburger menu with swich functionality
date: 2022-10-01
tags:
  - CSS
---


```html
<div class="c-hamburger">
  <input class="hamburger-switch" type="checkbox" name="hamburger-switch" id="hamburger-switch" />
  <div class="hamburger-lines">
    <span class="line line1"></span>
    <span class="line line2"></span>
    <span class="line line3"></span>  
  </div>
</div>
```

```css
.c-hamburger {
  position: relative;

  & .hamburger-switch {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  & .hamburger-lines {
    margin: auto;
    display: block;
    height: 5--sp;
    width: 6--sp;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .line {
      display: block;
      height: 1--sp;
      width: 100%;
      border-radius: 3--sp;
      background: var(--color-text);
    }

    & .line1 {
      transform-origin: 100% 0%;
      transition: transform 0.4s ease-in-out;
    }

    & .line2 {
      transition: transform 0.2s ease-in-out;
    }

    & .line3 {
      transform-origin: 100% 100%;
      transition: transform 0.4s ease-in-out;
    }
  }

  &:has( .hamburger-switch:checked) {
    & .hamburger-lines .line1 {
      transform: rotate(-45deg);
    }
    & .hamburger-lines .line2 {
      transform: scaleY(0);
    }
    & .hamburger-lines .line3 {
      transform: rotate(45deg);
    }
  }
}
```