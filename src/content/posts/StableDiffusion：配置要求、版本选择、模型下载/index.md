---
title: StableDiffusion：配置要求、版本选择、模型下载
published: 2024-10-15
description: 对StableDiffusion的配置要求和版本选择进行说明，同时，提供常用基础模型的下载方式。
tags: [AIGC·图像, StableDiffusion]
category: AIGC
---

# 1. 配置要求

![硬件推荐配置](硬件推荐配置.jpg)

# 2. 版本选择

- 目前有**两种方式**来使用**Stable Diffusion**——`WebUI`和`ComfyUI`
  - **早期的WebUI不能加载SD 3.5及FLUX等**新模型，因此**WebUI**需要升级为**WebUI-Forge**进行使用。
  - **入门尝试**推荐**WebUI-Forge**、**深入研究**推荐**ComfyUI**

|      方式       |                             版本                             |        特点        | 使用难度 | 灵活度 | 推荐程度(Windows) | 推荐程度（Linux） |
| :-------------: | :----------------------------------------------------------: | :----------------: | :------: | :----: | :---------------: | :--------------: |
|    `WebUI`    | [**官方原版**](https://github.com/AUTOMATIC1111/stable-diffusion-webui) | **干净，自行维护** |    难    |   低   |    **不推荐**     |     **一般**     |
|    `WebUI`    |    [**秋叶整合包**](https://pan.quark.cn/s/2c832199b09b)     | **简便，自动更新** |    易    |   低   |     **推荐**      |    **不推荐**    |
| `WebUI-Forge` | [**lllyasviel版**](https://github.com/lllyasviel/stable-diffusion-webui-forge) |   **支持新模型**   |    易    |   低   |     **推荐**      |     **一般**     |
| `WebUI-Forge` |    [**秋叶整合包**](https://pan.quark.cn/s/4e9459b17c94)     | **简便，自动更新** |    易    |   低   |     **一般**      |    **不推荐**    |
|   `ComfyUI`   |  [**官方原版**](https://github.com/comfyanonymous/ComfyUI)   |  **灵活，自维护**  |    中    |   高   |     **推荐**      |     **推荐**     |
|   `ComfyUI`   |    [**秋叶整合包**]( https://pan.quark.cn/s/64b808baa960)    | **简便，自动更新** |    中    |   高   |     **一般**      |    **不推荐**    |

- **Windows平台**
  - 早期版本推荐**秋叶整合包**：支持**SD1.5**和**SDXL**，**插件齐全**，但不支持SD3.5和FLUX
  - 当前版本推荐**lllyasviel整合包**：支持**SD1.5、SDXL、SD3.5、FLUX**，显存开销小，但部分插件功能尚未完全支持
  - 工作流方式推荐**ComfyUI官方原版**：支持**SD1.5、SDXL、SD3.5、FLUX**，灵活度高，插件丰富

- **Linux平台**
  - 推荐**ComfyUI官方原版**，易于调试

# 3. 模型下载

## 3.1 基础模型

### SD 1.5系列

- 存放位置：`ComfyUI\models\checkpoints`

| 属性             | 大模型                                                       | SHA256           | 模型大小 |
| ---------------- | :----------------------------------------------------------- | ---------------- | -------- |
| 第三方：动漫风格 | [**Anything-v5.0-PRT-RE.safetensors**](https://hf-mirror.com/swl-models/Anything-v5.0-PRT/resolve/main/Anything-v5.0-PRT-RE.safetensors) | 7F96A1A9CA9B3A32 | 1.99 GB  |
| 第三方：动漫风格 | [**PastelMix_Pruned_fp16.safetensors**](https://modelscope.cn/models/Nothinghere7896/PastelMix/resolve/master/pastelMixStylizedAnime_pastelMixPrunedFP1.safetensors) | D01A68AE76F97506 | 1.99 GB  |
| 第三方：动漫风格 | [**AnyPastel_fp16.safetensors**](https://hf-mirror.com/m4gnett/any-pastel/resolve/main/AnyPastel-fp16.safetensors) | F3DB89E46081F039 | 1.99 GB  |
| 第三方：动漫风格 | [**AnyLoRA_noVae_fp16-pruned.safetensors**](https://hf-mirror.com/Lykon/AnyLoRA/resolve/main/AnyLoRA_noVae_fp16-pruned.safetensors) | AD1150A839CA5100 | 1.99 GB  |
| 第三方：动漫风格 | **CetusMix_WhaleFall2.safetensors** → [Link](https://www.liblib.art/modelinfo/ec6a22b4dcf2493db23816a886d8b994) | 876B4C7BA57DA81D | 3.59 GB  |
| 第三方：动漫风格 | [**GhostMix_V2.0_BakedVAE.safetensors**](https://modelscope.cn/models/MusePublic/58_ckpt_SD_1_5/resolve/285/285.safetensors) | E3EDB8A26F44DFDD | 2.24 GB  |
| 第三方：动漫风格 | [**cuteyukimix_neochapter3.safetensors**](https://hf-mirror.com/getdiffus/SD0Q3-CuteYukiMixadorable-style/resolve/main/sd_models/NeoChapter3/SDE9jwZW4X-NeoChapter3.safetensors) | 7C348E096AC69C41 | 2.14 GB  |
| 第三方：动漫风格 | [**DarkSushiMix_brighter.safetensors**](https://hf-mirror.com/mdl-mirror/dark-sushi-mix/resolve/main/darkSushiMixMix_brighterPruned.safetensors) | 099E07547A45DC50 | 1.99 GB  |
| 第三方：动漫风格 | [**DarkSushiMix_darker.safetensors**](https://hf-mirror.com/mdl-mirror/dark-sushi-mix/resolve/main/darkSushiMixMix_darkerPruned.safetensors) | FB44463063CEFF4B | 1.99 GB  |
| 第三方：动漫风格 | [**Counterfeit-V3.0_fp16.safetensors**](https://hf-mirror.com/gsdf/Counterfeit-V3.0/resolve/main/Counterfeit-V3.0_fp16.safetensors) | CBFBA64E662370F5 | 3.95 GB  |
| 第三方：写实风格 | [**majicMIX realistic\_麦橘写实\_v7.safetensors**](https://modelscope.cn/models/MusePublic/majicMIX_realistic/resolve/v1.0/majicmixRealistic_v7.safetensors) | 7C819B6D13663ED7 | 1.99 GB  |
| 第三方：写实风格 | [**Deliberate_v2.safetensors**](https://hf-mirror.com/XpucT/Deliberate/resolve/main/Deliberate_v2.safetensors) | 9ABA26ABDFCD4607 | 1.99 GB  |
| 第三方：写实风格 | [**Deliberate_v6.safetensors**](https://hf-mirror.com/XpucT/Deliberate/resolve/main/Deliberate_v6.safetensors) | BCCE73A08E95A4D4 | 1.99 GB  |
| 第三方：写实风格 | [**NeverEndingDream_1.22_BakedVae_fp16.safetensors**](https://hf-mirror.com/Lykon/NeverEnding-Dream/resolve/main/NeverEndingDream_1.22_BakedVae_fp16.safetensors) | ECEFB796FFCB7E40 | 3.21 GB  |
| 第三方：写实风格 | [**Realistic_Vision_V2.0.safetensors**](https://hf-mirror.com/SG161222/Realistic_Vision_V2.0/resolve/main/Realistic_Vision_V2.0.safetensors) | E6415C48928AEDC8 | 3.85 GB  |
| 第三方：写实风格 | [**Realistic_Vision_V6.0_B1_fp16.safetensors**](https://hf-mirror.com/SG161222/Realistic_Vision_V6.0_B1_noVAE/resolve/main/Realistic_Vision_V6.0_NV_B1_fp16.safetensors) | C48BFD159CD7A650 | 1.99 GB  |
| 第三方：写实风格 | **Dream_Girl_V5.0_Advance.safetensors** → [Link](https://www.liblib.art/modelinfo/66e2cdef7bf7401887fc771deb8ba527?versionUuid=2e8b3eb8867c4372b11ab9fc3918e87a) | 69F7A06BD1D09B0B | 1.99 GB  |
| 第三方：写实风格 | **Dream_Girl_V6.0_Ultra.safetensors** → [Link](https://www.liblib.art/modelinfo/66e2cdef7bf7401887fc771deb8ba527?versionUuid=e8b20ef9b8344bbdaf67f07613bc73bd) | A75DCF840BD97719 | 1.99 GB  |
| 第三方：写实风格 | **人像光影摄影极限写实_V2.6.1** → [Link](https://www.liblib.art/modelinfo/13fc83df67984b8ab3c643673139178b) | F7096BEB13857B9B | 3.83 GB  |
| 第三方：渲染风格 | [**ReVAnimated_v122.safetensors**](https://hf-mirror.com/danbrown/RevAnimated-v1-2-2/resolve/main/rev-animated-v1-2-2.safetensors) | 4199BCDD147E1132 | 5.13 GB  |
| 第三方：渲染风格 | [**DreamShaper_8_pruned.safetensors**](https://hf-mirror.com/Lykon/DreamShaper/resolve/main/DreamShaper_8_pruned.safetensors) | 879DB523C30D3B90 | 1.98 GB  |

### SDXL系列

- 存放位置：`ComfyUI\models\checkpoints`

| 属性             | 大模型                                                       | SHA256           | 模型大小 |
| ---------------- | :----------------------------------------------------------- | ---------------- | -------- |
| 官方             | [**sd_xl_base_1.0.safetensors**](https://hf-mirror.com/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors) | 31E35C80FC4829D1 | 6.46 GB  |
| 官方             | [**sd_xl_refiner_1.0.safetensors**](https://hf-mirror.com/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors) | 7440042BBDC8A248 | 6.46 GB  |
| 第三方：动漫风格 | [**Anything_XL.safetensors**](https://modelscope.cn/models/MusePublic/14_ckpt_SD_XL/resolve/48/48.safetensors) | 8421598E930BE75D | 6.46 GB  |
| 第三方：动漫风格 | [**GhostXL-V1.0_BakedVAE.safetensors**](https://hf-mirror.com/drnighthan/GhostXL/resolve/main/GhostXL-V1.0.safetensors) | EE1FDC86F76E71CA | 6.62 GB  |
| 第三方：动漫风格 | [**CounterfeitXL-V1.0.safetensors**](https://hf-mirror.com/gsdf/CounterfeitXL/resolve/main/CounterfeitXL-V1.0.safetensors) | 9A0157CAD218EC02 | 6.46 GB  |
| 第三方：写实风格 | [**RealVisXL_V5.0_fp16.safetensors**](https://hf-mirror.com/SG161222/RealVisXL_V5.0/resolve/main/RealVisXL_V5.0_fp16.safetensors) | 6A35A7855770AE98 | 6.46 GB  |
| 第三方：渲染风格 | [**DreamShaperXL_Turbo_v2_1.safetensors**](https://hf-mirror.com/Lykon/dreamshaper-xl-v2-turbo/resolve/main/DreamShaperXL_Turbo_v2_1.safetensors) | 4496B36D48BFD7CF | 6.46 GB  |
| 第三方：渲染风格 | [**DreamShaperXL_Lightning.safetensors**](https://hf-mirror.com/Lykon/dreamshaper-xl-lightning/resolve/main/DreamShaperXL_Lightning.safetensors) | FDBE56354B8F876B | 6.46 GB  |

* **DreamShaperXL**使用**DPM++**和**SDE**的组合

### SD 3.5系列

- 存放位置：`ComfyUI\models\checkpoints`

| 属性 | 大模型                                                       | SHA256           | 模型大小 |
| ---- | :----------------------------------------------------------- | ---------------- | -------- |
| 官方 | [**stable-diffusion-3.5-large.safetensors**](https://www.modelscope.cn/models/AI-ModelScope/stable-diffusion-3.5-large/resolve/master/sd3.5_large.safetensors) | FFEF7A279D913462 | 15.3 GB  |
| 官方 | [**stable-diffusion-3.5-medium.safetensors**](https://www.modelscope.cn/models/AI-ModelScope/stable-diffusion-3.5-medium/resolve/master/sd3.5_medium.safetensors) | 11FE06E22364B823 | 4.76 GB  |

### FLUX系列

- 存放位置：`ComfyUI\models\unet`

| 属性             | 大模型                                                       | SHA256           | 模型大小 |
| ---------------- | :----------------------------------------------------------- | ---------------- | -------- |
| 官方             | [**Flux1-dev-fp8-e4m3fn.safetensors**](https://www.modelscope.cn/models/AI-ModelScope/flux-fp8/resolve/master/flux1-dev-fp8-e4m3fn.safetensors) | 47D8DBDC6DA6E996 | 11.1 GB  |
| 官方             | [**Flux1-schnell-fp8-e4m3fn.safetensors**](https://www.modelscope.cn/models/AI-ModelScope/flux-fp8/resolve/master/flux1-schnell-fp8-e4m3fn.safetensors) | BBDFBA27FED8FF3B | 11.1 GB  |
| 第三方：摄影风格 | [**pixelwave_flux1_dev_fp8_03.safetensors**](https://hf-mirror.com/mikeyandfriends/PixelWave_FLUX.1-dev_03/resolve/main/pixelwave_flux1_dev_fp8_03.safetensors) | 50944A180CB3878E | 11.1 GB  |
| 第三方：摄影风格 | [**pixelwave_flux1_schnell_fp8_03.safetensors**](hhttps://hf-mirror.com/mikeyandfriends/PixelWave_FLUX.1-schnell_03/resolve/main/pixelwave_flux1_schnell_fp8_03.safetensors) | 830900AE6F075327 | 11.1 GB  |
| 第三方：写实风格 | [**majicFlus_麦橘超然.safetensors**](https://hf-mirror.com/Shakker-Labs/majicflus_v1/resolve/main/majicflus_v1.safetensors) | 062DAD72B2FEE99A | 11.1 GB  |

## 3.2 编码器模型

| 编码器                                                       | 模型大小 | 存放位置            | 适用范围             |
| :----------------------------------------------------------- | :------: | ------------------- | -------------------- |
| [clip_g.safetensors](https://hf-mirror.com/Comfy-Org/stable-diffusion-3.5-fp8/resolve/main/text_encoders/clip_g.safetensors) | 1.39 GB  | ComfyUI\models\clip | **SD 3.5**           |
| [clip_l.safetensors](https://hf-mirror.com/Comfy-Org/stable-diffusion-3.5-fp8/resolve/main/text_encoders/clip_l.safetensors) |  245 MB  | ComfyUI\models\clip | **SD 3.5**、**FLUX** |
| [t5xxl_fp8_e4m3fn.safetensors](https://hf-mirror.com/Comfy-Org/stable-diffusion-3.5-fp8/resolve/main/text_encoders/t5xxl_fp8_e4m3fn.safetensors) |  4.6 GB  | ComfyUI\models\clip | **SD 3.5**、**FLUX** |

## 3.3 VAE模型

| 编码器                                                       | 模型大小 | 存放位置           | 适用范围            |
| :----------------------------------------------------------- | :------: | ------------------ | :------------------ |
| [**animevae.pt**](https://hf-mirror.com/akibanzu/animevae/resolve/main/animevae.pt) |  785 MB  | ComfyUI\models\vae | **SD1.5**，动漫风格 |
| [**vae-ft-mse-840000-ema-pruned.safetensors**](https://hf-mirror.com/EvilEngine/vae-ft-mse-840000-ema-pruned/resolve/main/vae-ft-mse-840000-ema-pruned.safetensors) |  335 MB  | ComfyUI\models\vae | **SD1.5**，通用     |
| [**sdxl_vae.safetensors**](https://hf-mirror.com/stabilityai/sdxl-vae/resolve/main/sdxl_vae.safetensors) |  335 MB  | ComfyUI\models\vae | **SDXL**            |
| [**ae.safetensors**](https://modelscope.cn/models/AI-ModelScope/FLUX.1-dev/resolve/master/ae.safetensors) |  320 MB  | ComfyUI\models\vae | **FLUX**            |

## 3.4 文件校验方法

### MD5校验

- **Windows平台**

```powershell
certutil -hashfile "文件名" MD5
```

- **Linux平台**

```bash
md5sum "文件名"
```

### SHA256校验

- **Windows平台**

```powershell
certutil -hashfile "文件名" SHA256
```

- **Linux平台**

```bash
sha256sum "文件名"
```