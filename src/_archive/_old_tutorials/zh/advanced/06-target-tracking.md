---
title: "目标追踪"
description: "用 OpenCV 库实现颜色目标的实时追踪，让无人机自动跟随。"
level: advanced
order: 6
duration: "3 小时"
prerequisites: ["完成项目 05"]
draft: false
lang: zh
---

## 概述

目标追踪是无人机智能化的重要应用。在本项目中，你将学习如何用 OpenCV 库实现颜色目标的实时追踪。

## 你将学到什么

- OpenCV 库使用
- 颜色空间转换
- 目标检测算法
- 实时追踪控制

## 所需材料

| 物品 | 数量 | 说明 |
|------|------|------|
| ESP32-S3 无人机 | 1 | - |
| OV2640 摄像头模块 | 1 | - |
| 红色小球 | 1 | 直径 10cm |

## 步骤 1：安装 OpenCV 库

解压 `esp32_opencv.zip`，将库文件复制到项目 `components` 文件夹。

## 步骤 2：打开项目

解压 `color_tracking.zip`，用 VS Code 打开。

## 步骤 3：实现颜色追踪函数

打开 `color_tracking.c`，实现颜色追踪：

```c
void color_tracking(uint8_t* frame, int width, int height, int* target_x, int* target_y) {
    // 1. 将 RGB 图像转换为 HSV 空间
    cvt_color_rgb2hsv(frame, width, height);
    
    // 2. 应用颜色阈值过滤（红色）
    uint8_t mask[width * height];
    hsv_threshold(frame, width, height, mask, 0, 10, 100, 255, 100, 255);
    
    // 3. 寻找轮廓并计算目标中心
    find_contours(mask, width, height);
    if (has_contours()) {
        *target_x = get_largest_contour_center_x();
        *target_y = get_largest_contour_center_y();
    } else {
        *target_x = -1;
        *target_y = -1;
    }
}
```

## 步骤 4：添加追踪逻辑

打开 `flight_control.c`，在主循环中添加：

```c
int target_x, target_y;
color_tracking(frame, width, height, &target_x, &target_y);

if (target_x != -1) {
    // 目标在左 → 无人机左转
    if (target_x < width / 2 - 20) {
        motorsSetRatio(MOTOR_M1, current_ratio * 0.8);
        motorsSetRatio(MOTOR_M2, current_ratio * 1.2);
        motorsSetRatio(MOTOR_M3, current_ratio * 0.8);
        motorsSetRatio(MOTOR_M4, current_ratio * 1.2);
    }
    // 目标在右 → 无人机右转
    else if (target_x > width / 2 + 20) {
        motorsSetRatio(MOTOR_M1, current_ratio * 1.2);
        motorsSetRatio(MOTOR_M2, current_ratio * 0.8);
        motorsSetRatio(MOTOR_M3, current_ratio * 1.2);
        motorsSetRatio(MOTOR_M4, current_ratio * 0.8);
    }
    // 目标在中心 → 无人机前进
    else {
        motorsSetRatio(MOTOR_M1, current_ratio * 1.1);
        motorsSetRatio(MOTOR_M2, current_ratio * 1.1);
        motorsSetRatio(MOTOR_M3, current_ratio * 1.1);
        motorsSetRatio(MOTOR_M4, current_ratio * 1.1);
    }
}
```

## 步骤 5：测试

1. 用红色小球移动，观察无人机是否能稳定跟随
2. 挑战：让无人机跟着红球绕桌子飞一圈

## 故障排除

### 识别不准确
- 调整颜色阈值
- 改善光照条件

### 追踪不稳定
- 优化控制参数
- 添加预测算法

## 成就感

恭喜你！你已经实现了目标追踪系统，这是无人机智能化的重要应用！

## 下一步

在下一个项目中，你将学习如何在 ESP32-S3 上部署 AI 模型。

[继续项目 07：AI 识别 →](/tutorials/zh/advanced/07-ai-recognition)
