---
title: "Wireless Plotter"
description: "Transmit the drone's flight data back to the computer via Wi-Fi and plot curves in real-time."
level: intermediate
order: 8
duration: "2 hours"
prerequisites: ["Complete Project 07"]
draft: false
lang: en
---

## Overview

Data visualization is an important tool for drone debugging. In this project, you will learn how to transmit the drone's flight data back to the computer via Wi-Fi and plot curves in real-time.

## What You'll Learn

- Wi-Fi communication
- UDP protocol
- Data visualization
- Python scripts

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| ESP32 Drone | 1 | - |
| Computer | 1 | With Python + Matplotlib installed |
| `plotter.py` | 1 | Data visualization script |

## Step 1: Open the Project

Extract `wifi_telemetry.zip` and open with VS Code.

## Step 2: Modify Data Sending Function

Open `wifilink.c` and find the `wifilink_send_data` function:

```c
void wifilink_send_data(float altitude, float roll, float pitch, float yaw) {
  // 1. Package data in JSON format
  char buffer[256];
  sprintf(buffer, "{\"alt\":%.2f,\"roll\":%.2f,\"pitch\":%.2f,\"yaw\":%.2f}", 
          altitude, roll, pitch, yaw);
  
  // 2. Send to computer via UDP
  struct sockaddr_in dest_addr;
  dest_addr.sin_family = AF_INET;
  dest_addr.sin_port = htons(8888);
  dest_addr.sin_addr.s_addr = inet_addr("192.168.4.2"); // Computer IP
  
  sendto(sock, buffer, strlen(buffer), 0, 
         (struct sockaddr*)&dest_addr, sizeof(dest_addr));
}
```

## Step 3: Compile and Flash

Compile and flash the code, power on the drone (it will create Wi-Fi hotspot: `ESP-Drone`).

## Step 4: Connect Computer to Drone Wi-Fi

Run `plotter.py`:

```bash
python plotter.py
```

## Step 5: Control Drone Flight

Observe the altitude and attitude curves plotted in real-time on the computer.

## Step 6: Challenge

Modify `plotter.py` to add "altitude anomaly alert", displaying red warning in terminal when altitude change exceeds 0.5m/s.

## Troubleshooting

### Cannot connect to Wi-Fi
- Check if password is correct
- Confirm drone is powered on

### Data not displaying
- Check if IP address is correct
- Confirm firewall settings

## Achievement

Congratulations! You have implemented the drone's data visualization function, which is an important tool for debugging!

## Next Steps

In the next project, you will learn how to achieve simple communication between two drones.

[Continue to Project 09: Multi-Drone Communication →](/tutorials/en/intermediate/09-multi-drone)
