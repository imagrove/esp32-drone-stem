---
title: "视觉导航"
description: "用摄像头的光流数据实现室内定位，无需 GPS。"
level: advanced
order: 3
duration: "4 小时"
prerequisites: ["完成项目 02"]
draft: false
lang: zh
---

## 概述

视觉导航是无人机在无 GPS 环境下实现定位的关键技术。在本项目中，你将学习如何用摄像头的光流数据实现室内定位。

## 你将学到什么

- 计算机视觉基础
- 光流算法
- 视觉惯性里程计（VIO）
- 传感器融合

## 所需材料

| 物品 | 数量 | 说明 |
|------|------|------|
| ESP32-S3 无人机 | 1 | - |
| OV2640 摄像头模块 | 1 | - |
| PMW3901 光流传感器 | 1 | 可选 |

## 步骤 1：硬件接线

- OV2640 摄像头 → ESP32-S3 DVP 接口
- PMW3901（可选）→ ESP32-S3 SPI 接口

## 步骤 2：打开项目

解压 `optical_flow.zip`，用 VS Code 打开。

## 步骤 3：实现光流计算函数

打开 `optical_flow.c`，实现光流计算：

```c
void optical_flow_calculate(uint8_t* prev_frame, uint8_t* curr_frame, 
                            int width, int height, float* dx, float* dy) {
    // 1. 提取特征点（角点）
    FeaturePoint features[100];
    int feature_count = extract_corners(prev_frame, width, height, features, 100);
    
    // 2. 跟踪特征点
    FeaturePoint tracked_features[100];
    int tracked_count = track_features(prev_frame, curr_frame, width, height, 
                                       features, feature_count, tracked_features);
    
    // 3. 计算平均位移
    *dx = 0;
    *dy = 0;
    for (int i = 0; i < tracked_count; i++) {
        *dx += tracked_features[i].x - features[i].x;
        *dy += tracked_features[i].y - features[i].y;
    }
    if (tracked_count > 0) {
        *dx /= tracked_count;
        *dy /= tracked_count;
    }
}
```

## 步骤 4：实现视觉惯性里程计（VIO）

打开 `vio.c`，实现 VIO：

```c
void vio_update(float gx, float gy, float gz, 
                float ax, float ay, float az, 
                float dt, float flow_dx, float flow_dy) {
    // 1. 用 IMU 数据预测位置
    predict_position(gx, gy, gz, ax, ay, az, dt);
    
    // 2. 用光流数据校正位置
    correct_position(flow_dx, flow_dy, dt);
    
    // 3. 输出融合后的位置
    update_estimated_position();
}
```

## 步骤 5：测试

1. 室内飞行，观察无人机是否能保持位置稳定（无 GPS 情况下）
2. 挑战：在地面画一条直线，让无人机沿直线飞行

## 故障排除

### 光流计算不准确
- 改善光照条件
- 优化特征点提取算法

### 位置漂移
- 调整 VIO 参数
- 增加传感器融合

## 成就感

恭喜你！你已经实现了视觉导航系统，这是无人机在无 GPS 环境下定位的关键技术！

## 下一步

在下一个项目中，你将学习如何用 A* 算法实现无人机自主路径规划。

[继续项目 04：路径规划大师 →](/tutorials/zh/advanced/04-path-planning)
