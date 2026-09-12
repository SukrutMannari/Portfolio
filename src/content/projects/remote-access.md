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

**Remote Boot (Wake-on-LAN):** I configured Wake-on-LAN (WOL) magic packets on my motherboard and router to allow me to boot the PC on demand remotely. Here is an example of the command used to wake the machine from a Linux terminal:

```bash
# Wake up Orion PC via its MAC address
wakeonlan 00:11:22:33:44:55
```

**Remote Login:** I configured an SSH server with key-based authentication, disabled password-based login for security, set up dynamic DNS, and configured port forwarding on the router to securely expose only the necessary endpoints.

> [!IMPORTANT]
> **Security Callout**
> Opening remote access to a home network is risky. To secure the connection, I completely disabled password logins in `sshd_config` (forcing cryptographic SSH keys), used a dynamic DNS provider to track my home IP, and only forwarded the encrypted SSH port through the router—ensuring the desktop was invisible to external port scanners.

## The Result

The system worked flawlessly. I successfully sent the magic packet to power on the machine, logged in via SSH, and managed files on my Orion PC from a hotel in India over Wi-Fi without ever needing to leave the PC running 24/7 back home!
