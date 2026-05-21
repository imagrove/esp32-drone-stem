---
title: "Multi-Drone Formation"
description: "Implement formation flight with 3 drones, keeping a fixed shape (such as a triangle)."
sidebar:
  order: 9
---

## Overview

Formation flight is an advanced application of multi-drone collaboration. In this project, you will learn how to implement formation flight with 3 drones.

## What You'll Learn

- Multi-agent systems
- Cooperative control algorithms
- Formation control strategies
- Leader-follower pattern

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| 3 ESP32-S3 Drones | 3 | - |
| Computer | 1 | Python + Pygame installed |
| `formation_simulator.py` | 1 | Formation simulator |

## Step 1: Choose a Formation Control Strategy

The Leader-Follower model is the most commonly used formation control strategy.

## Step 2: Open the Project

Unzip `formation_flight.zip` and open it with VS Code.

## Step 3: Implement the Leader-Follower Strategy

Open `formation.c` and implement the follower control:

```c
void follower_control(float leader_x, float leader_y, float leader_z, 
                      float offset_x, float offset_y, float offset_z) {
    // 1. Compute desired position: leader_pos + offset
    float desired_x = leader_x + offset_x;
    float desired_y = leader_y + offset_y;
    float desired_z = leader_z + offset_z;
    
    // 2. Use PID controllers to compute velocity commands
    float vx = pid_controller(&pos_pid_x, desired_x, current_x);
    float vy = pid_controller(&pos_pid_y, desired_y, current_y);
    float vz = pid_controller(&pos_pid_z, desired_z, current_z);
    
    // 3. Convert velocity commands to motor speeds
    motorsSetRatio(MOTOR_M1, current_ratio + vx - vy + vz);
    motorsSetRatio(MOTOR_M2, current_ratio - vx - vy + vz);
    motorsSetRatio(MOTOR_M3, current_ratio - vx + vy + vz);
    motorsSetRatio(MOTOR_M4, current_ratio + vx + vy + vz);
}
```

## Step 4: Configure Formation Parameters

- Leader (Drone 1): position (0, 0, 1)
- Follower 1 (Drone 2): position (1, 0, 1) (1 meter to the right of the leader)
- Follower 2 (Drone 3): position (0.5, sqrt(3)/2, 1) (1 meter to the front-left of the leader, forming an equilateral triangle)

## Step 5: Testing

1. Send the "start formation" command from the ground station
2. Observe whether the 3 drones form and maintain a triangular shape
3. Challenge: implement "formation switching", changing from a triangle to a straight line

## Troubleshooting

### Formation not stable
- Tune the PID parameters
- Optimize the communication frequency

### Followers fall behind
- Increase the following speed
- Reduce the formation spacing

## Achievement

Congratulations! You have implemented multi-drone formation flight — an advanced application of multi-drone collaboration!

## Next Steps

In the next project, you will learn how to develop an AI-based visual tracking and recognition system.
