---
title: 什么是 zustand / zustand-vue / zustand-pub ?
tags:
  - 介绍
  - 在线演示
---

![](/img/bear.jpeg?raw=true)


<!-- [![Downloads](https://img.shields.io/npm/dt/zustand.svg?style=flat)](https://www.npmjs.com/package/zustand) -->

## Zustand
[![Build Size](https://img.shields.io/bundlephobia/minzip/zustand?label=bundle%20size)](https://bundlephobia.com/result?p=zustand)
[![Version](https://img.shields.io/npm/v/zustand?style=flat)](https://www.npmjs.com/package/zustand)

基于 `Flux` 模型实现的小型、快速和可扩展的状态管理解决方案，拥有基于 `hooks` 的舒适的API，非常地灵活且有趣.

不要因为它很娇小就忽略它，它拥有锋利的爪子，花费了大量时间用来处理常见的陷阱，比如出现在多个复杂渲染器之间的 **[zombie child](https://react-redux.js.org/api/hooks#stale-props-and-zombie-children)**、**[react concurrency](https://github.com/bvaughn/rfcs/blob/useMutableSource/text/0000-use-mutable-source.md)**、以及 **[context loss](https://github.com/facebook/react/issues/13332)** 问题. `Zustand` 可以作为 React 应用中的一个状态管理器来正确处理这些问题。

你可以在这里尝试 [在线演示](https://codesandbox.io/s/github/pmndrs/zustand/tree/main/examples/demo).

## Zustand-Vue
[![Build Size](https://img.shields.io/bundlephobia/minzip/zustand-vue?label=bundle%20size)](https://bundlephobia.com/result?p=zustand-vue)
[![Version](https://img.shields.io/npm/v/zustand-vue?style=flat)](https://www.npmjs.com/package/zustand-vue)

`zustand-vue` 遵循 zustand 核心思想，目的是在兼容 `vue` 的同时，继承 zustand 的[存量生态](https://github.com/pmndrs/zustand/blob/main/docs/integrations/third-party-libraries.md)。

你可以在这里尝试 [在线演示](https://codesandbox.io/s/sleepy-feynman-fwqhoe?file=/src/components/Action.vue).


## Zustand-Pub
[![Build Size](https://img.shields.io/bundlephobia/minzip/zustand-pub?label=bundle%20size)](https://bundlephobia.com/result?p=zustand-pub)
[![Version](https://img.shields.io/npm/v/zustand-pub?style=flat)](https://www.npmjs.com/package/zustand-pub)

`zustand-pub` 做为 zustand 或 zustand-vue 的第三方库存在，目的是为 **模块化、组件化、微前端** 等业务场景，提供 **跨应用、跨框架** 的 **状态管理** 及 **状态共享** 能力。

这里有一个微前端的 [Demo](https://github.com/AwesomeDevin/zustand-pub/tree/main/demo/micro-frontend).