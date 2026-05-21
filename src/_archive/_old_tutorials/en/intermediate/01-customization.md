---
title: "My Drone, My Definition"
description: "Modify the drone's takeoff sound effects, motor speed range, and LED lighting effects to understand the code structure."
level: intermediate
order: 1
duration: "1 hour"
prerequisites: ["Complete beginner tutorials"]
draft: false
lang: en
---

## Overview

In this project, you will learn how to modify the drone's code, including takeoff sound effects, motor speed, and LED lighting effects, to deeply understand the drone's code structure.

## What You'll Learn

- C language arrays and macros
- ESP-IDF project structure
- Code compilation and flashing process
- Buzzer, LED, and motor control

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| ESP32-S3 Drone | 1 | Fully assembled |
| Computer | 1 | With VS Code + ESP-IDF plugin installed |
| USB Cable | 1 | For programming |

## Step 1: Open the Project

1. Extract `starter_code.zip`
2. Open the folder with VS Code

## Step 2: Explore Code Structure

Understand the project's file organization:

| File | Function |
|------|----------|
| `main.c` | Main function, controls flight flow |
| `buzzer.c` | Buzzer control, handles sound effects |
| `led.c` | LED control, handles lighting effects |
| `motors.c` | Motor control, handles speed |

## Step 3: Modify Takeoff Sound

Open `buzzer.c` and find the `tone` array:

```c
// Original code: takeoff sound
uint16_t tone[] = {440, 880, 440, 0}; // A4, A5, A4, silence
```

Change it to the first two lines of "Ode to Joy":

```c
uint16_t tone[] = {330, 330, 392, 392, 440, 440, 392, 0}; // E4, E4, G4, G4, A4, A4, G4, silence
```

## Step 4: Modify Motor Speed

Open `motors.c` and find the `MOTORS_TEST_RATIO` macro:

```c
#define MOTORS_TEST_RATIO (uint16_t)(0.2*(1<<16)) // 20% speed
```

Change it to 30% speed:

```c
#define MOTORS_TEST_RATIO (uint16_t)(0.3*(1<<16)) // 30% speed
```

## Step 5: Compile and Flash

1. Press `F1`, type `ESP-IDF: Build` to compile the project
2. Press `F1`, type `ESP-IDF: Flash` to flash to the drone

## Step 6: Test the Effects

1. Power on and listen if the takeoff sound has changed
2. Press the test button to see if the motor speed is faster

## Troubleshooting

### Compilation Failed
- Check if ESP-IDF environment is properly installed
- Ensure there are no syntax errors in the code

### Flashing Failed
- Check USB connection
- Confirm drivers are installed

## Achievement

Congratulations! You have successfully modified the drone's code and understood the basic code structure. This is the first step to becoming a flight engineer!

## Next Steps

In the next project, you will learn how to adjust PID parameters to make the drone fly more stably.

[Continue to Project 02: PID Tuning →](/tutorials/en/intermediate/02-pid-tuning)
