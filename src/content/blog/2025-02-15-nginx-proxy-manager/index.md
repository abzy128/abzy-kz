---
title: 'Nginx Proxy Manager'
description: 'I have replaced K8S with Nginx Proxy Manager'
date: '2025-02-15'
---

For a while I thought that Nginx Proxy Manager is a paid software, so I kept using [k3s](https://k3s.io/).
Until I installed jellyfin, homepage and other stuff.
I acknowledged that 8GB of RAM is insufficient for server with kubernetes and other fun stuff.
So, I decided to reduce load on the server - remove kubernetes.

# Nginx Proxy Manager

I know how to configure and use nginx, but I hate doing it for every subdomain domain I have.
Also, I wanted to have nice WebUI where I can check proxy rules, redirects, error pages and so on.
So, I finally read Nginx Proxy Manager docs. Apparently, it is open source and free for non-commercial usage. Sweet!

I quickly installed it with Docker Compose like this:

```yaml
networks:
  nginx:
    external: true

services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      - '80:80'
      - '172.22.22.23:81:81'
      - '443:443'
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
    networks:
      - nginx
```

What is left is to just add docker containers to this network.
For example, this is how I added homepage:

```yaml
networks:
  nginx:
    external: true

services:
  homepage:
    image: ghcr.io/gethomepage/homepage:latest
    container_name: homepage
    volumes:
      - /var/homepage/config:/app/config
      - /var/homepage/images:/app/public/customImages
      - /var/run/docker.sock:/var/run/docker.sock # for docker integrations
    restart: unless-stopped
    networks:
      - nginx
```

I also added SSL certificate for both apex domain and subdomains. Used it for all rules.

Access List is also nice features. I have configured it so that only my virtual network can access some services(Jellyfin, Homepage ...)

I must say that I am very impressed my [Nginx Proxy Manager](https://github.com/NginxProxyManager/nginx-proxy-manager) and certainly recommend it to anyone.
