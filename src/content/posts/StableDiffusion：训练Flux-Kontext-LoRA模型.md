---
title: StableDiffusion：训练Flux-Kontext-LoRA模型
published: 2025-09-20
description: 介绍如何训练一个Flux-Kontext-LoRA模型模型，用于实现风格迁移的功能。
tags: [AIGC·图像, 图像生成, StableDiffusion, Flux]
category: AIGC
image: "http://tn260vxlu.hd-bkt.clouddn.com/public/posts/FLUX.webp"
---

# 1. 训练准备

​	训练Flux-Kontext的LoRA模型，实现风格迁移，需要准备**三样东西**：

- 一组目标风格图像（**`Target组`**）

- 一组输入控制图像（**`Control组`**）

- 一组提示词（**`Prompts`**）

  通过**将控制图和目标图配对**，**以提示词的方式**，实现**控制图到目标图的风格迁移**。

​	一般情况下，**Target组数据**比较容易获得，**提示词**也比较容易撰写，而**Control组数据**比较难获取，需要自行构建。可以使用Flux-Kontext自身的**风格迁移**功能，将**Target组**数据转换成其他风格的数据，作为**Control组**数据，如**线稿风、粘土风、写实风、像素风**等。

​	**训练数据量**控制在**20组～50组**，就可以得到不错的测试效果。

# 2. 训练工具

- **kohya-ss**：https://github.com/bmaltais/kohya_ss

- **AI-ToolKit**（简单易用，**推荐**）：https://github.com/ostris/ai-toolkit

# 3. 作业流程

## 3.1 模型训练

```mermaid
flowchart LR
    A[画风效果图] --> B1[线稿]
    A[画风效果图] --> B2[水彩]
    A[画风效果图] --> B3[粘土]
    A[画风效果图] --> B4[现实]

    B1[线稿] --> B[对照组图]
    B2[水彩] --> B[对照组图]
    B3[粘土] --> B[对照组图]
    B4[现实] --> B[对照组图]

    A --> C[配对]
    B --> C[配对]
    C --> D[训练 LoRA 模型]
```

## 3.2 模型推理

```mermaid
flowchart LR
    A[输入图] --> B[使用LoRA模型]
    A --> D[线稿图]
    D --> B[使用LoRA模型]
    B --> C[画风迁移效果图]
```

# 4. 技术方案

## 4.1 直接风格迁移

​	如果LoRA模型**训练效果较好**，可以**直接将输入图转换为画风迁移的效果图**


|         画风效果         |           输入图           |           输出图            |
| :----------------------: | :------------------------: | :-------------------------: |
| ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/reference/ref-1.png) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/reference/input-1.png) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/reference/output-1.png) |
| ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/reference/ref-1.png) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/reference/input-2.png) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/reference/output-2.png) |

## 4.2 间接风格迁移

​	如果LoRA模型**训练效果一般**，可以**先将输入图转换为线稿图、水彩图等，再通过LoRA模型转换为画风迁移的效果图**

|         画风效果         |           输入图           |              中间产物              |           输出图            |
| :----------------------: | :------------------------: | :--------------------------------: | :-------------------------: |
| ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/reference/ref-2.png) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/reference/input-3.png) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/reference/transitionary-1.png) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/reference/output-3.png) |
| ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/reference/ref-2.png) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/reference/input-4.png) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/reference/transitionary-2.png) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/reference/output-4.png) |

# 5. 示例

## 5.1 训练素材

- **提示词**：`Transfer into Animal Story Style.`
- **图像**：**Control组**和**Target组**

| Control组 - I（线稿风） | Control组 - II（粘土风） |      Target组      |
| :---------------------: | :----------------------: | :----------------: |
|   ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/control/01.png)   |   ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/control/07.png)    | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/15.png) |
|   ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/control/02.png)   |   ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/control/08.png)    | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/16.png) |
|   ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/control/03.png)   |   ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/control/09.png)    | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/17.png) |
|   ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/control/04.png)   |   ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/control/10.png)    | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/18.png) |
|   ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/control/05.png)   |   ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/control/11.png)    | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/19.png) |
|   ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/control/06.png)   |   ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/control/12.png)    | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/20.png) |

## 5.2 测试结果

|       输入1        |       输入2        |      输出1       |      输出2       |
| :----------------: | :----------------: | :--------------: | :--------------: |
| ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/01.jpg) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/02.jpg) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/test/01.png) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/test/02.png) |
| ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/03.jpg) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/04.jpg) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/test/03.png) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/test/04.png) |
| ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/05.jpg) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/06.jpg) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/test/05.png) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/test/06.png) |
| ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/07.jpg) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/08.jpg) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/test/07.png) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/test/08.png) |
| ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/09.jpg) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/10.jpg) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/test/09.png) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/test/10.png) |
| ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/11.jpg) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/12.jpg) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/test/11.png) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/test/12.png) |
| ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/13.jpg) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/target/14.jpg) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/test/13.png) | ![](http://tn260vxlu.hd-bkt.clouddn.com/src/posts/test/14.png) |