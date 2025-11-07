---
title: StableDiffusion：ControlNet模型
published: 2024-12-12
description: 介绍如何ControlNet模型控制图像的结构。
tags: [AIGC·图像, 图像生成, StableDiffusion]
category: AIGC
pinned: true
image: "/posts/ControlNet.png"
---

# 1. 说明

​		使用**ControlNet插件可以更好地 `控制AI模型，生成想要的特定姿势或画面`** 。ControlNet的**核心能力**就是能**让用户通过设置各种条件来让AI更可控地生成最终图像结果**，而**这些条件是通过调节预处理器参数来实现的**。

​		常用的**ControlNet处理**包括：基于**Canny边缘**生图、基于**Depth深度**生图、基于**HED柔和边缘**生图、基于**Pose姿态控制**生图、**Blur去模糊**、**Gray灰度上色**、**UpScale放大**等。

![ControlNet](ControlNet.jpg)

# 2. 预处理

## 2.1 边缘检测：Canny

- **控制物体轮廓，还原图像外形特征，边缘较为锋利**

## 2.2 柔和边缘检测：SoftEdge（HED）

- **控制物体轮廓，还原图像外形特征，但边缘效果更为柔和**

## 2.3 深度检测：Depth

- **对场景的描绘还原**，尤其是**富有空间感的多层次场景**
  - **越白**的地方离得**越近**
  - **越黑**的地方离得**越远**

## 2.4 姿势控制：OpenPose

- **骨骼图**：控制人物体态的呈现
  - **OpenPose**： `五官` 、 `四肢`
  - **OpenPose-Hand**：`五官` + `四肢` + `手部` ，添加对手部骨骼的精细刻画
  - **OpenPose-Face**：`五官` + `四肢` + `面部`，添加面部特征
  - **OpenPose-FaceOnly**：只关注 `面部` 特征
  - **OpenPose-Full**：`五官` + `四肢` + `手部` + `面部`，并同时有对手部骨骼、面部特征的精细刻画

|              OpenPose-FaceOnly              |             OpenPose              |            OpenPose-Face            |            OpenPose-Full            |
| :-----------------------------------------: | :-------------------------------: | :---------------------------------: | :---------------------------------: |
| ![OpenPose-FaceOnly](OpenPose-FaceOnly.jpg) | ![OpenPose](OpenPose-Default.jpg) | ![OpenPose-Face](OpenPose-Face.jpg) | ![OpenPose-Full](OpenPose-Full.jpg) |

|             OpenPose              |            OpenPose-Hand            |            OpenPose-Full            |
| :-------------------------------: | :---------------------------------: | :---------------------------------: |
| ![OpenPose](OpenPose-Default.jpg) | ![OpenPose-Hand](OpenPose-Hand.jpg) | ![OpenPose-Full](OpenPose-Full.jpg) |

# 3. 流程步骤

## 3.1 预处理

​		使用**预处理器**产生**控制图**。

## 3.2 ControlNet处理

​		将**控制图**和**ControlNet模型**输入至**ControlNet组件**进行**画面构图**控制处理。

## 3.3 生图

​		将**ControlNet组件**处理后的结果，输入至**采样器**，进行**图像生成**。

# 4. WebUI的使用方式

## 4.1 安装扩展

