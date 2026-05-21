---
title: "Path Planning Master"
description: "Use A* algorithm to implement drone autonomous path planning, avoiding known obstacles."
level: advanced
order: 4
duration: "3 hours"
prerequisites: ["Complete Project 03"]
draft: false
lang: en
---

## Overview

Path planning is the core technology for drone autonomous flight. In this project, you will learn how to use A* algorithm for drone autonomous path planning.

## What You'll Learn

- A* algorithm principles
- Heuristic search
- Graph theory basics
- Algorithm optimization

## Materials Needed

| Item | Quantity | Notes |
|------|----------|-------|
| ESP32-S3 Drone | 1 | - |
| Computer | 1 | With Python + Pygame installed |
| `path_planner.py` | 1 | Path planning simulator |

## Step 1: Understand A* Algorithm

### Heuristic Function
`f(n) = g(n) + h(n)`
- `g(n)` is the cost from start to current point
- `h(n)` is the estimated cost from current point to goal

### Open List / Closed List
Manage nodes to be explored and already explored.

## Step 2: Open the Project

Extract `path_planning.zip` and open with VS Code.

## Step 3: Implement A* Algorithm Core Function

Open `astar.c` and implement A* search:

```c
void astar_search(Point start, Point goal, Obstacle* obstacles, int obs_count) {
    // 1. Initialize open list and closed list
    List open_list, close_list;
    list_init(&open_list);
    list_init(&close_list);
    
    // 2. Add start point to open list
    Node start_node;
    start_node.pos = start;
    start_node.g = 0;
    start_node.h = calculate_heuristic(start, goal);
    start_node.f = start_node.g + start_node.h;
    list_add(&open_list, &start_node);
    
    // 3. Main loop
    while (!list_is_empty(&open_list)) {
        // Select node with minimum f value from open list
        Node* current = get_min_f_node(&open_list);
        
        // Check if goal reached
        if (is_goal(current->pos, goal)) {
            // Backtrack to generate path
            generate_path(current);
            return;
        }
        
        // Move current node to closed list
        list_remove(&open_list, current);
        list_add(&close_list, current);
        
        // Generate neighbor nodes
        generate_neighbors(current, &open_list, &close_list, goal, obstacles, obs_count);
    }
}
```

## Step 4: Test Algorithm

1. Set start point, goal and obstacles in `path_planner.py`
2. Run simulator, observe if algorithm can find optimal path

## Step 5: Integrate into Drone

Convert path data to drone flight commands, test indoor flight.

## Troubleshooting

### Path planning fails
- Check obstacle configuration
- Adjust heuristic function

### Path not smooth enough
- Add path smoothing algorithm
- Increase waypoint density

## Achievement

Congratulations! You have implemented A* path planning algorithm, which is the core technology for drone autonomous flight!

## Next Steps

In the next project, you will learn how to develop real-time obstacle avoidance systems.

[Continue to Project 05: Obstacle Avoidance Expert →](/tutorials/en/advanced/05-obstacle-avoidance)
