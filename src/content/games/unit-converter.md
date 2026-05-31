---
title: "Unit Converter (Python)"
category: "python"
description: "A lightweight python script running in-browser via PyScript. Converts between metric and imperial units (temperature, distance, and weight)."
entry: "python-converter"
github: "https://github.com/sukrut-mannari/sukrut-portfolio"
date: 2026-05-30
---
```python
def convert_temp(val, to_unit):
    if to_unit.lower() == 'c':
        return (val - 32) * 5/9
    return (val * 9/5) + 32

def convert_dist(val, to_unit):
    if to_unit.lower() == 'm': # meters to feet
        return val * 3.28084
    return val / 3.28084 # feet to meters

print("--- PYTHON CONVERTER ---")
print("Converting 100 Fahrenheit to Celsius:")
print(f"100 F = {convert_temp(100, 'c'):.2f} C")
print("\nConverting 10 Meters to Feet:")
print(f"10 m = {convert_dist(10, 'm'):.2f} ft")
print("\nConverting 32 Feet to Meters:")
print(f"32 ft = {convert_dist(32, 'f'):.2f} m")
```
