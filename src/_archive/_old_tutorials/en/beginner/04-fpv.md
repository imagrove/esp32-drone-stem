---
title: "FPV Flight"
description: "Add a camera to the drone and implement First Person View (FPV) flight."
level: beginner
order: 4
duration: "2 hours"
prerequisites: ["Complete Project 03"]
draft: false
lang: en
---

## Overview

FPV (First Person View) flight is one of the most exciting applications of drones. In this project, you will learn how to add a camera to the drone and implement FPV flight.

## What You'll Learn

- Camera module usage
- Video streaming
- FPV goggles setup
- Immersive flight experience

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| ESP32-S3 Drone | 1 | - |
| OV2640 Camera Module | 1 | - |
| FPV Goggles | 1 | Optional |
| Smartphone | 1 | As display |

## Step 1: Hardware Connection

Connect the OV2640 camera to ESP32-S3 DVP interface:

| OV2640 | ESP32-S3 |
|--------|----------|
| VCC | 3.3V |
| GND | GND |
| SCL | GPIO 27 |
| SDA | GPIO 26 |
| VSYNC | GPIO 25 |
| HREF | GPIO 23 |
| PCLK | GPIO 22 |
| D0-D7 | GPIO 4-11 |

## Step 2: Open the Project

Extract `fpv_camera.zip` and open with VS Code.

## Step 3: Initialize Camera

Open `camera.c` and initialize the camera:

```c
void camera_init() {
    camera_config_t config;
    config.ledc_channel = LEDC_CHANNEL_0;
    config.ledc_timer = LEDC_TIMER_0;
    config.pin_d0 = 4;
    config.pin_d1 = 5;
    config.pin_d2 = 6;
    config.pin_d3 = 7;
    config.pin_d4 = 8;
    config.pin_d5 = 9;
    config.pin_d6 = 10;
    config.pin_d7 = 11;
    config.pin_xclk = 15;
    config.pin_pclk = 22;
    config.pin_vsync = 25;
    config.pin_href = 23;
    config.pin_sscb_sda = 26;
    config.pin_sscb_scl = 27;
    config.pin_pwdn = -1;
    config.pin_reset = -1;
    config.xclk_freq_hz = 20000000;
    config.pixel_format = PIXFORMAT_JPEG;
    config.frame_size = FRAMESIZE_QVGA;
    config.jpeg_quality = 12;
    config.fb_count = 1;
    
    esp_err_t err = esp_camera_init(&config);
    if (err != ESP_OK) {
        ESP_LOGE(TAG, "Camera init failed");
        return;
    }
}
```

## Step 4: Start Video Stream

Open `video_stream.c` and start streaming:

```c
void start_video_stream() {
    // Create Wi-Fi hotspot
    wifi_init_softap();
    
    // Start HTTP server for video stream
    httpd_config_t config = HTTPD_DEFAULT_CONFIG();
    httpd_handle_t server = NULL;
    
    if (httpd_start(&server, &config) == ESP_OK) {
        httpd_uri_t stream_uri = {
            .uri = "/stream",
            .method = HTTP_GET,
            .handler = stream_handler,
            .user_ctx = NULL
        };
        httpd_register_uri_handler(server, &stream_uri);
    }
}
```

## Step 5: View Video Stream

1. Power on the drone
2. Connect phone to drone's Wi-Fi hotspot
3. Open browser and visit `http://192.168.4.1/stream`
4. Or use FPV goggles to view the stream

## Troubleshooting

### No video output
- Check camera connections
- Verify camera initialization

### Video is laggy
- Reduce resolution
- Lower frame rate

## Achievement

Congratulations! You have implemented FPV flight, which is one of the most exciting applications of drones!

## Next Steps

In the next project, you will learn how to implement target tracking functionality.

[Continue to Project 05: Target Tracking →](/tutorials/en/beginner/05-tracking)
