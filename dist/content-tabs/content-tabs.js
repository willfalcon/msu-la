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
/***/ (() => {

eval("const contentTabs = document.querySelectorAll('.content-tabs');\ncontentTabs.forEach(contentTabs => {\n  const tabs = contentTabs.querySelectorAll('.content-tab');\n  tabs.forEach(tab => {\n    tab.addEventListener('click', e => {\n      const panelId = tab.getAttribute('aria-controls');\n      const panel = document.querySelector(`#${panelId}`);\n      console.log(panel);\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ibG9ja3MvY29udGVudC10YWJzL2NvbnRlbnQtdGFicy5qcyIsIm5hbWVzIjpbImNvbnRlbnRUYWJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInRhYnMiLCJ0YWIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInBhbmVsSWQiLCJnZXRBdHRyaWJ1dGUiLCJwYW5lbCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tc3UtbGEvLi9ibG9ja3MvY29udGVudC10YWJzL2NvbnRlbnQtdGFicy5qcz82MTE0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnRUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnQtdGFicycpO1xuXG5jb250ZW50VGFicy5mb3JFYWNoKGNvbnRlbnRUYWJzID0+IHtcbiAgY29uc3QgdGFicyA9IGNvbnRlbnRUYWJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50LXRhYicpO1xuICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGNvbnN0IHBhbmVsSWQgPSB0YWIuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyk7XG4gICAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3BhbmVsSWR9YCk7XG4gICAgICBjb25zb2xlLmxvZyhwYW5lbCk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7QUFFOURGLFdBQVcsQ0FBQ0csT0FBTyxDQUFDSCxXQUFXLElBQUk7RUFDakMsTUFBTUksSUFBSSxHQUFHSixXQUFXLENBQUNFLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztFQUN6REUsSUFBSSxDQUFDRCxPQUFPLENBQUNFLEdBQUcsSUFBSTtJQUNsQkEsR0FBRyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVDLENBQUMsSUFBSTtNQUNqQyxNQUFNQyxPQUFPLEdBQUdILEdBQUcsQ0FBQ0ksWUFBWSxDQUFDLGVBQWUsQ0FBQztNQUNqRCxNQUFNQyxLQUFLLEdBQUdULFFBQVEsQ0FBQ1UsYUFBYSxDQUFFLElBQUdILE9BQVEsRUFBQyxDQUFDO01BQ25ESSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDO0lBQ3BCLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./blocks/content-tabs/content-tabs.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./blocks/content-tabs/content-tabs.js"]();
/******/ 	
/******/ })()
;