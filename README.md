# e2e-via-webview.tinyverse
minimal setup of hybrid app testing automation aiming exclusively at the webview part.  

## Goal

- After starting `./webapp`  
  which provides a headline and a button   
  served via webpack-dev-server
- and starting `./ios`   
  which hosts a webview containing webapp's content
- `yarn start` in `./e2e` succeeds without errors   
  which means the button was found and could be clicked


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
