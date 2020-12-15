## expo animation example

説明：https://zenn.dev/articles/about-expo-sdk-40

環境

```
$ expo --version
4.0.13
```

最新のSDKでアプリをつくる
```
expo init animation
```


古いSDKでアプリをつくる

```
expo init --template expo-template-blank-typescript@sdk-39    old-animation
```

## reanimated


https://docs.expo.io/versions/v40.0.0/sdk/reanimated/

```
expo install react-native-reanimated

yarn add react-native-reanimated@2.0.0-rc.0
```

bare workflowの場合には、追加の作業: 
https://docs.swmansion.com/react-native-reanimated/docs/installation/


Android Simulatorで、デバッガひらく

```
adb shell input keyevent 82
```