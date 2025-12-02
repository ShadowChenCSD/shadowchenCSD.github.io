---
title: 图像编辑：Qwen-Image-Edit
published: 2025-09-16
updated: 2025-10-12
description: 展现Qwen-Image-Edit在图像编辑领域中的能力。
tags: [AIGC·图像, 图像编辑, Qwen]
category: AIGC
image: "/posts/Qwen-Image-Edit.png"
---

# 1. 介绍

​		**`Qwen-Image-Edit`**是2025年8月19日由通义团队推出的**图像编辑**模型。基于20B的Qwen-Image模型进⼀步训练，将Qwen-Image的文本渲染能力延展至图像编辑领域，专注于**语义理解**和**对象编辑**，支持**双语文本修改**、**风格迁移**及**角色姿态调整**等。

​		**Qwen-Image-Edit**擅长处理以下任务：

- **对象修改**：添加、移除、替换、提取、背景更换、姿态调整……
- **文本编辑**：添加、移除、替换……
- **风格转换**：水彩风、线稿风、像素风、动漫风、粘土风、赛博朋克风……
- **角色一致性**：角色参考、物品参考、画风参考……
- **视觉引导**：方框、圆圈、涂抹块……

---

​		**`Qwen-Image-Edit-2509`** 是 `Qwen-Image-Edit` 的月度迭代版本。与8月份发布的 `Qwen-Image-Edit` 相比，Qwen-Image-Edit-2509 的主要改进包括：

- **多图像编辑支持**：支持各种组合，如 `人 + 人 `、 `人 + 产品` 和 `人 + 场景` 。目前**在1到3张**输入图像时表现最佳。
- **增强的单图像一致性**
  - **改进的人像编辑一致性**：更好地保留面部身份，支持各种**肖像风格**和**姿势变换**
  - **改进的产品编辑一致性**：更好地保留产品身份，支持**产品海报编辑**
  - **改进的文字编辑一致性**：除了修改文字内容外，还支持编辑**文字字体**、**文字颜色**和**文字材质**
- **原生支持 ControlNet**：包括**深度图**、**边缘图**、**关键点图**等。

# 2. 能力展示

## 2.1 添加（Add）

  1. **make him wear sunglasses**
  2. **add a cowboy hat to the dog**
  3. **add color to this image**
  4. **add a pixel dog walking on the dirt path**
  5. **add a weird scary face in the very middle**



