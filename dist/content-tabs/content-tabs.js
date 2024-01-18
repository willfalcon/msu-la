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

eval("const contentTabs = document.querySelectorAll('.content-tabs');\ncontentTabs.forEach(contentTabs => {\n  const tabs = contentTabs.querySelectorAll('.content-tab');\n  const panels = contentTabs.querySelectorAll('.content-tab-content');\n  panels[0].classList.add('show');\n  tabs.forEach(tab => {\n    tab.addEventListener('click', e => {\n      const panelId = tab.getAttribute('aria-controls');\n      const panel = document.querySelector(`#${panelId}`);\n      panels.forEach(panel => panel.classList.remove('show'));\n      panel.classList.add('show');\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ibG9ja3MvY29udGVudC10YWJzL2NvbnRlbnQtdGFicy5qcyIsIm5hbWVzIjpbImNvbnRlbnRUYWJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInRhYnMiLCJwYW5lbHMiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0YWIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInBhbmVsSWQiLCJnZXRBdHRyaWJ1dGUiLCJwYW5lbCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL21zdS1sYS8uL2Jsb2Nrcy9jb250ZW50LXRhYnMvY29udGVudC10YWJzLmpzPzYxMTQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGVudFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGVudC10YWJzJyk7XG5cbmNvbnRlbnRUYWJzLmZvckVhY2goY29udGVudFRhYnMgPT4ge1xuICBjb25zdCB0YWJzID0gY29udGVudFRhYnMucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnQtdGFiJyk7XG4gIGNvbnN0IHBhbmVscyA9IGNvbnRlbnRUYWJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50LXRhYi1jb250ZW50Jyk7XG4gIHBhbmVsc1swXS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgY29uc3QgcGFuZWxJZCA9IHRhYi5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKTtcbiAgICAgIGNvbnN0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cGFuZWxJZH1gKTtcbiAgICAgIHBhbmVscy5mb3JFYWNoKHBhbmVsID0+IHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKSk7XG4gICAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7QUFFOURGLFdBQVcsQ0FBQ0csT0FBTyxDQUFDSCxXQUFXLElBQUk7RUFDakMsTUFBTUksSUFBSSxHQUFHSixXQUFXLENBQUNFLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztFQUN6RCxNQUFNRyxNQUFNLEdBQUdMLFdBQVcsQ0FBQ0UsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUM7RUFDbkVHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0VBQy9CSCxJQUFJLENBQUNELE9BQU8sQ0FBQ0ssR0FBRyxJQUFJO0lBQ2xCQSxHQUFHLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRUMsQ0FBQyxJQUFJO01BQ2pDLE1BQU1DLE9BQU8sR0FBR0gsR0FBRyxDQUFDSSxZQUFZLENBQUMsZUFBZSxDQUFDO01BQ2pELE1BQU1DLEtBQUssR0FBR1osUUFBUSxDQUFDYSxhQUFhLENBQUUsSUFBR0gsT0FBUSxFQUFDLENBQUM7TUFDbkROLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDVSxLQUFLLElBQUlBLEtBQUssQ0FBQ1AsU0FBUyxDQUFDUyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7TUFDdkRGLEtBQUssQ0FBQ1AsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./blocks/content-tabs/content-tabs.js\n");

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