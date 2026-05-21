---
title: "多机通信网络"
description: "用 ESP-NOW 协议实现多无人机 MESH 网络，实现信息共享和协同决策。"
level: advanced
order: 8
duration: "4 小时"
prerequisites: ["完成项目 07"]
draft: false
lang: zh
---

## 概述

多机协同是无人机技术的前沿方向。在本项目中，你将学习如何用 ESP-NOW 协议实现多无人机 MESH 网络。

## 你将学到什么

- ESP-NOW 协议
- MESH 网络拓扑
- 分布式系统设计
- 信息共享机制

## 所需材料

| 物品 | 数量 | 说明 |
|------|------|------|
| 3 架 ESP32 无人机 | 3 | - |
| 电脑 | 1 | 安装 Python + Socket |
| `ground_station.py` | 1 | 地面站软件 |

## 步骤 1：理解 ESP-NOW 协议

ESP-NOW 是一种低延迟、点对点通信协议，适合近距离多设备通信。

## 步骤 2：打开项目

解压 `mesh_network.zip`，用 VS Code 打开。

## 步骤 3：实现 MESH 网络核心函数

打开 `mesh.c`，实现网络初始化：

```c
void mesh_init(void) {
    // 1. 初始化 ESP-NOW
    esp_now_init();
    
    // 2. 添加所有无人机的 MAC 地址到对等列表
    uint8_t peer_macs[3][6] = {
        {0x11, 0x22, 0x33, 0x44, 0x55, 0x66}, // 无人机 1 MAC
        {0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF}, // 无人机 2 MAC
        {0x00, 0x11, 0x22, 0x33, 0x44, 0x55}  // 无人机 3 MAC
    };
    
    for (int i = 0; i < 3; i++) {
        esp_now_add_peer(peer_macs[i], ESP_NOW_ROLE_COMBO, 0, NULL, 0);
    }
    
    // 3. 注册数据发送/接收回调函数
    esp_now_register_send_cb(on_data_sent);
    esp_now_register_recv_cb(on_data_recv);
}

void mesh_broadcast_data(uint8_t* data, size_t len) {
    // 1. 遍历所有对等节点
    for (int i = 0; i < 3; i++) {
        // 2. 发送数据到每个节点
        esp_now_send(peer_macs[i], data, len);
    }
}
```

## 步骤 4：实现信息共享功能

1. 每架无人机定期广播自己的位置、电量和任务状态
2. 接收其他无人机的广播，更新全局状态

## 步骤 5：测试

1. 3 架无人机同时飞行
2. 观察地面站是否能收到所有无人机的实时数据
3. 挑战：实现"故障检测"，当一架无人机电量低时，其他无人机自动调整任务

## 故障排除

### 通信不稳定
- 检查天线连接
- 减少通信距离

### 数据丢失
- 添加数据重传机制
- 优化数据包大小

## 成就感

恭喜你！你已经实现了多无人机 MESH 网络，这是多机协同的基础！

## 下一步

在下一个项目中，你将学习如何实现多机编队飞行。

[继续项目 09：多机编队 →](/tutorials/zh/advanced/09-formation)