<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>输入</th>
      <th>输出</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/18.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/0.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/19.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/1.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/10.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/2.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/20.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/3.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/06.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/4.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 2.2 移除（Remove）

  1. **remove the dog**
  2. **remove the man's tattoos**
  3. **remove the spoon and the napkin**
  4. **remove the text**
  5. **remove the hand in the middle**
  6. **remove the flame from the candle**
  7. **remove all the text**
  8. **remove the dog**
  9. **remove the cabin**
  10. **remove her glasses**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>输入</th>
      <th>输出</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/02.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/5.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/02.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/6.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/04.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/7.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/07.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/8.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/07.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/9.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/08.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/10.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/15.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/11.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/19.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/12.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/20.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/13.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/21.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/14.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 2.3 替换（Replace）

  1. **replace the milk shake with a beer**
  2. **replace the green on the mech with red**
  3. **make it neon colors**
  4. **change the text to green and the hand to purple**
  5. **turn the brick wall into a smooth concrete wall**
  6. **the text is now green**
  7. **replace the lady with a tiger**
  8. **make each word a different color**
  9. **turn the wall into a brick wall**
  10. **all of the text is now green**
  11. **replace the glass with a frog**
  12. **turn the cat into an owl**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>输入</th>
      <th>输出</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/04.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/15.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/05.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/16.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/06.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/17.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/07.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/18.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/09.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/19.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/09.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/20.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/10.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/21.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/11.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/22.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/13.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/23.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/14.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/24.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/16.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/25.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/17.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/26.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 2.4 背景更换（Background）

  1. **replace the carpet with a wood floor**
  2. **make the room to a pub**
  3. **change the background to purple**
  4. **make the entire card have a rainbow background**
  5. **make it winter**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>输入</th>
      <th>输出</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/01.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/27.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/02.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/28.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/07.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/29.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/12.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/30.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/20.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/31.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 2.5 姿态调整（Motion）

  1. **have the mech crouch down and give a thumbs up**
  2. **make her smile**
  3. **make the man laugh**
  4. **make the cat angry**
  5. **make the cat happy**
  6. **this woman is now skydiving**
  7. **she is now standing up and dancing**
  8. **she is now sitting on the edge of a building at sunset**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>输入</th>
      <th>输出</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/05.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/32.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/10.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/33.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/12.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/34.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/17.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/35.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/17.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/36.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/21.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/37.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/21.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/38.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/21.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/39.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 2.6 目标提取（Extract）

  1. **extract the cat, make the background to white**
  2. **extract the man, make the background to white**
  3. **extract the drink, make the background to gray**
  4. **extract the sneaker shoes, show the whole shoes at front view and make the background to gray**
  5. **extract the photo of the man**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>输入</th>
      <th>输出</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/01.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/40.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/03.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/41.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/04.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/42.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/11.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/43.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/12.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/44.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 2.7 文本编辑（Text Edit）

  1. **add the word *BFL* in the center**
  2. **replace the word *Lover* to *Hater***
  3. **change the text that says *Black Forest Labs* to *Bagel Can Do It***
  4. **change the text to say *Not only can we change the words but we can add so many more***
  5. **change the text to says *The Context Matters***
  6. **change the word *Courage* to *Diffusion***
  7. **replace all the text with *Black Forest Labs***
  8. **change the words to say *watch out above you***
  9. **change *California* to *Germany***
  10. **replace *pop art desert festival* with *hippies in the middle of nowhere***

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>输入</th>
      <th>输出</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/06.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/45.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/07.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/46.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/08.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/47.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/08.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/48.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/09.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/49.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/10.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/50.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/10.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/51.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/11.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/52.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/12.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/53.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/15.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/54.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 2.8 风格迁移（Style Transfer）

  1. **convert him into a miniature toy-brick hero**
  2. **turn this into pixel art**
  3. **make this a real cinematic photo**
  4. **turn this into pixel art**
  5. **make this into crazy artwork**
  6. **turn this into a real photo**
  7. **turn this into a paper mache diagram**
  8. **make her into a puppet on a couch**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>输入</th>
      <th>输出</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/03.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/55.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/03.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/56.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/05.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/57.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/13.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/58.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/15.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/59.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/19.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/60.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/19.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/61.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/21.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/62.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 2.9 图像参考（Visual Reference）

### 角色（Character）

  1. **pov action photo of this couple on a rollercoaster screaming in terror**
  2. **a vintage sepia photo of this man wearing a suit and a tallit behind a podium in a synagogue**
  3. **a photo of a napkin on a table, on the napkin is a painting of this man**
  4. **the man is now sitting in a hammock by a lake surrounded by trees in canada, he is working on a laptop**
  5. **show me an aerial view of this from above the mech**
  6. **turn this into a figurine on a desk**
  7. **the cat is now dancing**
  8. **zoom out showing the cat standing next to some flowers**
  9. **the dog is now facing the camera and dancing**
  10. **make this woman into an astronaut riding a pig**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>输入</th>
      <th>输出</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/02.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/63.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/03.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/64.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/03.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/65.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/03.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/66.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/05.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/67.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/05.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/68.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/17.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/69.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/17.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/70.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/19.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/71.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/21.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/72.png" width="512" /></td>
    </tr>
  </tbody>
</table>

### 物品（Item）

  1. **zoom out, showing repeating squares now**
  2. **zoom out to show this building on the side of a street in Brooklyn**
  3. **place this on a glass door in front of a building**
  4. **zoom out to show this wall in an office**
  5. **put this cardboard sign on a wall in a museum**
  6. **place this glass onto a table**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>输入</th>
      <th>输出</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/06.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/73.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/09.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/74.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/07.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/75.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/13.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/76.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/14.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/77.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/16.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/78.png" width="512" /></td>
    </tr>
  </tbody>
