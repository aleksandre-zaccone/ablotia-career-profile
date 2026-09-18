# Ablotia Career Profile

An Angular-hosted professional portfolio for Aleksandre Ablotia. The application provides the deployable shell, while the animated career story and its local image assets are served from `public/legacy`.

## Run locally

```bash
npm ci
npm start
```

Open `http://localhost:4200` after Angular starts.

## Build

```bash
npm run build
```

The optimized site is created in `dist/ablotia-career-profile/browser`.

## Publishing flow

The repository uses two long-lived branches:

- `integration` is the branch for completed changes awaiting review.
- `main` is the production branch.

A pull request from `integration` to `main` runs the build and creates a Firebase Hosting preview. Merging it runs the same build and deploys the result to the production Hosting site. Details are in [DEPLOYMENT.md](DEPLOYMENT.md).
