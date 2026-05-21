---
title: "路径规划大师"
description: "用 A* 算法实现无人机自主路径规划，避开已知障碍物。"
level: advanced
order: 4
duration: "3 小时"
prerequisites: ["完成项目 03"]
draft: false
lang: zh
---

## 概述

路径规划是无人机自主飞行的核心技术。在本项目中，你将学习如何用 A* 算法实现无人机自主路径规划。

## 你将学到什么

- A* 算法原理
- 启发式搜索
- 图论基础
- 算法优化

## 所需材料

| 物品 | 数量 | 说明 |
|------|------|------|
| ESP32-S3 无人机 | 1 | - |
| 电脑 | 1 | 安装 Python + Pygame |
| `path_planner.py` | 1 | 路径规划模拟器 |

## 步骤 1：理解 A* 算法

### 启发函数
`f(n) = g(n) + h(n)`
- `g(n)` 是起点到当前点的代价
- `h(n)` 是当前点到终点的估计代价

### 开放列表/关闭列表
管理待探索和已探索的节点。

## 步骤 2：打开项目

解压 `path_planning.zip`，用 VS Code 打开。

## 步骤 3：实现 A* 算法核心函数

打开 `astar.c`，实现 A* 搜索：

```c
void astar_search(Point start, Point goal, Obstacle* obstacles, int obs_count) {
    // 1. 初始化开放列表和关闭列表
    List open_list, close_list;
    list_init(&open_list);
    list_init(&close_list);
    
    // 2. 将起点加入开放列表
    Node start_node;
    start_node.pos = start;
    start_node.g = 0;
    start_node.h = calculate_heuristic(start, goal);
    start_node.f = start_node.g + start_node.h;
    list_add(&open_list, &start_node);
    
    // 3. 主循环
    while (!list_is_empty(&open_list)) {
        // 从开放列表中选择 f 值最小的节点
        Node* current = get_min_f_node(&open_list);
        
        // 检查是否到达终点
        if (is_goal(current->pos, goal)) {
            // 回溯生成路径
            generate_path(current);
            return;
        }
        
        // 将当前节点移到关闭列表
        list_remove(&open_list, current);
        list_add(&close_list, current);
        
        // 生成相邻节点
        generate_neighbors(current, &open_list, &close_list, goal, obstacles, obs_count);
    }
}
```

## 步骤 4：测试算法

1. 在 `path_planner.py` 中设置起点、终点和障碍物
2. 运行模拟器，观察算法是否能找到最优路径

## 步骤 5：集成到无人机

将路径数据转换为无人机的飞行指令，测试室内飞行。

## 故障排除

### 路径规划失败
- 检查障碍物配置
- 调整启发函数

### 路径不够平滑
- 添加路径平滑算法
- 增加航点密度

## 成就感

恭喜你！你已经实现了 A* 路径规划算法，这是无人机自主飞行的核心技术！

## 下一步

在下一个项目中，你将学习如何开发实时避障系统。

[继续项目 05：避障高手 →](/tutorials/zh/advanced/05-obstacle-avoidance)
