---
title: OpenCV：几何变换
published: 2023-07-17
description: 介绍对图像进行常规几何变换的操作，包括缩放、翻转、仿射变换、透视变换。
tags: [OpenCV, 数字图像处理]
category: 计算机视觉
image: "/posts/计算机视觉-Invert.jpg"
---

# 1. 概述

​		几何变换是**将一幅图像中的坐标位置映射到另一幅图像中的新坐标位置**，实质是改变像素的空间位置，估算新空间位置上的像素值。

​		常见的几何变换包括：**缩放**、**翻转**、**仿射变换**、**透视**等。

# 2. 缩放

## 2.1 使用方式

- 调用函数`cv2.resize()`实现对图像的`缩放`
- **函数原型**：`dst = cv2.resize( src, dsize, fx, fy, interpolation )`
- **函数参数**：
  - **dst **：表示**目标图像**。
  - **src**：表示**原始图像**。
  - **dsize**：表示输出图像**大小**。
  - **fx**：表示**水平**方向的**缩放比例**。
  - **fy**：表示**垂直**方向的**缩放比例**。
  - **interpolation**：表示**插值方式**。
- **插值**
  - **理解**：在对图像进行几何处理时，给无法直接通过映射得到值的像素点赋值。
  - **举例**：将图像放大为原来的2倍，必然会多出一些无法被直接映射值的像素点，对于这些像素点，插值方式决定了如何确定它们的值。
  - **插值方式**

|          类型          |          说明          |        适用场景        |
| :--------------------: | :--------------------: | :--------------------: |
| **cv2.INTER_NEAREST**  |     **最近邻插值**     |                        |
|  **cv2.INTER_LINEAR**  | **双线性插值**（默认） | **放大图像，速度较快** |
|  **cv2.INTER_CUBIC**   |    **三次样条插值**    | **放大图像，速度较慢** |
| cv2.INTER_LINEAR_EXACT |    位精确双线性插值    |                        |
|   **cv2.INTER_AREA**   |      **区域插值**      |      **缩小图像**      |
|     cv2.INTER_MAX      |      差值编码掩码      |                        |

- **目标图像的大小**：通过`dsize`或者`fx、fy`二者之一来指定
  - **通过`dsize`指定**：无论是否指定`fx、fy`的值，都由`dsize`决定目标图像的大小。
    - 在**shape属性**中，**第1个值**对应的是**行数**，**第2个值**对应的是**列数**。
    - 在**dsize参数**中，**第1个值**对应的是**列数**，**第2个值**对应的是**行数**。
  - **通过`fx、fy`指定**：`dsize`需要设定为**None**，此时目标图像的大小由`fx、fy`来决定。
    - 目标图像大小：`dsize = (round(fx * src.cols), round(fy * src.rows))`

## 2.2 示例

```python
import cv2

src = cv2.imread("person.jpg")
dst = cv2.resize(src, None, fx=0.5, fy=0.5, interpolation=cv2.INTER_LINEAR)

cv2.imwrite("resize.jpg", dst)
```

|      原图       |      缩放       |
| :-------------: | :-------------: |
| ![](person.jpg) | ![](resize.jpg) |

# 3. 翻转

## 3.1 使用方式

- 调用函数`cv2.flip()`实现对图像的`翻转`
- **函数原型**：`dst = cv2.flip( src, flipCode )`
- **函数参数**：
  - **dst **：表示**目标图像**。
  - **src**：表示**原始图像**。
  - **flipCode **：表示**旋转类型**。

|     参数值     |                     意义                      |
| :------------: | :-------------------------------------------: |
|     **0**      |           **绕着x轴翻转**：水平翻转           |
| **任意正整数** |           **绕着y轴翻转**：垂直翻转           |
| **任意负整数** | **绕着x轴、y轴同时翻转**：水平翻转 + 垂直翻转 |

## 3.2 示例

```python
import cv2

src = cv2.imread("person.jpg")
x   = cv2.flip(src,  0)
y   = cv2.flip(src,  1)
x_y = cv2.flip(src, -1)

cv2.imwrite("x.jpg", x)
cv2.imwrite("y.jpg", y)
cv2.imwrite("x+y.jpg", x_y)
```

|      原图       |  水平翻转   |  垂直翻转   | 水平翻转 + 垂直翻转 |
| :-------------: | :---------: | :---------: | :-----------------: |
| ![](person.jpg) | ![x](x.jpg) | ![y](y.jpg) |   ![x+y](x+y.jpg)   |

# 4. 仿射变换

​		**仿射变换** 是指 **图像可以`通过一系列的几何变换来实现平移、旋转等多种操作`** ，该变换能够保持图像的平直性和平行性。平直性和平行性是指图像经过仿射变换后，直线仍然是直线，平行线仍然是平行线。

​		在OpenCV中，通过**变换矩阵**`M`、配合**仿射变换函数**`cv2.warpAffine()`实现仿射变换。

## 4.1 变换原理

$$\begin{bmatrix} x_{dst} \\ y_{dst} \end{bmatrix} = \begin{bmatrix} M_{11}&M_{12}&M_{13} \\ M_{21}&M_{22}&M_{23} \end{bmatrix} *\begin{bmatrix} x_{src} \\ y_{src} \\ 1 \end{bmatrix}$$

