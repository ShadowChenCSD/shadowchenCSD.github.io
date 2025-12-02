---
title: StableDiffusion：使用LoRA模型
published: 2024-12-05
description: 介绍如何在WebUI和ComfyUI中使用LoRA模型，生成特定风格、特定角色的图像。
tags: [AIGC·图像, 图像生成, StableDiffusion]
category: AIGC
image: "/posts/LoRA.png"
---

# 1. 介绍

- **全称**：**Low-Rank Adaptation**模型
- **目的**：向AI传递、描述一个**特征准确、主体清晰**的形象，一般用于限定**画面主体角色形象**或者**画面风格**。
- **文件格式**：**safetensors**
- **注意**：LoRA模型**需要与SD次代对齐**使用，`不能跨次代使用`

# 2. 使用

## 2.1 模型存放路径

- **WebUI**：`models/LoRA`
- **ComfyUI**：`models/loras`

## 2.2 WebUI环境

- 在**附加模型选单**中选择需要使用的**Lora**模型

![附加模型选单](附加模型选单.jpg)

- 在**提示词**里输入：**\<lora:模型名称:权重\>**

  ![LoRA使用](WebUI：LoRA使用.jpg)

## 2.3 ComfyUI环境

- 在**工作流**的模型后面追加**仅加载LoRA模型**，**模型强度**即为**权重**

  - **SD 1.5** + **LoRA**

  ![LoRA使用](ComfyUI：SD1.5+LoRA.jpg)

  - **SDXL** + **LoRA**

  ![LoRA使用](ComfyUI：SDXL+LoRA.jpg)

  - **SD 3.5** + **LoRA**

  ![LoRA使用](ComfyUI：SD3.5+LoRA.jpg)
  
  - **FLUX** + **LoRA**
  
  ![LoRA使用](ComfyUI：FLUX+LoRA.jpg)

## 2.4 权重设定

​		推荐使用**0.4~0.8**，可以确切保留特征，同时减弱对画风的影响。

## 2.5 模型搭配

​		在**使用LoRA模型**时，推荐**搭配合适的基础模型**进行使用——对应**动漫风格**、**写实风格**和**渲染风格**，以期达到最好的生图效果。

# 3. 示例

