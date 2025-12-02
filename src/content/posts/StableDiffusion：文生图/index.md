---
title: StableDiffusion：文生图
published: 2024-11-01
description: 介绍如何使用WebUI、ComfyUI进行文生图。
tags: [AIGC·图像, 图像生成, StableDiffusion]
category: AIGC
image: "/posts/StableDiffusion.png"
---

# 1. WebUI

## 1.1 载入模型

- 选取**AI模型**进行加载，如有必要，还需要加载**VAE模型**

## 1.2 填写正向提示词

- 希望在画面中**出现**的内容
- 提示词 **`只支持英文`**

## 1.3 填写反向提示词

- 希望画面中需要**排除**的内容
- 提示词 **`只支持英文`**

## 1.4 设置合适的AI参数

- **采样迭代次数**：28步左右
- **采样方法**
  - **采样器**：Euler、DPM……
  - **调度器**：Normal、Simple、Karras、sgm_uniform……
- **图像尺寸**：宽度、高度
- **提示词引导系数**
- **批量生产**：总批次数、单批生成数
- **随机数种子**

## 1.5 生成图片

- 点击**生成**按钮

![WebUI文生图·操作流程](WebUI文生图·操作流程.jpg)

## 1.6 浏览AI生成的图片

- 默认存放在本地的**outputs**文件夹中的**txt2img-images**文件夹中

## 1.7 示例

![WebUI示例图](WebUI示例图.jpg)

# 2. ComfyUI

## 2.1 搭建工作流

​		主要分为**载入模型**、**撰写提示词**、**设置采样器**、**设置VAE解码**、**图像预览或保存**等功能模块。

### ① SD 1.5 工作流，K采样器

![SD_1.5_工作流](SD_1.5_工作流.jpg)

### ② SDXL 工作流，K采样器

![SDXL_工作流](SDXL_工作流_K采样器.jpg)

### ③ SDXL 工作流，自定义采样器

![SDXL_工作流](SDXL_工作流_自定义采样器.jpg)

### ④ SD 3.5 工作流，K采样器

![SD_3.5_工作流](SD_3.5_工作流.jpg)

### ⑤ FLUX 工作流，K采样器

- **CFG必须为1.0**

![FLUX_工作流](FLUX_工作流_K采样器.jpg)

### ⑥ FLUX 工作流，自定义采样器

![FLUX_工作流](FLUX_工作流_自定义采样器.jpg)

## 2.2 载入模型

- 选取**AI模型**进行加载
- 选取对应的**VAE模型**进行加载
- 选取**CLIP模型**进行加载（如有需要）

## 2.3 提示词

- **正向提示词**：连接至**采样器**的**positive输入端**
  - 希望在画面中**出现**的内容
  - 提示词 **`只支持英文 `**（依赖于模型）
- **反向提示词**：连接至**采样器**的**negative输入端**
  - 希望画面中需要**排除**的内容
  - 提示词 **`只支持英文`** （依赖于模型）

## 2.4 设置合适的AI参数

- **种子**：随机数种子
- **步骤**：采样迭代次数
- **cfg**：提示词引导系数
- **采样器**：Euler、DPM……
- **调度器**：Normal、Simple、Karras、sgm_uniform……
- **图像尺寸**：宽度、高度
- **批量生产**：批量大小

## 2.5 生成图片

- **Preview Image**：**预览图像，但不保存**
- **Save Image**：**预览图像，同时保存**

## 2.6 示例

![ComfyUI示例图](ComfyUI示例图.jpg)

# 3. 动漫人物、动漫场景

## 3.1 提示词

- 通常情况下可以使用 `anime style`、`cartoon`、`comic` 等**风格限定提示词**

## 3.2 动漫人物

### Anything V5

![](AnythingV5-1.jpg)

![](AnythingV5-2.jpg)

![](AnythingV5-3.jpg)

### CetusMix

![](CetusMix-1.jpg)

![](CetusMix-2.jpg)

![](CetusMix-3.jpg)

![](CetusMix-4.jpg)

![](CetusMix-5.jpg)

### Counterfeit

![](Counterfeit-1.jpg)

![](Counterfeit-2.jpg)

![](Counterfeit-3.jpg)

![](Counterfeit-4.jpg)

![](Counterfeit-5.jpg)

### cuteYukiMix

![](cuteYukiMix-1.jpg)

![](cuteYukiMix-2.jpg)

![](cuteYukiMix-3.jpg)

![](cuteYukiMix-4.jpg)

![](cuteYukiMix-5.jpg)

![](cuteYukiMix-6.jpg)

### DarkSushiMix

![](DarkSushiMix-1.jpg)

![](DarkSushiMix-2.jpg)

![](DarkSushiMix-3.jpg)

![](DarkSushiMix-4.jpg)

![](DarkSushiMix-5.jpg)

![](DarkSushiMix-6.jpg)

![](DarkSushiMix-7.jpg)

![](DarkSushiMix-8.jpg)

![](DarkSushiMix-9.jpg)

![](DarkSushiMix-10.jpg)

### NeverEndingDream

![](NeverEndingDream-1.jpg)

![](NeverEndingDream-2.jpg)

### ReVAnimated

![](ReVAnimated-1.jpg)

![](ReVAnimated-2.jpg)

## 3.3 动漫场景

### Anything V5

![](AnythingV5-4.jpg)

![](AnythingV5-5.jpg)

![](AnythingV5-6.jpg)

![](AnythingV5-7.jpg)

![](AnythingV5-8.jpg)

### CetusMix

![](CetusMix-6.jpg)

![](CetusMix-7.jpg)

![](CetusMix-8.jpg)

### ReVAnimated

![](ReVAnimated-3.jpg)

![](ReVAnimated-4.jpg)

![](ReVAnimated-5.jpg)

![](ReVAnimated-6.jpg)

# 4. 真实人物、真实场景

## 4.1 提示词

- 通常情况下可以使用 `realistic style`、`photography` 等**风格限定提示词**

## 4.2 真实人物

### Deliberate

![](Deliberate-1.jpg)

### RealisticVision

![](RealisticVision-1.jpg)

![](RealisticVision-2.jpg)

![](RealisticVision-3.jpg)

### DreamGirl

![](DreamGirl-1.jpg)

![](DreamGirl-2.jpg)

![](DreamGirl-3.jpg)

![](DreamGirl-4.jpg)

## 4.3 场景

### Deliberate

![](Deliberate-2.jpg)

### NeverEndingDream

![](NeverEndingDream-3.jpg)

![](NeverEndingDream-4.jpg)
