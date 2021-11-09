# Setup the app

1. Clone this repo
2. Change the git remote origin
   `git remote remove origin && git remote add origin <YOU_GIT_REPO>`
3. Change the [app.json](./app.json) (name, slug, scheme, packageName, bundleIdentifier)
4. Create the Firebase project and create Android and iOS apps
5. Download Google services files ("google-services.json" and "GoogleService-Info.plist") and move them to the root folder
6. Remove the last section in [.gitignore](.gitignore)

_Note: when you log Analytics events in development, then you could have a warning "Firebase Analytics is not available in the Expo client.". You can remove this warning by setting up the firebase web config in the [app.json](./app.json) as described in the [Expo documentation](https://docs.expo.dev/versions/latest/sdk/firebase-analytics/#expo-go-limitations--configuration). Even if you don't need the web project, you can create aa web application in the Firebase console._

### Sentry

7. Follow the [Sentry doc in expo documentation](https://docs.expo.dev/guides/using-sentry/#how-to-add-sentry-to-your-expo)
   - In app.json fill in the Sentry fields in the postPublish hook ("organization", "project", "authToken")
   - In the [monitoring/index.tsx](./src/app/monitoring/index.tsx) file fill in the DSN key you can find here

At the end of the setup : Remove this section of the Readme

# Install

1. Run `yarn`
2. Run on
   - iOS simulator `yarn ios`
   - android simulator `yarn android`
   - on a device `yarn start`, then scan the QR code wuth the [Expo Go app](https://expo.dev/client)

# Deploy

## Deploy an Over The Air update

- For production : run `yarn deploy:prod`
- For staging : run `yarn deploy:staging`

## Deploy a Store update

- run `yarn build:prod`
- wait for the two builds (ios and android)
- download the builds from the Expo account in the build section
- upload them on the Stores manually
