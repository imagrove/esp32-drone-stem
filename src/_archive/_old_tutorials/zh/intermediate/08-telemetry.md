---
title: "无线绘图板"
description: "通过 Wi-Fi 将无人机的飞行数据回传到电脑，实时绘制曲线。"
level: intermediate
order: 8
duration: "2 小时"
prerequisites: ["完成项目 07"]
draft: false
lang: zh
---

## 概述

数据可视化是无人机调试的重要工具。在本项目中，你将学习如何通过 Wi-Fi 将无人机的飞行数据回传到电脑，实时绘制曲线。

## 你将学到什么

- Wi-Fi 通信
- UDP 协议
- 数据可视化
- Python 脚本

## 所需材料

| 物品 | 数量 | 说明 |
|------|------|------|
| ESP32 无人机 | 1 | - |
| 电脑 | 1 | 安装 Python + Matplotlib |
| `plotter.py` | 1 | 数据可视化脚本 |

## 步骤 1：打开项目

解压 `wifi_telemetry.zip`，用 VS Code 打开。

## 步骤 2：修改数据发送函数

打开 `wifilink.c`，找到 `wifilink_send_data` 函数：

```c
void wifilink_send_data(float altitude, float roll, float pitch, float yaw) {
  // 1. 打包数据为 JSON 格式
  char buffer[256];
  sprintf(buffer, "{\"alt\":%.2f,\"roll\":%.2f,\"pitch\":%.2f,\"yaw\":%.2f}", 
          altitude, roll, pitch, yaw);
  
  // 2. 通过 UDP 发送到电脑
  struct sockaddr_in dest_addr;
  dest_addr.sin_family = AF_INET;
  dest_addr.sin_port = htons(8888);
  dest_addr.sin_addr.s_addr = inet_addr("192.168.4.2"); // 电脑 IP
  
  sendto(sock, buffer, strlen(buffer), 0, 
         (struct sockaddr*)&dest_addr, sizeof(dest_addr));
}
```

## 步骤 3：编译烧录

编译烧录代码，无人机开机（会创建 Wi-Fi 热点：`ESP-Drone`）。

## 步骤 4：电脑连接无人机 Wi-Fi

运行 `plotter.py`：

```bash
python plotter.py
```

## 步骤 5：操控无人机飞行

观察电脑上实时绘制的高度、姿态曲线。

## 步骤 6：挑战

修改 `plotter.py`，添加"高度异常警报"，当高度变化超过 0.5m/s 时，终端显示红色警告。

## 故障排除

### 无法连接 Wi-Fi
- 检查密码是否正确
- 确认无人机已开机

### 数据无法显示
- 检查 IP 地址是否正确
- 确认防火墙设置

## 成就感

恭喜你！你已经实现了无人机的数据可视化功能，这是调试的重要工具！

## 下一步

在下一个项目中，你将学习如何实现两架无人机之间的通信。

[继续项目 09：多机通信 →](/tutorials/zh/intermediate/09-multi-drone)
