---
title: "Altimeter Decryption"
description: "Read barometer data, calculate real altitude, and implement more precise altitude hold functionality."
level: intermediate
order: 3
duration: "1.5 hours"
prerequisites: ["Complete Project 02"]
draft: false
lang: en
---

## Overview

The barometer is the core sensor for drone altitude hold functionality. In this project, you will learn how to read barometer data, calculate real altitude, and implement more precise altitude hold.

## What You'll Learn

- Barometer working principles
- Altitude calculation methods
- Data filtering techniques
- Dead zone control

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| ESP32 Drone | 1 | Fully assembled |
| BMP280 Barometer Module | 1 | Measures pressure and altitude |
| Serial Debug Assistant | 1 | `serial_debug.exe` |

## Step 1: Hardware Wiring

Connect BMP280 to ESP32:

| BMP280 | ESP32 |
|--------|-------|
| VCC | 3.3V |
| GND | GND |
| SCL | GPIO 22 |
| SDA | GPIO 21 |

## Step 2: Open the Project

Extract `barometer.zip` and open with VS Code.

## Step 3: Modify Pressure Calibration

Open `sensors_bmp280.c` and find the `bmp280_init` function:

```c
void bmp280_init(void) {
  // ... initialization code ...
  p0 = 101325; // Sea level pressure (Pa)
}
```

Check local current pressure using a weather app (e.g., 100800 Pa) and modify `p0`:

```c
p0 = 100800; // Local current pressure
```

## Step 4: Compile and Flash

Compile and flash the code, open the serial debug assistant, and observe the data:
- When stationary, pressure values should be stable
- When moving the drone up and down, altitude values should change accordingly

## Step 5: Optimize Altitude Hold

Open `altitude_hold.c` and add "altitude hold dead zone":

```c
if (fabs(current_altitude - target_altitude) < 0.1) {
  // Altitude difference less than 0.1 meters, no adjustment
  return;
}
```

## Step 6: Test

Set target altitude to 1 meter and observe if the drone can maintain stable altitude.

## Troubleshooting

### Large altitude data fluctuations
- Add low-pass filter
- Check sensor connections

### Inaccurate altitude calculation
- Calibrate local pressure value
- Check temperature compensation

## Achievement

Congratulations! You have mastered the use of the barometer and implemented precise altitude hold functionality!

## Next Steps

In the next project, you will learn how to read IMU data and calculate drone attitude using complementary filtering algorithm.

[Continue to Project 04: Attitude Magician →](/tutorials/en/intermediate/04-attitude)
