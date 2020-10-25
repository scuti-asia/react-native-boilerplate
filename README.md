# react-native-boilerplate
## OverView

### Install Node.js
- Install Node.js
  download installer from [Node.js](https://nodejs.org/ja/)

### Install Build Tools
#### Xcode & CocoaPods
- Install [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)(version 9.4 or newer)

##### CocoaPods
- Install CocoaPods
```
sudo gem install cocoapods
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

### Feature implement
- Axios ( Processing )
- i18next ( Processing )
- Redux
- Redux-thunk
- Redux-actions
- React Navigation

### Install dependencies
- For IOS
```
cd {ProjectRoot}
npm install
cd ios && pod install
```

- For Android
```
cd {ProjectRoot}
npm install
...
```

#### Run dev server
```
  npm start
```

#### Run Application
- For IOS
```
  npm run ios
```

- For Android
```
  npm run android
```

### Directory structure
```
...
```
### Setup environment
#### Preparation:
- Prepare keystore android
- Prepare certification ios

#### Git flow: 
- Local / Dev (for testing) -> branch: develop
- STG (for customer) -> branch: stg
- Production (for end-user) -> branch: master
- Production with feature: -> branch: version

- Android: using flavor
- IOS: using schema

#### Setup CI/CD:
##### - CI:
+ static check: eslint with rule, prettier
+ validate convention, check error language (JS)
+ validate test ID for component testing

##### - CD:
+ Android: build and upload to server google testing
+ IOS: using testflight, build with fastlane

### Develop feature
- Rule when develop
- Structure project
- Best practice with new JS feature: clean, performance, readable code, sharing code in team (code of conduct).
