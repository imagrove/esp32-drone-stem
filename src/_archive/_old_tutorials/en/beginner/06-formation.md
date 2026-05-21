---
title: "Formation Flight"
description: "Use ESP-NOW protocol to achieve simple formation flight between two drones."
level: beginner
order: 6
duration: "2.5 hours"
prerequisites: ["Complete Project 05"]
draft: false
lang: en
---

## Overview

Formation flight is a cutting-edge application of drone technology. In this project, you will learn how to use the ESP-NOW protocol to achieve simple formation flight between two drones.

## What You'll Learn

- ESP-NOW communication protocol
- Multi-drone coordination
- Formation control basics
- Leader-follower strategy

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| Two Assembled Drones | 2 | Drone A and Drone B |
| Computer | 1 | With VS Code + ESP-IDF environment |
| USB Cables | 2 | For programming |

## Step 1: Understand ESP-NOW

ESP-NOW is a low-latency, low-power point-to-point communication protocol suitable for communication between drones.

## Step 2: Configure ESP-NOW

### Drone A (Leader) - Send Position

```c
void send_position_to_follower() {
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

### Drone B (Follower) - Receive Position

```c
void on_data_recv(const uint8_t *mac_addr, const uint8_t *data, int data_len) {
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

## Step 3: Initialize ESP-NOW

```c
void espnow_init() {
    // Initialize ESP-NOW
    esp_now_init();
    
    // Register callback functions
    esp_now_register_send_cb(on_data_sent);
    esp_now_register_recv_cb(on_data_recv);
    
    // Add peer
    esp_now_peer_info_t peer_info = {};
    memcpy(peer_info.peer_addr, peer_mac, 6);
    peer_info.channel = 0;
    peer_info.encrypt = false;
    esp_now_add_peer(&peer_info);
}
```

## Step 4: Compile and Flash

1. Compile and flash Drone A's code to the leader drone
2. Compile and flash Drone B's code to the follower drone
3. Power on both drones and test

## Step 5: Test Formation Flight

1. Place both drones on the ground
2. Power on Drone B first, then Drone A
3. Take off with Drone A
4. Observe if Drone B follows Drone A

## Troubleshooting

### Cannot communicate
- Check MAC addresses
- Confirm ESP-NOW is initialized

### Follower doesn't follow
- Check position data
- Adjust following parameters

## Achievement

Congratulations! You have completed all beginner projects and mastered the basics of drone development!

## Next Steps

You are now ready to enter the intermediate level and learn more advanced programming and debugging skills.

[Enter Intermediate Level →](/tutorials/en/intermediate/01-customization)
