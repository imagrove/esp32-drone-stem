---
title: "Visual Navigation"
description: "Use camera optical flow data for indoor positioning without GPS."
level: advanced
order: 3
duration: "4 hours"
prerequisites: ["Complete Project 02"]
draft: false
lang: en
---

## Overview

Visual navigation is the key technology for drones to achieve positioning in GPS-denied environments. In this project, you will learn how to use camera optical flow data for indoor positioning.

## What You'll Learn

- Computer vision basics
- Optical flow algorithms
- Visual Inertial Odometry (VIO)
- Sensor fusion

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| ESP32-S3 Drone | 1 | - |
| OV2640 Camera Module | 1 | - |
| PMW3901 Optical Flow Sensor | 1 | Optional |

## Step 1: Hardware Wiring

- OV2640 Camera → ESP32-S3 DVP interface
- PMW3901 (optional) → ESP32-S3 SPI interface

## Step 2: Open the Project

Extract `optical_flow.zip` and open with VS Code.

## Step 3: Implement Optical Flow Calculation

Open `optical_flow.c` and implement optical flow calculation:

```c
void optical_flow_calculate(uint8_t* prev_frame, uint8_t* curr_frame, 
                            int width, int height, float* dx, float* dy) {
    // 1. Extract feature points (corners)
    FeaturePoint features[100];
    int feature_count = extract_corners(prev_frame, width, height, features, 100);
    
    // 2. Track feature points
    FeaturePoint tracked_features[100];
    int tracked_count = track_features(prev_frame, curr_frame, width, height, 
                                       features, feature_count, tracked_features);
    
    // 3. Calculate average displacement
    *dx = 0;
    *dy = 0;
    for (int i = 0; i < tracked_count; i++) {
        *dx += tracked_features[i].x - features[i].x;
        *dy += tracked_features[i].y - features[i].y;
    }
    if (tracked_count > 0) {
        *dx /= tracked_count;
        *dy /= tracked_count;
    }
}
```

## Step 4: Implement Visual Inertial Odometry (VIO)

Open `vio.c` and implement VIO:

```c
void vio_update(float gx, float gy, float gz, 
                float ax, float ay, float az, 
                float dt, float flow_dx, float flow_dy) {
    // 1. Predict position using IMU data
    predict_position(gx, gy, gz, ax, ay, az, dt);
    
    // 2. Correct position using optical flow data
    correct_position(flow_dx, flow_dy, dt);
    
    // 3. Output fused position
    update_estimated_position();
}
```

## Step 5: Test

1. Indoor flight, observe if the drone can maintain stable position (without GPS)
2. Challenge: Draw a straight line on the ground and make the drone fly along it

## Troubleshooting

### Inaccurate optical flow calculation
- Improve lighting conditions
- Optimize feature point extraction algorithm

### Position drift
- Adjust VIO parameters
- Add sensor fusion

## Achievement

Congratulations! You have implemented visual navigation system, which is the key technology for drone positioning in GPS-denied environments!

## Next Steps

In the next project, you will learn how to use A* algorithm for drone autonomous path planning.

[Continue to Project 04: Path Planning Master →](/tutorials/en/advanced/04-path-planning)
