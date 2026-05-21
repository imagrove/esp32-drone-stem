---
title: "Obstacle Avoidance Master"
description: "Use ultrasonic sensors to implement front obstacle avoidance, automatically slowing down or turning when encountering obstacles."
level: intermediate
order: 6
duration: "2 hours"
prerequisites: ["Complete Project 05"]
draft: false
lang: en
---

## Overview

Obstacle avoidance is an important intelligent function of drones. In this project, you will learn how to use ultrasonic sensors to implement front obstacle avoidance.

## What You'll Learn

- Ultrasonic sensor principles
- Sensor interface programming
- Conditional logic design
- Real-time control

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| ESP32 Drone | 1 | - |
| HC-SR04 Ultrasonic Module | 1 | Distance measurement sensor |
| Breadboard, Dupont Lines | Several | For connections |

## Step 1: Hardware Wiring

Connect HC-SR04 to ESP32:

| HC-SR04 | ESP32 |
|---------|-------|
| VCC | 5V |
| GND | GND |
| Trig | GPIO 18 |
| Echo | GPIO 19 |

## Step 2: Open the Project

Extract `obstacle_avoid.zip` and open with VS Code.

## Step 3: Write Distance Measurement Function

Open `ultrasonic.c` and implement `ultrasonic_get_distance` function:

```c
float ultrasonic_get_distance(void) {
  // 1. Send 10us trigger signal
  gpio_set_level(TRIG_PIN, 1);
  ets_delay_us(10);
  gpio_set_level(TRIG_PIN, 0);
  
  // 2. Measure Echo high level duration
  uint32_t start = 0, end = 0;
  while (!gpio_get_level(ECHO_PIN)) start = esp_timer_get_time();
  while (gpio_get_level(ECHO_PIN)) end = esp_timer_get_time();
  
  // 3. Calculate distance: sound speed 340m/s, distance = time * speed / 2
  float distance = (end - start) * 0.034 / 2;
  return distance;
}
```

## Step 4: Add Obstacle Avoidance Logic

Open `flight_control.c` and add to the main loop:

```c
float distance = ultrasonic_get_distance();
if (distance < 50) { // Distance less than 50cm
  if (distance < 20) { // Distance less than 20cm
    // Emergency brake
    motorsSetRatio(MOTOR_M1, 0);
    motorsSetRatio(MOTOR_M2, 0);
    motorsSetRatio(MOTOR_M3, 0);
    motorsSetRatio(MOTOR_M4, 0);
  } else {
    // Slow down and turn left
    motorsSetRatio(MOTOR_M1, current_ratio * 0.5);
    motorsSetRatio(MOTOR_M2, current_ratio * 0.8);
    motorsSetRatio(MOTOR_M3, current_ratio * 0.5);
    motorsSetRatio(MOTOR_M4, current_ratio * 0.8);
  }
}
```

## Step 5: Test

Move obstacles (e.g., cardboard box) in front of the drone and observe if it can automatically avoid them.

## Troubleshooting

### Inaccurate distance measurement
- Check sensor connections
- Adjust sound speed parameter

### Slow obstacle avoidance response
- Optimize code execution frequency
- Reduce unnecessary delays

## Achievement

Congratulations! You have implemented the drone's obstacle avoidance function, which is an important step towards intelligence!

## Next Steps

In the next project, you will learn how to use the camera to implement simple visual recognition functions.

[Continue to Project 07: Vision Engineer →](/tutorials/en/intermediate/07-vision)
