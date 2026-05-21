---
title: "Obstacle Avoidance Expert"
description: "Develop real-time obstacle avoidance systems to automatically avoid obstacles during flight."
level: advanced
order: 5
duration: "4 hours"
prerequisites: ["Complete Project 04"]
draft: false
lang: en
---

## Overview

Real-time obstacle avoidance is the key guarantee for safe drone flight. In this project, you will learn how to develop real-time obstacle avoidance systems.

## What You'll Learn

- Obstacle avoidance algorithm principles
- Artificial Potential Field method
- Vector Field Histogram (VFH)
- Dynamic Window Approach (DWA)

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| Drone with Distance Sensors | 1 | VL53L0X, TOF sensors |
| Computer | 1 | With VS Code + ESP-IDF environment |
| USB Cable | 1 | For programming |
| Indoor Environment | 1 | With obstacles placed |

## Step 1: Understand Obstacle Avoidance Systems

Obstacle avoidance systems detect surrounding obstacles through sensors, plan safe paths and control drones to avoid obstacles.

Common obstacle avoidance algorithms:
- Artificial Potential Field method
- Vector Field Histogram (VFH)
- Dynamic Window Approach (DWA)

## Step 2: Sensor Layout

Install multiple distance sensors around the drone (front, back, left, right) for all-direction obstacle detection.

## Step 3: Obstacle Avoidance Algorithm Implementation

Select DWA (Dynamic Window Approach):

```c
void obstacleAvoidance() {
    // Read sensor data, detect obstacles
    float dist_front = readDistanceSensor(FRONT);
    float dist_left = readDistanceSensor(LEFT);
    float dist_right = readDistanceSensor(RIGHT);
    
    // Build obstacle list
    Obstacle obstacle_list[10];
    int obs_count = 0;
    
    if (dist_front < 200) {
        obstacle_list[obs_count].x = current_x + dist_front;
        obstacle_list[obs_count].y = current_y;
        obs_count++;
    }
    
    // Use DWA algorithm to plan safe velocity
    float vx, vy, vz, yaw_rate;
    dwaPlanner(&vx, &vy, &vz, &yaw_rate, obstacle_list, obs_count);
    
    // Control drone to execute avoidance action
    commanderSetVelocitySetpoint(vx, vy, vz, yaw_rate);
}
```

## Step 4: Compile, Flash and Test

1. Compile and flash the code
2. Test in indoor environment with obstacles placed

## Troubleshooting

### Slow obstacle avoidance response
- Optimize sensor reading frequency
- Simplify obstacle avoidance algorithm

### Unreasonable avoidance path
- Adjust DWA parameters
- Increase number of sensors

## Achievement

Congratulations! You have implemented real-time obstacle avoidance system, which is an important guarantee for safe drone flight!

## Next Steps

In the next project, you will learn how to use OpenCV library for real-time color target tracking.

[Continue to Project 06: Target Tracking →](/tutorials/en/advanced/06-target-tracking)
