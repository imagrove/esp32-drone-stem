---
title: "FPV Flight"
description: "Install a camera on the drone, see what the drone sees through your phone, and experience the fun of first-person-view flight."
sidebar:
  order: 4
---

## Overview

Now that you have learned how to turn the drone into a sky artist, let's give it a pair of eyes! In this project you will learn how to install a camera on the drone, watch the drone's perspective on your phone, and experience the fun of first-person-view (FPV) flight.

## What You'll Learn

- How to install a camera module
- How to connect a camera to the ESP32
- How to implement First-Person View (FPV)
- Real-time video streaming

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| Assembled drone | 1 | The drone built in Project 03 |
| OV2640 camera module | 1 | For first-person view |
| USB cable | 1 | For firmware flashing |
| Computer | 1 | For downloading and flashing firmware |

## Step 1: Install the Camera

### 1.1 Mount the camera

1. Use double-sided tape to secure the OV2640 camera module on the front of the drone's frame
2. Make sure the camera lens faces forward, slightly tilted downward (about 15 degrees)

### 1.2 Camera wiring

Connect the OV2640 camera module to the ESP32 development board:

- Camera VCC → ESP32 3.3V
- Camera GND → ESP32 GND
- Camera SCL → ESP32 GPIO 22
- Camera SDA → ESP32 GPIO 21

## Step 2: Flash the Camera Firmware

### 2.1 Download the camera firmware

1. Go to the resource download page and download `fpv.bin` to your desktop

### 2.2 Flash the firmware

1. Hold down the "BOOT" button on the ESP32 board while plugging the USB cable into the computer
2. Open `flash_tool.exe` and select the `fpv.bin` file
3. Click "Flash" and wait for the process to complete (about 10 seconds)
4. After the tool shows "Flash successful", unplug the USB cable

## Step 3: Experience First-Person View

### 3.1 Connect to the drone

1. Turn on the drone power (the lithium battery switch)
2. Connect your phone to the drone's Wi-Fi (SSID: `ESP-Drone`, password: `12345678`)
3. Open the `Drone Control` app

### 3.2 View the camera feed

1. Tap the "Camera" button in the app
2. The screen will show what the drone sees!
3. Control the drone and feel like you are actually flying it!

### 3.3 Flight test

1. Try flying the drone indoors and watch the camera feed
2. Mind the flight safety — avoid hitting obstacles
3. Enjoy observing your surroundings from a new perspective

## Step 4: Challenge Tasks

### 4.1 Ceiling exploration challenge

1. Fly the drone up toward the ceiling
2. Use the camera to capture the ceiling
3. See what interesting details you can find!

### 4.2 Obstacle traversal challenge

1. Set up simple obstacles indoors (chairs, tables, etc.)
2. Use the first-person view to fly through the obstacles
3. Practice precise control and spatial awareness

## Troubleshooting

### No camera feed
- Check the camera wiring
- Confirm the firmware has been flashed successfully
- Check whether the camera is damaged

### Video is laggy
- Make sure the battery is sufficiently charged
- Reduce Wi-Fi interference in the flight environment
- Keep the phone close enough to the drone

## Achievement

Congratulations! Your drone now has a pair of eyes! By installing a camera and experiencing first-person view, you have entered a new realm of drone flight. You can now see the world from your drone's perspective like a real pilot — it's an amazing experience.

## Next Steps

In the next project, you will learn how to make the drone automatically track a red ball, becoming your "tagalong" and experiencing smarter flight features.
