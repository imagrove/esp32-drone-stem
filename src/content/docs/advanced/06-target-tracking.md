---
title: "Target Tracking"
description: "Use the OpenCV library to track colored targets in real time and let the drone follow them automatically."
sidebar:
  order: 6
---

## Overview

Target tracking is an important application of drone intelligence. In this project, you will learn how to track a colored target in real time using the OpenCV library.

## What You'll Learn

- Using the OpenCV library
- Color space conversion
- Target detection algorithms
- Real-time tracking control

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| ESP32-S3 Drone | 1 | - |
| OV2640 Camera Module | 1 | - |
| Red Ball | 1 | 10 cm diameter |

## Step 1: Install the OpenCV Library

Unzip `esp32_opencv.zip` and copy the library files into the project's `components` folder.

## Step 2: Open the Project

Unzip `color_tracking.zip` and open it with VS Code.

## Step 3: Implement the Color Tracking Function

Open `color_tracking.c` and implement color tracking:

```c
void color_tracking(uint8_t* frame, int width, int height, int* target_x, int* target_y) {
    // 1. Convert the RGB image to HSV color space
    cvt_color_rgb2hsv(frame, width, height);
    
    // 2. Apply color threshold filtering (red)
    uint8_t mask[width * height];
    hsv_threshold(frame, width, height, mask, 0, 10, 100, 255, 100, 255);
    
    // 3. Find contours and compute the target center
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

## Step 4: Add Tracking Logic

Open `flight_control.c` and add the following to the main loop:

```c
int target_x, target_y;
color_tracking(frame, width, height, &target_x, &target_y);

if (target_x != -1) {
    // Target on the left → drone turns left
    if (target_x < width / 2 - 20) {
        motorsSetRatio(MOTOR_M1, current_ratio * 0.8);
        motorsSetRatio(MOTOR_M2, current_ratio * 1.2);
        motorsSetRatio(MOTOR_M3, current_ratio * 0.8);
        motorsSetRatio(MOTOR_M4, current_ratio * 1.2);
    }
    // Target on the right → drone turns right
    else if (target_x > width / 2 + 20) {
        motorsSetRatio(MOTOR_M1, current_ratio * 1.2);
        motorsSetRatio(MOTOR_M2, current_ratio * 0.8);
        motorsSetRatio(MOTOR_M3, current_ratio * 1.2);
        motorsSetRatio(MOTOR_M4, current_ratio * 0.8);
    }
    // Target in the center → drone moves forward
    else {
        motorsSetRatio(MOTOR_M1, current_ratio * 1.1);
        motorsSetRatio(MOTOR_M2, current_ratio * 1.1);
        motorsSetRatio(MOTOR_M3, current_ratio * 1.1);
        motorsSetRatio(MOTOR_M4, current_ratio * 1.1);
    }
}
```

## Step 5: Testing

1. Move a red ball around and check whether the drone can follow it steadily
2. Challenge: lead the drone all the way around a table with the red ball

## Troubleshooting

### Inaccurate recognition
- Adjust the color threshold
- Improve the lighting conditions

### Unstable tracking
- Tune the control parameters
- Add a prediction algorithm

## Achievement

Congratulations! You have implemented a target tracking system — an important application of drone intelligence!

## Next Steps

In the next project, you will learn how to deploy an AI model on the ESP32-S3.
