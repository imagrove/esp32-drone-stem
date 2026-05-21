---
title: "PID Tuning Challenge"
description: "Adjust PID parameters to make the drone hover stably even in windy conditions."
level: intermediate
order: 2
duration: "1.5 hours"
prerequisites: ["Complete Project 01"]
draft: false
lang: en
---

## Overview

The PID controller is the core of stable drone flight. In this project, you will learn about PID control principles and adjust parameters to make the drone fly more stably.

## What You'll Learn

- PID controller principles
- Closed-loop control systems
- Parameter tuning methods
- Stability analysis

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| ESP32 Drone | 1 | Fully assembled |
| Fan | 1 | To simulate light wind |
| Computer | 1 | With browser installed |

## Step 1: Understand PID Control

PID is a classic control algorithm consisting of three parts:

| Parameter | Name | Function |
|-----------|------|----------|
| P | Proportional | Controls response speed |
| I | Integral | Eliminates steady-state error |
| D | Derivative | Prevents overshoot and oscillation |

## Step 2: Find PID Parameter File

Open `controller_pid.c` and find the PID structure:

```c
typedef struct {
  float kp; // Proportional coefficient, controls reaction speed
  float ki; // Integral coefficient, eliminates static error
  float kd; // Derivative coefficient, prevents overshoot
} PID_t;
```

Find the `pid_update` function:

```c
float pid_update(PID_t* pid, float setpoint, float feedback) {
  float error = setpoint - feedback;
  pid->integral += error * dt;
  float derivative = (error - pid->last_error) / dt;
  pid->last_error = error;
  return pid->kp * error + pid->ki * pid->integral + pid->kd * derivative;
}
```

## Step 3: Initial Parameter Testing

Default parameters: `kp=0.5, ki=0.1, kd=0.2`

Test indoor flight and observe stability:

| Phenomenon | Adjustment |
|------------|------------|
| Excessive shaking | Decrease `kp` |
| Cannot take off | Increase `kp` |
| Drifting | Increase `ki` |
| Slow response | Increase `kd` |

## Step 4: Light Wind Testing

1. Use a fan to simulate light wind (1 meter away, medium speed)
2. Adjust parameters until the drone can hover stably

## Step 5: Record Optimal Parameters

Enter parameters in `pid_tuner.html` to generate a tuning report.

## Troubleshooting

### Drone shakes violently
- Decrease `kp` value
- Increase `kd` value

### Drone cannot maintain altitude
- Increase `ki` value
- Check barometer data

## Achievement

Congratulations! You have mastered the basic methods of PID tuning, which is a core skill for drone control!

## Next Steps

In the next project, you will learn how to read barometer data for more precise altitude hold.

[Continue to Project 03: Altimeter Decryption →](/tutorials/en/intermediate/03-altimeter)
