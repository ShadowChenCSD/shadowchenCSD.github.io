---
title: OpenCV：视频处理
published: 2023-08-31
description: 介绍如何使用图像处理技术处理视频文件。
tags: [OpenCV, 数字图像处理]
category: 计算机视觉
image: "/posts/OpenCV.png"		
---

# 	1. 介绍

​		**视频**是**由一系列图像构成的**，这一系列图像被称为**帧**。帧是**以固定的时间间隔从视频中获取**的，获取帧的速度称为**帧速率**，单位通常使用**帧/秒**（Frames Per Second，FPS）表示，代表在1秒内所出现的帧数。如果**从视频中提取出独立的帧**，就可以**使用图像处理的方法对其进行处理，达到处理视频的目的**。

# 2. VideoCapture类

​		**cv2.VideoCapture类处理视频的方式非常简单、快捷**，而且它**既能处理视频文件，又能处理摄像头信息**。

## 2.1 类方法介绍

### 初始化

- 函数`cv2.VideoCapture()`，用于**打开摄像头**并**完成摄像头的初始化工作**。
- **函数原型**：
  - `cap = cv2.VideoCapture( cameraID )`
  - `cap = cv2.VideoCapture( videoFilename )`
- **参数说明**：
  - **cameraID**：**摄像头的ID号**。默认值为 **-1** ，表示**随机**选取一个摄像头，如果有多个摄像头，则用**0**表示**第1个摄像头**，用**1**表示**第2个摄像头**，以此类推。
  - **videoFilename**：**视频文件名**。
  - **cap**：cv2.VideoCapture类的对象。

- **视频处理结束以后，要释放摄像头对象**。

### 初始化状态检查

- 函数`cv2.VideoCapture.isOpened()`，用于**检查初始化是否成功**。
- **函数原型**：`val = cv2.VideoCapture.isOpened()`
- **参数说明**：
  - **val**：返回值，**成功**为**True**，**不成功**为**False**。

- 函数`cv2.VideoCapture.open()`，用于**再次打开摄像头**。
- **函数原型**：
  - `val = cv2.VideoCapture.open( cameraID )`
  - `val = cv2.VideoCapture.open( videoFilename )`
- **参数说明**：
  - **cameraID**：**摄像头的ID号**。
  - **videoFilename**：**视频文件名**。
  - **val**：返回值，**成功**为**True**，**不成功**为**False**。

### 帧捕获

- 函数`cv2.VideoCapture.read()`，用于**从摄像头中捕获帧信息**。
- **函数原型**：`val, image = cv2.VideoCapture.read()`
- **参数说明**：
  - **image**：返回**捕获到的帧图像**。如果**没有帧**被捕获，那么该值为**空**。
  - **val**：返回值，**捕获成功**为**True**，**捕获失败**为**False**。

### 帧释放

- 函数`cv2.VideoCapture.release()`，用于**释放摄像头**。
- **函数原型**：`None = cv2.VideoCapture.release()`

### 属性设置

- 函数`cv2.VideoCapture.get()`，用于**获取类对象的属性**。
- **函数原型**：`val = cv2.VideoCapture.get( propID )`
- **参数说明**：
  - **propId**：**类对象的属性**。

- 函数`cv2.VideoCapture.set()`，用于**设置类对象的属性**。
- **函数原型**：`val = cv2.VideoCapture.set( propID, value )`
- **参数说明**：
  - **propId**：**类对象的属性**。

| 值                            | propId | 含义                                                   |
| ----------------------------- | ------ | ------------------------------------------------------ |
| cv2.CAP_PROP_POS_MSEC         | 0      | 视频文件的当前位置（以ms为单位）或视频被捕获时的时间戳 |
| cv2.CAP_PROP_POS_FRAMES       | 1      | 接下来要解码/捕获的帧的索引，从0开始                   |
| cv2.CAP_PROP_POS_AVI_RATIO    | 2      | 视频文件的相对位置：0表示视频的开始，1表示视频的结束   |
| **cv2.CAP_PROP_FRAME_WIDTH**  | 3      | **帧的宽度**                                           |
| **cv2.CAP_PROP_FRAME_HEIGHT** | 4      | **帧的高度**                                           |
| **cv2.CAP_PROP_FPS**          | 5      | **帧速率**                                             |
| **cv2.CAP_PROP_FOURCC**       | 6      | **用4个字符表示的视频编码器格式**                      |
| **cv2.CAP_PROP_FRAME_COUNT**  | 7      | **帧数**                                               |
| cv2.CAP_PROP_FORMAT           | 8      | byretrieve()返回的Mat格式的对象                        |
| cv2.CAP_PROP_MODE             | 9      | 用于表明当前捕获模式的后端特有的值                     |
| **cv2.CAP_PROP_BRIGHTNESS**   | 10     | **图像的亮度**（仅适用于相机）                         |
| **cv2.CAP_PROP_CONTRAST**     | 11     | **图像对比度**（仅适用于相机）                         |
| **cv2.CAP_PROP_SATURATION**   | 12     | **图像饱和度**（仅适用于相机）                         |
| **cv2.CAP_PROP_HUE**          | 13     | **图像色相**（仅适用于相机）                           |
| **cv2.CAP_PROP_GAIN**         | 14     | **图像增益**（仅适用于相机）                           |
| **cv2.CAP_PROP_EXPOSURE**     | 15     | **曝光**（仅适用于相机）                               |
| cv2.CAP_PROP_CONVERT_RGB      | 16     | 表示图像是否应转换为RGB的逻辑标志                      |

