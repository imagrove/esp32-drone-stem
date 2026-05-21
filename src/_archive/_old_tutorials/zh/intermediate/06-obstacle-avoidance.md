---
title: "避障大师"
description: "用超声波传感器实现前方避障功能，遇到障碍物自动减速或转向。"
level: intermediate
order: 6
duration: "2 小时"
prerequisites: ["完成项目 05"]
draft: false
lang: zh
---

## 概述

避障是无人机智能化的重要功能。在本项目中，你将学习如何用超声波传感器实现前方避障功能。

## 你将学到什么

- 超声波传感器原理
- 传感器接口编程
- 条件逻辑设计
- 实时控制

## 所需材料

| 物品 | 数量 | 说明 |
|------|------|------|
| ESP32 无人机 | 1 | - |
| HC-SR04 超声波模块 | 1 | 测距传感器 |
| 面包板、杜邦线 | 若干 | 连接用 |

## 步骤 1：硬件接线

将 HC-SR04 连接到 ESP32：

| HC-SR04 | ESP32 |
|---------|-------|
| VCC | 5V |
| GND | GND |
| Trig | GPIO 18 |
| Echo | GPIO 19 |

## 步骤 2：打开项目

解压 `obstacle_avoid.zip`，用 VS Code 打开。

## 步骤 3：编写测距函数

打开 `ultrasonic.c`，实现 `ultrasonic_get_distance` 函数：

```c
float ultrasonic_get_distance(void) {
  // 1. 发送 10us 触发信号
  gpio_set_level(TRIG_PIN, 1);
  ets_delay_us(10);
  gpio_set_level(TRIG_PIN, 0);
  
  // 2. 测量 Echo 高电平持续时间
  uint32_t start = 0, end = 0;
  while (!gpio_get_level(ECHO_PIN)) start = esp_timer_get_time();
  while (gpio_get_level(ECHO_PIN)) end = esp_timer_get_time();
  
  // 3. 计算距离：声速 340m/s，距离 = 时间 * 声速 / 2
  float distance = (end - start) * 0.034 / 2;
  return distance;
}
```

## 步骤 4：添加避障逻辑

打开 `flight_control.c`，在主循环中添加：

```c
float distance = ultrasonic_get_distance();
if (distance < 50) { // 距离小于 50cm
  if (distance < 20) { // 距离小于 20cm
    // 紧急刹车
    motorsSetRatio(MOTOR_M1, 0);
    motorsSetRatio(MOTOR_M2, 0);
    motorsSetRatio(MOTOR_M3, 0);
    motorsSetRatio(MOTOR_M4, 0);
  } else {
    // 减速并左转
    motorsSetRatio(MOTOR_M1, current_ratio * 0.5);
    motorsSetRatio(MOTOR_M2, current_ratio * 0.8);
    motorsSetRatio(MOTOR_M3, current_ratio * 0.5);
    motorsSetRatio(MOTOR_M4, current_ratio * 0.8);
  }
}
```

## 步骤 5：测试

在无人机前方移动障碍物（如纸箱），观察是否能自动避开。

## 故障排除

### 测距不准确
- 检查传感器连接
- 调整声速参数

### 避障反应慢
- 优化代码执行频率
- 减少不必要的延迟

## 成就感

恭喜你！你已经实现了无人机的避障功能，这是智能化的重要一步！

## 下一步

在下一个项目中，你将学习如何利用摄像头实现视觉识别功能。

[继续项目 07：视觉工程师 →](/tutorials/zh/intermediate/07-vision)
