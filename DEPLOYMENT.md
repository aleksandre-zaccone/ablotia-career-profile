# Deployment

The site is an Angular application. Its production build is written to `dist/ablotia-career-profile/browser`, and Firebase Hosting serves that directory.

## First-time Firebase setup

1. Sign in with `firebase login`.
2. Create the Firebase project with ID `ablotia-career-profile`.
3. Enable Firebase Hosting for the project.
4. Create a service account credential that can deploy Firebase Hosting.
5. Add the credential JSON to the GitHub repository as the secret `FIREBASE_SERVICE_ACCOUNT_ABLOTIA_CAREER_PROFILE`.

## Deployment flow

1. Push changes to `integration`.
2. Open a pull request from `integration` to `main`; GitHub Actions builds the app and deploys a Firebase Hosting preview.
3. Merge the pull request; GitHub Actions builds the app again and deploys production Hosting.
