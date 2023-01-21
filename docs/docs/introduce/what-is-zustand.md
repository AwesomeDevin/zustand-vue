---
title: 什么是 Zustand ?
tags:
  - 演示
  - 开始上手
---

![](/img/bear.jpeg?raw=true)
[![Build Status](https://img.shields.io/github/actions/workflow/status/pmndrs/zustand/lint-and-type.yml?branch=main)](https://github.com/pmndrs/zustand/actions?query=workflow%3ALint)
[![Build Size](https://img.shields.io/bundlephobia/minzip/zustand?label=bundle%20size)](https://bundlephobia.com/result?p=zustand)
[![Version](https://img.shields.io/npm/v/zustand?style=flat)](https://www.npmjs.com/package/zustand)
[![Downloads](https://img.shields.io/npm/dt/zustand.svg?style=flat)](https://www.npmjs.com/package/zustand)
[![Discord Shield](https://img.shields.io/discord/740090768164651008?style=flat&logo=discord&logoColor=ffffff)](https://discord.gg/poimandres)


基于 `Flux` 模型，基于 hooks 的 API，非常地灵活且有趣.

不要因为它很娇小就忽略它，它拥有锋利的爪子，花费了大量时间用来处理常见的陷阱，比如出现在多个复杂渲染器之间的 **[zombie child](https://react-redux.js.org/api/hooks#stale-props-and-zombie-children)**、**[react concurrency](https://github.com/bvaughn/rfcs/blob/useMutableSource/text/0000-use-mutable-source.md)**、以及 **[context loss](https://github.com/facebook/react/issues/13332)** 问题. `Zustand` 可以作为 React 应用中的一个状态管理器来正确处理这些问题。

你可以在这里尝试 [在线演示](https://codesandbox.io/s/github/pmndrs/zustand/tree/main/examples/demo).