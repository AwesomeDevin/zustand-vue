---
title: What Is Zustand/Zustand-Vue/Zustand-Pub ?
---

![](/img/bear.jpeg?raw=true)


## Zustand
[![Build Size](https://img.shields.io/bundlephobia/minzip/zustand?label=bundle%20size)](https://bundlephobia.com/result?p=zustand)
[![Version](https://img.shields.io/npm/v/zustand?style=flat)](https://www.npmjs.com/package/zustand)
<!-- [![Downloads](https://img.shields.io/npm/dt/zustand.svg?style=flat)](https://www.npmjs.com/package/zustand) -->

A small, fast and scalable bearbones state-management solution using simplified `flux` principles. Has a comfy API based on `hooks`, isn't boilerplatey or opinionated.


Don't disregard it because it's cute. It has quite the claws, lots of time was spent dealing with common pitfalls, like the dreaded **[zombie child](https://react-redux.js.org/api/hooks#stale-props-and-zombie-children)** problem, **[react concurrency](https://github.com/bvaughn/rfcs/blob/useMutableSource/text/0000-use-mutable-source.md)**, and **[context loss](https://github.com/facebook/react/issues/13332)** between mixed renderers. It may be the one state-manager in the React space that gets all of these right.

You can try a [live demo](https://codesandbox.io/s/github/pmndrs/zustand/tree/main/examples/demo) here.

## Zustand-Vue
[![Build Size](https://img.shields.io/bundlephobia/minzip/zustand-vue?label=bundle%20size)](https://bundlephobia.com/result?p=zustand-vue)
[![Version](https://img.shields.io/npm/v/zustand-vue?style=flat)](https://www.npmjs.com/package/zustand-vue)

`zustand-vue` follows the core idea of ​​zustand, the purpose is to inherit the [existing ecology](https://github.com/pmndrs/zustand/blob/main/docs/integrations/third-party-libraries.md) of zustand while being compatible with `vue`。

You can try a [live demo](https://codesandbox.io/s/sleepy-feynman-fwqhoe?file=/src/components/Action.vue).


## Zustand-Pub
[![Build Size](https://img.shields.io/bundlephobia/minzip/zustand-pub?label=bundle%20size)](https://bundlephobia.com/result?p=zustand-pub)
[![Version](https://img.shields.io/npm/v/zustand-pub?style=flat)](https://www.npmjs.com/package/zustand-pub)

As the third party inventory of zustand or zustand vue, `zustand-pub` aims to provide the best cross-application and cross-framework state management and state sharing capabilities for the modularization, componentization, micro-front-end and other business scenarios

This is a micro-frontend [Demo](https://github.com/AwesomeDevin/zustand-pub).

