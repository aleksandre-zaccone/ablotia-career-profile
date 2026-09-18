# Firebase Hosting deployment

The production Firebase project is `ablotia-career-profile`. Firebase Hosting publishes the Angular build directory `dist/ablotia-career-profile/browser` according to `firebase.json`.

## GitHub Actions setup

The GitHub repository contains the secret `FIREBASE_SERVICE_ACCOUNT_ABLOTIA_CAREER_PROFILE`. It stores the Firebase service-account JSON used only by the deployment workflow. The workflow is defined in `.github/workflows/firebase-hosting.yml`.

## Delivery flow

1. Commit and push changes to `integration`.
2. Create or update a pull request from `integration` into `main`.
3. GitHub Actions runs `npm ci` and `npm run build`, then publishes a Firebase Hosting preview for the pull request.
4. Merge the pull request. The workflow runs again and deploys the validated build to production Hosting.

## Local verification

```bash
npm ci
npm run build
```

To deploy manually for an emergency, authenticate with the Firebase CLI and run `firebase deploy --only hosting --project ablotia-career-profile`. Normal releases should use the GitHub Actions workflow.
