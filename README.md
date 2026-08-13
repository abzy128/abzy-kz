# abzal.dev

Based on [astro-nano](https://github.com/markhorn-dev/astro-nano)

## Deployment

The site is pre-rendered by Astro and deployed to a Cloudflare Worker as static assets.

- Run `pnpm deploy` for a manual build and deployment.
- For automatic deployments, connect the repository in Workers Builds and use
  `pnpm build` as the build command and `pnpm exec wrangler deploy` as the deploy command.