| 模型系列 | 类型 | 内容             | LoRA模型                                                     |
| -------- | ---- | ---------------- | ------------------------------------------------------------ |
| SD 1.5   | 角色 | **纳西妲**       | [纳西妲](www.liblib.art/modelinfo/f5dc81d2c3b14df3b9a34e50a27ad819) |
| SD 1.5   | 元素 | **手办**         | [blindbox_大概是盲盒](www.liblib.art/modelinfo/4c5eb179d4705198d866e22ca0833ef3) |
| SD 1.5   | 元素 | **汝瓷**         | [非遗文化_国风汝瓷](www.liblib.art/modelinfo/decb692833e3464abfa5233a406cf4dc) |
| SD 1.5   | 元素 | **汉服**         | [hanfu song 汉服宋风](www.liblib.art/modelinfo/d961a142990e5b0c00fbf48b983307ce)、[hanfu ming 汉服明风](www.liblib.art/modelinfo/9a964b38dd0d0f090ce455768200a2a8) |
| SD 1.5   | 风格 | **沁彩**         | [沁彩 Colorwater](www.liblib.art/modelinfo/782c9522bb46553df68fa5eef3acfe9b) |
| SD 1.5   | 风格 | **墨心**         | [色彩墨心MoXin](www.liblib.art/modelinfo/bc740eb2b339735d504df104b9d09e0b) |
| SD 1.5   | 风格 | **Q版手绘**      | [Q版手绘](www.liblib.art/modelinfo/8c0c376d5700428bbe7f6ba34c88e8d9) |
| SD 1.5   | 风格 | **吉卜力风格**   | [Studio Ghibli Style](https://www.liblib.art/modelinfo/28c88c88a3d64975ae57e1ee986c9fd6?from=search&versionUuid=652d79dcd15e432c842158a8044df4ae) |
| SDXL     | 风格 | **清透水彩插画** | [BLS-清透水彩插画](https://www.liblib.art/modelinfo/bf59e7ffcb384f3084fb6b8e934a84ef) |
| SD 3.5   | 风格 | **新海诚风格**   | [新海诚动漫风格](www.liblib.art/modelinfo/c0821cb412da418ca1f6bb637d710976) |
| FLUX     | 风格 | **人像写实**     | [XLabs F.1 Realism LoRA_V1](https://hf-mirror.com/XLabs-AI/flux-RealismLora) |
| FLUX     | 风格 | **纪实摄影**     | [纪实摄影 FLUX.1 LoRA](https://www.liblib.art/modelinfo/cfdb5f58c6ad450c850219e362655ab9) |
| FLUX     | 风格 | **游戏渲染**     | [超现实高清渲染游戏背景图 v1.0](https://www.liblib.art/modelinfo/61fd8de59d4b47fd983c539ed5c673b6) |
| FLUX     | 风格 | **淡水彩**       | [F.1手绘淡水彩小场景治愈风插画](https://www.liblib.art/modelinfo/e5279a5370d046959407fa555b9ce674) |

## 3.1 纳西妲

|        AI生成图         |        AI生成图         |
| :---------------------: | :---------------------: |
| ![纳西妲](纳西妲-1.jpg) | ![纳西妲](纳西妲-2.jpg) |

## 3.2 手办

|      AI生成图       |
| :-----------------: |
| ![手办](手办-1.jpg) |

|      AI生成图       |      AI生成图       |
| :-----------------: | :-----------------: |
| ![手办](手办-2.jpg) | ![手办](手办-3.jpg) |

|      AI生成图       |      AI生成图       |      AI生成图       |
| :-----------------: | :-----------------: | :-----------------: |
| ![手办](手办-4.jpg) | ![手办](手办-5.jpg) | ![手办](手办-6.jpg) |

## 3.3 汝瓷

|      AI生成图       |      AI生成图       |
| :-----------------: | :-----------------: |
| ![汝瓷](汝瓷-1.jpg) | ![汝瓷](汝瓷-2.jpg) |

|      AI生成图       |      AI生成图       |      AI生成图       |
| :-----------------: | :-----------------: | :-----------------: |
| ![汝瓷](汝瓷-3.jpg) | ![汝瓷](汝瓷-4.jpg) | ![汝瓷](汝瓷-5.jpg) |

## 3.4 汉服

|      AI生成图       |      AI生成图       |
| :-----------------: | :-----------------: |
| ![汉服](汉服-1.jpg) | ![汉服](汉服-2.jpg) |
| ![汉服](汉服-3.jpg) | ![汉服](汉服-4.jpg) |

## 3.5 沁彩

|      AI生成图       |      AI生成图       |
| :-----------------: | :-----------------: |
| ![沁彩](沁彩-1.jpg) | ![沁彩](沁彩-2.jpg) |
| ![沁彩](沁彩-3.jpg) | ![沁彩](沁彩-4.jpg) |

|      AI生成图       |      AI生成图       |
| :-----------------: | :-----------------: |
| ![沁彩](沁彩-5.jpg) | ![沁彩](沁彩-6.jpg) |
| ![沁彩](沁彩-7.jpg) | ![沁彩](沁彩-8.jpg) |

## 3.6 墨心

|      AI生成图       |
| :-----------------: |
| ![墨心](墨心-1.jpg) |

|      AI生成图       |      AI生成图       |
| :-----------------: | :-----------------: |
| ![墨心](墨心-2.jpg) | ![墨心](墨心-3.jpg) |

##  3.7 Q版手绘

|         AI生成图          |
| :-----------------------: |
| ![Q版手绘](Q版手绘-1.jpg) |

|         AI生成图          |         AI生成图          |
| :-----------------------: | :-----------------------: |
| ![Q版手绘](Q版手绘-2.jpg) | ![Q版手绘](Q版手绘-3.jpg) |
| ![Q版手绘](Q版手绘-4.jpg) | ![Q版手绘](Q版手绘-5.jpg) |

## 3.8 吉卜力风格

|        AI生成图         |        AI生成图         |
| :---------------------: | :---------------------: |
| ![吉卜力](吉卜力-1.jpg) | ![吉卜力](吉卜力-2.jpg) |
| ![吉卜力](吉卜力-3.jpg) | ![吉卜力](吉卜力-4.jpg) |

## 3.9 清透水彩插画

|              AI生成图               |              AI生成图               |
| :---------------------------------: | :---------------------------------: |
| ![清透水彩插画](清透水彩插画-1.jpg) | ![清透水彩插画](清透水彩插画-2.jpg) |
| ![清透水彩插画](清透水彩插画-3.jpg) | ![清透水彩插画](清透水彩插画-4.jpg) |


## 3.10 新海诚风格

- **提示词**
  - `city on a clear cloudless day,beautiful city,highly detailed, high resolution,`

- **生成图**

|            AI生成图             |            AI生成图             |
| :-----------------------------: | :-----------------------------: |
| ![新海诚风格](新海诚风格-1.jpg) | ![新海诚风格](新海诚风格-2.jpg) |
| ![新海诚风格](新海诚风格-3.jpg) | ![新海诚风格](新海诚风格-4.jpg) |

## 3.11 人像写实

- **提示词**
  - `model headshot, studio photography, the image features only the model without any additional elements, with a light gray`
  - `a man, model headshot, studio photography, the image features only the model without any additional elements, with a light gray`

- **生成图**

|          AI生成图           |          AI生成图           |
| :-------------------------: | :-------------------------: |
| ![人像写实](人像写实-1.jpg) | ![人像写实](人像写实-2.jpg) |
| ![人像写实](人像写实-3.jpg) | ![人像写实](人像写实-4.jpg) |

## 3.12 纪实摄影

- **提示词**
  - `Film Photography,a quaint street scene bathed in the warm,A vintage bicycle with a basket is parked against the wall of a building,casting a long shadow on the cobblestone path. The building is adorned with vibrant orange foliage,which adds a striking contrast to the otherwise muted tones of the wall and path. A sign reading "Vintage Train - Pro Digital Economy - Maisie Robbie" hangs prominently on the building,suggesting a business or shop. The overall atmosphere is serene,evoking a sense of timeless charm and tranquility. The interplay of light and shadow,`
  - `Film Photography,seaside,reef,lighthouse,`
  - `Film Photography,city on a clear cloudless day,beautiful city,Highly detailed,`
  - `Film Photography,an elderly man seated in front of a textured and ornately designed wall. The wall depicts weathered architectural details with layers of peeling paint and intricate carvings,rendered in earthy tones of green and brown. The man,whose presence is contemplative and calm,gazing off to his left,wears a simple beige jacket over a green shirt. His hair and full beard are gray,and his posture is relaxed but upright,suggesting a quiet dignity or introspection. The color palette of the scene is muted,mainly consisting of greens,browns,and grays,which harmonizes the man with his surroundings,blending the lines between the subject and the backdrop. His facial features are soft,with an expression that evokes a sense of wisdom or pensiveness. The refined decay of the background contrasts with the natural aging of the man,highlighting themes of time and permanence.,`

- **生成图**

|           AI生成图           |           AI生成图           |
| :--------------------------: | :--------------------------: |
| ![纪实摄影](纪实摄影-1.jpg)  | ![场景摄影](纪实摄影-2.jpg)  |
| ![纪实摄影](纪实摄影-3.jpg)  | ![纪实摄影](纪实摄影-4.jpg)  |

|           AI生成图           |           AI生成图           |
| :--------------------------: | :--------------------------: |
| ![纪实摄影](纪实摄影-5.jpg)  | ![场景摄影](纪实摄影-6.jpg)  |
| ![纪实摄影](纪实摄影-7.jpg)  | ![纪实摄影](纪实摄影-8.jpg)  |

|           AI生成图           |           AI生成图           |
| :--------------------------: | :--------------------------: |
| ![纪实摄影](纪实摄影-9.jpg)  | ![场景摄影](纪实摄影-10.jpg) |
| ![纪实摄影](纪实摄影-11.jpg) | ![纪实摄影](纪实摄影-12.jpg) |

|           AI生成图           |           AI生成图           |
| :------------------------: | :--------------------------: |
| ![纪实摄影](纪实摄影-13.jpg) | ![场景摄影](纪实摄影-14.jpg) |
| ![纪实摄影](纪实摄影-15.jpg) | ![纪实摄影](纪实摄影-16.jpg) |

## 3.13 游戏渲染

- **提示词**
  - `Realism blends with natural light.,colorful lines in a flat style,van gogh is painting style,In the vast expanse of the desert,there is a refreshing miracle-the desert oasis. Here is the most mysterious and gentle brushstrokes of nature,quietly injecting the vitality of life into this seemingly dead sand sea,At the edge of the oasis,the soft yellow sand gently undulates in the breeze,as if it is the breath of the earth,gentle but with a trace of imperceptible rhythm. With the deepening of the footsteps,the exciting green gradually comes into view,forming a sharp and shocking contrast with the surrounding golden yellow. The tall date palm trees stand tall and straight,and their branches and leaves sway gently under the scorching sun,casting a shadow of alienation,it provides a rare shady place for passing travelers,Under the trees,patches of green grass spread out,and glittering dewdrops hung on the fine grass leaves,shining with attractive light in the morning light or sunset. Occasionally,small animals can be seen shuttling through the grass,either agile desert foxes or shy antelopes,enjoying rare peace and abundance in this paradise of life,In the middle of the oasis,a clear spring lies quietly. The water surface is like a mirror,reflecting the blue sky and white clouds and the green around it. It is intoxicating. The spring water is crystal clear and cool and pleasant. It is the source of thirst for desert travelers. At the water's edge,wild flowers are blooming and colorful. Although they are inconspicuous,they dot every corner of this barren land with tenacious vitality,sending out light fragrance and dancing butterflies,attracting bees,deducing the hymn of life,As night falls,the oasis is even more mysterious. The starry sky is washed and starry. The Milky Way crosses the sky and complements the lights on the ground,creating a dreamy atmosphere. The breeze blows and brings a little coolness. It is in sharp contrast to the heat of the day,making people relaxed and happy,as if all the fatigue,`
  - `Realism blends with natural light.,Under the azure sky,a continuous stretch of golden sand gently embraces the azure sea,forming a peaceful and magnificent painting. The sunlight penetrates through the thin clouds like fine threads,sprinkling on the delicate beach. Every grain of sand seems to be coated with a thin layer of golden radiance,shimmering with a soft and charming light., The sea breeze brushes gently,carrying the faint salty taste of the seawater and the freshness of distant flowers and plants. It brushes over my face,taking away all the fatigue and noise,leaving only the tranquility and freedom of my soul. The waves beat against the shore,making pleasant sounds. They either gently caressed the beach or rose passionately,leaving white foam,then slowly receded,leaving wet traces,like the sea telling its ancient and mysterious story., In the distance,the sea and sky merge into one color,unable to distinguish where the end of the sky is and where the beginning of the sea is. A few seagulls are soaring on the sea surface,either flying low over the waves or singing high in the blue sky,free and carefree,adding a touch of vitality and energy to this peaceful seaside. On the beach,occasionally a few small crabs can be seen rushing through the sand holes,or a few colorful shells washed ashore by the waves,lying quietly on the beach,waiting for someone to pick them up., At sunset,the horizon gradually became a brilliant orange red,with golden sunlight shining in harmony with the waves on the sea. The entire beach was enveloped in a warm and romantic atmosphere. People sit or lie on the beach,enjoying the tranquility and beauty. Some quietly watch the waves,while others bow their heads and pick up seashells. Everyone's face is filled with a satisfied and happy smile.,`
  - `Realism blends with natural light.,The lively night market,with food stalls and street stalls on both sides,is very lively.,`

- **生成图**

|          AI生成图           |          AI生成图           |
| :-------------------------: | :-------------------------: |
| ![游戏渲染](游戏渲染-1.jpg) | ![游戏渲染](游戏渲染-2.jpg) |
| ![游戏渲染](游戏渲染-3.jpg) | ![游戏渲染](游戏渲染-4.jpg) |
| ![游戏渲染](游戏渲染-5.jpg) | ![游戏渲染](游戏渲染-6.jpg) |

## 3.14 淡水彩

- **提示词**
  - `watercolor scene,Hand-painted watercolor illustrations.A quaint bookstore with a charming garden entrance,inviting passersby to explore its literary treasures,under blue skies and white clouds.,`
  - `watercolor scene,Hand-painted watercolor illustrations.A corner convenience store under blue skies and white clouds.,`
  - `watercolor scene,Hand-painted watercolor illustrations.A cozy bakery with a charming outdoor seating area, inviting passersby to enjoy fresh bread and pastries.`

- **生成图**

|        AI生成图         |        AI生成图         |
| :---------------------: | :---------------------: |
| ![淡水彩](淡水彩-1.jpg) | ![淡水彩](淡水彩-2.jpg) |
| ![淡水彩](淡水彩-3.jpg) | ![淡水彩](淡水彩-4.jpg) |
| ![淡水彩](淡水彩-5.jpg) | ![淡水彩](淡水彩-6.jpg) |