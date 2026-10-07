---
title: StableDiffusion：介绍
published: 2024-10-03
description: 介绍StableDiffusion的基础功能，包括图像生成、图像编辑、ControlNet插件、LoRA模型等。
tags: [AIGC·图像, 图像生成, 图像编辑, StableDiffusion, Flux]
category: AIGC
pinned: true
image: "/posts/AIGC.png"
---

# 1. 基本原理

- **人类绘图**：草稿、线稿、描边、上色、处理细节
- **AI绘图**：参考图 → 增加噪声 → 提取图像的信息特征 → 去除噪声
  - **过程**
    - **前向扩散**：逐步向训练图像中**添加高斯噪声**，直到图像完全变为随机噪声
    - **反向去噪**：使用**U-Net**神经网络来**预测噪声并移除噪声**
  - **模型说明**
    - **CLIP（文本编码器）**：将输入的文本描述转换为向量表示，作为生成图像的引导信号
    - **扩散模型**：在潜在空间工作，通过逐步去噪生成图像
    - **VAE（变分自编码器）**：编码器将图像压缩到潜在空间，解码器将潜在空间中的特征还原为像素级图像

![AI绘图原理](AI绘图原理.jpg)

# 2. 图像生成

## 2.1 文生图（text-to-img）

​		AI根据`输入的提示词内容`，生成`相应的图像`。

- **正向提示词**：希望AI生成的内容

```text
masterpiece, best quality, wallpaper forced, high quality, a girl, flowers, auburn hair, English countryside, midday, clear sky, rolling green hills, close-up shot, head and shoulders, natural lighting,
```

- **负向提示词**：希望AI`避免`生成的内容，`可选参数`

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

​		AI根据`输入的提示词内容`和`输入的参考图`，重新生成`新的图像`。

- **正向提示词**：希望AI生成的内容

```text
The picture is a documentary photograph of a young woman, wearing a blue headscarf with a yellow ribbon, a yellow dress with a white collar, and a pearl earring.
```

- **负向提示词**：希望AI`避免`生成的内容，`可选参数`

```text
worst quality, grayscale, simple background, bad hands, bad feet, bad anatomy, watermark, signature,
```

|                参考图                 |        AI生成图         |        AI生成图         |        AI生成图         |
| :-----------------------------------: | :---------------------: | :---------------------: | :---------------------: |
| ![参考图](Het-meisje-met-deparel.jpg) | ![图生图](图生图-1.jpg) | ![图生图](图生图-2.jpg) | ![图生图](图生图-3.jpg) |

## 2.3 局部重绘（inpaint）

​		输入`一段提示词`和`一幅参考图像`，再圈定`一块需要重新绘制的范围`，AI会根据`提示词`，在`圈定的绘制范围内`，重新生成`新的图像`。

|        参考图         |        蒙版图         |
| :-------------------: | :-------------------: |
| ![参考图](girl-1.jpg) | ![蒙版图](mask-1.jpg) |

|   生成图：yellow shirt    | 生成图：light green sweater |   生成图：pink sweater    |
| :-----------------------: | :-------------------------: | :-----------------------: |
| ![生成图](局部重绘-1.jpg) |  ![生成图](局部重绘-2.jpg)  | ![生成图](局部重绘-3.jpg) |

## 2.4 扩图（outpaint)

​		输入`一段提示词`和`一幅参考图像`，再`设定一个大于原始图像尺寸的遮罩蒙版`，AI会根据`提示词`，在`遮罩蒙版的灰白区域`，重新生成`新的图像`。

- **提示词**

```text
The image is a portrait of a young Asian woman sitting on a wooden chair. She is wearing a white collared shirt with a blue and white striped tie and a black skirt. Her long black hair is styled in loose waves and she is looking directly at the camera with a slight smile on her lips. The background is blurred, but it appears to be a room with a white wall and a wooden floor. The overall mood of the image is relaxed and casual.
```

|        参考图         |        蒙版图         |      生成图       |
| :-------------------: | :-------------------: | :---------------: |
| ![参考图](girl-2.jpg) | ![蒙版图](mask-2.jpg) | ![扩图](扩图.jpg) |

## 2.5 高清放大（upscale）

​		输入`一幅参考图像`，选择合适的`放大算法`和`放大比例`，AI会根据`算法和比例`，进行`图像放大`。

|  参考图：768 * 1024   | 生成图：1536 * 2048 |
| :-------------------: | :-----------------: |
| ![参考图](girl-2.jpg) |  ![放大](放大.jpg)  |

# 3. 图像编辑

## 3.1 元素添加

1. **add a pixel dog walking on the dirt path**
2. **add color to this image**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>参考图</th>
      <th>效果图</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/20.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/3.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/10.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/2.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 3.2 元素移除

1. **remove the flame from the candle**
2. **remove all the text**
3. **remove the dog**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>参考图</th>
      <th>效果图</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/08.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/10.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/15.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/11.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/19.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/12.png" width="512" /></td>
    </tr>
  </tbody>
</table>


