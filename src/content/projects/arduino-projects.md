---
title: "Microcontroller Experiments"
category: "electronics"
status: "complete"
summary: "A collection of various Arduino Uno and Nano projects, focusing on sensor integration, motor controls, and custom game controllers."
skills: ["Arduino", "C++", "Sensors", "Electronics integration", "Analog I/O", "PCB layout"]
thumbnail: "/photos/steering_wheel_joycon.jpg"
gallery:
  - "/photos/steering_wheel_joycon.jpg"
  - "/photos/steering_wheel_buttons.jpg"
  - "/photos/steering_wheel_arduino.jpg"
  - "/photos/steering_wheel_potentiometer.jpg"
  - "/images/pxl_20260126_174258185.raw-01.cover.jpg"
  - "/images/pxl_20260126_174227823.raw-01.cover.jpg"
  - "/images/pxl_20260126_174444181.raw-01.cover.jpg"
order: 16
date: 2026-01-20
---

## The Challenge & Process

Learning how to read physical signals (like distance, light, or temperature) and translate them into mechanical motion or digital data streams. I built and programmed multiple standalone Arduino circuits: an ultrasonic distance-sensing alert, a servo-guided robotic claw, and an LCD temperature logger. Each project involved writing clean, non-blocking C++ code in the Arduino IDE.

## The Iteration Story: Steering Wheel V1 vs. V2

**V1:** I built a basic steering wheel using a potentiometer and the Unojoy firmware to map rotation and custom buttons to controller axes. While functional, it was limited to 180° rotation and had very few buttons for input.

**V2 & Shifter:** Recognizing the limitations of my first prototype, I undertook a ground-up redesign. The V2 wheel features a >270° rotation potentiometer, custom switch joycon wiring for button inputs, a multi-gear shifter assembly, and a much cleaner wire harness for the pedal set. 

**Circuitry & Code:** I wrote non-blocking C++ code in the Arduino IDE to handle analog-to-digital signal conversion and HID game controller emulation. This project is a stellar example of **iterative design**—taking a working prototype, analyzing its flaws, and rebuilding it better from scratch.
