---
title: "Target Tracking"
description: "Use OpenCV library for real-time color target tracking."
level: advanced
order: 6
duration: "4 hours"
prerequisites: ["Complete Project 05"]
draft: false
lang: en
---

## Overview

Target tracking is an important application of drone intelligence. In this project, you will learn how to use OpenCV library for real-time color target tracking.

## What You'll Learn

- OpenCV library usage
- Color space conversion
- Contour detection
- Target tracking algorithms

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| ESP32-S3 Drone | 1 | - |
| OV2640 Camera Module | 1 | - |
| Red Ball | 1 | Tracking target |
| Computer | 1 | With Python + OpenCV installed |

## Step 1: Understand OpenCV

OpenCV is an open-source computer vision library that provides rich image processing and computer vision algorithms.

## Step 2: Open the Project

Extract `opencv_tracking.zip` and open with VS Code.

## Step 3: Implement Color Recognition

Open `color_tracking.c` and implement color recognition:

```c
void color_tracking(uint8_t* frame, int width, int height, int* target_x, int* target_y) {
    // 1. Convert RGB image to HSV space
    cvt_color_rgb2hsv(frame, width, height);
    
    // 2. Apply color threshold filtering (red)
    uint8_t mask[width * height];
    hsv_threshold(frame, width, height, mask, 0, 10, 100, 255, 100, 255);
    
    // 3. Find contours and calculate target center
    find_contours(mask, width, height);
    if (has_contours()) {
        *target_x = get_largest_contour_center_x();
        *target_y = get_largest_contour_center_y();
    } else {
        *target_x = -1;
        *target_y = -1;
    }
}
```

## Step 4: Add Tracking Control

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

## Step 5: Compile, Flash and Test

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

In the next project, you will learn how to deploy TinyYOLOv3 model on ESP32-S3 for object detection.

[Continue to Project 07: AI Recognition →](/tutorials/en/advanced/07-ai-recognition)