### 上一帧和下一帧

- 如果需要同步一组或一个多头摄像头的视频数据时，调用函数`cv2.VideoCapture.grab()`**指向下一帧**，调用函数`cv2.VideoCapture.retrieve()`**解码并返回一帧**。
- **函数原型**：`val = cv2.VideoCapture.grab()`
- **参数说明**：
  - **val**：返回值，**成功指向下一帧**，返回**True**，否则返回**False**。

- **函数原型**：`val, image = cv2.VideoCapture.retrieve()`
- **参数说明**：
  - **image**：**解码视频信息**，返回**grab函数捕获到的帧图像**。如果**操作失败**，则返回**空图像**。
  - **val**：**操作成功**为**True**，**操作失败**为**False**。

## 2.2 示例：播放视频文件

```python
import cv2

cap = cv2.VideoCapture('traffic.mp4')

# width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
# height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
# fps = int(cap.get(cv2.CAP_PROP_FPS))
# print("Width:", width)
# print("Height:", height)
# print("FPS:", fps)

while(cap.isOpened()):
    ret, frame = cap.read()
    
    if not ret:               # 是否捕获到帧
        break
    cv2.imshow('frame', frame)

    if cv2.waitKey(50) == 27: # ESC键
        break

cap.release()
cv2.destroyAllWindows()
```

<video id="video" controls="" title="traffic" style="width: 80%; height: 80%;">
    <source id="mp4" src="/posts/traffic.mp4">
</video>


# 3. VideoWriter类

​		**cv2.VideoWriter类**可以**将图片序列保存成视频文件**，也可以**修改视频的各种属性**，还可以**完成对视频类型的转换**。

## 3.1 类方法介绍

### 构造函数

- 函数`cv2.VideoWriter()`，用于**完成初始化工作**。
- **函数原型**：`out = cv2.VideoWriter( videoFilename, fourcc, fps, frameSize, isColor )`
- **参数说明**：
  - **videoFilename**：**指定输出目标视频的存放路径和文件名**。如果指定的文件名**已经存在**，则会**覆盖**这个文件。
  - **fourcc**：**指定视频的编/解码类型**，用4个字符参数表示。
    - **cv2.VideoWriter_fourcc('I', '4', '2', '0')**：未压缩的YUV颜色编码格式，色度子采样为4:2:0，具有较好的兼容性，但产生的文件较大，**文件扩展名**为 **.avi** 。
    - **cv2.VideoWriter_fourcc('P', 'I', 'M', 'I')**：表示MPEG-1编码类型，**文件扩展名**为 **.avi** 。
    - **cv2.VideoWriter_fourcc('X', 'V', 'I', 'D')**：表示MPEG-4编码类型，**文件扩展名**为 **.avi** 。
    - **cv2.VideoWriter_fourcc('T', 'H', 'E', 'O')**：表示Ogg Vorbis编码类型，**文件扩展名**为 **.ogv** 。
    - **cv2.VideoWriter_fourcc('F', 'L', 'V', 'I')**：表示Flash视频，**文件扩展名**为 **.flv** 。
    - **cv2.VideoWriter_fourcc('M','P','4','V')**：表示MPEG-4视频，**文件扩展名**为 **.mp4** 。
  - **fps**：**帧速率**。
  - **frameSize**：**每一帧的长和宽**。
  - **isColor**：是否为**彩色图像**。
  - **out**：cv2.VideoWriter类的**对象**。


### 写函数

- 函数`cv2.VideoWriter.write()`，用于**写入下一帧视频**。
- **函数原型**：`None = cv2.VideoWriter.write( image )`
- **参数说明**：
  - **image **：**要写入的视频帧**，通常情况下，要求彩色图像的格式为**BGR模式**。

### 释放

- 函数`cv2.VideoWriter.release()`，用于**释放对象**。
- **函数原型**：`None = cv2.VideoWriter.release()`

## 3.2 示例

```python
import cv2

cap = cv2.VideoCapture('traffic.mp4')

width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

fourcc = cv2.VideoWriter_fourcc(*'avc1')
out = cv2.VideoWriter('traffic-new.mp4', fourcc, 30, (width, height))

while(cap.isOpened()):
    ret, frame = cap.read()

    if not ret:
        break
    out.write(frame)
    cv2.imshow('frame', frame)

    if cv2.waitKey(50) == 27:
        break

cap.release()
out.release()
cv2.destroyAllWindows()
```

<video id="video" controls="" title="traffic" style="width: 80%; height: 80%;">
    <source id="mp4" src="/posts/traffic-new.mp4">
</video>



# 4. 示例：视频图像处理

​		对视频图像做**基于Canny算子**的**图像边缘检测**。

```python
import cv2

cap = cv2.VideoCapture('traffic.mp4')

width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

fourcc = cv2.VideoWriter_fourcc(*'avc1')
out = cv2.VideoWriter('traffic-canny.mp4', fourcc, 15, (width, height))

while(cap.isOpened()):
    ret, frame = cap.read()

    if not ret:
        break
    else:
        frame = cv2.Canny(frame, 200, 240)
        frame = cv2.cvtColor(frame, cv2.COLOR_GRAY2BGR)
        out.write(frame)
        cv2.imshow('frame', frame)

    if cv2.waitKey(50) == 27:
        break

cap.release()
out.release()
cv2.destroyAllWindows()
```

<video id="video" controls="" title="traffic" style="width: 80%; height: 80%;">
    <source id="mp4" src="/posts/traffic-canny.mp4">
</video>