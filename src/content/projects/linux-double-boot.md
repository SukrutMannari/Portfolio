---
title: "Linux Double Boot Setup"
category: "automation"
status: "complete"
summary: "Partitioning drives and configuring GRUB to double-boot Windows and Linux on my primary PC."
skills: ["Linux", "GRUB", "Partitioning", "System Administration"]
order: 10
date: 2026-04-10
---
## The Process & Partitioning

I needed to set up a fully functional Linux operating system alongside Windows on my primary computer without losing any personal data or messing up the boot sequence. To accomplish this safely, I shrank my Windows partition using Disk Management to free up space, created custom swap and root (`/`) partitions, and installed Linux. Finally, I configured the GRUB bootloader to offer a seamless choice between Windows and Linux at startup.

## Why It Matters

Having a dedicated, bare-metal Linux environment is critical for my engineering goals. It gives me native access to powerful terminal tools, shell scripting capabilities, and the Robot Operating System (ROS), all while keeping my Windows environment intact for gaming and general use.
