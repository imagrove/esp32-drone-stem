---
title: "Attitude Magician"
description: "Read IMU data, calculate drone attitude using complementary filtering algorithm, and understand attitude estimation principles."
level: intermediate
order: 4
duration: "1.5 hours"
prerequisites: ["Complete Project 03"]
draft: false
lang: en
---

## Overview

IMU (Inertial Measurement Unit) is the core sensor for drone attitude estimation. In this project, you will learn how to read IMU data and calculate drone attitude using complementary filtering algorithm.

## What You'll Learn

- IMU sensor principles
- Complementary filtering algorithm
- Quaternion attitude representation
- Attitude estimation

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| ESP32 Drone | 1 | Built-in MPU6050 |
| Serial Debug Assistant | 1 | For observing data |

## Step 1: Open the Project

Extract `imu_fusion.zip` and open with VS Code.

## Step 2: View Complementary Filtering Code

Open `sensfusion6.c` and find the `sensfusion6UpdateQ` function:

```c
void sensfusion6UpdateQ(float gx, float gy, float gz, float ax, float ay, float az, float dt) {
  // 1. Gyroscope integration updates attitude (fast but drifts)
  // 2. Accelerometer calibrates attitude (accurate but affected by vibration)
  // 3. Complementary filtering: fuses both data
  beta = 0.02; // Filter coefficient, between 0-1
}
```

## Step 3: Adjust Filter Coefficient

### Test 1: `beta=0.1` (Trust accelerometer more)
- Phenomenon: Fast response, but attitude data fluctuates when shaking

### Test 2: `beta=0.01` (Trust gyroscope more)
- Phenomenon: Stable, but drifts over time

## Step 4: Find Optimal Value

Adjust `beta` until attitude data is stable when the drone is shaking, and there is no obvious drift during long flights.

## Step 5: Challenge

Rotate the drone quickly and observe if attitude data can follow accurately.

## Troubleshooting

### Attitude data drift
- Decrease `beta` value
- Check gyroscope calibration

### Attitude data fluctuation
- Increase `beta` value
- Add low-pass filter

## Achievement

Congratulations! You have mastered the core technology of attitude estimation and understood the complementary filtering algorithm!

## Next Steps

In the next project, you will learn how to read and analyze sensor data.

[Continue to Project 05: Data Magician →](/tutorials/en/intermediate/05-data-analysis)
