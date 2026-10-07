---
title: OpenCV案例：数字水印
published: 2023-09-09
description: 介绍图像级别的数字水印技术。
tags: [OpenCV, 数字图像处理]
category: 计算机视觉
image: "/posts/计算机视觉.jpg"
---

# 1. 介绍

​		**数字水印技术**是指**将一种特定的信息（水印）采用数字内嵌的方式隐藏到图像、声音、视频等数字媒体中**。

- 如果嵌入载体图像内的信息是**秘密**信息，就实现了**信息隐藏**。
- 如果嵌入载体图像内的信息是**版权**信息，就能够实现**版权认证**。
- 如果嵌入载体图像内的信息是**身份**信息，就可以实现**数字签名**。

# 2. 分类

​		数字水印技术按照**检测过程**划分，可以分为 **`非盲水印`** 和 **`盲水印`** 。**非盲水印**在检测的过程中，**需要对原始数据进行运算处理**；**盲水印**在检测的过程中，**不需要额外的信息，直接将水印信息从含水印的图像中提取出来**即可。

​		根据**嵌入位置**的不同，可以将数字水印划分为 **`最低有效位水印`** 和 **`随机位水印`** 。最低有效位水印**把水印信息嵌入到载体图像的最低有效位中**，随机位数字水印则是**把水印信息嵌入到载体图像中每个像素的不同二进制位上**。

# 3. 盲数字水印

## 3.1 最低有效位

​		 `最低有效位` （Least Significant Bit， LSB）指的是一个二进制数中的**第0位**。由**位平面分解**理论可知，由最低有效位构成的位平面，与原图像的相关性最低，因此**将图像的最低有效位替换为水印信息，图像信息丢失地最少**。

### 示例

```python
import cv2
import numpy as np

# 读取原始图像信息
src = cv2.imread("src.jpg")
row, col, ch = src.shape

# 读取水印信息
watermark = cv2.imread("watermark.png")
idx = watermark[:,:,:]>0
watermark[idx] = 1

# 水印嵌入
extract = np.ones((row, col, ch), dtype=np.uint8) * 254
src_ext = cv2.bitwise_and(src, extract)
dst_1 = cv2.bitwise_or(src_ext, watermark)
cv2.imwrite("embedding-1.jpg", dst_1)

# 水印提取
extract = np.ones((row, col, ch), dtype=np.uint8)
dst_2 = cv2.bitwise_and(dst_1, extract)
idx = dst_2[:,:,:]>0
dst_2[idx] = 255
cv2.imwrite("extraction-1.jpg", dst_2)
```

|    原始图像     |          水印图像           |       水印嵌入后的图像       |        提取的水印图像         |
| :-------------: | :-------------------------: | :--------------------------: | :---------------------------: |
| ![src](src.jpg) | ![watermark](watermark.png) | ![水印嵌入](embedding-1.jpg) | ![水印提取](extraction-1.jpg) |

## 3.2 随机位

​		 `随机位水印` 通常**采用随机生成的一个值在0-7之间、与原始载体图像大小相同的位置矩阵，来决定水印信息在每个像素上的二进制值中的具体嵌入位置**。

​		**当嵌入水印的位置处于载体图像像素二进制值较高比特位时，其像素值变化较大；当嵌入水印的位置处于载体图像像素二进制值较低比特位时，其像素值变化不明显。**因此，**可以将嵌入位再缩小至第0位至第3位**，这样嵌入的水印信息**不易被察觉**，提高了嵌入的安全性。

### 示例

