---
title: 'SSD on server'
description: 'I have replaced HDD on server with SSD'
date: '2024-10-31'
---

I have deployed this website to my self-hosted Kubernetes cluster.

# HDD

When I bought the server it had no storage device in it. I had spare HDD laying around, so I just used it.
Naturally, HDDs are bad at random reads, so it struggled a bit. I had no issues with this until I wanted to self-host my Minecraft server.

Minecraft servers require rapid storage devices, since loading and writing changes to chunks(minecraft world state data) are done frequently. Having several players accelerates this effect. So, minecraft server lagged a lot, especially, during exploration of new chunks. Sometimes it crashed(idk, maybe chunk generation timeout or something)  

# SSD

I could just host it in Aternos, but I did not want to surrender. I bought a M2 SSD for ~$40 and installed it. Debian installation and configuration was extremely quick. I have not realized how much of a bottleneck HDD was.

Link to the SSD, for anyone interested. 
[Kaspi.kz](https://kaspi.kz/shop/p/ssd-kingston-nv2-snv2s-500g-500-gb-107632539)


**P. S.** I did NOT make sophisticated version of this blog website. Neither I have ETA for it. So, will use this for a while.
