//
//  ViewController.swift
//  WebDriverToWebView.swift
//
//  Created by mbuchholz on 05.08.20.
//  Copyright © 2020 mbuchholz. All rights reserved.
//

import WebKit

class WebDriverWebViewController: UIViewController, WKNavigationDelegate {
    
    var webView: WKWebView!

    func loadWebbyStuff() {
        let url = URL(string: "http://192.168.178.35:8080")!
        webView.load(URLRequest(url: url))
        webView.allowsBackForwardNavigationGestures = true
    }

    override func loadView() {
        webView = WKWebView()
        webView.navigationDelegate = self
        view = webView
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        loadWebbyStuff()
    }

}
