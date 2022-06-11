# WellChild

---

## Project Setup
- Requires React Native Environment Setup
- install node_modules
```sh
yarn
```
## Android
#### Debug Build
```
yarn clean
yarn android
```
> Note: when generating build if you get errors with SDK then check weather you have file names `local.properties` in `/android` folder if not create the file and add the below code
```sh
sdk.dir=/Users/{You User Name}/Library/Android/sdk
```
> Eg: if user name is Kim then the file contains `sdk.dir=/Users/Kim/Library/Android/sdk`

#### Production Build
```
yarn clean
```
After this step run corresponding command from below to generate APK or Bundle.
#### APK
```
yarn assemble
```
#### Bundle
```
yarn bundle
```

## IOS
#### Debug Build
Open Xcode and Continue with the app build and installation or run
```
yarn ios
```

#### Production Build on Simulator
if you want to check Release Build on a simulator or a device
- Open Project
- Go to Product/Scheme/Edit Scheme
- Select Run
- Change Build Configuration to Release from debug
- Uncheck Debug Executable to false
- And Build

#### Production Build
- Open Project
- Go to Product/Scheme/Edit Scheme
- Go To Archive/Select Build Configuration to Release
- Select Product From ToolBar and Press Archive