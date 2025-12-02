---
title: StableDiffusion：Krea
published: 2025-05-24
description: 展现Flux-Krea在图像生成领域中的能力。
tags: [AIGC·图像, 图像生成, StableDiffusion, Krea]
category: AIGC
image: "/posts/Krea.png"
---

# 1. 介绍

​		`FLUX.1 Krea` 是一个具有 120 亿参数的、基于FLUX基础模型深度微调的模型，它能够根据文本描述生成图像。主要**特点**包括：

1. 优质的输出质量，专注于**美学摄影**。
2. 使用**蒸馏**训练，使推理更加高效。

# 2. 模型下载

## Unet

- **FP16**：[FLUX.1-Krea-dev](https://modelscope.cn/models/black-forest-labs/FLUX.1-Krea-dev/summary)

- **FP8**：[FLUX.1-Krea-dev-scaled-fp8](https://modelscope.cn/models/Clybius/FLUX.1-Krea-dev-scaled-fp8/summary)

## CLIP

- **clip-l**_fp8.safetensors
- **t5xxl**_fp8.safetensors

## VAE

- **ae**.safetensors

# 3. 工作流搭建

![workflow](workflow.png)

# 4. 示例图

## 4.1 人物

1. `(masterpiece:1.0), (best quality:1.4), (ultra highres:1.2), (photorealistic:1.4), (8k, RAW photo:1.2), (soft focus:1.4), 1 woman, (sharp focus:1.4), (korean:1.2), (american:1.1), detailed beautiful face, black hair, (detailed white dress:1.4), beautiful white shiny humid skin, smiling ,Full Length Shot(FLS) , natural background,`
2. `A 23-year-old Chinese woman with wild beauty and delicate facial features. A slim face, big eyes, a small straight nose, cherry-like lips, and a pointed chin. Long black straight hair, a slim model figure, 34G. She is leaning against a bright yellow wall, in a natural relaxed posture, arms crossed in front of her, with a gentle and sweet smile on her face.   Wearing a light blue loose-fitting shirt, sunglasses hanging on the collar, paired with a white skirt, a black chain bag slung across the shoulder, and wearing a pearl necklace. The background has green plant branches, creating a leisurely atmosphere outside a café.   Using Rembrandt lighting (Rembrandt lighting), a warm light source of 7200K, soft and even light, passing through tree shadows to create a dappled light effect, illuminating the main subject and details. The overall color is fresh and soft, the image is clear, creating a warm and comfortable atmosphere.`
3. `a solder with an AR-15 in the desert, explosion behind him, 8k photo, shot on RED cinema camera, stunning surreal effect, Generate with v5`
4. `Film Photography,an elderly man seated in front of a textured and ornately designed wall. The wall depicts weathered architectural details with layers of peeling paint and intricate carvings,rendered in earthy tones of green and brown. The man,whose presence is contemplative and calm,gazing off to his left,wears a simple beige jacket over a green shirt. His hair and full beard are gray,and his posture is relaxed but upright,suggesting a quiet dignity or introspection. The color palette of the scene is muted,mainly consisting of greens,browns,and grays,which harmonizes the man with his surroundings,blending the lines between the subject and the backdrop. His facial features are soft,with an expression that evokes a sense of wisdom or pensiveness. The refined decay of the background contrasts with the natural aging of the man,highlighting themes of time and permanence.,`
5. `A 23-year-old Chinese woman with wild beauty and delicate facial features. A slim face, big eyes, a small straight nose, cherry-like lips, and a pointed chin. Long black straight hair, a slim model figure, 34G. She is leaning against a bright yellow wall, in a natural relaxed posture, arms crossed in front of her, with a gentle and sweet smile on her face.   Wearing a light blue loose-fitting shirt, sunglasses hanging on the collar, paired with a white skirt, a black chain bag slung across the shoulder, and wearing a pearl necklace. The background has green plant branches, creating a leisurely atmosphere outside a café.   Using Rembrandt lighting (Rembrandt lighting), a warm light source of 7200K, soft and even light, passing through tree shadows to create a dappled light effect, illuminating the main subject and details. The overall color is fresh and soft, the image is clear, creating a warm and comfortable atmosphere.`
6. `The image depicts a serene and artistic scene. A person with long, dark hair is lying on a wooden surface, partially covered by white flowers. The individual is wearing a light green garment, and their skin appears smooth and slightly glistening, possibly from natural light or a light-based makeup. The background consists of a mix of green foliage and a white floral pattern, creating a harmonious and tranquil atmosphere. The overall composition suggests a focus on nature and beauty, with an emphasis on the delicate interplay of light and color.,`
7. `girl, photograph of an asian woman with fair skin and long, dark brown hair in a braid, standing outdoors in a snowy landscape, she has delicate features with large, dark eyes and slightly parted lips, she wears a white coat and a thick, red knitted scarf, with snowflakes gently falling on her hair and scarf, the background is blurred but shows a snow-covered forest with blue and white hues, adding a serene winter atmosphere, soft sunlight illuminates her face, highlighting her gentle expression, the overall mood is calm and picturesque, capturing the beauty of winter`

|      人物-1       |      人物-2       |     人物-3      |     人物-3      |
| :---------------: | :---------------: | :-------------: | :-------------: |
| ![](Woman-01.png) | ![](Woman-06.png) | ![](Man-01.png) | ![](Man-06.png) |
| ![](Woman-02.png) | ![](Woman-07.png) | ![](Man-02.png) | ![](Man-07.png) |
| ![](Woman-03.png) | ![](Woman-08.png) | ![](Man-03.png) | ![](Man-08.png) |
| ![](Woman-04.png) | ![](Woman-09.png) | ![](Man-04.png) | ![](Man-09.png) |
| ![](Woman-05.png) | ![](Woman-10.png) | ![](Man-05.png) | ![](Man-10.png) |

|      人物-5       |      人物-6       |      人物-7       |
| :---------------: | :---------------: | :---------------: |
| ![](Woman-11.png) | ![](Woman-16.png) | ![](Woman-21.png) |
| ![](Woman-12.png) | ![](Woman-17.png) | ![](Woman-22.png) |
| ![](Woman-13.png) | ![](Woman-18.png) | ![](Woman-23.png) |
| ![](Woman-14.png) | ![](Woman-19.png) | ![](Woman-24.png) |
| ![](Woman-15.png) | ![](Woman-20.png) | ![](Woman-25.png) |

## 4.2 静物

1. `a highly detailed, hyper-realistic CGI image of a cluster of purple grapes being splashed with water. The grapes are translucent, showing their juicy interiors and tiny seeds. Water droplets and splashes are vividly captured, highlighting the texture and glistening surface of the grapes. The background is a soft, blurred gradient of light purples and whites, creating a dreamy, ethereal atmosphere. The overall effect is visually stunning, emphasizing freshness and vitality.`

2. `E-commerce photography features densely arranged red tomatoes, their surfaces glistening with water droplets, exuding exceptional freshness. Each tomato retains a green stem at the top, shaped like a five-pointed star. The vibrant colors and high gloss of the tomatoes create an impression of juiciness. In the background, more tomatoes are visible, filling the entire frame with lively energy. The abundance of tomatoes dominates the composition, highlighting their rich texture and color,`
4. `E-commerce photography: A barbecue grill features several oysters being roasted, with flames burning fiercely below. Each oyster is shucked open, revealing tender flesh adorned with minced garlic, chopped chili, and garnished with green scallions. In the background, a bottle of beverage bears the label "Tsingtao Beer." The overall composition has a warm tone, exuding an enticing aroma and vibrant heat.`
4. `A sizzling large chicken leg, its golden and crispy skin glistening with an enticing luster. The clear texture seems to speak of its deliciousness, while the inside of the chicken leg is tender and juicy, exuding a rich aroma of meat. Around it, oil droplets dance, and the play of light and shadow skillfully outlines the three-dimensionality of the chicken leg, creating an atmosphere that makes one's mouth water.`

|      静物-1       |      静物-2       |      静物-3       |      静物-4       |
| :---------------: | :---------------: | :---------------: | :---------------: |
| ![](Still-01.png) | ![](Still-05.png) | ![](Still-09.png) | ![](Still-13.png) |
| ![](Still-02.png) | ![](Still-06.png) | ![](Still-10.png) | ![](Still-14.png) |
| ![](Still-03.png) | ![](Still-07.png) | ![](Still-11.png) | ![](Still-15.png) |
| ![](Still-04.png) | ![](Still-08.png) | ![](Still-12.png) | ![](Still-16.png) |

## 4.3 场景

2.  `A taxi driver pulling up in 80s new york, vibe of Taxi driver movie still, intense action scene, taxi is close to zoomed out camera, moody cityscape, low light photography, deep blacks, soft highlights, cinematic rain, neon reflections, overcast dusk, crushed shadows, high contrast, Fujifilm-like toning, desaturated blues, misty ambiance, light bloom, subdued palette, minimal saturation, city at night aesthetic`
3. `narrative scene, hidden garden of old villa, Minnan-colonial fusion architecture, red brick walls with ivy, vintage iron gate, blooming tropical flowers, afternoon golden light, mysterious romantic mood, time-forgotten beauty, ultra high resolution, 4k, high quality, cinematic composition, pure image, wallpaper, realistic, no human`
4. `This is a high-resolution photograph capturing a breathtaking mountainous landscape during sunset. The scene features a majestic range of jagged,snow-capped peaks bathed in warm,golden hues,with the sun's rays streaming from behind,creating a dramatic effect. The foreground showcases a winding river,its clear,blue waters reflecting the vibrant colors of the sky and the mountains. The river flows through a dense forest of evergreen trees,their dark green foliage contrasting sharply with the lighter hues of the mountains and sky. The background reveals a vast,rugged terrain with sparse vegetation,indicating a high-altitude environment. The overall composition is balanced and harmonious,with a clear division between the foreground and background. The photograph is likely taken during autumn,as suggested by the golden hues and the presence of deciduous trees in the forest. The image is crisp and detailed,with no visible imperfections or artifacts.,`
5. `An aerial view of a vast, expansive grassland bathed in warm sunlight. The land is a rich, vibrant green with gentle undulating hills stretching far. A meandering river winds through, its deep, clear blue waters contrasting with the greenery. The river twists and turns, creating loops and bends. Along the banks, patches of darker green vegetation mark areas of denser tree and shrub growth. Here and there, large rocks protrude from the riverbed or sit on the banks, adding ruggedness. In the distance, a range of mountains forms a hazy backdrop, softened by light mist, and the sky has a few wispy clouds, creating a peaceful and idyllic atmosphere.`
6. `A large desert spreads as far as the eye can see. The sand dunes are in various shapes, some like waves, some like pyramids. The setting sun casts a warm orange light on the sand dunes, creating long shadows. Here and there, a few cacti stand, with some small desert animals scurrying around them. In the distance, the sky and the desert seem to blend together.`
7. `A misty mountain peak, with clouds swirling around the summit. The rugged terrain is covered in lush greenery, and the air is crisp and invigorating. The scene is captured from a high vantage point, emphasizing the grandeur and majesty of the mountains. The interplay of light and shadow adds depth and drama to the landscape, evoking a sense of awe and wonder.,CHD,`

|      场景-1       |      场景-2       |      场景-3       |
| :---------------: | :---------------: | :---------------: |
| ![](Scene-01.png) | ![](Scene-05.png) | ![](Scene-09.png) |
| ![](Scene-02.png) | ![](Scene-06.png) | ![](Scene-10.png) |
| ![](Scene-03.png) | ![](Scene-07.png) | ![](Scene-11.png) |
| ![](Scene-04.png) | ![](Scene-08.png) | ![](Scene-12.png) |

|      场景-4       |      场景-5       |      场景-6       |
| :---------------: | :---------------: | :---------------: |
| ![](Scene-13.png) | ![](Scene-17.png) | ![](Scene-21.png) |
| ![](Scene-14.png) | ![](Scene-18.png) | ![](Scene-22.png) |
| ![](Scene-15.png) | ![](Scene-19.png) | ![](Scene-23.png) |
| ![](Scene-16.png) | ![](Scene-20.png) | ![](Scene-24.png) |

## 4.4 风格化

1. `Oil painting of three peach-to-white hibiscus blossoms against a cerulean sky-blue backdrop, juicy palette-knife texture gleaming with sunlight`
2. `Hand drawn illustration style, A painting of large white flowers, surrounded by a yellow center and green stamens. Flowers are full of vitality, including red, orange, and white flowers. These flowers are arranged in a garden like pattern, surrounded by lush green leaves. The background is dark, forming a sharp contrast with the flowers and leaves.`
3. `A single adventurer in a blue cloak stands in awe beneath a colossal ancient tree atop a sunlit hill, surrounded by blooming wildflowers and softly rolling meadows under a sky streaked with pillowy clouds. painterly digital concept art, whimsical adventure illustration, stylized landscape fantasy, lighthearted and awe-filled tone, moderate visual complexity, adjacent artists Goro Fujita, Ian McQue, Nicholas Kole, warm pastel palette of soft greens, sky blues, peachy whites, and gentle shadows, medium contrast with glowing highlights, simulated wide-angle perspective (24mm lens equivalent), soft textured brushstrokes, no digital artifacts or hard lines. Foreground: a winding dirt path arcs from lower right to center, cutting through lush grassy terrain peppered with red and purple wildflowers and shadows of unseen trees. Midground center: the towering tree with a wide, gnarled trunk dominates the composition, roots gripping pale stone outcrops that climb the small hill; twisted branches spiral upward into a dense canopy of dark green, almost pine-like foliage. The lone human figure, tiny in scale, stands at the base, facing the tree, casting a small shadow to the right. Background: stylized conifer trees and distant hills fade into bluish haze, while the entire sky is filled with voluminous cream-colored clouds that rise and swirl with implied movement. The light direction is from the left, casting warm afternoon rays and evoking a serene, almost magical sense of discovery and reverence.`
4. `An impressionist painting of ocean waves, the colors vibrant and swirling in a dynamic mix of blues, greens, and soft oranges, brushstrokes blending together to form the motion of the water, soft, blurred light and shadows playing across the surface of the waves, creating a dreamy and fluid atmosphere, the textures of the painting soft yet expressive, with the shimmering of light on the water's surface gently implied rather than sharply defined, the overall effect capturing the fluidity and beauty of the ocean in a highly stylized manner, hyperdetailed, 8k resolution, the color palette rich and vivid, evoking the sensation of movement and the fleeting nature of the waves`


|      风格-1       |      风格-2       |      风格-3       |      风格-4       |
| :---------------: | :---------------: | :---------------: | :---------------: |
| ![](Style-01.png) | ![](Style-05.png) | ![](Style-09.png) | ![](Style-13.png) |
| ![](Style-02.png) | ![](Style-06.png) | ![](Style-10.png) | ![](Style-14.png) |
| ![](Style-03.png) | ![](Style-07.png) | ![](Style-11.png) | ![](Style-15.png) |
| ![](Style-04.png) | ![](Style-08.png) | ![](Style-12.png) | ![](Style-16.png) |