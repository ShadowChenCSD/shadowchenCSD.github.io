---
title: Markdown：扩展语法
published: 2023-10-18
description: 介绍撰写Markdown文档的扩展语法规则。
image: "/posts/markdown.png"
tags: [Markdown, 文章撰写]
category: 博客
---

# 1. 特别提醒

- 可以使用下列五种方案进行特别提醒：`note` `tip` `important` `warning` `caution`。

```
:::note
需要关注的信息。
:::

:::tip
心得体会。
:::

:::important
重要举措。
:::

:::warning
存在潜在风险。
:::

:::caution
行为可能会带来负面影响。
:::
```

:::note
需要关注的信息。
:::

:::tip
心得体会。
:::

:::important
重要举措。
:::

:::warning
存在潜在风险。
:::

:::caution
行为可能会带来负面影响。
:::

- 可以**自定义标题**，内容**支持使用markdown的基础标记**

```
:::note[自定义标题]
这是一个**自定义标题**的笔记。
:::
```

:::note[自定义标题]
这是一个**自定义标题**的笔记。
:::

# 2. 内容遮盖

- 可以**遮盖**不要立即显示的文本。

```
这个内容:spoiler[不要**立即显示**]。
```

这个内容:spoiler[不要**立即显示**]。

# 3. GitHub仓库卡片

- 可以增加**卡片**，直接链接到**Github仓库**。

`::github{repo="ShadowChenCSD/shadowchenCSD.github.io"}`

::github{repo="ShadowChenCSD/shadowchenCSD.github.io"}