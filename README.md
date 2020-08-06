# e2e-via-webview.tinyverse
minimal setup of hybrid app testing automation aiming exclusively at the webview part

## setup
```bash
cd webapp && yarn install && cd -
cd e2e && yarn install && cd -
open ios/WebDriverToWebView.swift.xcodeproj
```


## run webapp (Testing subject)
```bash
cd webapp
yarn start
```

## run e2e (Test runner)
```bash
cd e2e
yarn start
```


## run ios (app)

no script yet, just open xcode and click "play"
