install: npm,node,yarn, adb
(they say to use homebrew but i use yarn instead)

connect your device, run 'adb devices' to check that your device is connected properly
If you alrdy have android studio you likely wont need this but for more details on setting up on android (and getting the sdks): https://facebook.github.io/react-native/releases/0.23/docs/android-setup.html

cd into the directory
 run 'npm install -g react-native-cli'
 run 'react-native run-android' to start server and run app on your device

Once its running on your device, shake the device and a menu will pop up. Enable Live Reloading so that you don't have to recompile on every save/debug.

 troubleshooting:
    a few useful links:
        For getting started:
            https://facebook.github.io/react-native/releases/0.23/docs/getting-started.html#content
        For setting up on your device:
            https://facebook.github.io/react-native/releases/0.23/docs/running-on-device-android.html#content