## 3.3 元素提取

1. **extract the cat, make the background to white**
4. **extract the sneaker shoes, show the whole shoes at front view and make the background to gray**
5. **extract the photo of the man**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>参考图</th>
      <th>效果图</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/01.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/40.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/11.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/43.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/12.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/44.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 3.4 元素替换

1. **turn the brick wall into a smooth concrete wall**
2. **the text is now green**
3. **replace the glass with a frog**
4. **turn the cat into an owl**
5. **make each word a different color**
6. **all of the text is now green**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>参考图</th>
      <th>效果图</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/09.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/19.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/09.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/20.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/16.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/25.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/17.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/26.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/11.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/22.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/14.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/24.png" width="512" /></td>
    </tr>
  </tbody>
</table>


## 3.5 背景更换

1. **replace the carpet with a wood floor**
2. **make the entire card have a rainbow background**
3. **make it winter**
4. **turn the wall into a brick wall**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>参考图</th>
      <th>效果图</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/01.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/27.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/12.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/30.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/20.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/31.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/13.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/23.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 3.6 姿态调整

1. **have the mech crouch down and give a thumbs up**
2. **make the man laugh**
3. **make the cat happy**
4. **this woman is now skydiving**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>参考图</th>
      <th>效果图</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/05.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/32.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/12.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/34.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/17.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/36.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/21.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/37.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 3.7 风格迁移

1. **convert him into a miniature toy-brick hero**
2. **turn this into pixel art**
3. **make this into crazy artwork**
4. **turn this into a real photo**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>参考图</th>
      <th>效果图</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/03.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/55.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/13.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/58.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/15.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/59.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/19.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/60.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 3.8 英文文本编辑

1. **add the word *BFL* in the center**
2. **change the text that says *Black Forest Labs* to *Bagel Can Do It***
3. **change the text to says *The Context Matters***

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>参考图</th>
      <th>效果图</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/06.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/45.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/08.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/47.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/09.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/49.png" width="512" /></td>
    </tr>
  </tbody>
</table>


## 3.9 中文文本编辑

1. **在图像正中央添加文字\"通义千问\"**
2. **将\"BLACK FOREST LABS\"修改为\"黑·森林·实验室\"**
3. **将\"BLACK FOREST LABS\"修改为\"春蚕到死丝方尽，蜡炬成灰泪始干。\"**
4. **将\"Together We Create!\"修改为\"我们一起创造！\"**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>参考图</th>
      <th>效果图</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/06.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/104.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/08.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/105.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/08.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/106.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/09.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/107.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 3.10 文字颜色修改

1. **把"Qwen-Image-Edit"换成橘色**
3. **把"Qwen-Image-Edit"换成荧光紫色**
4. **把"Qwen-Image-Edit"换成彩虹色**
5. **把"Qwen-Image-Edit"换成糖果色**
6. **把"Qwen-Image-Edit"换成蓝紫渐变色**
7. **把"Qwen-Image-Edit"换成蓝粉渐变色**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>参考图</th>
      <th>效果图</th>
      <th>效果图</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td rowspan="3" style="vertical-align: middle;"><img src="/posts/input/26.png" width="512" /></td>
      <td><img src="/posts/output-Qwen/108.png" width="512" /></td>
      <td><img src="/posts/output-Qwen/110.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/output-Qwen/111.png" width="512" /></td>
      <td><img src="/posts/output-Qwen/112.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/output-Qwen/113.png" width="512" /></td>
      <td><img src="/posts/output-Qwen/114.png" width="512" /></td>
    </tr>
  </tbody>
</table>


## 3.11 文字字体修改

1. **把文字“Qwen-Image-Edit”换成淡绿色的粗笔刷字体**
2. **把文字“Qwen-Image-Edit”换成紫色的像素字体**
3. **把文字“Qwen-Image-Edit”换成黑色的滴墨字体**
4. **把文字“Qwen-Image-Edit”换成红色的镂空卡通字体**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>参考图</th>
      <th>效果图</th>
      <th>效果图</th>
    </tr>
  </thead>
  <tbody>
     <tr align="center">
      <td rowspan="3" style="vertical-align: middle;"><img src="/posts/input/26.png" width="512" /></td>
      <td><img src="/posts/output-Qwen/115.png" width="512" /></td>
      <td><img src="/posts/output-Qwen/116.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/output-Qwen/117.png" width="512" /></td>
      <td><img src="/posts/output-Qwen/118.png" width="512" /></td>
    </tr>
  </tbody>
</table>


## 3.12 图像参考

1. **a vintage sepia photo of this man wearing a suit and a tallit behind a podium in a synagogue**
4. **turn this into a figurine on a desk**
5. **zoom out to show this building on the side of a street in Brooklyn**
7. **zoom out to show this wall in an office**
8. **put this cardboard sign on a wall in a museum**
10. **using this style make art of a bottle that says *Spezi* on it**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>参考图</th>
      <th>效果图</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/03.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/64.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/05.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/68.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/09.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/74.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/13.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/76.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/14.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/77.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/08.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/80.png" width="512" /></td>
    </tr>
  </tbody>
