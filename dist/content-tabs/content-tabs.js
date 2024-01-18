/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/content-tabs/content-tabs.js":
/*!*********************************************!*\
  !*** ./blocks/content-tabs/content-tabs.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var viewport_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! viewport-size */ \"./node_modules/viewport-size/viewportSize.js\");\n\nconst contentTabs = document.querySelectorAll('.content-tabs');\ncontentTabs.forEach(contentTabs => {\n  const tabs = contentTabs.querySelectorAll('.content-tab');\n  const panels = contentTabs.querySelectorAll('.content-tab-content');\n  panels.forEach(panel => {\n    const size = panel.getBoundingClientRect();\n    panel.style.setProperty('--height', `${size.height}px`);\n    panel.classList.add('init');\n  });\n  if (viewport_size__WEBPACK_IMPORTED_MODULE_0__.getWidth() >= 768) {\n    panels[0].classList.add('show');\n  }\n  tabs.forEach(tab => {\n    tab.addEventListener('click', e => {\n      const panelId = tab.getAttribute('aria-controls');\n      const panel = document.querySelector(`#${panelId}`);\n      if (panel.classList.contains('show')) {\n        panel.classList.remove('show');\n      } else {\n        panels.forEach(panel => panel.classList.remove('show'));\n        panel.classList.add('show');\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ibG9ja3MvY29udGVudC10YWJzL2NvbnRlbnQtdGFicy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tc3UtbGEvLi9ibG9ja3MvY29udGVudC10YWJzL2NvbnRlbnQtdGFicy5qcz82MTE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2aWV3cG9ydFNpemUgZnJvbSAndmlld3BvcnQtc2l6ZSc7XG5jb25zdCBjb250ZW50VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50LXRhYnMnKTtcblxuY29udGVudFRhYnMuZm9yRWFjaChjb250ZW50VGFicyA9PiB7XG4gIGNvbnN0IHRhYnMgPSBjb250ZW50VGFicy5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGVudC10YWInKTtcbiAgY29uc3QgcGFuZWxzID0gY29udGVudFRhYnMucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnQtdGFiLWNvbnRlbnQnKTtcblxuICBwYW5lbHMuZm9yRWFjaChwYW5lbCA9PiB7XG4gICAgY29uc3Qgc2l6ZSA9IHBhbmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHBhbmVsLnN0eWxlLnNldFByb3BlcnR5KCctLWhlaWdodCcsIGAke3NpemUuaGVpZ2h0fXB4YCk7XG4gICAgcGFuZWwuY2xhc3NMaXN0LmFkZCgnaW5pdCcpO1xuICB9KTtcblxuICBpZiAodmlld3BvcnRTaXplLmdldFdpZHRoKCkgPj0gNzY4KSB7XG4gICAgcGFuZWxzWzBdLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgfVxuICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGNvbnN0IHBhbmVsSWQgPSB0YWIuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyk7XG4gICAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3BhbmVsSWR9YCk7XG4gICAgICBpZiAocGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcbiAgICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFuZWxzLmZvckVhY2gocGFuZWwgPT4gcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpKTtcbiAgICAgICAgcGFuZWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./blocks/content-tabs/content-tabs.js\n");

/***/ }),

/***/ "./node_modules/viewport-size/viewportSize.js":
/*!****************************************************!*\
  !*** ./node_modules/viewport-size/viewportSize.js ***!
  \****************************************************/
