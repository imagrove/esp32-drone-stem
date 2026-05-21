---
title: "Birth of a Little Flyer"
description: "Assemble drone hardware and flash 'one-key takeoff' firmware, complete first flight."
level: beginner
order: 1
duration: "1 hour"
prerequisites: []
draft: false
lang: en
---

## Overview

Welcome to your first drone project! In this tutorial, you'll build a fully functional ESP32 drone from scratch and complete your first flight.

## What You'll Learn

- Drone frame assembly
- Motor and ESC connection
- ESP32 firmware flashing
- Basic flight controls
- Safety procedures

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| ESP32-S3-DevKitC Board | 1 | Main flight controller |
| 715 Brushed Motors | 4 | 2 CW, 2 CCW |
| MPU6050 Attitude Sensor | 1 | Measures drone attitude |
| LiPo Battery 1S 3.7V | 1 | 300-500mAh |
| PCB Frame | 1 | Use PCB directly as frame |
| ESCs | 4 | Or use ESP32 PWM directly |
| USB Cable | 1 | For programming |

## Step 1: Frame Assembly

### 1.1 Attach Motor Mounts

1. Mount motors to the four corners of the PCB frame, tighten with screws
2. **Important**: Note the motor rotation direction (CW vs CCW)

```
Motor Layout (Top View):
    Front
     ↑
  1     2  (1,3 = CW | 2,4 = CCW)
   \   /
    \ /
    / \
   /   \
  4     3
```

### 1.2 Install Flight Controller

Mount the ESP32 board in the center of the frame using double-sided tape or standoffs.

## Step 2: Wiring

### 2.1 Motor Connections

Connect each motor to the corresponding GPIO pins:

| Motor | GPIO Pin | Rotation |
|-------|----------|----------|
| M1 | GPIO 4 | CW |
| M2 | GPIO 5 | CCW |
| M3 | GPIO 6 | CCW |
| M4 | GPIO 7 | CW |

### 2.2 Sensor Connections

Connect the MPU6050 attitude sensor to ESP32 I2C interface:
- MPU6050 SCL → ESP32 GPIO 22
- MPU6050 SDA → ESP32 GPIO 21

### 2.3 Power Connection

Connect the battery to the ESP32 power interface through a power switch.

## Step 3: Firmware Flashing

### 3.1 Prepare Flashing Tool

1. Download `flash_tool.exe` (Windows) or `flash_tool_mac.app` (macOS)
2. Download `takeoff.bin` file to your computer desktop

### 3.2 Flash the Firmware

1. Hold the "BOOT" button on the ESP32 board while connecting the USB cable to your computer
2. Open `flash_tool.exe` and select the `takeoff.bin` file
3. Click the "Flash" button and wait for completion (about 10 seconds)
4. After the tool shows "Flash successful", remove the USB cable

## Step 4: First Flight

### 4.1 Pre-flight Checklist

- [ ] Battery fully charged
- [ ] Propellers securely attached
- [ ] No loose wires
- [ ] Firmware flashed successfully
- [ ] Choose an open flight area

### 4.2 Using the Mobile App

1. Download `Drone Control` APP (Android) or search "ESP Drone" in App Store (iOS)
2. Power on the drone (battery switch), the drone LED will blink
3. Connect your phone to the drone's Wi-Fi (Name: `ESP-Drone`, Password: `12345678`)
4. Open the APP and wait for connection

### 4.3 Takeoff

1. Click the "Takeoff" button in the APP
2. Slowly push the throttle slider, and the drone will fly!
3. Try controlling the drone to move forward, backward, left and right
4. Slowly lower the throttle to let it land

> **Safety First**: Always fly in open areas away from people and obstacles.

## Troubleshooting

### Drone won't arm
- Check battery voltage (>3.5V)
- Verify wireless connection
- Ensure level surface for calibration

### Drone flips on takeoff
- Check propeller direction
- Verify motor order matches configuration
- Check gyro calibration

## Achievement

Congratulations! Your hand-assembled drone is flying! This is an exciting milestone, and you've taken the first step to becoming a drone expert.

## Next Steps

In the next project, you'll learn how to change different sound effects and LED effects for your drone, creating your own personalized aircraft.

[Continue to Project 02: Customization →](/tutorials/en/beginner/02-customization)