## 4.2 使用方式

- 调用函数`cv2.warpAffine()`实现对图像的**仿射变换**。
- **函数原型**：`dst = cv2.warpAffine( src, M, dsize, flags, borderMode, borderValue )`
- **函数参数**：
  - **dst **：表示**目标图像**。
  - **src**：表示**原始图像**。
  - **M**：代表一个2×3的**变换矩阵**。使用不同的变换矩阵，就可以实现不同的仿射变换。
  - **dsize**：表示输出图像**大小**。
  - **flags**：表示**插值方式**。
  - **borderMode**：代表边界类型，默认为**BORDER_CONSTANT**。
  - **borderValue**：代表边界值，默认是**0**。

## 4.3 示例：平移

```python
import cv2
import numpy as np

src = cv2.imread("person.jpg")
H, W, C = src.shape

M = np.float32([[1, 0, 200], [0, 1, 400]])
dst = cv2.warpAffine(src, M, (W, H))

cv2.imwrite("offset.jpg", dst)
```

|      原图       |         平移          |
| :-------------: | :-------------------: |
| ![](person.jpg) | ![offset](offset.jpg) |

## 4.4 示例：旋转

- 通过函数`cv2.getRotationMatrix2D()`**获取转换矩阵**
- **函数原型**：`retval = cv2.getRotationMatrix2D(center, angle, scale)`
- **函数参数**：
  - **center**：表示**图像旋转的中心点**。
  - **angle**：表示**旋转角度**，正数表示逆时针旋转，负数表示顺时针旋转。
  - **scale**：表示**缩放尺度**。

```python
import cv2
import numpy as np

src = cv2.imread("person.jpg")
H, W, C = src.shape

M = cv2.getRotationMatrix2D((W/2, H/2), 45, 0.5)
dst = cv2.warpAffine(src, M, (W, H))

cv2.imwrite("rotate.jpg", dst)
```

|      原图       |         旋转          |
| :-------------: | :-------------------: |
| ![](person.jpg) | ![rotate](rotate.jpg) |

## 4.5 示例：任意变换

- 通过函数`cv2.getAffineTransform()`**获取转换矩阵**
- **函数原型**：`retval = cv2.getAffineTransform(pt_src, pt_dst)`
- **函数参数**：
  - **pt_src**：表示**输入图像的三个点坐标**，对应平行四边形的**左上角**、**右上角**、**左下角**。
  - **pt_dst**：表示**输出图像的三个点坐标**，对应平行四边形的**左上角**、**右上角**、**左下角**。

```python
import cv2
import numpy as np

src = cv2.imread("person.jpg")
H, W, C = src.shape

pt1 = np.float32([[0, 0], [W - 1, 0], [0, H - 1]])
pt2 = np.float32([[0, H * 0.15], [W * 0.8, H * 0.2], [W * 0.15, H * 0.9]])
M = cv2.getAffineTransform(pt1, pt2)
dst = cv2.warpAffine(src, M, (W, H))

cv2.imwrite("affine.jpg", dst)
```

|      原图       |       任意变换        |
| :-------------: | :-------------------: |
| ![](person.jpg) | ![affine](affine.jpg) |

# 5. 透视变换

​		**`仿射变换`**可以**将矩形映射为`任意平行四边形`**，**`透视变换`**可以**将矩形映射为`任意四边形`**。

## 5.1 使用方式

### 透视变换

- 调用函数`cv2.warpPerspective()`实现`透视变换`
- **函数原型**：`dst = cv2.warpPerspective( src, M, dsize, flags, borderMode, borderValue )`
- **函数参数**：
  - **dst **：表示**目标图像**。
  - **src**：表示**原始图像**。
  - **M**：代表一个3×3的**变换矩阵**。
  - **dsize**：表示输出图像**大小**。
  - **flags**：表示**插值方式**，默认为**INTER_LINEAR**。
  - **borderMode**：代表边界类型，默认为**BORDER_CONSTANT**。
  - **borderValue**：代表边界值，默认是**0**。

### 转换矩阵

- 通过函数`cv2.getPerspectiveTransform()`**获取转换矩阵**
- **函数原型**：`retval = cv2.getPerspectiveTransform(pt_src, pt_dst)`
- **函数参数**：
  - **pt_src**：表示**输入图像的四个顶点坐标**。
  - **pt_dst**：表示**输出图像的四个点坐标**。

## 5.2 示例

```python
import cv2
import numpy as np

src = cv2.imread("person.jpg")
H, W, C = src.shape

pt1 = np.float32([[0, 0], [W - 1, 0], [0, H - 1], [W - 1, H - 1]])
pt2 = np.float32([[100, H / 4], [W - 100, H / 3], [100, H * 3 / 4], [W - 100, H * 2 / 3]])
M = cv2.getPerspectiveTransform(pt1, pt2)
dst = cv2.warpPerspective(src, M, (W, H))

cv2.imwrite("perspective.jpg", dst)
```

|      原图       |            透视变换             |
| :-------------: | :-----------------------------: |
| ![](person.jpg) | ![perspective](perspective.jpg) |