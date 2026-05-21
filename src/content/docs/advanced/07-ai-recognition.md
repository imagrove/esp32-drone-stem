---
title: "AI Recognition"
description: "Deploy TinyYOLOv3 model on ESP32-S3 for simple object detection."
sidebar:
  order: 7
---

## Overview

AI recognition is a cutting-edge technology in drone intelligence. In this project, you will learn how to deploy a TinyYOLOv3 model on ESP32-S3 to perform object detection.

## What You'll Learn

- Deep learning model deployment
- Model quantization
- Inference optimization
- Object detection algorithms

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| ESP32-S3 Drone | 1 | - |
| OV2640 Camera Module | 1 | - |
| MicroSD Card | 1 | 8GB+ |

## Step 1: Prepare the Model

1. Download a pre-trained TinyYOLOv3 model (COCO dataset)
2. Use the `tensorflow lite converter` to convert the model to INT8 quantized `.tflite` format
3. Copy the model and the label file `coco_labels.txt` to the MicroSD card

## Step 2: Hardware Wiring

MicroSD card module → ESP32-S3 SPI interface

## Step 3: Open the Project

Unzip `ai_detection.zip` and open it with VS Code.

## Step 4: Implement the Inference Function

Open `yolo_detect.c` and implement object detection:

```c
void yolo_detect(uint8_t* frame, int width, int height, 
                 Detection* detections, int* detection_count) {
    // 1. Preprocess image: resize to 416x416, normalize
    preprocess_image(frame, width, height);
    
    // 2. Load model and run inference
    load_model("/sdcard/tiny_yolo_v3.tflite");
    run_inference(preprocessed_frame);
    
    // 3. Postprocess: decode output and filter low-confidence detections
    decode_output(output, detections, detection_count);
    filter_detections(detections, detection_count, 0.5); // confidence threshold 0.5
}
```

## Step 5: Testing

1. Place different targets (e.g., person, chair) in front of the drone
2. Observe the detection results
3. Challenge: add a "target priority" feature so the drone tracks people first instead of other objects

## Troubleshooting

### Slow inference
- Optimize the model size
- Use INT8 quantization

### Low detection accuracy
- Adjust the confidence threshold
- Improve the input image quality

## Achievement

Congratulations! You have successfully implemented AI object detection — a cutting-edge technology in drone intelligence!

## Next Steps

In the next project, you will learn how to build a multi-drone MESH network.