</table>

### 画风（Style）

  1. **using this style make art of an old vintage car on a street in 1907**
  2. **using this style make art of a bottle that says *Spezi* on it**
  3. **using this style create art of a wizards tower**
  4. **using this style make art of a castle made of ice cream on top of a cone**
  5. **using this style make an image of a cabin in the woods at the end up of a dirt road lined with flowers**
  6. **using this style make art of a brick factory in an industrial part of a town in the 1850s**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>输入</th>
      <th>输出</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/05.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/79.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/08.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/80.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/16.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/81.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/17.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/82.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/19.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/83.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/20.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/84.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 2.10 视觉引导（Visual Guide）

  1. **change the object in the red square to a cowboy hat**
  2. **remove the doll in the circle**
  3. **add a cowboy hat in the red box, remove the green box**
  4. **add a cowboy hat in the green box, remove the red box**
  5. **add a leather recliner chair here**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>输入</th>
      <th>输出</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/22.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/85.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/23.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/86.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/24.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/87.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/24.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/88.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/25.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/89.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 2.11 混合式编辑（Hybrid Edit）

  1. **a photo of this couple walking on the beach together with the dog**
  2. **the man is now wearing a desert military uniform and is standing in a very large bush**
  3. **make the mech real and standing above cars on a city street, go pro footage**
  4. **turn this into a neon sign hanging on a brick wall in a cool modern office**
  5. **an image of a street with a dozen posters of this all over a fence**
  6. **a mural of this image on a wall on a nice street in an upscale neighborhood in los angeles**
  7. **generate an image of the cardboard, removing all people in the image and have the cardboard centered**
  8. **change *Sweet Escape* to *Bagel Dreams*, replace the popsicle with a bagel**
  9. **place this art onto the cover of a book that is on an oval coffee table in a 1970s living room, analogue photo**
  10. **the cat is now standing on a chair in a kitchen cooking dinner in a pan on the stove, there is a speech bubble that says *Kitty has got to eat good***

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>输入</th>
      <th>输出</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/02.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/90.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/03.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/91.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/05.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/92.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/07.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/93.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/07.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/94.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/12.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/95.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/14.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/96.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/15.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/97.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/16.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/98.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/17.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/99.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 2.12 中式元素（Chinese Style Element）

  1. **将小猫替换为孙悟空，穿着战斗盔甲**
  2. **将机甲替换为人物角色，人物是关羽，身着战袍，手持青龙偃月刀**
  3. **将背景替换为苏州园林一角，午后景色**
  4. **将冰棍替换为东方明珠塔，矗立在地上**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>输入</th>
      <th>输出</th>
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
      <td><img src="/posts/input/02.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/102.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/15.jpg" width="512" /></td>
      <td><img src="/posts/output-Qwen/103.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 2.13 中文编辑（Chinese Text Edit）

  1. **在图像正中央添加文字\"通义千问\"**
  2. **将\"BLACK FOREST LABS\"修改为\"黑·森林·实验室\"**
  3. **将\"BLACK FOREST LABS\"修改为\"春蚕到死丝方尽，蜡炬成灰泪始干。\"**
  4. **将\"Together We Create!\"修改为\"我们一起创造！\"**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>输入</th>
      <th>输出</th>
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

## 2.14 文字颜色修改（Text Color）：Qwen-Image-Edit 2509版

1. **把"Qwen-Image-Edit"换成橘色**
2. **把"Qwen-Image-Edit"换成粉色**
3. **把"Qwen-Image-Edit"换成荧光紫色**
4. **把"Qwen-Image-Edit"换成彩虹色**
5. **把"Qwen-Image-Edit"换成糖果色**
7. **把"Qwen-Image-Edit"换成蓝紫渐变色**
8. **把"Qwen-Image-Edit"换成蓝粉渐变色**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>输入</th>
      <th>输出</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/26.png" width="512" /></td>
      <td><img src="/posts/output-Qwen/108.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/26.png" width="512" /></td>
      <td><img src="/posts/output-Qwen/109.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/26.png" width="512" /></td>
      <td><img src="/posts/output-Qwen/110.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/26.png" width="512" /></td>
      <td><img src="/posts/output-Qwen/111.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/26.png" width="512" /></td>
      <td><img src="/posts/output-Qwen/112.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/26.png" width="512" /></td>
      <td><img src="/posts/output-Qwen/113.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/26.png" width="512" /></td>
      <td><img src="/posts/output-Qwen/114.png" width="512" /></td>
    </tr>
  </tbody>
