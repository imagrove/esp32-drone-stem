---
title: "Multi-Drone Mesh Network"
description: "Use the ESP-NOW protocol to build a multi-drone MESH network for information sharing and cooperative decision-making."
sidebar:
  order: 8
---

## Overview

Multi-drone collaboration is a frontier direction of drone technology. In this project, you will learn how to build a multi-drone MESH network using the ESP-NOW protocol.

## What You'll Learn

- ESP-NOW protocol
- MESH network topology
- Distributed system design
- Information sharing mechanism

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| 3 ESP32 Drones | 3 | - |
| Computer | 1 | Python + Socket installed |
| `ground_station.py` | 1 | Ground station software |

## Step 1: Understand the ESP-NOW Protocol

ESP-NOW is a low-latency, peer-to-peer communication protocol well suited for short-range, multi-device communication.

## Step 2: Open the Project

Unzip `mesh_network.zip` and open it with VS Code.

## Step 3: Implement the MESH Network Core Functions

Open `mesh.c` and implement network initialization:

```c
void mesh_init(void) {
    // 1. Initialize ESP-NOW
    esp_now_init();
    
    // 2. Add all drone MAC addresses to the peer list
    uint8_t peer_macs[3][6] = {
        {0x11, 0x22, 0x33, 0x44, 0x55, 0x66}, // Drone 1 MAC
        {0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF}, // Drone 2 MAC
        {0x00, 0x11, 0x22, 0x33, 0x44, 0x55}  // Drone 3 MAC
    };
    
    for (int i = 0; i < 3; i++) {
        esp_now_add_peer(peer_macs[i], ESP_NOW_ROLE_COMBO, 0, NULL, 0);
    }
    
    // 3. Register send / receive callbacks
    esp_now_register_send_cb(on_data_sent);
    esp_now_register_recv_cb(on_data_recv);
}

void mesh_broadcast_data(uint8_t* data, size_t len) {
    // 1. Iterate over all peers
    for (int i = 0; i < 3; i++) {
        // 2. Send data to each peer
        esp_now_send(peer_macs[i], data, len);
    }
}
```

## Step 4: Implement Information Sharing

1. Each drone periodically broadcasts its own position, battery level and task status
2. Receive broadcasts from other drones and update the global state

## Step 5: Testing

1. Fly 3 drones at the same time
2. Verify that the ground station receives real-time data from every drone
3. Challenge: implement "fault detection" — when one drone is low on battery, the others should automatically adjust their tasks

## Troubleshooting

### Unstable communication
- Check the antenna connection
- Reduce the communication distance

### Data loss
- Add a retransmission mechanism
- Optimize the packet size

## Achievement

Congratulations! You have built a multi-drone MESH network — the foundation of multi-drone collaboration!

## Next Steps

In the next project, you will learn how to implement multi-drone formation flight.
