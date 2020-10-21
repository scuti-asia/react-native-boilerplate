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

### Install dependencies
- For IOS
```
cd {ProjectRoot}
npm install
cd ios && pod install
```

### Run dev server
```
  npm start
```

### Run Application
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
{ProjectRoot}
+---__test__                               : Testing component
+--- android                               : 
+---ios                                    : 
+---src                                    : 
package.json                               : Dependent library management
babel.config.json                          : Build settings
metro.config.js                            : Build settings
package-lock.json                          : Dependent library lock file
```
