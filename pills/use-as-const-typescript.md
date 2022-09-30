---
title: Use as const Typescript
description: Why is important to define as const
date: 2022-09-27
tags:
  - Typescript
---

```tsx
// Declare your constant object
const MY_CONSTANTS = {
  FOO: 'foo',
  BAR: 'bar',
} as const;

// helper type
type ValueOf<T> = T[keyof T];

// type only allows values present in MY_CONSTANTS
type MyvarType = ValueOf<typeof MY_CONSTANTS>;

// ERROR: myvar variable can be set only with values defined in MY_CONSTANTS
const myvar : MyvarType = 'yolo';

// OK: othervar variable is set with a value defined in MY_CONSTANTS
const othervar: MyvarType = MY_CONSTANTS.FOO;

// IMPORTANT: try remove 'as const' from MY_CONSTANTS definition
```

[Playground Link](https://www.typescriptlang.org/play?noImplicitAny=false#code/PTAEBEFMGMBsEMBOlQE8D2BXRproHYDOALvPsaOgEYBWMxAUHkRQLICaA+gMIDyAcgGUAKgEF+wwaAC8oAN4NQoAGK9eALlAByAGbp0WgDSLQAIVEAlTVqpIjDAL6h4hXARIBuBgxCgAFpCwAA6QOMSoIQzhIaAAavCwmJC8OgA8wgB8MqDCANoA1pAYOjkAul4+YNEoBLCozrCw6ADurgBuCUmuQciEkOSgAJb4oBw8AiLiklERKKyoHYjCs9nxiclp1eglY3xCYhKCGRW+AKIWFrxWoAC2C0igi4PwVLAo0GSgVCh9FLX1zUGxD8j06kFcABNIDphpAIUMRrsJgdpswSLd7jhNPNFssYrItBgmloTmBeABpTToYGhRagxDPV4oQauX6gQHA5yg9agKEw-BwhGjLh7SaHJjuP40xCLbGYvEoWRI-ZTQQAOlUvFJoAAkqwAApXFGaYiIerIG7oNooLQuNwsLSgHSIdA3YXjFWHXnQ4ZAwYEIA)


completar info con esto 
https://bobbyhadz.com/blog/typescript-as-const