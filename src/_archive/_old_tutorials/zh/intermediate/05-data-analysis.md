---
title: "数据魔法师"
description: "读取无人机的传感器数据，并进行简单分析。"
level: intermediate
order: 5
duration: "1.5 小时"
prerequisites: ["完成项目 04"]
draft: false
lang: zh
---

## 概述

传感器数据是无人机控制的基础。在本项目中，你将学习如何读取无人机的传感器数据，并进行简单分析。

## 你将学到什么

- 传感器数据读取
- I2C 通信协议
- 数据日志功能
- 数据分析方法

## 所需材料

| 物品 | 数量 | 说明 |
|------|------|------|
| 已组装好的无人机 | 1 | - |
| 电脑 | 1 | 安装 VS Code + ESP-IDF 环境 |
| USB 数据线 | 1 | 用于编程 |
| 手机 | 1 | 安装 `Drone Control` APP |

## 步骤 1：了解传感器

| 传感器 | 功能 |
|--------|------|
| MPU6050 | 六轴传感器，测量加速度和角速度 |
| BMP280 | 气压传感器，测量气压和高度 |

## 步骤 2：读取传感器数据

打开以下文件，了解数据读取逻辑：
- `components/drivers/i2c_devices/mpu6050/mpu6050.c`
- `components/core/crazyflie/modules/src/estimator_complementary.c`

## 步骤 3：添加数据日志

打开 `components/core/crazyflie/modules/src/log.c` 文件，添加新的日志变量（如 `acc_x`、`gyro_y`、`height`）。

在 `logInit()` 函数中注册这些变量。

## 步骤 4：编译烧录并测试

1. 编译烧录代码
2. 开机，连接手机 APP
3. 进入"日志"页面，选择要查看的数据变量
4. 点击"开始日志"
5. 移动无人机，观察传感器数据的变化

## 步骤 5：数据分析

1. 将日志数据导出到电脑
2. 使用 Excel 或 Python 进行分析
3. 绘制加速度、角速度、高度随时间的变化曲线
4. 分析无人机的运动状态

## 故障排除

### 无法读取传感器数据
- 检查 I2C 连接
- 确认传感器地址正确

### 数据日志无法显示
- 检查 Wi-Fi 连接
- 确认日志变量已注册

## 成就感

恭喜你！你已经掌握了传感器数据的读取和分析方法，这是无人机开发的重要技能！

## 下一步

在下一个项目中，你将学习如何用超声波传感器实现避障功能。

[继续项目 06：避障大师 →](/tutorials/zh/intermediate/06-obstacle-avoidance)
