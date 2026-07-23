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

## The Challenge

Learning how to read physical signals (like distance, light, or temperature) and translate them into mechanical motion or digital data streams.

## The Process

I built and programmed multiple standalone Arduino circuits: an ultrasonic distance-sensing alert, a servo-guided robotic claw, and an LCD temperature logger. Each project involved writing clean, non-blocking C++ code in the Arduino IDE.

## Arduino Steering Wheel (V1)

I wrote C++ in the Arduino IDE using the Unojoy framework to map a potentiometer's rotation and custom buttons to controller axes. This allowed me to read analog rotation, convert it to digital data, and present it to a computer as a standard game controller.

## Steering Wheel V2

The original Unojoy wheel worked, but it had limitations: no >180 degrees turn, limited buttons, and a clunky pedal connection. V2 is a ground-up redesign fixing all three.

The new design uses a more capable potentiometer, a switch joycon for the buttons, and a cleaner wiring harness for the pedal set. This demonstrated advanced Arduino programming, PCB layout, and iterative hardware design.
