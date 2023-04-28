// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.youtrack.cloud/gantt-charts/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtrack.cloud
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const versionLikeName = '';
    const devLikeName = '';
    const testLikeName = '';
    const prodLikeName = '';

    const searchXpathTemplate = '//div[.//div[@data-test="issue-summary" and contains(normalize-space(), "%%")] and @data-test="bar"]';

    const pathToAllVersionLikeSegment = searchXpathTemplate.replace('%%', 'V');
    const pathToAllDevLikeSegment = searchXpathTemplate.replace('%%', 'Dev');
    const pathToAllTestLikeSegment = searchXpathTemplate.replace('%%', 'Recette');
    const pathToAllProdLikeSegment = searchXpathTemplate.replace('%%', 'MEP');


    const versionStyle = 'background-color: blue;';
    const devStyle = 'background-color: blue;';
    const testStyle = 'background-color: blue;';
    const prodStyle = 'background-color: blue;';

    function addStyleToPath(xpath, style) {

    }

    addStyleToPath(pathToAllVersionLikeSegment, versionStyle);
    addStyleToPath(pathToAllDevLikeSegment, devStyle);
    addStyleToPath(pathToAllTestLikeSegment, testStyle);
    addStyleToPath(pathToAllProdLikeSegment, prodStyle);

    // Your code here...


})();