​		通过**扩展列表**搜索，下载[**ControlNet组件**](https://github.com/Mikubill/sd-webui-controlnet)。

## 4.2 下载模型

- **SD 1.5**
  - 需要配合同名的yaml文件一起使用
  - **模型地址**：`hf-mirror.com/lllyasviel/ControlNet-v1-1`
  - **存放**：`StableDiffusionWebUI/extensions/sd-webui-controlnet/models`

- **SD 3.5**
  - **模型地址**：[SD_3.5-canny](https://hf-mirror.com/stabilityai/stable-diffusion-3.5-large-controlnet-canny/blob/main/diffusion_pytorch_model.safetensors)、[SD_3.5-depth](https://hf-mirror.com/stabilityai/stable-diffusion-3.5-large-controlnet-depth/blob/main/diffusion_pytorch_model.safetensors)、[SD_3.5-blur](https://hf-mirror.com/stabilityai/stable-diffusion-3.5-large-controlnet-blur/blob/main/diffusion_pytorch_model.safetensors)
  - **存放**：`StableDiffusionWebUI/models/ControlNet`

- **FLUX**
  - **模型地址**：[flux-canny](https://hf-mirror.com/XLabs-AI/flux-controlnet-canny-v3/blob/main/flux-canny-controlnet-v3.safetensors)、[flux-hed](https://hf-mirror.com/XLabs-AI/flux-controlnet-hed-v3/blob/main/flux-hed-controlnet-v3.safetensors)、[flux-depth](https://hf-mirror.com/XLabs-AI/flux-controlnet-depth-v3/blob/main/flux-depth-controlnet-v3.safetensors)
  - **存放**：`StableDiffusionWebUI/models/ControlNet`

## 4.3 使用步骤

Step 1. **选择大模型**作为绘制图像的基础模型（以**SD 1.5**为例）

Step 2. **撰写提示词**（**必须**，否则图像生成结果很随机）

![撰写提示词](撰写提示词.jpg)

Step 3. **设定参数**

![设定参数](设定参数.jpg)

Step 4. **打开ControlNet插件，导入参考图**（原图或信息图）

![导入参考图](导入参考图.jpg)

Step 5. 勾选**启用**，配置**预处理器**，配置**模型**——可点击💥按钮，**预览骨架提取效果**

![ControlNet配置](ControlNet配置.jpg)

Step 6. 点击**生成**按钮

![生成](生成.jpg)

Step 7. **效果图**

![效果图](效果图.jpg)

## 4.4 参数设定参考

- **控制权重**：默认为1
- **开始控制阶段**：0.0 - 1.0
- **结束控制阶段**：0.0 - 1.0
- **控制模式**：**平衡**、**偏重提示词**、**偏重ControlNet**
- **缩放模式**：拉伸、裁剪、填充
- **预控制器参数**：每种预处理器的参数不尽相同
- **其他参数**
  - **低显存模式**：适用于显存不够的时候，代价是出图速度变慢
  - **Pixel Perfect**：自动**计算预处理器产出图像的最佳分辨率，推荐使用**
  - **Allow Preview**：会打开另外的小预览器窗口，专门为预处理图像准备的
- **信息图**：**需要手动保存，系统不会自动保存**

# 5. ComfyUI的使用方式

## 5.1 预处理器

​		一般可以使用[**comfyui_controlnet_aux**](https://github.com/Fannovel16/comfyui_controlnet_aux)这个**预处理器**，它支持多种**预处理效果**。

![comfyui_controlnet_aux](comfyui_controlnet_aux.jpg)

## 5.2 模型下载

### SD 1.5

- **模型地址**：`hf-mirror.com/lllyasviel/ControlNet-v1-1`
- **存放**：`comfyUI/models/controlnet`

### SD 3.5

- **模型地址**：[**SD_3.5-canny**](https://hf-mirror.com/stabilityai/stable-diffusion-3.5-large-controlnet-canny/blob/main/diffusion_pytorch_model.safetensors)、[**SD_3.5-depth**](https://hf-mirror.com/stabilityai/stable-diffusion-3.5-large-controlnet-depth/blob/main/diffusion_pytorch_model.safetensors)、[**SD_3.5-blur**](https://hf-mirror.com/stabilityai/stable-diffusion-3.5-large-controlnet-blur/blob/main/diffusion_pytorch_model.safetensors)
- **存放**：`comfyUI/models/controlnet`

### FLUX：Xlabs

- **模型地址**：[**flux-canny-v3**](https://hf-mirror.com/XLabs-AI/flux-controlnet-canny-v3/blob/main/flux-canny-controlnet-v3.safetensors)、[**flux-hed-v3**](https://hf-mirror.com/XLabs-AI/flux-controlnet-hed-v3/blob/main/flux-hed-controlnet-v3.safetensors)、[**flux-depth-v3**](https://hf-mirror.com/XLabs-AI/flux-controlnet-depth-v3/blob/main/flux-depth-controlnet-v3.safetensors)
- **存放**：`comfyUI/models/controlnet`

### FLUX：ControlNet-Union-Pro

- **模型地址**：[**FLUX.1-dev-ControlNet-Union-Pro**](https://hf-mirror.com/Shakker-Labs/FLUX.1-dev-ControlNet-Union-Pro/resolve/main/diffusion_pytorch_model.safetensors)
- **存放**：`comfyUI/models/controlnet`
- **功能支持**：**Canny**、**Tile**、**Depth**、**Blur**、**Pose**、**Gray**、**Low Quality**

![ControlNet-Union-Pro：Canny+Pose](ControlNet-Union-Pro：Canny+Pose.jpg)

![ControlNet-Union-Pro：Depth&Blur](ControlNet-Union-Pro：Depth+Blur.jpg)

![ControlNet-Union-Pro：LowQuality&Gray](ControlNet-Union-Pro：LowQuality+Gray.jpg)

## 5.3 工作流：SD 1.5

### Canny

![Canny](SD_1.5_Canny.jpg)

### Depth

![Depth](SD_1.5_Depth.jpg)

### HED

![HED](SD_1.5_HED.jpg)

### Lineart

![Lineart](SD_1.5_Lineart.jpg)

### Lineart_anime

![Lineart_anime](SD_1.5_Lineart_anime.jpg)

### Openpose

![Openpose](SD_1.5_Openpose.jpg)

## 5.4 工作流：SD 3.5

### Canny

![Canny](SD_3.5_Canny.jpg)

### Depth

![Depth](SD_3.5_Depth.jpg)

### Blur

![Blur](SD_3.5_Blur.jpg)

### Depth+Canny

![Depth+Canny](SD_3.5_Depth+Canny.jpg)

## 5.5 工作流：FLUX：Xlabs

### Canny

![Canny](FLUX_Xlabs_Canny.jpg)

### Depth

![Depth](FLUX_Xlabs_Depth.jpg)

### HED

![HED](FLUX_Xlabs_HED.jpg)

### Depth+HED

![Depth+HED](FLUX_Xlabs_Depth+HED.jpg)

## 5.6 工作流：FLUX：ControlNet-Union-Pro

### Canny

![Canny](FLUX_ControlNet-Union-Pro_Canny.jpg)

### Depth

![Depth](FLUX_ControlNet-Union-Pro_Depth.jpg)

### OpenPose

![OpenPose](FLUX_ControlNet-Union-Pro_OpenPose.jpg)

### HED

![HED](FLUX_ControlNet-Union-Pro_HED.jpg)

### Gray

![Gray](FLUX_ControlNet-Union-Pro_Gray.jpg)

# 6. 示例图

## 6.1 线条控制：Canny

### SD 1.5

|   参考图 & 控制图   |              CetusMix              |                DarkSushiMix                |              DreamGirl               |              DreamGirl               |
| :-----------------: | :--------------------------------: | :----------------------------------------: | :----------------------------------: | :----------------------------------: |
|  ![girl](girl.jpg)  | ![CetusMix](Canny：CetusMix_1.jpg) | ![DarkSushiMix](Canny：DarkSushiMix_1.jpg) | ![DreamGirl](Canny：DreamGirl_1.jpg) | ![DreamGirl](Canny：DreamGirl_3.jpg) |
| ![Canny](Canny.jpg) | ![CetusMix](Canny：CetusMix_2.jpg) | ![DarkSushiMix](Canny：DarkSushiMix_2.jpg) | ![DreamGirl](Canny：DreamGirl_2.jpg) | ![DreamGirl](Canny：DreamGirl_4.jpg) |

### SD 3.5

|                         参考图                          |                   控制图                    |           效果图            |
| :-----------------------------------------------------: | :-----------------------------------------: | :-------------------------: |
| ![Het meisje met de parel](Het-meisje-met-de-parel.jpg) | ![Canny](Het-meisje-met-de-parel-Canny.jpg) | ![效果图](Canny：SD3.5.jpg) |

## 6.2 线条控制：HED

### SD 1.5

|  参考图 & 控制图  |             CetusMix             |             DreamGirl              |
| :---------------: | :------------------------------: | :--------------------------------: |
| ![girl](girl.jpg) | ![CetusMix](HED：CetusMix_1.jpg) | ![DreamGirl](HED：DreamGirl_1.jpg) |
|  ![HED](HED.jpg)  | ![CetusMix](HED：CetusMix_2.jpg) | ![DreamGirl](HED：DreamGirl_2.jpg) |

## 6.3 线条控制：Lineart

### SD 1.5

|     参考图 & 控制图     |                  RealisticVision                   |                RevAnimated                 |
| :---------------------: | :------------------------------------------------: | :----------------------------------------: |
|     ![boy](boy.jpg)     | ![RealisticVision](Lineart：RealisticVision_1.jpg) | ![RevAnimated](Lineart：RevAnimated_1.jpg) |
| ![lineart](lineart.jpg) | ![RealisticVision](Lineart：RealisticVision_2.jpg) | ![RevAnimated](Lineart：RevAnimated_2.jpg) |

## 6.4 线条控制：Lineart_anime

### SD 1.5

|           参考图            |               控制图                |                 CetusMix                 |                   DarkSushiMix                   |
| :-------------------------: | :---------------------------------: | :--------------------------------------: | :----------------------------------------------: |
| ![AnimeGirl](AnimeGirl.jpg) | ![lineart_anime](lineart_anime.jpg) | ![CetusMix](Lineart_anime：CetusMix.jpg) | ![DarkSushiMix](Lineart_anime：DarkSushiMix.jpg) |

## 6.5 深度控制：Depth

### SD 1.5

|   参考图 & 控制图   |               CuteYukiMix                |                DarkSushiMix                |              DreamGirl               |
| :-----------------: | :--------------------------------------: | :----------------------------------------: | :----------------------------------: |
|  ![girl](girl.jpg)  | ![CuteYukiMix](Depth：CuteYukiMix_1.jpg) | ![DarkSushiMix](Depth：DarkSushiMix_1.jpg) | ![DreamGirl](Depth：DreamGirl_1.jpg) |
| ![Depth](Depth.jpg) | ![CuteYukiMix](Depth：CuteYukiMix_2.jpg) | ![DarkSushiMix](Depth：DarkSushiMix_2.jpg) | ![DreamGirl](Depth：DreamGirl_2.jpg) |

### SD 3.5

|                         参考图                          |                   控制图                    |           效果图            |
| :-----------------------------------------------------: | :-----------------------------------------: | :-------------------------: |
| ![Het meisje met de parel](Het-meisje-met-de-parel.jpg) | ![Depth](Het-meisje-met-de-parel-Depth.jpg) | ![效果图](Depth：SD3.5.jpg) |

## 6.6 姿态控制：Openpose

### SD 1.5

|       参考图 & 控制图       |                 CetusMix                 |                 DarkSushiMix                  |
| :-------------------------: | :--------------------------------------: | :-------------------------------------------: |
| ![AnimeGirl](AnimeGirl.jpg) | ![CuteYukiMix](Openpose：CetusMix_1.jpg) | ![DarkSushiMix](Openpose：DarkSushiMix_1.jpg) |
|  ![openpose](openpose.jpg)  | ![CuteYukiMix](Openpose：CetusMix_2.jpg) | ![DarkSushiMix](Openpose：DarkSushiMix_2.jpg) |

## 6.7 去模糊：Blur

### SD 3.5

|           参考图            |             生成图              |
| :-------------------------: | :-----------------------------: |
| ![duck-blur](duck-blur.jpg) | ![duck-deblur](duck-deblur.jpg) |
| ![girl-blur](girl-blur.jpg) | ![girl-deblur](girl-deblur.jpg) |

## 6.8 组合使用

### SD 3.5

|                控制图：Canny                |                控制图：Depth                |
| :-----------------------------------------: | :-----------------------------------------: |
| ![Canny](Het-meisje-met-de-parel-Canny.jpg) | ![Depth](Het-meisje-met-de-parel-Depth.jpg) |

|                  生成图                  |                  生成图                  |
| :--------------------------------------: | :--------------------------------------: |
| ![Depth+Canny](Depth+Canny：SD3.5_1.jpg) | ![Depth+Canny](Depth+Canny：SD3.5_2.jpg) |