---
title: 图像编辑：Flux-Kontext
published: 2025-08-12
description: 展现Flux-Kontext在图像编辑领域中的能力。
tags: [AIGC·图像, 图像编辑, Flux, Kontext]
category: AIGC
image: "/posts/Kontext.png"
---

# 1. 介绍

​		**`Flux Kontext`**是由**Black Forest Labs**开发的一款专业的**图像编辑**模型，专注于智能理解图像上下文并执行精确编辑，它能够在无需复杂描述的情况下实现多种编辑任务，包括**对象修改**、**风格转换**、**背景替换**、**角色一致性编辑**和**文本编辑**等。

​		**Flux Kontext**擅长处理以下任务：

- **`对象修改`**：添加、移除、替换、提取、背景更换、姿态调整……
- **`文本编辑`**：添加、移除、替换……
- **`风格转换`**：水彩风、线稿风、像素风、动漫风、粘土风、赛博朋克风……
- **`角色一致性`**：角色参考、物品参考、画风参考……
- **`视觉引导`**：方框、圆圈、涂抹块……

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
      <td><img src="/posts/output-Kontext/0.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/19.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/1.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/10.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/2.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/20.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/3.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/06.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/4.png" width="512" /></td>
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
      <td><img src="/posts/output-Kontext/5.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/02.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/6.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/04.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/7.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/07.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/8.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/07.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/9.png" width="512" /></td>
    </tr>
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
    <tr align="center">
      <td><img src="/posts/input/20.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/13.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/21.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/14.png" width="512" /></td>
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
      <td><img src="/posts/output-Kontext/15.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/05.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/16.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/06.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/17.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/07.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/18.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/09.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/19.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/09.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/20.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/10.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/21.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/11.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/22.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/13.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/23.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/14.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/24.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/16.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/25.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/17.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/26.png" width="512" /></td>
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
      <td><img src="/posts/output-Kontext/27.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/02.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/28.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/07.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/29.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/12.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/30.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/20.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/31.png" width="512" /></td>
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
      <td><img src="/posts/output-Kontext/32.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/10.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/33.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/12.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/34.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/17.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/35.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/17.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/36.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/21.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/37.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/21.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/38.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/21.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/39.png" width="512" /></td>
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
      <td><img src="/posts/output-Kontext/40.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/03.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/41.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/04.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/42.png" width="512" /></td>
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
      <td><img src="/posts/output-Kontext/45.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/07.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/46.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/08.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/47.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/08.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/48.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/09.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/49.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/10.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/50.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/10.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/51.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/11.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/52.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/12.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/53.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/15.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/54.png" width="512" /></td>
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
      <td><img src="/posts/output-Kontext/55.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/03.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/56.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/05.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/57.png" width="512" /></td>
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
    <tr align="center">
      <td><img src="/posts/input/19.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/61.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/21.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/62.png" width="512" /></td>
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
      <td><img src="/posts/output-Kontext/63.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/03.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/64.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/03.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/65.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/03.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/66.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/05.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/67.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/05.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/68.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/17.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/69.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/17.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/70.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/19.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/71.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/21.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/72.png" width="512" /></td>
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
      <td><img src="/posts/output-Kontext/73.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/09.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/74.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/07.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/75.png" width="512" /></td>
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
      <td><img src="/posts/input/16.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/78.png" width="512" /></td>
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
      <td><img src="/posts/output-Kontext/79.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/08.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/80.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/16.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/81.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/17.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/82.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/19.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/83.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/20.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/84.png" width="512" /></td>
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
      <td><img src="/posts/output-Kontext/85.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/23.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/86.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/24.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/87.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/24.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/88.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/25.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/89.png" width="512" /></td>
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
      <td><img src="/posts/output-Kontext/90.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/03.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/91.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/05.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/92.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/07.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/93.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/07.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/94.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/12.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/95.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/14.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/96.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/15.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/97.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/16.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/98.png" width="512" /></td>
    </tr>
    <tr align="center">
      <td><img src="/posts/input/17.jpg" width="512" /></td>
      <td><img src="/posts/output-Kontext/99.png" width="512" /></td>
    </tr>
  </tbody>
</table>

# 3. 资源消耗

​		Flux-Kontext方案使用**Flux-Kontext模型**作为基础生图模型，使用**t5xxl模型**和**clip模型**作为文本解析器，**ae模型**作为编解码模型。

- **steps**和**CFG**设置参考

|        Model         | Steps | CFG  |
| :------------------: | :---: | :--: |
|    官方：fp16模型    |  20   | 2.5  |
| 实践：fp8_e4m3fn模型 |  20   | 2.5  |

- **资源消耗**（RTX 4090D）
  - **显存占用**：**18468 MB**
  - **耗时**：**24秒**左右，**分辨率**：800 * 1200

# 4. 局限性

## 4.1 语义理解能力弱

​		尽管**t5xxl**的解析能力已经相对较强了，但是在实际使用时，生成图像表现的场景，并**不能正确反映图像主体的状态**，经常出现**物体混乱、模型穿透**等不符合物理规律的情况。

## 4.2 文字书写能力弱

​		FLUX系列的模型，只能限于书写**英文**和**数字**，**无法书写其他语言系统**。针对于**英文场景**，模型目前**仅能对单词、简短的语句有较好的书写能力**，对于**长句**，经常会出现**字符模糊、字符混乱、字符丢失**等异常情况。	

## 4.3 单图编辑能力很强

​		Flux-Kontext作为一款图像编辑模型，它的**单图编辑能力十分优秀**，在实际使用时，模型不仅会参考图像中的**角色装扮**、**角色姿态**，还会参考**图像画风**、**画面构图**等信息，因此，若要使用**角色一致性参考**、**物品一致性参考**功能，建议将参考图像的背景设置为**白底**、**灰底**或者**透明**。

## 4.4 多图融合能力很差

​		尽管Flux-Kontext模型支持**多图融合**模式，但实际使用时，**画面崩坏的情况较严重**，比如：

- 输入**两个角色进行互动**，经常会出现**角色之间相互混淆**的情况
- 输入**角色和场景进行融合**，经常会出现**角色比例太大**，不能很好的和场景融合
- 输入**角色和物品进行搭配**，会出现**角色不能正确使用物品**的情形

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
```

