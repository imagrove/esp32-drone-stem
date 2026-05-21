---
title: "Formation Flight"
description: "Form a team with two drones and fly together — experience the fun of multi-drone formation."
sidebar:
  order: 6
---

## Overview

Now that you have learned how to make the drone track a red ball, let's try something more advanced! In this project you will learn how to use two drones to form a team and fly together, experiencing the fun of multi-drone formation and becoming a true drone commander.

## What You'll Learn

- The basics of multi-drone communication
- Control strategies for formation flight
- Leader–follower mode
- Cooperative flight of multiple drones

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| Assembled drone | 2 | The drones built in Project 05 (Drone A and Drone B) |
| USB cable | 1 | For firmware flashing |
| Computer | 1 | For downloading and flashing firmware |

## Step 1: Flash the Formation Firmware

### 1.1 Download the formation firmware

1. Go to the resource download page and download `leader.bin` (leader firmware) and `follower.bin` (follower firmware) to your desktop

### 1.2 Flash the leader firmware

1. Pick one drone as Drone A (the leader)
2. Hold down the "BOOT" button on Drone A's ESP32 board while plugging the USB cable into the computer
3. Open `flash_tool.exe` and select the `leader.bin` file
4. Click "Flash" and wait for the process to complete (about 10 seconds)
5. After the tool shows "Flash successful", unplug the USB cable

### 1.3 Flash the follower firmware

1. Pick the other drone as Drone B (the follower)
2. Hold down the "BOOT" button on Drone B's ESP32 board while plugging the USB cable into the computer
3. Open `flash_tool.exe` and select the `follower.bin` file
4. Click "Flash" and wait for the process to complete (about 10 seconds)
5. After the tool shows "Flash successful", unplug the USB cable

## Step 2: Test the Formation Flight

### 2.1 Preparation

1. Make sure both drones have fully charged batteries
2. Pick a spacious flight area, away from people and obstacles

### 2.2 Start the formation

1. Turn on Drone A (leader) and Drone B (follower) at the same time
2. Drone B will automatically connect to Drone A's Wi-Fi
3. Connect your phone to Drone A's Wi-Fi (SSID: `ESP-Drone-Leader`, password: `12345678`)
4. Open the `Drone Control` app

### 2.3 Formation flight test

1. Tap the "Formation flight" button in the app
2. Drone A will lead Drone B in flight!
3. Try controlling the leader and observe whether the follower keeps up
4. Enjoy the feeling of being a drone commander!

## Step 3: Challenge Tasks

### 3.1 Figure-8 formation challenge

1. Try to make both drones fly a figure-8 together
2. See whether the formation stays tidy
3. Practice controlling the speed to keep a good formation

### 3.2 Cooperative task challenge

1. Design a simple cooperative task, for example:
   - Both drones pass through an archway one after another
   - The two drones fly at different altitudes
   - The two drones take turns performing different moves
2. Test the cooperative effect

## Troubleshooting

### Follower cannot connect
- Make sure both drones are in the same area
- Check that the leader has started up correctly
- Try restarting both drones

### Formation is unstable
- Make sure the flight environment is windless
- Check that the battery is sufficiently charged
- Adjust the flight speed and avoid flying too fast

## Achievement

Congratulations! You are now a drone commander! By learning about multi-drone communication and formation flight, you have mastered the ability to control multiple drones working together. This is a very cool skill and shows your deep understanding of drone technology.

## Next Steps

Congratulations on completing every beginner tutorial project! You have grown from a drone newcomer into a capable young pilot.

In the beginner tutorials you learned how to:
- Assemble and fly your first drone
- Personalize sound and light effects
- Make the drone draw various patterns automatically
- Experience first-person view via a camera
- Make the drone track a red ball
- Control multiple drones in formation

These skills give you a solid foundation. You can keep exploring the intermediate and advanced tutorials to learn more advanced features and techniques.