</table>

## 2.15 文字字体修改（Text Font）：Qwen-Image-Edit 2509版

1. **把文字“Qwen-Image-Edit”换成淡绿色的粗笔刷字体**
2. **把文字“Qwen-Image-Edit”换成紫色的像素字体**
3. **把文字“Qwen-Image-Edit”换成黑色的滴墨字体**
4. **把文字“Qwen-Image-Edit”换成红色的镂空卡通字体**

<table border="1" cellspacing="0" cellpadding="6" align="center">
  <thead>
    <tr align="center">
      <th>输入</th>
      <th>输出</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td><img src="/posts/input/26.png" width="512" /></td>
      <td><img src="/posts/output-Qwen/115.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/26.png" width="512" /></td>
      <td><img src="/posts/output-Qwen/116.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/26.png" width="512" /></td>
      <td><img src="/posts/output-Qwen/117.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/26.png" width="512" /></td>
      <td><img src="/posts/output-Qwen/118.png" width="512" /></td>
    </tr>
  </tbody>
</table>

# 3. 资源消耗

​	Qwen-Image-Edit方案涉及多个模型，包括：**Qwen-Image-Edit**基础模型 / **Qwen-Image-Edit-2509**基础模型、**Qwen-2.5-vl-7B**解析器模型、**Qwen-Image-vae**编解码模型，以及用于**快速生图**LoRA模型：**Qwen-Image-Lightning-4steps-V1.0**。

- **steps**和**CFG**设置参考

|                    Model                     | Steps | CFG  |
| :------------------------------------------: | :---: | :--: |
|                官方：fp16模型                |  50   | 4.0  |
|             实践：fp8_e4m3fn模型             |  20   | 2.5  |
| 快速：fp8_e4m3fn模型 + lightning_4-steps模型 |   4   | 1.0  |

- **资源消耗**（RTX 4090D）
  - **显存占用**：**21344 MB**
  - **fp8_e4m3fn模型**
    - **耗时**：**75秒**左右，**分辨率**：800 * 1200
  - **fp8_e4m3fn模型 + lightning_4-steps模型**
    - **耗时**：**10秒**左右，**分辨率**：800 * 1200

# 4. 评价

## 4.1 优点

- **`生成效果`**：同**flux-kontext**一样，作为**开源图像编辑模型**，几乎可以完成一样的**图像编辑**任务，并且在多数场合下，生成图效果可以媲美**flux-kontext**的生成图效果。
- **`提示词输入`**：由于Qwen系列使用的是Qwen自家的视觉大模型解析器：**Qwen-2.5-vl-7B**，因此，它能够**支持中文输入作为提示词**，极大提高了中文用户的使用体验。
- **`中式元素支持`**：得益于Qwen系列模型的强大能力，用户可以使用**中式元素**进行图像生成，如绘制**孙悟空、哪吒、关羽、园林、鸟巢、东方明珠等**中式元素形象。
- **`中文编辑支持`**：Qwen系列模型还支持**对图像中的中文内容进行编辑**，Qwen模型既能支持**对英文文字的修改**，也能支持**对中文文字的修改**，相比Flux模型仅能修改**英文文字**，Qwen-Image-Edit模型**更能满足中文场景的设计需求**。
- **`文字编辑方面`**：相比**flux-kontext**，**Qwen-Image-Edit-2509版本**的模型支持**文字颜色修改**和**文字字体修改**，扩大了Qwen系列模型的应用场合。

## 4.2 缺陷

