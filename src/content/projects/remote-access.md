---
title: "Secure Remote Access Setup"
category: "automation"
status: "complete"
summary: "Configuring remote desktop (RDP/VNC) and secure SSH access to my computer from external networks."
skills: ["Networking", "SSH", "Remote Desktop", "Security"]
order: 11
date: 2026-04-15
---
## The Real-World Challenge

I needed full access to my primary "Orion PC" desktop workstation while traveling abroad in India for several weeks. However, I didn't want to leave the PC running 24/7 at home while I was gone, which meant I needed a way to remotely power it on *and* securely access it from thousands of miles away.

## The Dual Solution

**Remote Boot (Wake-on-LAN):** I configured Wake-on-LAN (WOL) magic packets on my motherboard and router to allow me to boot the PC on demand remotely.

**Remote Login:** I configured an SSH server with key-based authentication, disabled password-based login for security, set up dynamic DNS, and configured port forwarding on the router to securely expose only the necessary endpoints.

## The Result

I successfully powered on, logged in, and managed files on my Orion PC from across the globe in India over a hotel Wi-Fi connection!
