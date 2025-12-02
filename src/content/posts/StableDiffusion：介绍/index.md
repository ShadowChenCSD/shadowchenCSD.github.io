---
title: StableDiffusion：介绍
published: 2024-10-03
description: 介绍StableDiffusion的功能：文生图、图生图、局部重绘、高清放大、ControlNet插件、LoRA模型。
tags: [AIGC·图像, 图像生成, StableDiffusion]
category: AIGC
image: "/posts/AIGC.png"
---

# 1. 基本原理

- **人类绘图**：草稿、线稿、描边、上色、处理细节

- **AI绘图**：参考图 → 增加噪声 → 提取图像的信息特征 → 去除噪声【**`Stable Diffusion`含义即为`稳定扩散`**】

![AI绘图原理](AI绘图原理.jpg)

# 2. 核心功能

## 2.1 文生图（text-to-img）

​		输入`一段提示词`，AI会`根据文字内容生成相应的图像`。

- **正向提示词**（希望AI生成的内容）

```text
masterpiece, best quality, wallpaper forced, high quality, a girl, flowers, auburn hair, English countryside, midday, clear sky, rolling green hills, close-up shot, head and shoulders, natural lighting,
```

- **负向提示词**（可选，希望AI`避免`生成的内容）

```text
worst quality, grayscale, simple background, bad hands, bad feet, bad anatomy, watermark, signature,
```

- **生成图像**

|       动漫风格-1        |       动漫风格-2        |
| :---------------------: | :---------------------: |
| ![文生图](文生图-1.jpg) | ![文生图](文生图-2.jpg) |

|       真实风格-1        |       真实风格-2        |
| :---------------------: | :---------------------: |
| ![文生图](文生图-3.jpg) | ![文生图](文生图-4.jpg) |

## 2.2 图生图（img-to-img）

​		输入`一段提示词`和`一幅参考图`，AI会`根据提示词及参考图，重新生成新的图像`。

- **提示词**

```text
The picture is a documentary photograph of a young woman, wearing a blue headscarf with a yellow ribbon, a yellow dress with a white collar, and a pearl earring.
```

|                参考图                 |        AI生成图         |        AI生成图         |        AI生成图         |
| :-----------------------------------: | :---------------------: | :---------------------: | :---------------------: |
| ![参考图](Het-meisje-met-deparel.jpg) | ![图生图](图生图-1.jpg) | ![图生图](图生图-2.jpg) | ![图生图](图生图-3.jpg) |

## 2.3 局部重绘（inpaint）

​		输入`一段提示词`和`一幅参考图像`，再`圈定一块需要重绘的范围`，AI会`根据提示词，在圈定的绘制范围内重新生成新的图像`。

|        参考图         |        蒙版图         |
| :-------------------: | :-------------------: |
| ![参考图](girl-1.jpg) | ![蒙版图](mask-1.jpg) |

|   生成图：yellow shirt    | 生成图：light green sweater |   生成图：pink sweater    |
| :-----------------------: | :-------------------------: | :-----------------------: |
| ![生成图](局部重绘-1.jpg) |  ![生成图](局部重绘-2.jpg)  | ![生成图](局部重绘-3.jpg) |

## 2.4 扩图（outpaint)

​		输入`一段提示词`和`一幅参考图像`，再`设定一个大于原始图像尺寸的蒙版`，AI会`根据提示词，在蒙版的灰白区域，重新生成新的图像`。

- **提示词**

```text
The image is a portrait of a young Asian woman sitting on a wooden chair. She is wearing a white collared shirt with a blue and white striped tie and a black skirt. Her long black hair is styled in loose waves and she is looking directly at the camera with a slight smile on her lips. The background is blurred, but it appears to be a room with a white wall and a wooden floor. The overall mood of the image is relaxed and casual.
```

|        参考图         |        蒙版图         |      生成图       |
| :-------------------: | :-------------------: | :---------------: |
| ![参考图](girl-2.jpg) | ![蒙版图](mask-2.jpg) | ![扩图](扩图.jpg) |

## 2.5 高清放大（upscale）

​		输入`一幅参考图像`，选择合适的`放大算法`和`放大比例`，AI会`根据算法和比例，进行图像放大`。

