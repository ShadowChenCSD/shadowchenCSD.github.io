---
title: StableDiffusion：表情包
published: 2025-01-20
description: 介绍如何针对特定角色生成相关的表情包。
tags: [AIGC·图像, 图像生成, StableDiffusion, Flux]
category: AIGC
image: "/posts/表情包.jpg"
---

# 1. 文生图

## 1.1 工作流

![工作流](文生图：表情控制.jpg)

## 1.2 提示词

- `masterpiece, best quality, amazing quality,`

- `Picture layout: nine grids, corresponding to a mood, do not show grid lines, white background.`

- `Various expressions and movements, (happy, angry, sad, disappointed, crying, thinking, angry, smiling, laugh, sighing), a set of illustrations, a set of illustrations, dynamic poses,`
- `superman, cartoon style, thick black lines, colorful,`

## 1.3 效果图

|      生成图       |      生成图       |      生成图       |
| :---------------: | :---------------: | :---------------: |
| ![生成图](01.jpg) | ![生成图](02.jpg) | ![生成图](03.jpg) |
| ![生成图](04.jpg) | ![生成图](05.jpg) | ![生成图](06.jpg) |
| ![生成图](07.jpg) | ![生成图](08.jpg) | ![生成图](09.jpg) |

# 2. 文生图：角色参考

## 2.1 工作流

![工作流](角色参考：表情控制.jpg)

## 2.2 提示词

- `masterpiece, best quality, amazing quality,`
- `Picture layout: nine grids, corresponding to a mood, do not show grid lines`

- `Various expressions and movements, (happy, angry, sad, disappointed, crying, thinking, angry, smiling, laugh, sighing), a set of illustrations, a set of illustrations, dynamic poses, ,`
- `cartoon style, thick black lines, colorful,`

## 2.3 示例图

|          参考图          |      生成图       |
| :----------------------: | :---------------: |
| ![参考图](AnimeGirl.jpg) | ![生成图](19.jpg) |

|      生成图       |      生成图       |      生成图       |
| :---------------: | :---------------: | :---------------: |
| ![生成图](10.jpg) | ![生成图](11.jpg) | ![生成图](12.jpg) |
| ![生成图](13.jpg) | ![生成图](14.jpg) | ![生成图](15.jpg) |
| ![生成图](16.jpg) | ![生成图](17.jpg) | ![生成图](18.jpg) |

# 3. 文生图：角色LoRA

## 3.1 工作流

![工作流](角色LoRA：表情控制.jpg)

## 3.2 提示词

- `masterpiece, best quality, amazing quality,`
- `Picture layout: nine grids, corresponding to a mood, do not show grid lines`

- `Various expressions and movements, (happy, angry, sad, disappointed, crying, thinking, angry, smiling, laugh, sighing), a set of illustrations, a set of illustrations, dynamic poses, ,`
- `cartoon style, thick black lines, colorful,`

## 3.3 示例图

|      生成图       |      生成图       |      生成图       |
| :---------------: | :---------------: | :---------------: |
| ![生成图](20.jpg) | ![生成图](21.jpg) | ![生成图](22.jpg) |
| ![生成图](23.jpg) | ![生成图](24.jpg) | ![生成图](25.jpg) |
| ![生成图](26.jpg) | ![生成图](27.jpg) | ![生成图](28.jpg) |

# 4. 使用经验

- 可能会出现**不是九宫格构图**的情况
  - **好处**：**多样的表现效果**
  - **坏处**：**不能正确切分图像**
- **通过提示词，AI并不能够准确地表现所有的表情**