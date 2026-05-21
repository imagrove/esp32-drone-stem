---
title: "避障高手"
description: "开发实时避障系统，让无人机在飞行过程中自动避开障碍物。"
level: advanced
order: 5
duration: "4 小时"
prerequisites: ["完成项目 04"]
draft: false
lang: zh
---

## 概述

实时避障是无人机安全飞行的关键保障。在本项目中，你将学习如何开发实时避障系统。

## 你将学到什么

- 避障算法原理
- 人工势场法
- 向量场直方图（VFH）
- 动态窗口法（DWA）

## 所需材料

| 物品 | 数量 | 说明 |
|------|------|------|
| 已安装测距传感器的无人机 | 1 | VL53L0X、TOF 传感器 |
| 电脑 | 1 | 安装 VS Code + ESP-IDF 环境 |
| USB 数据线 | 1 | 用于编程 |
| 室内环境 | 1 | 放置障碍物 |

## 步骤 1：了解避障系统

避障系统通过传感器检测周围障碍物，规划安全路径并控制无人机避开障碍物。

常见的避障算法：
- 人工势场法
- 向量场直方图（VFH）
- 动态窗口法（DWA）

## 步骤 2：传感器布局

在无人机周围安装多个测距传感器（如前方、后方、左方、右方），实现全方位障碍物检测。

## 步骤 3：避障算法实现

选择 DWA（动态窗口法）：

```c
void obstacleAvoidance() {
    // 读取传感器数据，检测障碍物
    float dist_front = readDistanceSensor(FRONT);
    float dist_left = readDistanceSensor(LEFT);
    float dist_right = readDistanceSensor(RIGHT);
    
    // 构建障碍物列表
    Obstacle obstacle_list[10];
    int obs_count = 0;
    
    if (dist_front < 200) {
        obstacle_list[obs_count].x = current_x + dist_front;
        obstacle_list[obs_count].y = current_y;
        obs_count++;
    }
    
    // 使用 DWA 算法规划安全速度
    float vx, vy, vz, yaw_rate;
    dwaPlanner(&vx, &vy, &vz, &yaw_rate, obstacle_list, obs_count);
    
    // 控制无人机执行避障动作
    commanderSetVelocitySetpoint(vx, vy, vz, yaw_rate);
}
```

## 步骤 4：编译烧录并测试

1. 编译烧录代码
2. 在放置障碍物的室内环境中测试

## 故障排除

### 避障反应慢
- 优化传感器读取频率
- 简化避障算法

### 避障路径不合理
- 调整 DWA 参数
- 增加传感器数量

## 成就感

恭喜你！你已经实现了实时避障系统，这是无人机安全飞行的重要保障！

## 下一步

在下一个项目中，你将学习如何用 OpenCV 库实现颜色目标的实时追踪。

[继续项目 06：目标追踪 →](/tutorials/zh/advanced/06-target-tracking)