|  参考图：768 * 1024   | 生成图：1536 * 2048 |
| :-------------------: | :-----------------: |
| ![参考图](girl-2.jpg) |  ![放大](放大.jpg)  |

# 3. 辅助功能

## 3.1 构图控制：ControlNet插件

### 边缘检测：Canny、HED、Lineart

|        参考图         |      Canny图像      |     HED图像     |       Lineart图像       |
| :-------------------: | :-----------------: | :-------------: | :---------------------: |
| ![参考图](girl-1.jpg) | ![Canny](Canny.jpg) | ![HED](HED.jpg) | ![Lineart](Lineart.jpg) |

|       动漫风格        |       动漫风格        |       真人风格        |       真人风格        |
| :-------------------: | :-------------------: | :-------------------: | :-------------------: |
| ![Canny](Canny-1.jpg) | ![Canny](Canny-2.jpg) | ![Canny](Canny-3.jpg) | ![Canny](Canny-4.jpg) |

### 深度检测：Depth

|        参考图         |        Depth图像        |
| :-------------------: | :---------------------: |
| ![参考图](girl-1.jpg) | ![Depth图像](Depth.jpg) |

|       动漫风格        |       动漫风格        |       真人风格        |
| :-------------------: | :-------------------: | :-------------------: |
| ![Depth](Depth-1.jpg) | ![Depth](Depth-3.jpg) | ![Depth](Depth-5.jpg) |
| ![Depth](Depth-2.jpg) | ![Depth](Depth-4.jpg) | ![Depth](Depth-6.jpg) |

### 姿态检测：Pose

|        参考图         |         Openpose图像          |
| :-------------------: | :---------------------------: |
| ![参考图](girl-3.jpg) | ![Openpose图像](Openpose.jpg) |

|          动漫风格           |          真人风格           |
| :-------------------------: | :-------------------------: |
| ![Openpose](Openpose-1.jpg) | ![Openpose](Openpose-2.jpg) |


## 3.2 元素控制：LoRA模型

### 汉服

|      AI生成图       |      AI生成图       |      AI生成图       |
| :-----------------: | :-----------------: | :-----------------: |
| ![汉服](汉服-1.jpg) | ![汉服](汉服-2.jpg) | ![汉服](汉服-3.jpg) |

### 手办

|      AI生成图       |      AI生成图       |
| :-----------------: | :-----------------: |
| ![手办](手办-1.jpg) | ![手办](手办-2.jpg) |

|      AI生成图       |      AI生成图       |      AI生成图       |
| :-----------------: | :-----------------: | :-----------------: |
| ![手办](手办-3.jpg) | ![手办](手办-4.jpg) | ![手办](手办-5.jpg) |

### 沁彩

|   AI生成图：人物    |   AI生成图：人物    |
| :-----------------: | :-----------------: |
| ![沁彩](沁彩-1.jpg) | ![沁彩](沁彩-2.jpg) |
| ![沁彩](沁彩-3.jpg) | ![沁彩](沁彩-4.jpg) |

|   AI生成图：场景    |   AI生成图：场景    |
| :-----------------: | :-----------------: |
| ![沁彩](沁彩-5.jpg) | ![沁彩](沁彩-6.jpg) |
| ![沁彩](沁彩-7.jpg) | ![沁彩](沁彩-8.jpg) |

### Q版手绘

|      AI生成图：半身       |      AI生成图：半身       |
| :-----------------------: | :-----------------------: |
| ![Q版手绘](Q版手绘-1.jpg) | ![Q版手绘](Q版手绘-2.jpg) |

|      AI生成图：全身       |      AI生成图：全身       |      AI生成图：全身       |
| :-----------------------: | :-----------------------: | :-----------------------: |
| ![Q版手绘](Q版手绘-3.jpg) | ![Q版手绘](Q版手绘-4.jpg) | ![Q版手绘](Q版手绘-5.jpg) |

### 水彩·小场景

|              AI生成图              |              AI生成图              |              AI生成图              |              AI生成图              |
| :--------------------------------: | :--------------------------------: | :--------------------------------: | :--------------------------------: |
| ![水彩·小场景](水彩·小场景-01.jpg) | ![水彩·小场景](水彩·小场景-02.jpg) | ![水彩·小场景](水彩·小场景-03.jpg) | ![水彩·小场景](水彩·小场景-04.jpg) |