---
title: "AI Recognition"
description: "Deploy TinyYOLOv3 model on ESP32-S3 for object detection."
level: advanced
order: 7
duration: "5 hours"
prerequisites: ["Complete Project 06"]
draft: false
lang: en
---

## Overview

AI object detection is the cutting-edge direction of drone intelligence. In this project, you will learn how to deploy TinyYOLOv3 model on ESP32-S3 for object detection.

## What You'll Learn

- Neural network basics
- Model quantization
- TensorFlow Lite for Microcontrollers
- Edge AI deployment

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| ESP32-S3 Drone | 1 | - |
| OV2640 Camera Module | 1 | - |
| Computer | 1 | With Python + TensorFlow installed |
| SD Card | 1 | For storing model files |

## Step 1: Understand TinyYOLOv3

TinyYOLOv3 is a lightweight object detection model suitable for deployment on resource-constrained devices.

## Step 2: Model Quantization

Use TensorFlow Lite to quantize the model:

```python
import tensorflow as tf

# Load model
model = tf.keras.models.load_model('tiny_yolo_v3.h5')

# Quantize model
converter = tf.lite.TFLiteConverter.from_keras_model(model)
converter.optimizations = [tf.lite.Optimize.DEFAULT]
tflite_model = converter.convert()

# Save quantized model
with open('tiny_yolo_v3.tflite', 'wb') as f:
    f.write(tflite_model)
```

## Step 3: Deploy Model on ESP32-S3

Open `ai_detection.c` and implement model inference:

```c
void yolo_detect(uint8_t* frame, int width, int height, 
                 Detection* detections, int* detection_count) {
    // 1. Preprocess image: resize to 416x416, normalize
    preprocess_image(frame, width, height);
    
    // 2. Load model and execute inference
    load_model("/sdcard/tiny_yolo_v3.tflite");
    run_inference(preprocessed_frame);
    
    // 3. Postprocess: decode output, filter low confidence detections
    decode_output(output, detections, detection_count);
    filter_detections(detections, detection_count, 0.5); // Confidence threshold 0.5
}
```

## Step 4: Compile, Flash and Test

1. Copy the model file to SD card
2. Compile and flash the code
3. Test object detection functionality

## Troubleshooting

### Model loading fails
- Check if model file path is correct
- Confirm model format is correct

### Detection speed is slow
- Reduce input image resolution
- Use more lightweight models

## Achievement

Congratulations! You have successfully deployed AI object detection model on ESP32-S3, which is the cutting-edge direction of drone intelligence!

## Next Steps

In the next project, you will learn how to build multi-drone communication networks.

[Continue to Project 08: Multi-Drone Mesh Network →](/tutorials/en/advanced/08-mesh-network)
