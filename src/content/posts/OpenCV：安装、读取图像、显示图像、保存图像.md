---
title: OpenCV：安装、读取图像、显示图像、保存图像
published: 2023-06-20
description: 介绍OpenCV-Python的安装方式，以及如何对图像进行读取、显示和保存。
tags: [OpenCV, 数字图像处理]
category: 计算机视觉
image: "https://image.shadowchen.top/public/posts/OpenCV.png"
---

# 1. OpenCV安装

## 主库

- **主库**由**OpenCV核心团队**维护

```bash
pip install opencv-python
```

## 贡献库

- **贡献库**由**OpenCV社区成员**开发和维护
- **优势**：**包含的视觉应用比主库更全面**
  - **注意点**：包含了**一些受专利保护的算法**，商用时予以关注

```bash
pip install opencv-contrib-python
```

# 2. 读取图像：cv2.imread()

- 函数`cv2.imread()`用来**读取图像**，支持多种静态图像格式。

```python
img = cv2.imread(filename[, flags])
```

- **img**：**返回值**，其值是**读取到的图像数据**。如果读取图像失败，则返回**None**。
- **filename**：**图像的文件名（不可包含路径）**。
- **flags**：**读取标记**，该标记**控制读取文件的类型**。

| 值                             | **含义**                                                     | **数值** |
| ------------------------------ | ------------------------------------------------------------ | -------- |
| **cv2.IMREAD_UNCHANGED**       | 保持原格式不变                                               | -1       |
| **cv2.IMREAD_GRAYSCALE**       | 把图像转换成单通道的灰度图像后读取                           | 0        |
| **cv2.IMREAD_COLOR**           | 将图像转换成三通道的**BGR**彩色图像后读取（**默认值**）      | 1        |
| cv2.IMREAD_ANYDEPTH            | 16位或32位深度的图像在读取时，按照16位或32位深度的图像读取；默认按8位深度的图像读取 | 2        |
| cv2.IMREAD_ANYCOLOR            | 以任意可能的彩色格式读取图像                                 | 4        |
| cv2.IMREAD_REDUCED_GRAYSCALE_2 | 将图像转换成单通道的灰度图像，并将图像尺寸缩小为原来的1/2    |          |
| cv2.IMREAD_REDUCED_GRAYSCALE_4 | 将图像转换成单通道的灰度图像，并将图像尺寸缩小为原来的1/4    |          |
| cv2.IMREAD_REDUCED_GRAYSCALE_8 | 将图像转换成单通道的灰度图像，并将图像尺寸缩小为原来的1/8    |          |
| cv2.IMREAD_REDUCED_COLOR_2     | 将图像转换成三通道的**BGR**彩色图像，并将图像尺寸缩小为原来的1/2 |          |
| cv2.IMREAD_REDUCED_COLOR_4     | 将图像转换成三通道的**BGR**彩色图像，并将图像尺寸缩小为原来的1/4 |          |
| cv2.IMREAD_REDUCED_COLOR_8     | 将图像转换成三通道的**BGR**彩色图像，并将图像尺寸缩小为原来的1/8 |          |

## 常见支持的图像格式

- **`.bmp`**
- **`.jpg`**, **`jpeg`**
- **`.png`**
- **`.webp`**
- **`.pgm`**, **`.ppm`**
- **`.tiff`**

# 3. 读取包含中文路径的图像

- `cv2.imread()` 的**底层由 C++ 实现**，**对中文路径支持不佳**，当路径中包含中文时通常会**读取失败并返回 `None`**。
- **解决方案**：先用 `np.fromfile()` 以**二进制方式**把文件内容读入内存，再通过 `cv2.imdecode()` **解码成图像**。

```python
img = cv2.imdecode(np.fromfile(filename, dtype=np.uint8), [flags])
```

- **img**：**返回值**，与 `cv2.imread()` 的返回值一致，**读取失败时返回 None**。
- **filename**：**图像的文件名（可包含中文路径）**。
- **flags**：**读取标记**，与 `cv2.imread()` 的 **flags 完全相同**（如 `cv2.IMREAD_COLOR`、`cv2.IMREAD_GRAYSCALE` 等），可省略。

```python
import cv2
import numpy as np

img = cv2.imdecode(np.fromfile("图片/中文路径.png", dtype=np.uint8), cv2.IMREAD_COLOR)
```

# 4. 保存图像：cv2.imwrite()

- 函数`cv2.imwrite()`用来**保存图像**。

```python
ret = cv2.imwrite(filename, img[, params])
```

- **ret**：**返回值**。如果图像保存成功，返回**True**，否则，返回**False**。
- **filename**：**图像的文件名（不可包含路径）**。
- **img**：**图像数据**。
- **params**：**保存类型的参数**，可选。

# 5. 保存包含中文路径的图像

- `cv2.imwrite()` **无法正确保存到中文路径**，会**返回 `False`** 或直接**抛出异常**。
- **解决方案**：先用 `cv2.imencode()` 把图像**编码成内存中的缓冲区**，再用 numpy 的 `tofile()` **写入磁盘**。

```python
success, encoded = cv2.imencode(ext, img[, params])
if success:
    encoded.tofile(filename)
```

- **success**：**返回值**。编码成功返回**True**，否则返回**False**。
- **ext**：**文件扩展名**，如 `".png"`、`".jpg"`，**决定图像的编码格式**，需与 `filename` 的扩展名保持一致。
- **encoded**：**编码后的图像数据**（numpy 数组），可通过 `tofile()` 写入文件。
- **filename**：**图像的文件名（可包含中文路径）**。

```python
import cv2

img = cv2.imread("logo.png")

success, encoded = cv2.imencode(".png", img)
if success:
    encoded.tofile("图片/中文路径-保存.png")
```

# 6. 显示图像

## 新建窗口：cv2.namedWindow()

- 函数`namedWindow()`用来**创建指定名称的窗口**

```python
None = cv2.namedWindow( winname )
```

## 显示图像：cv2.imshow()

- 函数`imshow()`用来**显示窗口**，**如果窗口不存在，将自动创建新窗口**

```python
None = cv2.imshow( winname, img )
```

## 等待按键：cv2.waitKey()、ord()

- 函数`waitKey()`用来**等待按键**，当用户按下键盘按键后，该语句会被执行，并获取返回值

```python
ret = cv2.waitKey( [delay] )
```

- **ret**：**返回值**。如果按键没有被按下，则返回 **-1** ，否则，返回**该按键对应的ASCII码**。
- **delay**：**等待键盘触发的时间，默认为0**。值为**零或负数**时，**表示无限等待**。时间单位为ms。


## 释放窗口：cv2.destroyWindow()、cv2.destroyAllWindows()

- 函数`destroyWindow()`用来**释放指定名称的窗口**

```python
None = cv2.destroyWindow( winname )
```

- 函数`destroyAllWindows()`用来**释放所有窗口**

```python
None = cv2.destroyAllWindows()
```

# 7. 示例

```python
import cv2

# imread
img = cv2.imread("logo.png")

# imwrite
ret = cv2.imwrite("logo-new.png", img)

# imshow
cv2.imshow("OpenCV", img)
cv2.waitKey(3000)

# close all windows
cv2.destroyAllWindows()
```

