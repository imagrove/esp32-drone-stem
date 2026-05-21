---
title: "Data Magician"
description: "Read the drone's sensor data and perform simple analysis."
level: intermediate
order: 5
duration: "1.5 hours"
prerequisites: ["Complete Project 04"]
draft: false
lang: en
---

## Overview

Sensor data is the foundation of drone control. In this project, you will learn how to read the drone's sensor data and perform simple analysis.

## What You'll Learn

- Sensor data reading
- I2C communication protocol
- Data logging functionality
- Data analysis methods

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| Fully Assembled Drone | 1 | - |
| Computer | 1 | With VS Code + ESP-IDF environment |
| USB Cable | 1 | For programming |
| Smartphone | 1 | With `Drone Control` APP installed |

## Step 1: Understand Sensors

| Sensor | Function |
|--------|----------|
| MPU6050 | 6-axis sensor, measures acceleration and angular velocity |
| BMP280 | Pressure sensor, measures pressure and altitude |

## Step 2: Read Sensor Data

Open the following files to understand data reading logic:
- `components/drivers/i2c_devices/mpu6050/mpu6050.c`
- `components/core/crazyflie/modules/src/estimator_complementary.c`

## Step 3: Add Data Logging

Open `components/core/crazyflie/modules/src/log.c` and add new log variables (e.g., `acc_x`, `gyro_y`, `height`).

Register these variables in the `logInit()` function.

## Step 4: Compile, Flash and Test

1. Compile and flash the code
2. Power on, connect to smartphone APP
3. Enter the "Log" page, select the data variables to view
4. Click "Start Log"
5. Move the drone and observe changes in sensor data

## Step 5: Data Analysis

1. Export log data to computer
2. Use Excel or Python for analysis
3. Plot curves of acceleration, angular velocity, and altitude over time
4. Analyze the drone's motion state

## Troubleshooting

### Cannot read sensor data
- Check I2C connections
- Confirm sensor address is correct

### Data log not displaying
- Check Wi-Fi connection
- Confirm log variables are registered

## Achievement

Congratulations! You have mastered the methods of reading and analyzing sensor data, which is an important skill for drone development!

## Next Steps

In the next project, you will learn how to use ultrasonic sensors for obstacle avoidance.

[Continue to Project 06: Obstacle Avoidance Master →](/tutorials/en/intermediate/06-obstacle-avoidance)
