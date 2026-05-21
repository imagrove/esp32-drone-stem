---
title: "Path Planning"
description: "Use a path planning tool to make the drone automatically draw a figure-8 or a heart shape, turning it into a sky artist."
sidebar:
  order: 3
---

## Overview

Now that you know how to customize your drone, let's turn it into a sky artist! In this project, you will learn how to use a path planning tool to make the drone automatically draw a figure-8 or a heart, showcasing its precise flight ability.

## What You'll Learn

- The basics of path planning
- How to use a path design tool
- How to generate path firmware
- How to test automatic flight paths

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| Assembled drone | 1 | The drone built in Project 02 |
| Computer | 1 | With `path_designer.exe` installed |
| Colored tape | 1 roll | For floor markings |
| USB cable | 1 | For firmware flashing |

## Step 1: Design the Flight Path

### 1.1 Prepare the path design tool

1. Go to the resource download page and download `path_designer.exe` to your computer
2. Install and open the tool

### 1.2 Generate the figure-8 path firmware

1. In `path_designer.exe`, choose the "Figure-8 path" template
2. Click the "Generate firmware" button
3. The tool will generate a `path_8.bin` file on your desktop

### 1.3 Generate the heart path firmware

1. In the same tool, choose the "Heart" template
2. Click "Generate firmware"
3. The tool will generate a `path_heart.bin` file on your desktop — save it for a later challenge

## Step 2: Flash the Path Firmware

### 2.1 Flash the figure-8 path firmware

1. Hold down the "BOOT" button on the ESP32 board while plugging the USB cable into the computer
2. Open `flash_tool.exe` and select the `path_8.bin` file
3. Click "Flash" and wait for the process to complete (about 10 seconds)
4. After the tool shows "Flash successful", unplug the USB cable

## Step 3: Flight Test

### 3.1 Floor markings

1. Use colored tape to draw a figure-8 on the floor as a reference
2. Make sure the flight area is open and free of obstacles

### 3.2 Automatic flight test

1. Turn on the drone power (the lithium battery switch)
2. Connect your phone to the drone's Wi-Fi
3. Open the `Drone Control` app
4. Tap the "Auto flight" button in the app
5. Watch whether the drone flies along the figure-8 path!

## Step 4: Challenge Tasks

### 4.1 Heart path challenge

1. Flash the `path_heart.bin` firmware to the drone
2. Use colored tape to draw a heart shape on the floor as a reference
3. Test whether the drone can draw a heart in the air
4. You could use this trick to give a friend a romantic surprise!

### 4.2 Custom path challenge

1. In `path_designer.exe`, try to create your own custom path
2. Generate the corresponding firmware and flash it to the drone
3. Test the flight result of your custom path

## Troubleshooting

### Drone deviates from the path
- Make sure the drone is placed at the starting point of the path
- Check that the battery is sufficiently charged
- Make sure the flight environment is windless

### Automatic flight fails
- Confirm the firmware has been flashed successfully
- Check that the drone is placed on a level surface
- Try re-calibrating the gyroscope

## Achievement

Congratulations! Your drone is now a sky artist! By using a path planning tool, you have learned how to make the drone fly along a preset path and draw beautiful patterns. This shows your understanding of drone control and how to apply it.

## Next Steps

In the next project, you will learn how to install a camera on the drone, watch the drone's perspective on your phone and experience the fun of first-person-view flight.