```python
import cv2
import numpy as np

# 读取原始图像信息
src = cv2.imread("src.jpg")
H, W, C = src.shape

# 生成位置矩阵
seed = np.random.randint(0, 10000)
np.random.seed(seed)
num = np.random.randint(0, 8, size=(H, W, C), dtype=np.uint8)
pos = 2 ** num

# 读取水印信息
watermark = cv2.imread("watermark.png")
watermark = cv2.bitwise_and(watermark, pos)

# 水印嵌入
src_ext = cv2.bitwise_and(src, cv2.bitwise_not(pos))
dst_1 = cv2.bitwise_or(src_ext, watermark)
cv2.imwrite("embedding-2.jpg", dst_1)

# 水印提取
dst_2 = cv2.bitwise_and(dst_1, pos)
idx = dst_2[:,:,:]>0
dst_2[idx] = 255
cv2.imwrite("extraction-2.jpg", dst_2)
```

|    原始图像     |          水印图像           |       水印嵌入后的图像       |        提取的水印图像         |
| :-------------: | :-------------------------: | :--------------------------: | :---------------------------: |
| ![src](src.jpg) | ![watermark](watermark.png) | ![水印嵌入](embedding-2.jpg) | ![水印提取](extraction-2.jpg) |

# 4. 非盲数字水印

​		本文采取的**非盲手段**为：**将加密图像和水印图像作异或处理**。

## 4.1 最低有效位

### 示例

```python
import cv2
import numpy as np

# 读取原始图像信息
src = cv2.imread("src.jpg")
row, col, ch = src.shape

# 读取水印信息
watermark = cv2.imread("watermark.png")

# 非盲处理
watermark = 
idx = watermark[:,:,:]>0
watermark[idx] = 1

# 水印嵌入
extract = np.ones((row, col, ch), dtype=np.uint8) * 254
src_ext = cv2.bitwise_and(src, extract)
dst_1 = cv2.bitwise_or(src_ext, watermark)
cv2.imwrite("embedding-3.jpg", dst_1)

# 水印提取
extract = np.ones((row, col, ch), dtype=np.uint8)
dst_2 = cv2.bitwise_and(dst_1, extract)
idx = dst_2[:,:,:]>0
dst_2[idx] = 255
cv2.imwrite("extraction-3.jpg", dst_2)
```

|    原始图像     |          水印图像           |           非盲处理           |           水印嵌入           |           水印提取            |
| :-------------: | :-------------------------: | :--------------------------: | :--------------------------: | :---------------------------: |
| ![src](src.jpg) | ![watermark](watermark.png) | ![非盲处理](operation-1.jpg) | ![水印嵌入](embedding-3.jpg) | ![水印提取](extraction-3.jpg) |

## 4.2 随机位

### 示例

```python
import cv2
import numpy as np

# 读取原始图像信息
src = cv2.imread("src.jpg")
row, col, ch = src.shape

# 读取水印信息
watermark = cv2.imread("watermark.png")

# 设置随机矩阵
seed = np.random.randint(0, 10000)
np.random.seed(seed)
num = np.random.randint(0, 8, size=(row, col, ch), dtype=np.uint8)
pos = 2 ** num

# 非盲处理
watermark = cv2.bitwise_and(watermark, pos)
ext = cv2.bitwise_and(src, pos)
watermark = cv2.bitwise_xor(watermark, ext)
cv2.imwrite("operation-2.jpg", watermark)

# 水印嵌入
src_ext = cv2.bitwise_and(src, cv2.bitwise_not(pos))
dst_1 = cv2.bitwise_or(src_ext, watermark)
cv2.imwrite("embedding-4.jpg", dst_1)

# 水印提取
dst_2 = cv2.bitwise_and(dst_1, pos)
dst_2 = cv2.bitwise_xor(dst_2, ext)
idx = dst_2[:,:,:]>0
dst_2[idx] = 255
cv2.imwrite("extraction-4.jpg", dst_2)
```

|    原始图像     |          水印图像           |           非盲处理           |           水印嵌入           |           水印提取            |
| :-------------: | :-------------------------: | :--------------------------: | :--------------------------: | :---------------------------: |
| ![src](src.jpg) | ![watermark](watermark.png) | ![非盲处理](operation-2.jpg) | ![水印嵌入](embedding-4.jpg) | ![水印提取](extraction-4.jpg) |