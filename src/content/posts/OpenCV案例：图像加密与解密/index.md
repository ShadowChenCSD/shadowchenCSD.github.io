---
title: OpenCV案例：图像加密与解密
published: 2023-09-04
description: 介绍图像加密与解密的技术。
tags: [OpenCV, 数字图像处理]
category: 计算机视觉
image: "/posts/计算机视觉.jpg"
---

# 1. 位异或加密

## 1.1 原理

​		通过对**原始图像**与**密钥图像**进行 **`按位异或`**，可以实现 `加密` ；将**加密后的图像**与**密钥图像**再次进行 **`按位异或`**，可以实现 `解密`。

## 1.2 示例

```python
import cv2
import numpy as np

src = cv2.imread("logo.png")
H, W, C = src.shape

key = np.random.randint(0, 256, size=[H, W, C], dtype=np.uint8)
cv2.imwrite("key-xor.jpg", key)

encryption = cv2.bitwise_xor(src, key)
cv2.imwrite("encryption-xor.jpg", encryption)

decryption = cv2.bitwise_xor(encryption, key)
cv2.imwrite("decryption-xor.jpg", decryption)
```

|     原始图像      |        密钥图像         |             加密图像              |               解密                |
| :---------------: | :---------------------: | :-------------------------------: | :-------------------------------: |
| ![logo](logo.png) | ![key-xor](key-xor.jpg) | ![encryption](encryption-xor.jpg) | ![decryption](decryption-xor.jpg) |

# 2. 置乱加密

## 2.1 原理

​		置乱加密是**将原始图像信息的位置进行 `重新排列`** ，让图像看起来杂乱无章，从而达到`加密`的效果。

```python
import numpy as np

# 信息
info = ["A", "B", "C", "D", "E", "F"]   # 待加密信息，['A', 'B', 'C', 'D', 'E', 'F']
encrypt = [0] * len(info)               # 加密信息初始化，[0, 0, 0, 0, 0, 0]
decrypt = [0] * len(info)               # 解密信息初始化，[0, 0, 0, 0, 0, 0]

# 随机种子
seed = 8888                             # 固定种子
# seed = np.random.randint(0, 10000)    # 随机种子
np.random.seed(seed)

# 随机数
num = np.random.random(size=len(info))  # 随机序列，如：[0.18756121 0.8445122  0.2391163  0.88173048 0.99823479 0.28678496]

# 随机数排序
index = np.arange(len(info))            # 随机序列排序前的索引，[0 1 2 3 4 5]
index_sort = np.argsort(num)            # 随机序列排序后的索引，[0 2 5 1 3 4]

# 加密
for n in range(len(info)):
    encrypt[index[n]] = info[index_sort[n]]    # 置乱加密，['A', 'C', 'F', 'B', 'D', 'E']

# 解密
for n in range(len(info)):
    decrypt[index_sort[n]] = encrypt[index[n]] # 置乱解密，['A', 'B', 'C', 'D', 'E', 'F']
```

## 2.2 示例

```python
import cv2
import numpy as np

# 初始信息
src = cv2.imread("logo.png")
H, W, C = src.shape
encrypt = np.zeros((H, W, C), dtype=np.uint8)
decrypt = np.zeros((H, W, C), dtype=np.uint8)

# 图像尺寸大小
L = H * W

# 随机种子
# seed = 8888                             # 固定种子
seed = np.random.randint(0, 10000)    # 随机种子
np.random.seed(seed)

# 随机数
num = np.random.random(L)  # 随机序列

# 随机数排序
index = np.arange(L)            # 随机序列排序前的索引
index_sort = np.argsort(num)    # 随机序列排序后的索引

# 加密
for n in range(L):
    h0 = index[n] // W
    w0 = index[n] % W
    h1 = index_sort[n] // W
    w1 = index_sort[n] % W
    encrypt[h0, w0, 0] = src[h1, w1, 0]
    encrypt[h0, w0, 1] = src[h1, w1, 1]
    encrypt[h0, w0, 2] = src[h1, w1, 2]
cv2.imwrite("encrypt-shuffle.jpg", encrypt)

# 解密
for n in range(L):
    h0 = index_sort[n] // W
    w0 = index_sort[n] % W
    h1 = index[n] // W
    w1 = index[n] % W
    decrypt[h0, w0, 0] = encrypt[h1, w1, 0]
    decrypt[h0, w0, 1] = encrypt[h1, w1, 1]
    decrypt[h0, w0, 2] = encrypt[h1, w1, 2]
cv2.imwrite("decrypt-shuffle.jpg", decrypt)
```

|     原始图像      |            加密图像             |            解密图像             |
| :---------------: | :-----------------------------: | :-----------------------------: |
| ![logo](logo.png) | ![encrypt](encrypt-shuffle.jpg) | ![decrypt](decrypt-shuffle.jpg) |