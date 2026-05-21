---
title: "Personalized Drone"
description: "Flash different firmware to change your drone's takeoff sound and LED effects, creating your own personalized aircraft."
sidebar:
  order: 2
---

## Overview

Now that you've successfully assembled and flown your first drone, let's add some personality! In this project, you'll learn how to change your drone's takeoff sound and LED effects by flashing different firmware, creating your very own personalized aircraft.

## What You'll Learn

- Basic principles of firmware flashing
- How to change drone sound effects
- How to change LED lighting effects
- Personalization and customization techniques

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| Assembled Drone | 1 | Drone from Project 01 |
| USB Cable | 1 | For flashing firmware |
| Computer | 1 | For downloading and flashing firmware |

## Step 1: Change Takeoff Sound

### 1.1 Download Sound Firmware

1. Visit the resource download page and download `sound_happy.bin` (Ode to Joy sound) to your desktop
2. Also download `sound_birthday.bin` (Birthday Song sound) for the challenge task later

### 1.2 Flash Sound Firmware

1. Hold down the "BOOT" button on the ESP32 board while plugging the USB cable into your computer
2. Open `flash_tool.exe` and select the `sound_happy.bin` file
3. Click the "Flash" button and wait for flashing to complete (about 10 seconds)
4. After the tool shows "Flash Successful", remove the USB cable

### 1.3 Test the Sound

1. Turn on the drone power (lithium battery switch)
2. Connect the phone APP and take off
3. Listen to the "Ode to Joy" melody playing during takeoff!

## Step 2: Change LED Effects

### 2.1 Download LED Firmware

1. Visit the resource download page and download `led_rainbow.bin` (rainbow effect) to your desktop
2. Also download `led_blink.bin` (blinking effect) for the challenge task later

### 2.2 Flash LED Firmware

1. Hold down the "BOOT" button on the ESP32 board while plugging the USB cable into your computer
2. Open `flash_tool.exe` and select the `led_rainbow.bin` file
3. Click the "Flash" button and wait for flashing to complete (about 10 seconds)
4. After the tool shows "Flash Successful", remove the USB cable

### 2.3 Test the LED Effect

1. Turn on the drone power (lithium battery switch)
2. Check if the drone's LEDs have changed to rainbow colors — super cool!
3. The effect becomes even more visible after takeoff

## Step 3: Challenge Tasks

### 3.1 Birthday Song Challenge

1. Flash the `sound_birthday.bin` firmware to the drone
2. Test if the Birthday Song plays during takeoff
3. You can use this effect to surprise a friend!

### 3.2 Blinking LED Challenge

1. Flash the `led_blink.bin` firmware to the drone
2. Observe the LED blinking effect
3. Try observing the LED changes in different flight modes

## Troubleshooting

### Firmware Flashing Failed
- Make sure you hold the "BOOT" button while plugging in the USB cable
- Check if USB drivers are properly installed
- Try using a different USB port

### Sound or LED Effects Not Working
- Confirm the firmware was flashed successfully
- Check if the battery has sufficient charge
- Try re-flashing the firmware

## Achievement

Congratulations! Your drone now has its own personality! By changing different sound and LED effects, you've learned how to personalize your drone, making it stand out from the crowd.

## Next Steps

In the next project, you'll learn how to use path planning tools to make your drone automatically draw figure-8s or heart shapes in the air, becoming a sky artist.
