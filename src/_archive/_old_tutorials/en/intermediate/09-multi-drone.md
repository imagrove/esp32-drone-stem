---
title: "Multi-Drone Communication"
description: "Achieve simple communication between two drones and understand wireless communication principles."
level: intermediate
order: 9
duration: "2.5 hours"
prerequisites: ["Complete Project 08"]
draft: false
lang: en
---

## Overview

Multi-drone coordination is a cutting-edge direction in drone technology. In this project, you will learn how to achieve simple communication between two drones and understand wireless communication principles.

## What You'll Learn

- Wireless communication principles
- ESP-NOW protocol
- Multi-drone coordination strategies
- Leader-follower mode

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| Two Fully Assembled Drones | 2 | Drone A and Drone B |
| Computer | 1 | With VS Code + ESP-IDF environment |
| USB Cables | 2 | For programming |

## Step 1: Understand Wireless Communication

ESP32 supports Wi-Fi and ESP-NOW communication protocols.

ESP-NOW is a low-latency, low-power point-to-point communication protocol suitable for communication between drones.

## Step 2: Configure ESP-NOW

In the `components/drivers/general/wifi` directory, understand ESP-NOW configuration and usage methods.

Configure ESP-NOW separately for Drone A and Drone B, setting communication addresses.

## Step 3: Write Communication Code

### Drone A Send Code:

```c
void sendPositionToFollower() {
    float x, y, z;
    estimatorGetPosition(&x, &y, &z);
    
    // Build message
    uint8_t message[12];
    memcpy(message, &x, 4);
    memcpy(message + 4, &y, 4);
    memcpy(message + 8, &z, 4);
    
    // Send message
    esp_now_send(follower_mac, message, sizeof(message));
}
```

### Drone B Receive Code:

```c
void onDataRecv(const uint8_t *mac_addr, const uint8_t *data, int data_len) {
    if (data_len == 12) {
        float leader_x, leader_y, leader_z;
        memcpy(&leader_x, data, 4);
        memcpy(&leader_y, data + 4, 4);
        memcpy(&leader_z, data + 8, 4);
        
        // Follow the leader
        float follower_x = leader_x - 1.0; // Keep 1 meter distance
        float follower_y = leader_y;
        float follower_z = leader_z;
        
        commanderSetPositionSetpoint(follower_x, follower_y, follower_z, 0);
    }
}
```

## Step 4: Compile, Flash and Test

1. Compile Drone A and Drone B code separately
2. Flash to corresponding drones
3. Power on and test, observe if Drone B can follow Drone A

## Troubleshooting

### Cannot communicate
- Check if MAC addresses are correct
- Confirm ESP-NOW is initialized

### Follower not following
- Check position data
- Adjust following parameters

## Achievement

Congratulations! You have completed all intermediate projects and mastered drone programming and debugging skills!

## Next Steps

You are now ready to enter the advanced level and learn more complex algorithms and system integration.

[Enter Advanced Level →](/tutorials/en/advanced/01-advanced-control)