</table>


## 3.13 中式元素

1. **将小猫替换为孙悟空，穿着战斗盔甲**
2. **将机甲替换为人物角色，人物是关羽，身着战袍，手持青龙偃月刀**
3. **将冰棍替换为东方明珠塔，矗立在地上**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>参考图</th>
      <th>效果图</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/17.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/100.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/05.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/101.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/15.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/103.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 3.14 视觉引导

1. **change the object in the red square to a cowboy hat**
2. **remove the doll in the circle**
3. **add a leather recliner chair here**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>参考图</th>
      <th>效果图</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/22.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/85.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/23.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/86.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/25.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/89.png" width="512" /></td>
    </tr>
  </tbody>
</table>

# 4. 构图控制：ControlNet插件

## 4.1 边缘检测：Canny、HED、Lineart

|        参考图         |      Canny图像      |     HED图像     |       Lineart图像       |
| :-------------------: | :-----------------: | :-------------: | :---------------------: |
| ![参考图](girl-1.jpg) | ![Canny](Canny.jpg) | ![HED](HED.jpg) | ![Lineart](Lineart.jpg) |

|       动漫风格        |       动漫风格        |       真人风格        |       真人风格        |
| :-------------------: | :-------------------: | :-------------------: | :-------------------: |
| ![Canny](Canny-1.jpg) | ![Canny](Canny-2.jpg) | ![Canny](Canny-3.jpg) | ![Canny](Canny-4.jpg) |

## 4.2 深度检测：Depth

|        参考图         |        Depth图像        |
| :-------------------: | :---------------------: |
| ![参考图](girl-1.jpg) | ![Depth图像](Depth.jpg) |

|       动漫风格        |       动漫风格        |       真人风格        |
| :-------------------: | :-------------------: | :-------------------: |
| ![Depth](Depth-1.jpg) | ![Depth](Depth-3.jpg) | ![Depth](Depth-5.jpg) |
| ![Depth](Depth-2.jpg) | ![Depth](Depth-4.jpg) | ![Depth](Depth-6.jpg) |

## 4.3 姿态检测：Pose

|        参考图         |         Openpose图像          |
| :-------------------: | :---------------------------: |
| ![参考图](girl-3.jpg) | ![Openpose图像](Openpose.jpg) |

|          动漫风格           |          真人风格           |
| :-------------------------: | :-------------------------: |
| ![Openpose](Openpose-1.jpg) | ![Openpose](Openpose-2.jpg) |


# 5. 风格参考：LoRA模型

## 5.1 汉服

|      AI生成图       |      AI生成图       |      AI生成图       |
| :-----------------: | :-----------------: | :-----------------: |
| ![汉服](汉服-1.jpg) | ![汉服](汉服-2.jpg) | ![汉服](汉服-3.jpg) |

## 4.2 手办

|      AI生成图       |      AI生成图       |
| :-----------------: | :-----------------: |
| ![手办](手办-1.jpg) | ![手办](手办-2.jpg) |

|      AI生成图       |      AI生成图       |      AI生成图       |
| :-----------------: | :-----------------: | :-----------------: |
| ![手办](手办-3.jpg) | ![手办](手办-4.jpg) | ![手办](手办-5.jpg) |

## 5.3 沁彩

|   AI生成图：人物    |   AI生成图：人物    |
| :-----------------: | :-----------------: |
| ![沁彩](沁彩-1.jpg) | ![沁彩](沁彩-2.jpg) |
| ![沁彩](沁彩-3.jpg) | ![沁彩](沁彩-4.jpg) |

|   AI生成图：场景    |   AI生成图：场景    |
| :-----------------: | :-----------------: |
| ![沁彩](沁彩-5.jpg) | ![沁彩](沁彩-6.jpg) |
| ![沁彩](沁彩-7.jpg) | ![沁彩](沁彩-8.jpg) |

## 5.4 Q版手绘

|      AI生成图：半身       |      AI生成图：半身       |
| :-----------------------: | :-----------------------: |
| ![Q版手绘](Q版手绘-1.jpg) | ![Q版手绘](Q版手绘-2.jpg) |

|      AI生成图：全身       |      AI生成图：全身       |      AI生成图：全身       |
| :-----------------------: | :-----------------------: | :-----------------------: |
| ![Q版手绘](Q版手绘-3.jpg) | ![Q版手绘](Q版手绘-4.jpg) | ![Q版手绘](Q版手绘-5.jpg) |

## 5.5 水彩小场景

|              AI生成图              |              AI生成图              |              AI生成图              |              AI生成图              |
| :--------------------------------: | :--------------------------------: | :--------------------------------: | :--------------------------------: |
| ![水彩·小场景](水彩·小场景-01.jpg) | ![水彩·小场景](水彩·小场景-02.jpg) | ![水彩·小场景](水彩·小场景-03.jpg) | ![水彩·小场景](水彩·小场景-04.jpg) |