/***/ ((module) => {

eval("﻿var getSize = function(Name) {\n\tvar size;\n\tvar name = Name.toLowerCase();\n\tvar document = window.document;\n\tvar documentElement = document.documentElement;\n\tif (window[\"inner\" + Name] === undefined) {\n\t\t// IE6 & IE7 don't have window.innerWidth or innerHeight\n\t\tsize = documentElement[\"client\" + Name];\n\t} else if (window[\"inner\" + Name] != documentElement[\"client\" + Name]) {\n\t\t// WebKit doesn't include scrollbars while calculating viewport size so we have to get fancy\n\n\t\t// Insert markup to test if a media query will match document.doumentElement[\"client\" + Name]\n\t\tvar bodyElement = document.createElement(\"body\");\n\t\tbodyElement.id = \"vpw-test-b\";\n\t\tbodyElement.style.cssText = \"overflow:scroll\";\n\t\tvar divElement = document.createElement(\"div\");\n\t\tdivElement.id = \"vpw-test-d\";\n\t\tdivElement.style.cssText = \"position:absolute;top:-1000px\";\n\t\t// Getting specific on the CSS selector so it won't get overridden easily\n\t\tdivElement.innerHTML = \"<style>@media(\" + name + \":\" + documentElement[\"client\" + Name] + \"px){body#vpw-test-b div#vpw-test-d{\" + name + \":7px!important}}</style>\";\n\t\tbodyElement.appendChild(divElement);\n\t\tdocumentElement.insertBefore(bodyElement, document.head);\n\n\t\tif (divElement[\"offset\" + Name] == 7) {\n\t\t\t// Media query matches document.documentElement[\"client\" + Name]\n\t\t\tsize = documentElement[\"client\" + Name];\n\t\t} else {\n\t\t\t// Media query didn't match, use window[\"inner\" + Name]\n\t\t\tsize = window[\"inner\" + Name];\n\t\t}\n\t\t// Cleanup\n\t\tdocumentElement.removeChild(bodyElement);\n\t} else {\n\t\t// Default to use window[\"inner\" + Name]\n\t\tsize = window[\"inner\" + Name];\n\t}\n\treturn size;\n};\n\nmodule.exports.getHeight = function() {\n\treturn getSize(\"Height\");\n};\n\nmodule.exports.getWidth = function() {\n\treturn getSize(\"Width\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdmlld3BvcnQtc2l6ZS92aWV3cG9ydFNpemUuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tc3UtbGEvLi9ub2RlX21vZHVsZXMvdmlld3BvcnQtc2l6ZS92aWV3cG9ydFNpemUuanM/MjM5NSJdLCJzb3VyY2VzQ29udGVudCI6WyLvu792YXIgZ2V0U2l6ZSA9IGZ1bmN0aW9uKE5hbWUpIHtcblx0dmFyIHNpemU7XG5cdHZhciBuYW1lID0gTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHR2YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG5cdHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdGlmICh3aW5kb3dbXCJpbm5lclwiICsgTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIElFNiAmIElFNyBkb24ndCBoYXZlIHdpbmRvdy5pbm5lcldpZHRoIG9yIGlubmVySGVpZ2h0XG5cdFx0c2l6ZSA9IGRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiICsgTmFtZV07XG5cdH0gZWxzZSBpZiAod2luZG93W1wiaW5uZXJcIiArIE5hbWVdICE9IGRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiICsgTmFtZV0pIHtcblx0XHQvLyBXZWJLaXQgZG9lc24ndCBpbmNsdWRlIHNjcm9sbGJhcnMgd2hpbGUgY2FsY3VsYXRpbmcgdmlld3BvcnQgc2l6ZSBzbyB3ZSBoYXZlIHRvIGdldCBmYW5jeVxuXG5cdFx0Ly8gSW5zZXJ0IG1hcmt1cCB0byB0ZXN0IGlmIGEgbWVkaWEgcXVlcnkgd2lsbCBtYXRjaCBkb2N1bWVudC5kb3VtZW50RWxlbWVudFtcImNsaWVudFwiICsgTmFtZV1cblx0XHR2YXIgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYm9keVwiKTtcblx0XHRib2R5RWxlbWVudC5pZCA9IFwidnB3LXRlc3QtYlwiO1xuXHRcdGJvZHlFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBcIm92ZXJmbG93OnNjcm9sbFwiO1xuXHRcdHZhciBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRkaXZFbGVtZW50LmlkID0gXCJ2cHctdGVzdC1kXCI7XG5cdFx0ZGl2RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTEwMDBweFwiO1xuXHRcdC8vIEdldHRpbmcgc3BlY2lmaWMgb24gdGhlIENTUyBzZWxlY3RvciBzbyBpdCB3b24ndCBnZXQgb3ZlcnJpZGRlbiBlYXNpbHlcblx0XHRkaXZFbGVtZW50LmlubmVySFRNTCA9IFwiPHN0eWxlPkBtZWRpYShcIiArIG5hbWUgKyBcIjpcIiArIGRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiICsgTmFtZV0gKyBcInB4KXtib2R5I3Zwdy10ZXN0LWIgZGl2I3Zwdy10ZXN0LWR7XCIgKyBuYW1lICsgXCI6N3B4IWltcG9ydGFudH19PC9zdHlsZT5cIjtcblx0XHRib2R5RWxlbWVudC5hcHBlbmRDaGlsZChkaXZFbGVtZW50KTtcblx0XHRkb2N1bWVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGJvZHlFbGVtZW50LCBkb2N1bWVudC5oZWFkKTtcblxuXHRcdGlmIChkaXZFbGVtZW50W1wib2Zmc2V0XCIgKyBOYW1lXSA9PSA3KSB7XG5cdFx0XHQvLyBNZWRpYSBxdWVyeSBtYXRjaGVzIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiICsgTmFtZV1cblx0XHRcdHNpemUgPSBkb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIiArIE5hbWVdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBNZWRpYSBxdWVyeSBkaWRuJ3QgbWF0Y2gsIHVzZSB3aW5kb3dbXCJpbm5lclwiICsgTmFtZV1cblx0XHRcdHNpemUgPSB3aW5kb3dbXCJpbm5lclwiICsgTmFtZV07XG5cdFx0fVxuXHRcdC8vIENsZWFudXBcblx0XHRkb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYm9keUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIERlZmF1bHQgdG8gdXNlIHdpbmRvd1tcImlubmVyXCIgKyBOYW1lXVxuXHRcdHNpemUgPSB3aW5kb3dbXCJpbm5lclwiICsgTmFtZV07XG5cdH1cblx0cmV0dXJuIHNpemU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5nZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIGdldFNpemUoXCJIZWlnaHRcIik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5nZXRXaWR0aCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gZ2V0U2l6ZShcIldpZHRoXCIpO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/viewport-size/viewportSize.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./blocks/content-tabs/content-tabs.js");
/******/ 	
/******/ })()
;