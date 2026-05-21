---
title: "AI 识别"
description: "在 ESP32-S3 上部署 TinyYOLOv3 模型，实现简单的目标检测。"
level: advanced
order: 7
duration: "4 小时"
prerequisites: ["完成项目 06"]
draft: false
lang: zh
---

## 概述

AI 识别是无人机智能化的前沿技术。在本项目中，你将学习如何在 ESP32-S3 上部署 TinyYOLOv3 模型，实现目标检测。

## 你将学到什么

- 深度学习模型部署
- 模型量化
- 推理优化
- 目标检测算法

## 所需材料

| 物品 | 数量 | 说明 |
|------|------|------|
| ESP32-S3 无人机 | 1 | - |
| OV2640 摄像头模块 | 1 | - |
| MicroSD 卡 | 1 | 8GB+ |

## 步骤 1：准备模型

1. 下载预训练的 TinyYOLOv3 模型（COCO 数据集）
2. 使用 `tensorflow lite converter` 将模型转换为 INT8 量化的 `.tflite` 格式
3. 将模型和标签文件 `coco_labels.txt` 复制到 MicroSD 卡

## 步骤 2：硬件接线

MicroSD 卡模块 → ESP32-S3 SPI 接口

## 步骤 3：打开项目

解压 `ai_detection.zip`，用 VS Code 打开。

## 步骤 4：实现模型推理函数

打开 `yolo_detect.c`，实现目标检测：

```c
void yolo_detect(uint8_t* frame, int width, int height, 
                 Detection* detections, int* detection_count) {
    // 1. 预处理图像：resize 到 416x416，归一化
    preprocess_image(frame, width, height);
    
    // 2. 加载模型并执行推理
    load_model("/sdcard/tiny_yolo_v3.tflite");
    run_inference(preprocessed_frame);
    
    // 3. 后处理：解码输出，过滤低置信度检测结果
    decode_output(output, detections, detection_count);
    filter_detections(detections, detection_count, 0.5); // 置信度阈值 0.5
}
```

## 步骤 5：测试

1. 在无人机前方放置不同目标（如人、椅子）
2. 观察检测结果
3. 挑战：添加"目标优先级"，让无人机优先追踪人而不是其他物体

## 故障排除

### 推理速度慢
- 优化模型大小
- 使用 INT8 量化

### 检测准确率低
- 调整置信度阈值
- 改善输入图像质量

## 成就感

恭喜你！你已经实现了 AI 目标检测，这是无人机智能化的前沿技术！

## 下一步

在下一个项目中，你将学习如何实现多无人机 MESH 网络。

[继续项目 08：多机通信网络 →](/tutorials/zh/advanced/08-mesh-network)
