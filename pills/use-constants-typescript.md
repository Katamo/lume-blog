---
title: Use Constants in React Typescript
description: Constrain the allowed values for a component property
date: 2022-09-27
tags:
  - React
  - Typescript
---

Say you need a prop that only can be set to a limited number of constant values.

For example a `layout` prop in your compoment that only allows to be set to the following values:

```javascript
  layout = 'main_aside' | 'aside_main' | 'equal'
```

## TL;DR

Create this helper `type ValueOf<T> = T[keyof T];` to define your allowed values from the const object,
```typescript
  myprop: ValueOf<typeof MY_CONST_OBJ>;
```

## The process

To allow your component prop to only allow a set of defined constants you should...

* Define your constant set.
* Import the constants in your type definition.
* Use the constants to define a the type
* Use it in your component, the allowable values will be only in the initial values defined in the constants object

## Define your constant set.

In a constants file define the `const MAIN_ASIDE_LAYOUT` and the values in form of an object.

```typescript
export const MAIN_ASIDE_LAYOUT = {
  MAIN_ASIDE: 'main_aside',
  ASIDE_MAIN: 'aside_main',
  EQUAL: 'equal',
};
```

## Import the constant in your component type definition

Use the const object to define your type.\
Then define an helper type named `ValueOf` it will take any value declared in the type passed to it.

```typescript
import { MAIN_ASIDE_LAYOUT } from '@constants/index';

type ValueOf<T> = T[keyof T];
  /**
  * Posible layout values
  *
  * @type {ValueOf<typeof MAIN_ASIDE_LAYOUT>}
  */
  layout: ValueOf<typeof MAIN_ASIDE_LAYOUT>;
```

## Use it in your component

Now you can consume in your component with the value constrains. Typescript will trigger an error in case you don't use a valid value for your property

```tsx
import React from 'react';
import { MAIN_ASIDE_LAYOUT } from '@constants/index';
import type { ContentMainAsideType } from './types/index';

const ContentMainAside = ({
  layout = MAIN_ASIDE_LAYOUT.MAIN_ASIDE,
}: ContentMainAsideType) => (
  <div data-layout={layout}>
    ...
  </div>
);

export default ContentMainAside;
```
