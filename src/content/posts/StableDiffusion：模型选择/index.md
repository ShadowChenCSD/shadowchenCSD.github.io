---
title: StableDiffusion：模型选择
published: 2024-11-12
description: 重点讲述AI生图时不同模型对生图结果的影响。
tags: [AIGC·图像, 图像生成, StableDiffusion]
category: AIGC
---

# 1. 模型文件

- **后缀名**
  - **`safetensors`**：由Hugging Face开发，主要**用于存储深度学习模型的参数**，这种格式可以提供更安全和更高效的模型权重存储方式。
  - **checkpoint**：深度学习模型训练过程中的**检查点文件**。在模型训练过程中，为了能够在后续回复训练或者保存模型的阶段性成果，通常会**定期将模型的参数、优化器状态等信息保存到检查点文件中**。
  - **pt**、**pth**：通常是**PyTorch深度学习框架**中用于**保存模型权重**的一种格式。
  - **bin**：**二进制文件**，可以用于存储模型权重等信息，格式通用，**具体的内容解读取决于存储约定**。

- **文件大小**
  - **大模型**：一般在 **2 GB以上**，需要大显存支持
  - **小模型**：一般在 **500 MB以内**，作支撑性工作，非必需

# 2. 模型下载

- **国际渠道**
  - [**HuggingFace**](https://www.huggingface.co)
  - [**CIVITAI**](https://civitai.com)

- **国内渠道**
  - [**HF-Mirror**](https://www.hf-mirror.com)
  - [**modelscope**](www.modelscope.cn)
  - [**CVAI** ](https://cvai.cc)
  - [**LiblibAI**](https://www.liblib.art)
  - [**TusiArt**](https://tusiart.com)
  - [**AIGodlike**](https://www.aigodlike.com)

# 3. 模型分类

## 3.1 基础模型（必须）：决定AI作品的呈现风格

- **SD 1.5模型**、**SDXL模型**、**SD 3.5模型**、**FLUX模型**
  - 模型存放路径
    - **WebUI**：`models/Stable-diffusion`
    - **ComfyUI**：`models/checkpoints`、`models/unet`
  - **效果**：**决定作品的画面风格**

## 3.2 辅助模型（可选）：约束AI作品的画面形象

- **Embendding 模型**
  - 模型存放路径：`models/embeddings`
  - **效果**：精准地指向个别字词的含义，**给AI提供一个极其高效的索引**

- **HyperNetwork 模型**
  - 模型存放路径：`models/hypernetworks`
  - **效果**：**改善生成图像的整体风格**

- **Lora 模型**
  - 模型存放路径：
    - **WebUI**：`models/Lora`
    - **ComfyUI**：`models/loras`
  - **效果**：**向AI传递一个特征准确、主体清晰的形象或风格**
  
- **ControlNet 模型**
  - 模型存放路径：
    - **WebUI**：`models/ControlNet`
    - **ComfyUI**：`models/controlnet`
  - **效果**：基于一些额外的输入信息，来**给AI图像的生成提供明确的指引**

## 3.3 美化模型（可选）：影响AI作品的色彩和质感

- **VAE 模型**
  - 模型存放路径：
    - **WebUI**：`models/VAE`
    - **ComfyUI**：`models/vae`
  - **效果**：**让图片的色彩和质感变得更好**，尤其是**在AI图像整体发灰时**需要使用
  - **注意**
    - 有些VAE功能已经**包含在大模型**里时，无需额外再使用VAE功能
    - **参考模型作者推荐的VAE模型**，或者**使用适用大多数模型的VAE模型**

# 4. 基础模型

## 4.1 模型导入

### WebUI / WebUI-Forge

![SD1.5](WebUI-Forge-SD1.5.jpg)

![SDXL](WebUI-Forge-SDXL.jpg)

![SD3.5](WebUI-Forge-SD3.5.jpg)

![FLUX](WebUI-Forge-FLUX.jpg)

### ComfyUI

|            SD1.5            |           SDXL            |            SD3.5            |           FLUX            |
| :-------------------------: | :-----------------------: | :-------------------------: | :-----------------------: |
| ![SD1.5](ComfyUI-SD1.5.jpg) | ![SDXL](ComfyUI-SDXL.jpg) | ![SD3.5](ComfyUI-SD3.5.jpg) | ![FLUX](ComfyUI-FLUX.jpg) |


## 4.2 画面风格分类

### 动漫插画风

- **特点**：**插画风格**，**具有鲜明的绘画笔触质感**
- **关键词**：illustration，painting，sketch，drawing，comic，anime，cartoon
  - **代表模型**：**Anything V5**、**Counterfeit**、**AbyssOrangeMix**、**CetusMix**、**GhostMix**、**DarkSushiMix** 等

|           Anything V5            |          CetusMix           |
| :------------------------------: | :-------------------------: |
| ![Anything V5](AnythingV5-1.jpg) | ![CetusMix](CetusMix-1.jpg) |
| ![Anything V5](AnythingV5-2.jpg) | ![CetusMix](CetusMix-2.jpg) |

|         GhostXL           |          GhostXL          |
| :-----------------------: | :-----------------------: |
| ![GhostXL](GhostXL-1.jpg) | ![GhostXL](GhostXL-2.jpg) |
| ![GhostXL](GhostXL-3.jpg) | ![GhostXL](GhostXL-4.jpg) |


### 写实摄影风

- **特点**：**写实风格**，拟真化程度高，**对现实世界还原强**
- **关键词**：photography，photo，realistic，photo-realistic，RAW photo
- **代表模型**：**Deliberate**、**Realistic Vision**、**Dream Girl**、**majicflus**、**pixelwave**等

|             Realistic Vision              |           Dream Girl           |
| :---------------------------------------: | :----------------------------: |
| ![RealisticVision](RealisticVision-1.jpg) | ![Dream Girl](DreamGirl-1.jpg) |
| ![RealisticVision](RealisticVision-2.jpg) | ![Dream Girl](DreamGirl-2.jpg) |

### 模型渲染风

- **特点**：**三维渲染效果**
- **关键词**：3D，render，chibi，digital art，concept art
- **代表模型**：**ReV Animated**等

|              示例图-1               |              示例图-2               |              示例图-3               |
| :---------------------------------: | :---------------------------------: | :---------------------------------: |
| ![ReV-Animated](ReV-Animated-1.jpg) | ![ReV-Animated](ReV-Animated-2.jpg) | ![ReV-Animated](ReV-Animated-3.jpg) |


### 自由切换风格

- **特点**：**风格自由切换，成像效果更为逼真**	
- **代表模型**：**SDXL**、**SD 3.5**、**FLUX**等

|       动漫风        |       写实风        |       渲染风        |
| :-----------------: | :-----------------: | :-----------------: |
| ![FLUX](FLUX-1.jpg) | ![FLUX](FLUX-2.jpg) | ![FLUX](FLUX-3.jpg) |


# 5. 辅助模型

## 5.1 Embeddings模型

### 介绍

- **意义**：**精准地指向个别字、词的含义，提高一个极其高效的索引**
- **用途**：针对**特定的**角色的创建，可以用于**正向提示词**，也可以用于**反向提示词**

### 使用方法：WebUI

- 在**提示词**里直接输入**embedding模型名称**即可——可自动映射到对应的模型

![WebUI使用Embeddings](WebUI使用Embeddings.jpg)

### 使用方法：ComfyUI

- 在**提示词**里输入**embedding: embedding模型名称**即可

![ComfyUI使用Embeddings](ComfyUI使用Embeddings.jpg)

### 应用

1. **Deep Negative V1.7**：手指错乱、肢体错乱、颜色混杂等，**对真人模型有效**
2. **EasyNegative**：手指错乱、肢体错乱、颜色混杂、噪点、灰度异常等，**对大多数二次元模型都有效**

|    无Embeddings：EasyNegative     |    有Embeddings：EasyNegative     |
| :-------------------------------: | :-------------------------------: |
| ![无Embeddings](无Embeddings.jpg) | ![有Embeddings](有Embeddings.jpg) |


## 5.2 HyperNetwork模型

### 介绍

- **目的**：一般用于**改善生成图像的整体风格**

### 现况

- 因使用场景不足，不被主流环境接受，已**逐渐被淘汰**。

## 5.3 LoRA模型

### 介绍

- **全称**：Low-Rank Adaptation Models
- **目的**：向AI传递、描述一个**特征准确、主体清晰**的形象
- **用途**：针对**特定的**角色的创建，**主要用于对各种游戏角色、动漫角色进行二次创作**

### 使用方法：WebUI

- 在**提示词**里输入：**\<lora:模型名称:权重\>**

  ![WebUI使用LoRA](WebUI使用LoRA.jpg)

### 使用方法：ComfyUI

- 在**工作流**的模型后面追加**仅加载LoRA模型**，**模型强度**即为**权重**

  ![ComfyUI使用LoRA](ComfyUI使用LoRA.jpg)

### 权重设定

- 推荐使用**0.4~0.8**，可以确切保留特征，同时减弱对画风的影响

### 应用

- **MoXin**

![墨心](墨心.jpg)

# 6. 美化模型

## 6.1 VAE模型

- **作用**；**让图片的色彩和质感变得更好**

## 6.2 效果对比

|         无VAE         |         有VAE         |
| :-------------------: | :-------------------: |
| ![无VAE](无VAE-1.jpg) | ![有VAE](有VAE-1.jpg) |
| ![无VAE](无VAE-2.jpg) | ![有VAE](有VAE-2.jpg) |