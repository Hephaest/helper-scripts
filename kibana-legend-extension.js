// ==UserScript==
// @name         Kibana, show me message!
// @namespace    https://github.com/Hephaest/helper-scripts
// @version      0.1
// @description  Expand truncated legend data info in Kibana
// @author       Hephaest
// @icon         https://avatars.githubusercontent.com/u/37981444?v=4
// @updateURL    https://github.com/Hephaest/helper-scripts/blob/main/kibana-legend-extension.js
// @match        https://your-company-log-service-domain/*
// @grant        none
// @license      MIT
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';
   var legendTitleEl = document.createElement('style')
   legendTitleEl.innerHTML = ".visLegend__valueTitle { white-space: normal !important; word-wrap: break-word !important;} .euiButtonEmpty { height: 100% !important; }";
   document.body.after(legendTitleEl);
})();
