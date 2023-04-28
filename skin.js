    // ==UserScript==
    // @name         GitUserScript
    // @namespace    http://tampermonkey.net/
    // @version      0.1
    // @description  try to take over the world!
    // @author       You
    // @match        https://*.youtrack.cloud/gantt-charts/*
    // @icon         https://www.google.com/s2/favicons?sz=64&domain=youtrack.cloud
    // @grant        none
    // ==/UserScript==

    (function() {
        'use strict';

        console.log('Tampermonkey script running');

        const versionLikeName = 'V';
        const devLikeName = 'Dev';
        const testLikeName = 'Recette';
        const prodLikeName = 'MEP';

        const background = 'background-color';
        const border = 'border-color';
        const text = 'color';
        const display= 'display';

        const umiBlue = '#2c648c';
        const yellowFlash = '#Ffb811';
        const redAlert = '#Ff733d';
        const greenStart = '#A2ff7e';
        const polarWhite = '#Ffffff';

        const hide = 'none';

        const searchXpathTemplate = '//div[.//div[@data-test="issue-summary" and contains(normalize-space(), "%%")] and @data-test="member"]';

        const pathToAllVersionLikeSegment = searchXpathTemplate.replace('%%', versionLikeName);
        const pathToAllDevLikeSegment = searchXpathTemplate.replace('%%', devLikeName);
        const pathToAllTestLikeSegment = searchXpathTemplate.replace('%%', testLikeName);
        const pathToAllProdLikeSegment = searchXpathTemplate.replace('%%', prodLikeName);

        const pathToAllSegment = '//div[@data-test="member"]';
        const pathToIssueId = '//span[@data-test="issue-id"]'
        const pathToLegBar = '//div[contains(@class, "memberBarLeg")]';

        const testingXpath = pathToAllVersionLikeSegment;

        function addStyleToPath(xpath, property, value) {
            const nodeIterator = document.evaluate(xpath, document);

            let node;
            while (node = nodeIterator.iterateNext()) {
                const style = node.style;
                style.setProperty(property, value);
            }
        }

        function xpathElementExist(xpath) {
            return document.evaluate(xpath, document).iterateNext() != null;
        }

        function waitForApplicationStart(iteration) {
            if (xpathElementExist(testingXpath)) {
                applyStyle();
            } else {
                if (iteration === 0) {
                    console.log("Script has failed to run - Time out exceeded !");
                } else {
                    setTimeout(() => waitForApplicationStart(iteration--), 1000);
                }
            }
        }

        function applyStyle() {
            addStyleToPath(pathToAllVersionLikeSegment, background, umiBlue);
            addStyleToPath(pathToAllDevLikeSegment, background, greenStart);
            addStyleToPath(pathToAllTestLikeSegment, background, yellowFlash);
            addStyleToPath(pathToAllProdLikeSegment, background, redAlert);

            addStyleToPath(pathToAllVersionLikeSegment, border, umiBlue);
            addStyleToPath(pathToAllDevLikeSegment, border, greenStart);
            addStyleToPath(pathToAllTestLikeSegment, border, yellowFlash);
            addStyleToPath(pathToAllProdLikeSegment, border, redAlert);

            addStyleToPath(pathToAllVersionLikeSegment, border, umiBlue);
            addStyleToPath(pathToAllDevLikeSegment, border, greenStart);
            addStyleToPath(pathToAllTestLikeSegment, border, yellowFlash);
            addStyleToPath(pathToAllProdLikeSegment, border, redAlert);

            addStyleToPath(pathToAllVersionLikeSegment, text, polarWhite);
            addStyleToPath(pathToIssueId, display, hide);
            addStyleToPath(pathToLegBar, display, hide);

            console.log('Tampermonkey script ending');
        }

        waitForApplicationStart(5);
    })();