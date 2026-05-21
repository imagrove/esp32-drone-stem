---
title: "多机编队"
description: "实现 3 架无人机的编队飞行，保持固定队形（如三角形）。"
level: advanced
order: 9
duration: "4 小时"
prerequisites: ["完成项目 08"]
draft: false
lang: zh
---

## 概述

编队飞行是多机协同的高级应用。在本项目中，你将学习如何实现 3 架无人机的编队飞行。

## 你将学到什么

- 多智能体系统
- 协同控制算法
- 队形控制策略
- 领导者-跟随者模式

## 所需材料

| 物品 | 数量 | 说明 |
|------|------|------|
| 3 架 ESP32-S3 无人机 | 3 | - |
| 电脑 | 1 | 安装 Python + Pygame |
| `formation_simulator.py` | 1 | 编队模拟器 |

## 步骤 1：选择编队控制策略

领导者-跟随者（Leader-Follower）模式是最常用的编队控制策略。

## 步骤 2：打开项目

解压 `formation_flight.zip`，用 VS Code 打开。

## 步骤 3：实现领导者-跟随者策略

打开 `formation.c`，实现跟随者控制：

```c
void follower_control(float leader_x, float leader_y, float leader_z, 
                      float offset_x, float offset_y, float offset_z) {
    // 1. 计算期望位置：leader_pos + offset
    float desired_x = leader_x + offset_x;
    float desired_y = leader_y + offset_y;
    float desired_z = leader_z + offset_z;
    
    // 2. 用 PID 控制器计算速度指令
    float vx = pid_controller(&pos_pid_x, desired_x, current_x);
    float vy = pid_controller(&pos_pid_y, desired_y, current_y);
    float vz = pid_controller(&pos_pid_z, desired_z, current_z);
    
    // 3. 转换速度指令为电机转速
    motorsSetRatio(MOTOR_M1, current_ratio + vx - vy + vz);
    motorsSetRatio(MOTOR_M2, current_ratio - vx - vy + vz);
    motorsSetRatio(MOTOR_M3, current_ratio - vx + vy + vz);
    motorsSetRatio(MOTOR_M4, current_ratio + vx + vy + vz);
}
```

## 步骤 4：配置队形参数

- 领导者（无人机 1）：位置 (0, 0, 1)
- 跟随者 1（无人机 2）：位置 (1, 0, 1)（领导者右侧 1 米）
- 跟随者 2（无人机 3）：位置 (0.5, sqrt(3)/2, 1)（领导者左前侧 1 米，形成等边三角形）

## 步骤 5：测试

1. 地面站发送"开始编队"指令
2. 观察 3 架无人机是否形成并保持三角形队形
3. 挑战：实现"队形变换"，从三角形切换为直线队形

## 故障排除

### 队形不稳定
- 调整 PID 参数
- 优化通信频率

### 跟随者掉队
- 增大跟随速度
- 减小队形间距

## 成就感

恭喜你！你已经实现了多机编队飞行，这是多机协同的高级应用！

## 下一步

在下一个项目中，你将学习如何开发基于 AI 的视觉追踪和识别系统。

[继续项目 10：智能任务 →](/tutorials/zh/advanced/10-intelligent-task)
