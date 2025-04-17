---
title: 'migration to astro.build'
description: 'About my experience with astro.build static site generator'
date: '2025-04-17'
---

## What is it?

[Astro](https://astro.build) is a static site generator(SST). It takes some content and can produce static HTML documents.

## Why migrate?

[Next.js](https://nextjs.org) is a powerful tool, too powerful I would say. In my experience, it is not ideal for static websites or other simple stuff.
I have seen a lot of great personal websites and blogs made with Astro, so I decided to give it a go.
Found a great theme called [Astro Nano](https://github.com/markhorn-dev/astro-nano). Configured it as I wanted and added my own posts.
It worked out great at the end. I love the result.

## Hosting and CI/CD
On one of the cold, windy day of Astana, I received an email saying that I should host this website in Kazakhstan.
This website was made with Next.js, so it was easier to just host it on Vercel meaning server was in US.
I could just host my website on my own homelab server, but it is no longer feasible due to Cloudflare IPs being blocked in Kazakhstan.
I had to find some hosting solution in Kazakhstan. 

Most obvious and easy was would be VPS, but I did not want to waste a lot of money on it. Nowadays, on small plans you spend more on IPv4 address than machine itself.
Searching through web and recommendation from a friend brought me to [ps.kz](https://ps.kz)(also registrar of my domain).
Apparently, they provide 384tg/month plan to host a website. They support bunch of stuff, but I only needed an static file serving and some support for CI.

They do not provide CI, since my website is run with Plesk.
However, I could use git function to clone repo with webhooks each time there is a new commit on main branch.
This is not usable with Astro, since I have to generate HTML documents from markdown.
Thinking back and forth I came to conclusion to just use FTP functionality of Plesk.
I found a [Github Action](https://github.com/marketplace/actions/ftp-deploy) suitable for this purpose and wrote a simple CI/CD workflow.

```yaml
name: build and deploy

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  deploy:
    name: deploy
    runs-on: ubuntu-latest
    permissions:
      contents: read 
    steps:
    - name: checkout
      uses: actions/checkout@v4

    - uses: pnpm/action-setup@v4
      with:
        version: 10

    - name: setup node
      uses: actions/setup-node@v4
      with:
        node-version: 22
        cache: 'pnpm'
    
    - name: install deps
      run: pnpm i
    
    - name: lint
      run: pnpm lint
    
    - name: build
      run: pnpm build

    - name: sync
      uses: SamKirkland/FTP-Deploy-Action@v4.3.5
      with:
        server: ${{ secrets.FTP_SERVER}}
        username: ${{ secrets.FTP_USERNAME}}
        password: ${{ secrets.FTP_PASSWORD }}
        local-dir: ./dist/
        server-dir: ./httpdocs/
```

It works flawlessly. I am happy that I could find a easy and cost-effective solution to personal website hosting problem.

You can find previous Next.js version of this website on [separate branch](https://github.com/abzy128/abzy-kz/tree/next-js) if you want.
