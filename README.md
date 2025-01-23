# Awesome Browser Scripts
A collection of user scripts designed to streamline your working workflows on the browser, especially when you're using Kibana and Workplace.

## 🚀 Features
### Workplace PR Helper
- Automates pull request (PR) message formatting in Workplace.
- Supports a quick command (`PRT` or `prt`) to trigger template insertion.
- Template includes placeholders for PR description, changelog, reviewers, and a polite request for reviews.

#### How to use?
After installation, Please check the following steps:
1. Make sure you have enabled this extension
2. Go to **Dashboard**, click **PR Helper for Workplace**, change the following configurations:
```js
// ==UserScript==
......
// @match        https://your-business.workplace.com/*
......
// ==/UserScript==

(function() {
  'use strict';

  var whiteList = ['bypass group id'];
  // Rest of code
})();
```
### Kibana Legend Extension
- Expands truncated legend entries in Kibana for better visibility of data.
- Adjusts CSS properties like `white-space` and `word-wrap` to make legend details fully visible.
- Ensures better user experience by modifying button heights for consistency.

## 🛠 Installation
1. Install a userscript manager for your browser, such as [Tampermonkey](https://www.tampermonkey.net/) or [Greasy Fork](https://greasyfork.org/en).
2. Download the desired script:
- [Workplace PR Helper](https://greasyfork.org/zh-CN/scripts/436825-pr-helper-for-workplace)
- [Kibana Legend Extension](https://greasyfork.org/zh-CN/scripts/451436-kibana-show-me-message)
3. Open your userscript manager and add the downloaded script.
4. Enable the script and navigate to the matching domain to see it in action.

## 📬 Contributions
Contributions are welcome! Feel free to fork this repository, submit pull requests, or open issues for any bugs or feature requests.