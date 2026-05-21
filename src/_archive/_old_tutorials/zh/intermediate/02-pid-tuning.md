---
title: "PID 调参挑战"
description: "通过调整 PID 参数，让无人机在有风的环境下也能稳定悬停。"
level: intermediate
order: 2
duration: "1.5 小时"
prerequisites: ["完成项目 01"]
draft: false
lang: zh
---

## 概述

PID 控制器是无人机稳定飞行的核心。在本项目中，你将学习 PID 控制原理，并通过调整参数让无人机飞得更稳定。

## 你将学到什么

- PID 控制器原理
- 闭环控制系统
- 参数调优方法
- 稳定性分析

## 所需材料

| 物品 | 数量 | 说明 |
|------|------|------|
| ESP32 无人机 | 1 | 已组装完成 |
| 风扇 | 1 | 模拟微风 |
| 电脑 | 1 | 安装浏览器 |

## 步骤 1：了解 PID 控制

PID 是一种经典的控制算法，由三部分组成：

| 参数 | 名称 | 作用 |
|------|------|------|
| P | 比例 | 控制响应速度 |
| I | 积分 | 消除稳态误差 |
| D | 微分 | 防止过冲和振荡 |

## 步骤 2：找到 PID 参数文件

打开 `controller_pid.c`，找到 PID 结构体：

```c
typedef struct {
  float kp; // 比例系数，控制反应速度
  float ki; // 积分系数，消除静态误差
  float kd; // 微分系数，防止过冲
} PID_t;
```

找到 `pid_update` 函数：

```c
float pid_update(PID_t* pid, float setpoint, float feedback) {
  float error = setpoint - feedback;
  pid->integral += error * dt;
  float derivative = (error - pid->last_error) / dt;
  pid->last_error = error;
  return pid->kp * error + pid->ki * pid->integral + pid->kd * derivative;
}
```

## 步骤 3：初始参数测试

默认参数：`kp=0.5, ki=0.1, kd=0.2`

室内飞行，观察稳定性：

| 现象 | 调整方向 |
|------|---------|
| 晃动厉害 | 减小 `kp` |
| 飞不起来 | 增大 `kp` |
| 有漂移 | 增大 `ki` |
| 反应迟钝 | 增大 `kd` |

## 步骤 4：微风测试

1. 用风扇模拟微风（距离 1 米，中档风速）
2. 调整参数，直到无人机能稳定悬停

## 步骤 5：记录最优参数

在 `pid_tuner.html` 中输入参数，生成调参报告。

## 故障排除

### 无人机剧烈晃动
- 减小 `kp` 值
- 增大 `kd` 值

### 无人机无法保持高度
- 增大 `ki` 值
- 检查气压计数据

## 成就感

恭喜你！你已经掌握了 PID 调参的基本方法，这是无人机控制的核心技能！

## 下一步

在下一个项目中，你将学习如何读取气压计数据，实现更精准的定高功能。

[继续项目 03：高度计解密 →](/tutorials/zh/intermediate/03-altimeter)
