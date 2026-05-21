---
title: "Target Tracking"
description: "Make the drone automatically track a red ball, becoming your 'tagalong' and experiencing smarter flight features."
sidebar:
  order: 5
---

## Overview

Now that you have learned how to install a camera on the drone and experience first-person view, let's make it smarter! In this project you will learn how to make the drone automatically track a red ball, becoming your "tagalong" and experiencing smarter flight features.

## What You'll Learn

- The basics of color recognition
- Target tracking algorithms
- Automatic flight control
- Intelligent flight modes

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| Drone with camera installed | 1 | The drone built in Project 04 |
| Red ball | 1 | 10 cm diameter, used as the tracking target |
| USB cable | 1 | For firmware flashing |
| Computer | 1 | For downloading and flashing firmware |

## Step 1: Flash the Tracking Firmware

### 1.1 Download the tracking firmware

1. Go to the resource download page and download `track_ball.bin` to your desktop

### 1.2 Flash the firmware

1. Hold down the "BOOT" button on the ESP32 board while plugging the USB cable into the computer
2. Open `flash_tool.exe` and select the `track_ball.bin` file
3. Click "Flash" and wait for the process to complete (about 10 seconds)
4. After the tool shows "Flash successful", unplug the USB cable

## Step 2: Test the Tracking Feature

### 2.1 Preparation

1. Turn on the drone power (the lithium battery switch)
2. Connect your phone to the drone's Wi-Fi
3. Open the `Drone Control` app

### 2.2 Start the tracking mode

1. Tap the "Tracking mode" button in the app
2. The drone enters tracking mode and the camera starts looking for a red target

### 2.3 Test tracking

1. Hold the red ball and move it around in front of the drone
2. Watch whether the drone follows the red ball!
3. Try different speeds and directions to test the tracking effect

## Step 3: Challenge Tasks

### 3.1 Guiding-the-drone challenge

1. Use the red ball to guide the drone around a table
2. See whether it follows you
3. Practice controlling the speed of the red ball so the drone keeps an appropriate distance

### 3.2 Multi-person interaction challenge

1. Invite a friend to join in
2. Take turns holding the red ball to guide the drone
3. See who can keep the drone following for the longest time

## Troubleshooting

### Poor tracking
- Make sure the red ball is bright and contrasts well with the background
- Avoid testing in very bright or very dark environments
- Keep the red ball within the camera's field of view

### Drone reacts slowly
- Check that the battery is sufficiently charged
- Make sure the camera is clean and unobstructed
- Try adjusting the flight speed setting

## Achievement

Congratulations! Your drone has become your tagalong! By learning color recognition and target tracking, you have made your drone much smarter. It can recognize and track a red ball and follow your movements — this is a really fun feature.

## Next Steps

In the next project, you will learn how to use two drones to form a team and fly together, experiencing the fun of multi-drone formation.
