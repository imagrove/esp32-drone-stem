---
title: "Multi-Drone Mesh Network"
description: "Build multi-drone communication networks to achieve information sharing and collaborative control."
level: advanced
order: 8
duration: "4 hours"
prerequisites: ["Complete Project 07"]
draft: false
lang: en
---

## Overview

Multi-drone communication network is the foundation of drone swarm collaboration. In this project, you will learn how to build multi-drone communication networks.

## What You'll Learn

- Mesh network principles
- ESP-NOW protocol
- Network topology design
- Information sharing mechanisms

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| Three Fully Assembled Drones | 3 | Drone 1, Drone 2, Drone 3 |
| Computer | 1 | With VS Code + ESP-IDF environment |
| USB Cables | 3 | For programming |

## Step 1: Understand Mesh Networks

Mesh network is a decentralized network topology where each node can communicate directly with other nodes.

Advantages of mesh networks:
- High reliability
- Good scalability
- Self-healing capability

## Step 2: Network Topology Design

Design star topology or mesh topology, determine communication protocols and data formats.

## Step 3: Code Implementation

Configure ESP-NOW for each drone, set peer list:

```c
void mesh_init(void) {
    // 1. Initialize ESP-NOW
    esp_now_init();
    
    // 2. Add all drone MAC addresses to peer list
    uint8_t peer_macs[3][6] = {
        {0x11, 0x22, 0x33, 0x44, 0x55, 0x66}, // Drone 1 MAC
        {0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF}, // Drone 2 MAC
        {0x00, 0x11, 0x22, 0x33, 0x44, 0x55}  // Drone 3 MAC
    };
    
    for (int i = 0; i < 3; i++) {
        esp_now_add_peer(peer_macs[i], ESP_NOW_ROLE_COMBO, 0, NULL, 0);
    }
    
    // 3. Register data send/receive callback functions
    esp_now_register_send_cb(on_data_sent);
    esp_now_register_recv_cb(on_data_recv);
}

void mesh_broadcast_position(float x, float y, float z) {
    PositionData data;
    data.x = x;
    data.y = y;
    data.z = z;
    data.timestamp = esp_timer_get_time();
    
    // Broadcast to all drones
    esp_now_send(NULL, (uint8_t*)&data, sizeof(data));
}
```

## Step 4: Compile, Flash and Test

1. Flash code to three drones separately
2. Power on and test, observe if drones can share position information

## Troubleshooting

### Communication fails
- Check if MAC addresses are correct
- Confirm ESP-NOW is initialized

### Data loss
- Add data retransmission mechanism
- Increase communication frequency

## Achievement

Congratulations! You have built multi-drone communication network, which is the foundation of drone swarm collaboration!

## Next Steps

In the next project, you will learn how to implement multi-drone formation flight.

[Continue to Project 09: Multi-Drone Formation →](/tutorials/en/advanced/09-formation)
