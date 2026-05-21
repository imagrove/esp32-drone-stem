---
title: "Target Tracking"
description: "Use the camera to implement color target tracking, making the drone automatically follow a red ball."
level: beginner
order: 5
duration: "2 hours"
prerequisites: ["Complete Project 04"]
draft: false
lang: en
---

## Overview

Target tracking is an important application of drone intelligence. In this project, you will learn how to use the camera to implement color target tracking, making the drone automatically follow a red ball.

## What You'll Learn

- Color recognition principles
- Target detection algorithms
- Automatic tracking control
- Visual servoing basics

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| ESP32-S3 Drone with Camera | 1 | - |
| Red Ball | 1 | Diameter 10cm |
| Computer | 1 | With VS Code + ESP-IDF environment |
| USB Cable | 1 | For programming |

## Step 1: Understand Color Recognition

Color recognition converts the image to HSV color space and filters by color threshold.

## Step 2: Open the Project

Extract `color_tracking.zip` and open with VS Code.

## Step 3: Implement Color Recognition

Open `color_tracking.c` and implement color recognition:

```c
void detect_red_object(uint8_t* frame, int width, int height, int* center_x, int* center_y) {
    int red_pixels = 0;
    int sum_x = 0;
    int sum_y = 0;
    
    for (int y = 0; y < height; y++) {
        for (int x = 0; x < width; x++) {
            // Convert RGB to HSV
            uint8_t r = frame[(y * width + x) * 3];
            uint8_t g = frame[(y * width + x) * 3 + 1];
            uint8_t b = frame[(y * width + x) * 3 + 2];
            
            float h, s, v;
            rgb_to_hsv(r, g, b, &h, &s, &v);
            
            // Check if it's red (Hue: 0-10 or 170-180)
            if ((h < 10 || h > 170) && s > 100 && v > 100) {
                red_pixels++;
                sum_x += x;
                sum_y += y;
            }
        }
    }
    
    if (red_pixels > 100) {
        *center_x = sum_x / red_pixels;
        *center_y = sum_y / red_pixels;
    } else {
        *center_x = -1;
        *center_y = -1;
    }
}
```

## Step 4: Add Tracking Control

Open `flight_control.c` and add tracking logic:

```c
void track_red_ball() {
    int target_x, target_y;
    detect_red_object(frame_buffer, WIDTH, HEIGHT, &target_x, &target_y);
    
    if (target_x != -1) {
        // Calculate error from image center
        int error_x = target_x - WIDTH / 2;
        int error_y = target_y - HEIGHT / 2;
        
        // Convert to velocity commands
        float vx = 0;
        float vy = -error_x * 0.001; // Yaw control
        float vz = -error_y * 0.001; // Altitude control
        
        // Move forward if target is centered
        if (abs(error_x) < 50) {
            vx = 0.3; // Forward speed
        }
        
        commanderSetVelocitySetpoint(vx, vy, vz, 0);
    }
}
```

## Step 5: Compile and Test

1. Compile and flash the code
2. Place the red ball in front of the drone
3. Power on and observe if the drone follows the ball

## Troubleshooting

### Cannot recognize red ball
- Adjust color threshold
- Improve lighting conditions

### Tracking is unstable
- Add smoothing filter
- Optimize control parameters

## Achievement

Congratulations! You have implemented target tracking functionality, which is an important application of drone intelligence!

## Next Steps

In the next project, you will learn how to implement multi-drone formation flight.

[Continue to Project 06: Formation Flight →](/tutorials/en/beginner/06-formation)
