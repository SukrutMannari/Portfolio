---
title: "Line Following Taxi Challenge"
category: "robotics"
status: "complete"
summary: "A line-following robot programmed to navigate a track using color thresholds, pick up simulated passengers, and halt on a silver finish line."
skills: ["Robotics", "Algorithms", "Color Sensing", "Flowcharting"]
date: 2026-08-01
thumbnail: "/photos/PXL_20260729_131649414.RAW-01.jpg"
gallery:
  - "/photos/PXL_20260729_131509401.RAW-01.jpg"
  - "/photos/PXL_20260729_131645597.RAW-01.jpg"
  - "/photos/PXL_20260802_015944710.RAW-01.jpg"
---

The challenge was to create a line-following robot that follows a white line and stays on the line even through tight turns. I worked on this project for about 1 day. During that time, I learned the basic concepts required to code autonomous robotic behaviors and designed a flowchart to plan out my logic.

## Programming Logic & Flowchart

To stay on the line, I had to find the **threshold** (average) between blue and black so the robot acknowledges the lowest off-track and the lowest on-track values. Then, I programmed the light sensor to use this threshold.

We programmed the bot to turn left if it sees black, and turn right if it sees blue or white. 
Next, I added logic to detect passengers on the left side. After detecting a passenger, the robot stops, changes its lights to yellow, adds 1 to a variable called `P`, and displays `P` on the screen. The final challenge was to stop completely when the robot detects the color silver.

Here is the flowchart I designed to plan out the robot's decision loop:

```mermaid
graph TD
    A([Start Loop]) --> B{On Silver?}
    B -- Yes --> C([Stop Robot])
    B -- No --> D{Passenger Detected?}
    
    D -- Yes --> E[Stop Driving]
    E --> F[Set Lights: Yellow]
    F --> G[Add 1 to P]
    G --> H[Display P]
    H --> I{Color Sensor Reading?}
    
    D -- No --> I
    
    I -- Black --> J[Turn Left]
    I -- Blue / White --> K[Turn Right]
    
    J --> A
    K --> A
```

## Mechanical Issues

**Problem**: I initially mounted my color detector too far from the center of the robot. This caused the robot to miscalculate its position and think that it was somewhere it wasn't.

**Solution**: I redesigned the mounting bracket to bring the color detector back closer to the center axle where it originally was. This solved the geometry mismatch and allowed the robot to track the line perfectly.
