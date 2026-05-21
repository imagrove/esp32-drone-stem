---
title: "Path Planning"
description: "Implement basic path planning algorithms to make the drone fly along a preset route."
level: beginner
order: 3
duration: "1.5 hours"
prerequisites: ["Complete Project 02"]
draft: false
lang: en
---

## Overview

Path planning is the foundation of autonomous flight. In this project, you will learn how to implement basic path planning algorithms to make the drone fly along a preset route.

## What You'll Learn

- Basic path planning concepts
- Waypoint navigation
- Simple trajectory planning
- Autonomous flight basics

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| ESP32-S3 Drone | 1 | Fully assembled |
| Computer | 1 | With Python installed |
| `path_planner.py` | 1 | Path planning simulator |

## Step 1: Understand Path Planning

Path planning is the process of finding a safe and efficient path from a starting point to a destination.

## Step 2: Open the Project

Extract `path_planning.zip` and open with VS Code.

## Step 3: Set Waypoints

Open `waypoints.h` and define waypoints:

```c
typedef struct {
    float x;
    float y;
    float z;
} Waypoint;

Waypoint waypoints[] = {
    {0, 0, 1},    // Start point
    {2, 0, 1},    // Waypoint 1
    {2, 2, 1},    // Waypoint 2
    {0, 2, 1},    // Waypoint 3
    {0, 0, 1}     // Return to start
};

int num_waypoints = 5;
```

## Step 4: Implement Waypoint Navigation

Open `flight_control.c` and add waypoint navigation logic:

```c
void navigate_waypoints() {
    static int current_waypoint = 0;
    
    // Calculate distance to current waypoint
    float dx = waypoints[current_waypoint].x - current_position.x;
    float dy = waypoints[current_waypoint].y - current_position.y;
    float dz = waypoints[current_waypoint].z - current_position.z;
    float distance = sqrt(dx*dx + dy*dy + dz*dz);
    
    // If close to waypoint, move to next
    if (distance < 0.3) {
        current_waypoint++;
        if (current_waypoint >= num_waypoints) {
            current_waypoint = 0; // Loop back
        }
    }
    
    // Set velocity towards waypoint
    float vx = dx / distance * 0.5; // 0.5 m/s speed
    float vy = dy / distance * 0.5;
    float vz = dz / distance * 0.5;
    
    commanderSetVelocitySetpoint(vx, vy, vz, 0);
}
```

## Step 5: Test in Simulator

Run `path_planner.py` to test the path:

```bash
python path_planner.py
```

## Step 6: Compile and Flash

1. Compile and flash the code
2. Test indoor flight to see if the drone follows the planned path

## Troubleshooting

### Drone doesn't reach waypoints
- Check waypoint coordinates
- Increase speed or reduce waypoint radius

### Path is not smooth
- Add more waypoints
- Implement smooth trajectory planning

## Achievement

Congratulations! You have implemented basic path planning, which is the foundation of autonomous flight!

## Next Steps

In the next project, you will learn how to add a camera and implement FPV (First Person View) flight.

[Continue to Project 04: FPV →](/tutorials/en/beginner/04-fpv)
