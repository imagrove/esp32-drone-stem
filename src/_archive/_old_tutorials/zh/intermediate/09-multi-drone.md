---
title: "多机通信"
description: "实现两架无人机之间的简单通信，了解无线通信原理。"
level: intermediate
order: 9
duration: "2.5 小时"
prerequisites: ["完成项目 08"]
draft: false
lang: zh
---

## 概述

多机协同是无人机技术的前沿方向。在本项目中，你将学习如何实现两架无人机之间的简单通信，了解无线通信原理。

## 你将学到什么

- 无线通信原理
- ESP-NOW 协议
- 多机协同策略
- 领队-跟随模式

## 所需材料

| 物品 | 数量 | 说明 |
|------|------|------|
| 两架已组装好的无人机 | 2 | A 机和 B 机 |
| 电脑 | 1 | 安装 VS Code + ESP-IDF 环境 |
| USB 数据线 | 2 | 用于编程 |

## 步骤 1：了解无线通信

ESP32 支持 Wi-Fi 和 ESP-NOW 通信协议。

ESP-NOW 是一种低延迟、低功耗的点对点通信协议，适合无人机之间的通信。

## 步骤 2：配置 ESP-NOW

在 `components/drivers/general/wifi` 目录下，了解 ESP-NOW 的配置和使用方法。

为 A 机和 B 机分别配置 ESP-NOW，设置通信地址。

## 步骤 3：编写通信代码

### A 机发送代码：

```c
void sendPositionToFollower() {
    float x, y, z;
    estimatorGetPosition(&x, &y, &z);
    
    // 构建消息
    uint8_t message[12];
    memcpy(message, &x, 4);
    memcpy(message + 4, &y, 4);
    memcpy(message + 8, &z, 4);
    
    // 发送消息
    esp_now_send(follower_mac, message, sizeof(message));
}
```

### B 机接收代码：

```c
void onDataRecv(const uint8_t *mac_addr, const uint8_t *data, int data_len) {
    if (data_len == 12) {
        float leader_x, leader_y, leader_z;
        memcpy(&leader_x, data, 4);
        memcpy(&leader_y, data + 4, 4);
        memcpy(&leader_z, data + 8, 4);
        
        // 跟随领队机
        float follower_x = leader_x - 1.0; // 保持 1 米距离
        float follower_y = leader_y;
        float follower_z = leader_z;
        
        commanderSetPositionSetpoint(follower_x, follower_y, follower_z, 0);
    }
}
```

## 步骤 4：编译烧录并测试

1. 分别编译 A 机和 B 机的代码
2. 烧录到对应的无人机
3. 开机测试，观察 B 机是否能跟随 A 机飞行

## 故障排除

### 无法通信
- 检查 MAC 地址是否正确
- 确认 ESP-NOW 已初始化

### 跟随不稳定
- 调整跟随距离
- 优化控制参数

## 成就感

恭喜你！你已经完成了中级教材的所有项目，掌握了无人机的编程和调试技能！

## 下一步

你已经准备好进入高级教材，学习更复杂的算法和系统集成。

[进入高级教材 →](/tutorials/zh/advanced/01-advanced-control)
