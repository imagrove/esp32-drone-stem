---
title: "Multi-Drone Formation"
description: "Implement multi-drone formation flight, such as triangular formation, line formation, etc."
level: advanced
order: 9
duration: "5 hours"
prerequisites: ["Complete Project 08"]
draft: false
lang: en
---

## Overview

Multi-drone formation flight is a cutting-edge application of drone technology. In this project, you will learn how to implement multi-drone formation flight.

## What You'll Learn

- Formation control principles
- Leader-follower strategy
- Virtual structure method
- Behavioral method

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| Three Fully Assembled Drones | 3 | - |
| Computer | 1 | With VS Code + ESP-IDF environment |
| USB Cables | 3 | For programming |
| Indoor Space | 1 | For flight testing |

## Step 1: Understand Formation Control

Formation control is the process of maintaining specific geometric shapes among multiple drones during flight.

Common formation control strategies:
- Leader-follower
- Virtual structure
- Behavioral method

## Step 2: Select Formation Control Strategy

Use leader-follower strategy, where Drone 1 acts as leader and Drones 2 and 3 act as followers.

## Step 3: Implement Formation Control Algorithm

### Drone 1 (Leader)

```c
void leader_control() {
    // Leader drone flies autonomously
    // Send position information to followers
    mesh_broadcast_position(current_x, current_y, current_z);
}
```

### Drone 2 and 3 (Followers)

```c
void follower_control(float leader_x, float leader_y, float leader_z, 
                      float offset_x, float offset_y, float offset_z) {
    // 1. Calculate desired position: leader_pos + offset
    float desired_x = leader_x + offset_x;
    float desired_y = leader_y + offset_y;
    float desired_z = leader_z + offset_z;
    
    // 2. Use PID controller to calculate velocity commands
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

## Step 4: Compile, Flash and Test

1. Flash code to three drones separately
2. Test formation flight, observe if drones can maintain formation

## Troubleshooting

### Formation not stable
- Adjust PID parameters
- Increase communication frequency

### Collision between drones
- Increase safety distance
- Add collision avoidance algorithm

## Achievement

Congratulations! You have implemented multi-drone formation flight, which is a cutting-edge application of drone technology!

## Next Steps

In the next project, you will learn how to integrate AI recognition and path planning to implement intelligent task execution.

[Continue to Project 10: Intelligent Task →](/tutorials/en/advanced/10-intelligent-task)