- **`画质方面`**：在修改画面元素的时候，有时会出现**画面风格改变**、**细节减少**、**画面质量下降**等情况，不符合预期的视觉效果输出。

- **`文字编辑方面`**：尽管模型支持双语文字修改，但**在文字量较多时会出现错字、漏字的情况**，需要重新排列设计。

- **`视觉引导方面`**：在实践中发现，使用**方框式标注**或**圆圈式标注**的做法，就已经可以**相对准确地**处理**指定对象**了，而使用**区域涂抹方式标注**，反而**不能很准确地搜寻到指定区域**进行处理，因此，推荐使用**方框**或**圆圈**的方式进行对象标注，而不要使用**区域涂抹**的方式。

# 附：参考图和提示词

```json
{"file": "images/18.jpg", "instruction": "make him wear sunglasses"}
{"file": "images/19.jpg", "instruction": "add a cowboy hat to the dog"}
{"file": "images/10.jpg", "instruction": "add color to this image"}
{"file": "images/20.jpg", "instruction": "add a pixel dog walking on the dirt path"}
{"file": "images/06.jpg", "instruction": "add a weird scary face in the very middle"}
{"file": "images/02.jpg", "instruction": "remove the dog"}
{"file": "images/02.jpg", "instruction": "remove the man's tattoos"}
{"file": "images/04.jpg", "instruction": "remove the spoon and the napkin"}
{"file": "images/07.jpg", "instruction": "remove the text"}
{"file": "images/07.jpg", "instruction": "remove the hand in the middle"}
{"file": "images/08.jpg", "instruction": "remove the flame from the candle"}
{"file": "images/15.jpg", "instruction": "remove all the text"}
{"file": "images/19.jpg", "instruction": "remove the dog"}
{"file": "images/20.jpg", "instruction": "remove the cabin"}
{"file": "images/21.jpg", "instruction": "remove her glasses"}
{"file": "images/04.jpg", "instruction": "replace the milk shake with a beer"}
{"file": "images/05.jpg", "instruction": "replace the green on the mech with red"}
{"file": "images/06.jpg", "instruction": "make it neon colors"}
{"file": "images/07.jpg", "instruction": "change the text to green and the hand to purple"}
{"file": "images/09.jpg", "instruction": "turn the brick wall into a smooth concrete wall"}
{"file": "images/09.jpg", "instruction": "the text is now green"}
{"file": "images/10.jpg", "instruction": "replace the lady with a tiger"}
{"file": "images/11.jpg", "instruction": "make each word a different color"}
{"file": "images/13.jpg", "instruction": "turn the wall into a brick wall"}
{"file": "images/14.jpg", "instruction": "all of the text is now green"}
{"file": "images/16.jpg", "instruction": "replace the glass with a frog"}
{"file": "images/17.jpg", "instruction": "turn the cat into an owl"}
{"file": "images/01.jpg", "instruction": "replace the carpet with a wood floor"}
{"file": "images/02.jpg", "instruction": "make the room to a pub"}
{"file": "images/07.jpg", "instruction": "change the background to purple"}
{"file": "images/12.jpg", "instruction": "make the entire card have a rainbow background"}
{"file": "images/20.jpg", "instruction": "make it winter"}
{"file": "images/05.jpg", "instruction": "have the mech crouch down and give a thumbs up"}
{"file": "images/10.jpg", "instruction": "make her smile"}
{"file": "images/12.jpg", "instruction": "make the man laugh"}
{"file": "images/17.jpg", "instruction": "make the cat angry"}
{"file": "images/17.jpg", "instruction": "make the cat happy"}
{"file": "images/21.jpg", "instruction": "this woman is now skydiving"}
{"file": "images/21.jpg", "instruction": "she is now standing up and dancing"}
{"file": "images/21.jpg", "instruction": "she is now sitting on the edge of a building at sunset"}
{"file": "images/01.jpg", "instruction": "extract the cat, make the background to white"}
{"file": "images/03.jpg", "instruction": "extract the man, make the background to white"}
{"file": "images/04.jpg", "instruction": "extract the drink, make the background to gray"}
{"file": "images/11.jpg", "instruction": "extract the sneaker shoes, show the whole shoes at front view and make the background to gray"}
{"file": "images/12.jpg", "instruction": "extract the photo of the man"}
{"file": "images/06.jpg", "instruction": "add the word \"BFL\" in the center"}
{"file": "images/07.jpg", "instruction": "replace the word \"Lover\" to \"Hater\""}
{"file": "images/08.jpg", "instruction": "change the text that says \"Black Forest Labs\" to \"Bagel Can Do It\""}
{"file": "images/08.jpg", "instruction": "change the text to say \"Not only can we change the words but we can add so many more\""}
{"file": "images/09.jpg", "instruction": "change the text to says \"The Context Matters\""}
{"file": "images/10.jpg", "instruction": "change the word \"Courage\" to \"Diffusion\""}
{"file": "images/10.jpg", "instruction": "replace all the text with \"Black Forest Labs\""}
{"file": "images/11.jpg", "instruction": "change the words to say \"watch out above you\""}
{"file": "images/12.jpg", "instruction": "change \"California\" to \"Germany\""}
{"file": "images/15.jpg", "instruction": "replace \"pop art desert festival\" with \"hippies in the middle of nowhere\""}
{"file": "images/03.jpg", "instruction": "convert him into a miniature toy-brick hero"}
{"file": "images/03.jpg", "instruction": "turn this into pixel art"}
{"file": "images/05.jpg", "instruction": "make this a real cinematic photo"}
{"file": "images/13.jpg", "instruction": "turn this into pixel art"}
{"file": "images/15.jpg", "instruction": "make this into crazy artwork"}
{"file": "images/19.jpg", "instruction": "turn this into a real photo"}
{"file": "images/19.jpg", "instruction": "turn this into a paper mache diagram"}
{"file": "images/21.jpg", "instruction": "make her into a puppet on a couch"}
{"file": "images/02.jpg", "instruction": "pov action photo of this couple on a rollercoaster screaming in terror"}
{"file": "images/03.jpg", "instruction": "a vintage sepia photo of this man wearing a suit and a tallit behind a podium in a synagogue"}
{"file": "images/03.jpg", "instruction": "a photo of a napkin on a table, on the napkin is a painting of this man"}
{"file": "images/03.jpg", "instruction": "the man is now sitting in a hammock by a lake surrounded by trees in canada, he is working on a laptop"}
{"file": "images/05.jpg", "instruction": "show me an aerial view of this from above the mech"}
{"file": "images/05.jpg", "instruction": "turn this into a figurine on a desk"}
{"file": "images/17.jpg", "instruction": "the cat is now dancing"}
{"file": "images/17.jpg", "instruction": "zoom out showing the cat standing next to some flowers"}
{"file": "images/19.jpg", "instruction": "the dog is now facing the camera and dancing"}
{"file": "images/21.jpg", "instruction": "make this woman into an astronaut riding a pig"}
{"file": "images/06.jpg", "instruction": "zoom out, showing repeating squares now"}
{"file": "images/09.jpg", "instruction": "zoom out to show this building on the side of a street in Brooklyn"}
{"file": "images/07.jpg", "instruction": "place this on a glass door in front of a building"}
{"file": "images/13.jpg", "instruction": "zoom out to show this wall in an office"}
{"file": "images/14.jpg", "instruction": "put this cardboard sign on a wall in a museum"}
{"file": "images/16.jpg", "instruction": "place this glass onto a table"}
{"file": "images/05.jpg", "instruction": "using this style make art of an old vintage car on a street in 1907"}
{"file": "images/08.jpg", "instruction": "using this style make art of a bottle that says \"Spezi\" on it"}
{"file": "images/16.jpg", "instruction": "using this style create art of a wizards tower"}
{"file": "images/17.jpg", "instruction": "using this style make art of a castle made of ice cream on top of a cone"}
{"file": "images/19.jpg", "instruction": "using this style make an image of a cabin in the woods at the end up of a dirt road lined with flowers"}
{"file": "images/20.jpg", "instruction": "using this style make art of a brick factory in an industrial part of a town in the 1850s"}
{"file": "images/22.jpg", "instruction": "change the object in the red square to a cowboy hat"}
{"file": "images/23.jpg", "instruction": "remove the doll in the circle"}
{"file": "images/24.jpg", "instruction": "add a cowboy hat in the red box, remove the green box"}
{"file": "images/24.jpg", "instruction": "add a cowboy hat in the green box, remove the red box"}
{"file": "images/25.jpg", "instruction": "add a leather recliner chair here"}
{"file": "images/02.jpg", "instruction": "a photo of this couple walking on the beach together with the dog"}
{"file": "images/03.jpg", "instruction": "the man is now wearing a desert military uniform and is standing in a very large bush"}
{"file": "images/05.jpg", "instruction": "make the mech real and standing above cars on a city street, go pro footage"}
{"file": "images/07.jpg", "instruction": "turn this into a neon sign hanging on a brick wall in a cool modern office"}
{"file": "images/07.jpg", "instruction": "an image of a street with a dozen posters of this all over a fence"}
{"file": "images/12.jpg", "instruction": "a mural of this image on a wall on a nice street in an upscale neighborhood in los angeles"}
{"file": "images/14.jpg", "instruction": "generate an image of the cardboard, removing all people in the image and have the cardboard centered"}
{"file": "images/15.jpg", "instruction": "change \"Sweet Escape\" to \"Bagel Dreams\", replace the popsicle with a bagel"}
{"file": "images/16.jpg", "instruction": "place this art onto the cover of a book that is on an oval coffee table in a 1970s living room, analogue photo"}
{"file": "images/17.jpg", "instruction": "the cat is now standing on a chair in a kitchen cooking dinner in a pan on the stove, there is a speech bubble that says \"Kitty has got to eat good\""}
{"file": "images/17.jpg", "instruction": "将小猫替换为孙悟空，穿着战斗盔甲"}
{"file": "images/05.jpg", "instruction": "将机甲替换为人物角色，人物是关羽，身着战袍，手持青龙偃月刀"}
{"file": "images/02.jpg", "instruction": "将背景替换为苏州园林一角，午后景色"}
{"file": "images/15.jpg", "instruction": "将冰棍替换为东方明珠塔，矗立在地上"}
{"file": "images/06.jpg", "instruction": "在图像正中央添加文字\"通义千问\""}
{"file": "images/08.jpg", "instruction": "将\"BLACK FOREST LABS\"修改为\"黑·森林·实验室\""}
{"file": "images/08.jpg", "instruction": "将\"BLACK FOREST LABS\"修改为\"春蚕到死丝方尽，蜡炬成灰泪始干。\""}
{"file": "images/09.jpg", "instruction": "将\"Together We Create!\"修改为\"我们一起创造！\""}
{"file": "images/26.png", "instruction": "把\"Qwen-Image-Edit\"换成橘色"}
{"file": "images/26.png", "instruction": "把\"Qwen-Image-Edit\"换成粉色"}
{"file": "images/26.png", "instruction": "把\"Qwen-Image-Edit\"换成荧光紫色"}
{"file": "images/26.png", "instruction": "把\"Qwen-Image-Edit\"换成彩虹色"}
{"file": "images/26.png", "instruction": "把\"Qwen-Image-Edit\"换成糖果色"}
{"file": "images/26.png", "instruction": "把\"Qwen-Image-Edit\"换成蓝紫渐变色"}
{"file": "images/26.png", "instruction": "把\"Qwen-Image-Edit\"换成蓝粉渐变色"}
{"file": "images/26.png", "instruction": "把文字“Qwen-Image-Edit”换成淡绿色的粗笔刷字体"}
{"file": "images/26.png", "instruction": "把文字“Qwen-Image-Edit”换成紫色的像素字体"}
{"file": "images/26.png", "instruction": "把文字“Qwen-Image-Edit”换成黑色的滴墨字体"}
{"file": "images/26.png", "instruction": "把文字“Qwen-Image-Edit”换成红色的镂空卡通字体"}
```

