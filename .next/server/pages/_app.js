/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.noSSR = noSSR;\nexports[\"default\"] = dynamic;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ \"./loadable\"));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst isServerSide = \"undefined\" === 'undefined';\nfunction noSSR(LoadableInitializer, loadableOptions) {\n    // Removing webpack and modules means react-loadable won't try preloading\n    delete loadableOptions.webpack;\n    delete loadableOptions.modules;\n    // This check is necessary to prevent react-loadable from initializing on the server\n    if (!isServerSide) {\n        return LoadableInitializer(loadableOptions);\n    }\n    const Loading = loadableOptions.loading;\n    // This will only be rendered on the server side\n    return ()=>/*#__PURE__*/ _react.default.createElement(Loading, {\n            error: null,\n            isLoading: true,\n            pastDelay: false,\n            timedOut: false\n        })\n    ;\n}\nfunction dynamic(dynamicOptions, options) {\n    let loadableFn = _loadable.default;\n    let loadableOptions = {\n        // A loading component is not required, so we default it\n        loading: ({ error , isLoading , pastDelay  })=>{\n            if (!pastDelay) return null;\n            if (true) {\n                if (isLoading) {\n                    return null;\n                }\n                if (error) {\n                    return(/*#__PURE__*/ _react.default.createElement(\"p\", null, error.message, /*#__PURE__*/ _react.default.createElement(\"br\", null), error.stack));\n                }\n            }\n            return null;\n        }\n    };\n    // Support for direct import(), eg: dynamic(import('../hello-world'))\n    // Note that this is only kept for the edge case where someone is passing in a promise as first argument\n    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))\n    // To make sure we don't execute the import without rendering first\n    if (dynamicOptions instanceof Promise) {\n        loadableOptions.loader = ()=>dynamicOptions\n        ;\n    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))\n    } else if (typeof dynamicOptions === 'function') {\n        loadableOptions.loader = dynamicOptions;\n    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})\n    } else if (typeof dynamicOptions === 'object') {\n        loadableOptions = {\n            ...loadableOptions,\n            ...dynamicOptions\n        };\n    }\n    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})\n    loadableOptions = {\n        ...loadableOptions,\n        ...options\n    };\n    const suspenseOptions = loadableOptions;\n    if (true) {\n        // Error if react root is not enabled and `suspense` option is set to true\n        if ( true && suspenseOptions.suspense) {\n            // TODO: add error doc when this feature is stable\n            throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);\n        }\n    }\n    if (suspenseOptions.suspense) {\n        return loadableFn(suspenseOptions);\n    }\n    // coming from build/babel/plugins/react-loadable-plugin.js\n    if (loadableOptions.loadableGenerated) {\n        loadableOptions = {\n            ...loadableOptions,\n            ...loadableOptions.loadableGenerated\n        };\n        delete loadableOptions.loadableGenerated;\n    }\n    // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})\n    if (typeof loadableOptions.ssr === 'boolean') {\n        if (!loadableOptions.ssr) {\n            delete loadableOptions.ssr;\n            return noSSR(loadableFn, loadableOptions);\n        }\n        delete loadableOptions.ssr;\n    }\n    return loadableFn(loadableOptions);\n} //# sourceMappingURL=dynamic.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBWTtBQUNaQSw4Q0FBNkMsQ0FBQztJQUMxQ0csS0FBSyxFQUFFLElBQUk7QUFDZixDQUFDLEVBQUM7QUFDRkQsYUFBYSxHQUFHRSxLQUFLO0FBQ3JCRixrQkFBZSxHQUFHSSxPQUFPO0FBQ3pCLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBTztBQUNuRCxHQUFHLENBQUNDLFNBQVMsR0FBR0Ysc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsOEJBQVk7U0FDbERELHNCQUFzQixDQUFDRyxHQUFHLEVBQUUsQ0FBQztJQUNsQyxNQUFNLENBQUNBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFVLEdBQUdELEdBQUcsR0FBRyxDQUFDO1FBQ2xDTixPQUFPLEVBQUVNLEdBQUc7SUFDaEIsQ0FBQztBQUNMLENBQUM7QUFDRCxLQUFLLENBQUNFLFlBQVksR0FBRyxDQUFhLGVBQUssQ0FBVztTQUN6Q1QsS0FBSyxDQUFDVSxtQkFBbUIsRUFBRUMsZUFBZSxFQUFFLENBQUM7SUFDbEQsRUFBeUU7SUFDekUsTUFBTSxDQUFDQSxlQUFlLENBQUNDLE9BQU87SUFDOUIsTUFBTSxDQUFDRCxlQUFlLENBQUNFLE9BQU87SUFDOUIsRUFBb0Y7SUFDcEYsRUFBRSxHQUFHSixZQUFZLEVBQUUsQ0FBQztRQUNoQixNQUFNLENBQUNDLG1CQUFtQixDQUFDQyxlQUFlO0lBQzlDLENBQUM7SUFDRCxLQUFLLENBQUNHLE9BQU8sR0FBR0gsZUFBZSxDQUFDSSxPQUFPO0lBQ3ZDLEVBQWdEO0lBQ2hELE1BQU0sS0FBSyxFQUFhLFlBQUNaLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDZSxhQUFhLENBQUNGLE9BQU8sRUFBRSxDQUFDO1lBQ3hERyxLQUFLLEVBQUUsSUFBSTtZQUNYQyxTQUFTLEVBQUUsSUFBSTtZQUNmQyxTQUFTLEVBQUUsS0FBSztZQUNoQkMsUUFBUSxFQUFFLEtBQUs7UUFDbkIsQ0FBQzs7QUFFVCxDQUFDO1NBQ1FsQixPQUFPLENBQUNtQixjQUFjLEVBQUVDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHakIsU0FBUyxDQUFDTCxPQUFPO0lBQ2xDLEdBQUcsQ0FBQ1UsZUFBZSxHQUFHLENBQUM7UUFDbkIsRUFBd0Q7UUFDeERJLE9BQU8sR0FBRyxDQUFDLENBQUNFLEtBQUssR0FBR0MsU0FBUyxHQUFHQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDNUMsRUFBRSxHQUFHQSxTQUFTLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDM0IsRUFBRSxFQXRDZCxJQXNDc0QsRUFBRSxDQUFDO2dCQUN6QyxFQUFFLEVBQUVELFNBQVMsRUFBRSxDQUFDO29CQUNaLE1BQU0sQ0FBQyxJQUFJO2dCQUNmLENBQUM7Z0JBQ0QsRUFBRSxFQUFFRCxLQUFLLEVBQUUsQ0FBQztvQkFDUixNQUFNLENBQUMsRUFBYSxZQUFDZCxNQUFNLENBQUNGLE9BQU8sQ0FBQ2UsYUFBYSxDQUFDLENBQUcsSUFBRSxJQUFJLEVBQUVDLEtBQUssQ0FBQ08sT0FBTyxFQUFFLEVBQWEsWUFBQ3JCLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDZSxhQUFhLENBQUMsQ0FBSSxLQUFFLElBQUksR0FBR0MsS0FBSyxDQUFDUSxLQUFLO2dCQUNuSixDQUFDO1lBQ0wsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJO1FBQ2YsQ0FBQztJQUNMLENBQUM7SUFDRCxFQUFxRTtJQUNyRSxFQUF3RztJQUN4RyxFQUEySDtJQUMzSCxFQUFtRTtJQUNuRSxFQUFFLEVBQUVKLGNBQWMsWUFBWUssT0FBTyxFQUFFLENBQUM7UUFDcENmLGVBQWUsQ0FBQ2dCLE1BQU0sT0FBT04sY0FBYzs7SUFFL0MsRUFBdUY7SUFDdkYsQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUNBLGNBQWMsS0FBSyxDQUFVLFdBQUUsQ0FBQztRQUM5Q1YsZUFBZSxDQUFDZ0IsTUFBTSxHQUFHTixjQUFjO0lBQzNDLEVBQW1HO0lBQ25HLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDQSxjQUFjLEtBQUssQ0FBUSxTQUFFLENBQUM7UUFDNUNWLGVBQWUsR0FBRyxDQUFDO2VBQ1pBLGVBQWU7ZUFDZlUsY0FBYztRQUNyQixDQUFDO0lBQ0wsQ0FBQztJQUNELEVBQWdIO0lBQ2hIVixlQUFlLEdBQUcsQ0FBQztXQUNaQSxlQUFlO1dBQ2ZXLE9BQU87SUFDZCxDQUFDO0lBQ0QsS0FBSyxDQUFDTSxlQUFlLEdBQUdqQixlQUFlO0lBQ3ZDLEVBQUUsRUFBRSxJQUF1QyxFQUFFLENBQUM7UUFDMUMsRUFBMEU7UUFDMUUsRUFBRSxFQUFFLEtBQThCLElBQUlpQixlQUFlLENBQUNLLFFBQVEsRUFBRSxDQUFDO1lBQzdELEVBQWtEO1lBQ2xELEtBQUssQ0FBQyxHQUFHLENBQUNDLEtBQUssRUFBRSxtSEFBbUg7UUFDeEksQ0FBQztJQUNMLENBQUM7SUFDRCxFQUFFLEVBQUVOLGVBQWUsQ0FBQ0ssUUFBUSxFQUFFLENBQUM7UUFDM0IsTUFBTSxDQUFDVixVQUFVLENBQUNLLGVBQWU7SUFDckMsQ0FBQztJQUNELEVBQTJEO0lBQzNELEVBQUUsRUFBRWpCLGVBQWUsQ0FBQ3dCLGlCQUFpQixFQUFFLENBQUM7UUFDcEN4QixlQUFlLEdBQUcsQ0FBQztlQUNaQSxlQUFlO2VBQ2ZBLGVBQWUsQ0FBQ3dCLGlCQUFpQjtRQUN4QyxDQUFDO1FBQ0QsTUFBTSxDQUFDeEIsZUFBZSxDQUFDd0IsaUJBQWlCO0lBQzVDLENBQUM7SUFDRCxFQUFtRztJQUNuRyxFQUFFLEVBQUUsTUFBTSxDQUFDeEIsZUFBZSxDQUFDeUIsR0FBRyxLQUFLLENBQVMsVUFBRSxDQUFDO1FBQzNDLEVBQUUsR0FBR3pCLGVBQWUsQ0FBQ3lCLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQ3pCLGVBQWUsQ0FBQ3lCLEdBQUc7WUFDMUIsTUFBTSxDQUFDcEMsS0FBSyxDQUFDdUIsVUFBVSxFQUFFWixlQUFlO1FBQzVDLENBQUM7UUFDRCxNQUFNLENBQUNBLGVBQWUsQ0FBQ3lCLEdBQUc7SUFDOUIsQ0FBQztJQUNELE1BQU0sQ0FBQ2IsVUFBVSxDQUFDWixlQUFlO0FBQ3JDLENBQUMsQ0FFa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljLmpzP2UyNWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm5vU1NSID0gbm9TU1I7XG5leHBvcnRzLmRlZmF1bHQgPSBkeW5hbWljO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfbG9hZGFibGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xvYWRhYmxlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IGlzU2VydmVyU2lkZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gbm9TU1IoTG9hZGFibGVJbml0aWFsaXplciwgbG9hZGFibGVPcHRpb25zKSB7XG4gICAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMud2VicGFjaztcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLm1vZHVsZXM7XG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG4gICAgaWYgKCFpc1NlcnZlclNpZGUpIHtcbiAgICAgICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKTtcbiAgICB9XG4gICAgY29uc3QgTG9hZGluZyA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nO1xuICAgIC8vIFRoaXMgd2lsbCBvbmx5IGJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuICAgIHJldHVybiAoKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIHtcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVkT3V0OiBmYWxzZVxuICAgICAgICB9KVxuICAgIDtcbn1cbmZ1bmN0aW9uIGR5bmFtaWMoZHluYW1pY09wdGlvbnMsIG9wdGlvbnMpIHtcbiAgICBsZXQgbG9hZGFibGVGbiA9IF9sb2FkYWJsZS5kZWZhdWx0O1xuICAgIGxldCBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgIC8vIEEgbG9hZGluZyBjb21wb25lbnQgaXMgbm90IHJlcXVpcmVkLCBzbyB3ZSBkZWZhdWx0IGl0XG4gICAgICAgIGxvYWRpbmc6ICh7IGVycm9yICwgaXNMb2FkaW5nICwgcGFzdERlbGF5ICB9KT0+e1xuICAgICAgICAgICAgaWYgKCFwYXN0RGVsYXkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGVycm9yLm1lc3NhZ2UsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBlcnJvci5zdGFjaykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBTdXBwb3J0IGZvciBkaXJlY3QgaW1wb3J0KCksIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBvbmx5IGtlcHQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgc29tZW9uZSBpcyBwYXNzaW5nIGluIGEgcHJvbWlzZSBhcyBmaXJzdCBhcmd1bWVudFxuICAgIC8vIFRoZSByZWFjdC1sb2FkYWJsZSBiYWJlbCBwbHVnaW4gd2lsbCB0dXJuIGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKSBpbnRvIGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIC8vIFRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBleGVjdXRlIHRoZSBpbXBvcnQgd2l0aG91dCByZW5kZXJpbmcgZmlyc3RcbiAgICBpZiAoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSAoKT0+ZHluYW1pY09wdGlvbnNcbiAgICAgICAgO1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBpbXBvcnQgYXMgYSBmdW5jdGlvbiwgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBkeW5hbWljT3B0aW9ucztcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgZmlyc3QgYXJndW1lbnQgYmVpbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoe2xvYWRlcjogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAgICAgLi4uZHluYW1pY09wdGlvbnNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gU3VwcG9ydCBmb3IgcGFzc2luZyBvcHRpb25zLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nIHNvbWV0aGluZzwvcD59KVxuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICBjb25zdCBzdXNwZW5zZU9wdGlvbnMgPSBsb2FkYWJsZU9wdGlvbnM7XG4gICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfQ09OQ1VSUkVOVF9GRUFUVVJFUykge1xuICAgICAgICAvLyBFcnJvciBpZiByZWFjdCByb290IGlzIG5vdCBlbmFibGVkIGFuZCBgc3VzcGVuc2VgIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZVxuICAgICAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9SRUFDVF9ST09UICYmIHN1c3BlbnNlT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgICAgICAgICAgLy8gVE9ETzogYWRkIGVycm9yIGRvYyB3aGVuIHRoaXMgZmVhdHVyZSBpcyBzdGFibGVcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzdXNwZW5zZSBvcHRpb24gdXNhZ2UgaW4gbmV4dC9keW5hbWljLiBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtZHluYW1pYy1zdXNwZW5zZWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzdXNwZW5zZU9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRhYmxlRm4oc3VzcGVuc2VPcHRpb25zKTtcbiAgICB9XG4gICAgLy8gY29taW5nIGZyb20gYnVpbGQvYmFiZWwvcGx1Z2lucy9yZWFjdC1sb2FkYWJsZS1wbHVnaW4uanNcbiAgICBpZiAobG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZFxuICAgICAgICB9O1xuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkO1xuICAgIH1cbiAgICAvLyBzdXBwb3J0IGZvciBkaXNhYmxpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtzc3I6IGZhbHNlfSlcbiAgICBpZiAodHlwZW9mIGxvYWRhYmxlT3B0aW9ucy5zc3IgPT09ICdib29sZWFuJykge1xuICAgICAgICBpZiAoIWxvYWRhYmxlT3B0aW9ucy5zc3IpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO1xuICAgICAgICAgICAgcmV0dXJuIG5vU1NSKGxvYWRhYmxlRm4sIGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XG4gICAgfVxuICAgIHJldHVybiBsb2FkYWJsZUZuKGxvYWRhYmxlT3B0aW9ucyk7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWR5bmFtaWMuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwibm9TU1IiLCJkZWZhdWx0IiwiZHluYW1pYyIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2xvYWRhYmxlIiwib2JqIiwiX19lc01vZHVsZSIsImlzU2VydmVyU2lkZSIsIkxvYWRhYmxlSW5pdGlhbGl6ZXIiLCJsb2FkYWJsZU9wdGlvbnMiLCJ3ZWJwYWNrIiwibW9kdWxlcyIsIkxvYWRpbmciLCJsb2FkaW5nIiwiY3JlYXRlRWxlbWVudCIsImVycm9yIiwiaXNMb2FkaW5nIiwicGFzdERlbGF5IiwidGltZWRPdXQiLCJkeW5hbWljT3B0aW9ucyIsIm9wdGlvbnMiLCJsb2FkYWJsZUZuIiwibWVzc2FnZSIsInN0YWNrIiwiUHJvbWlzZSIsImxvYWRlciIsInN1c3BlbnNlT3B0aW9ucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfQ09OQ1VSUkVOVF9GRUFUVVJFUyIsIl9fTkVYVF9SRUFDVF9ST09UIiwic3VzcGVuc2UiLCJFcnJvciIsImxvYWRhYmxlR2VuZXJhdGVkIiwic3NyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/shared/lib/dynamic.js\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_tooltip_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tooltip.css */ \"./styles/tooltip.css\");\n/* harmony import */ var _styles_tooltip_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tooltip_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var tippy_js_animations_scale_subtle_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tippy.js/animations/scale-subtle.css */ \"./node_modules/tippy.js/animations/scale-subtle.css\");\n/* harmony import */ var tippy_js_animations_scale_subtle_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tippy_js_animations_scale_subtle_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var tippy_js_animations_scale_extreme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tippy.js/animations/scale-extreme.css */ \"./node_modules/tippy.js/animations/scale-extreme.css\");\n/* harmony import */ var tippy_js_animations_scale_extreme_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tippy_js_animations_scale_extreme_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var tippy_js_animations_shift_away_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tippy.js/animations/shift-away.css */ \"./node_modules/tippy.js/animations/shift-away.css\");\n/* harmony import */ var tippy_js_animations_shift_away_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tippy_js_animations_shift_away_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var tippy_js_animations_shift_toward_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tippy.js/animations/shift-toward.css */ \"./node_modules/tippy.js/animations/shift-toward.css\");\n/* harmony import */ var tippy_js_animations_shift_toward_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tippy_js_animations_shift_toward_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @headlessui/react */ \"@headlessui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_11__]);\n_headlessui_react__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\n\nconst Header = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/*! import() */ \"components_Header_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Header */ \"./components/Header.js\"))\n, {\n    loadableGenerated: {\n        modules: [\n            \"_app.jsx -> \" + \"../components/Header\"\n        ]\n    }\n});\nfunction MyApp({ Component , pageProps  }) {\n    let { 0: load , 1: setLoad  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{\n        setTimeout(()=>{\n            setLoad(true);\n            document.documentElement.style = 'pointer-events: all;';\n        }, 1000);\n    }, []);\n    next_router__WEBPACK_IMPORTED_MODULE_9___default().events.on('routeChangeStart', ()=>{\n        setLoad(false);\n        document.documentElement.style = 'pointer-events: none;';\n    });\n    next_router__WEBPACK_IMPORTED_MODULE_9___default().events.on('routeChangeComplete', ()=>{\n        setTimeout(()=>{\n            setLoad(true);\n            document.documentElement.style = 'pointer-events: all;';\n        }, 1000);\n    });\n    next_router__WEBPACK_IMPORTED_MODULE_9___default().events.on('routeChangeError', ()=>{\n        setTimeout(()=>{\n            setLoad(true);\n            document.documentElement.style = 'pointer-events: all;';\n        }, 1000);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Rengin Forbes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        href: \"https://ugc.production.linktr.ee/6RJk9s2pQZ2yAdcxw3Ir_TXX2dLlNmwM2OFdf?io=true&size=avatar-v3_0\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://pro.fontawesome.com/releases/v5.15.4/css/all.css\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_11__.Transition, {\n                as: react__WEBPACK_IMPORTED_MODULE_10__.Fragment,\n                show: !load ? true : false,\n                enter: \"transform transition duration-[100ms]\",\n                enterFrom: \"opacity-0\",\n                enterTo: \"opacity-100\",\n                leave: \"transform duration-[250ms] transition ease-in-out\",\n                leaveFrom: \"opacity-100\",\n                leaveTo: \"opacity-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        zIndex: 99999\n                    },\n                    className: \"fixed bg-black/75 w-full h-screen flex justify-center items-center pointer-events-none\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-x-6 animate-pulse\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-6xl mb-5 font-semibold\",\n                                    children: \"Rengin Forbes\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"uppercase text-xl font-semibold text-white\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fal fa-spinner-third fa-spin\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 79\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"border-b-[7px] border-t-[7px] h-full border-neutral-800/50 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"min-h-screen max-w-screen-lg p-5 w-full md:w-10/12 lg:w-8/12 mx-auto transition-all duration-300\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                                fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                ...pageProps\n                            }, void 0, false, {\n                                fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-neutral-800/5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-screen-lg p-5 w-full md:w-10/12 lg:w-8/12 mx-auto transition-all duration-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:flex w-full items-center justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Rengin Forbes\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-2 md:mt-0 flex items-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"\",\n                                            target: \"_blank\",\n                                            rel: \"noreferrer\",\n                                            className: \"w-full md:w-auto bg-neutral-700/5 hover:bg-neutral-700/20 px-4 py-2 rounded-md transition-all duration-200\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"fab fa-discord mr-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 17\n                                                }, this),\n                                                \"Join My Discord\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rengin/Desktop/Alchemist/pages/_app.jsx\",\n                lineNumber: 65,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNORSxTQUFTO21DQUFLQyxTQUFTOzs7Ozs7Ozs7Ozs7Z0dBRXpCeUIsQ0FBRzt3QkFBQ0UsU0FBUyxFQUFDLENBQWtCOzhHQUM5QkYsQ0FBRzs0QkFBQ0UsU0FBUyxFQUFDLENBQXFGO2tIQUNqR0YsQ0FBRztnQ0FBQ0UsU0FBUyxFQUFDLENBQTZDOztnSEFDekRGLENBQUc7OEhBQ0RHLENBQUM7c0RBQUMsQ0FBYTs7Ozs7Ozs7Ozs7Z0hBQ2pCSCxDQUFHO3dDQUFDRSxTQUFTLEVBQUMsQ0FBZ0M7OEhBQzVDSSxDQUFDOzRDQUFDbkIsSUFBSSxFQUFDLENBQUU7NENBQUNvQixNQUFNLEVBQUMsQ0FBUTs0Q0FBQ3JCLEdBQUcsRUFBQyxDQUFZOzRDQUFDZ0IsU0FBUyxFQUFDLENBQTRHOzs0SEFDL0pFLENBQUM7b0RBQUNGLFNBQVMsRUFBQyxDQUFxQjs7Ozs7O2dEQUFHLENBQ3ZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRZCxDQUFDO0FBRUQsaUVBQWU3QixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QvLi9wYWdlcy9fYXBwLmpzeD80Y2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvdG9vbHRpcC5jc3MnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCAndGlwcHkuanMvYW5pbWF0aW9ucy9zY2FsZS1zdWJ0bGUuY3NzJztcbmltcG9ydCAndGlwcHkuanMvYW5pbWF0aW9ucy9zY2FsZS1leHRyZW1lLmNzcyc7XG5pbXBvcnQgJ3RpcHB5LmpzL2FuaW1hdGlvbnMvc2hpZnQtYXdheS5jc3MnO1xuaW1wb3J0ICd0aXBweS5qcy9hbmltYXRpb25zL3NoaWZ0LXRvd2FyZC5jc3MnO1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCI7XG5cbmNvbnN0IEhlYWRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL0hlYWRlcicpKVxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGxldCBbbG9hZCxzZXRMb2FkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldExvYWQodHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSA9ICdwb2ludGVyLWV2ZW50czogYWxsOydcbiAgICAgIH0sIDEwMDApXG4gICAgfSwgW10pXG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICgpID0+IHtcbiAgICAgICAgc2V0TG9hZChmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSA9ICdwb2ludGVyLWV2ZW50czogbm9uZTsnXG4gICAgfSk7XG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkKHRydWUpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgPSAncG9pbnRlci1ldmVudHM6IGFsbDsnXG4gICAgICB9LCAxMDAwKVxuICAgIH0pO1xuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZCh0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlID0gJ3BvaW50ZXItZXZlbnRzOiBhbGw7J1xuICAgICAgfSwgMTAwMClcbiAgICB9KTtcbiAgcmV0dXJuICg8PlxuICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UmVuZ2luIEZvcmJlczwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiaHR0cHM6Ly91Z2MucHJvZHVjdGlvbi5saW5rdHIuZWUvNlJKazlzMnBRWjJ5QWRjeHczSXJfVFhYMmRMbE5td00yT0ZkZj9pbz10cnVlJnNpemU9YXZhdGFyLXYzXzBcIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgPjwvbGluaz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9wcm8uZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjE1LjQvY3NzL2FsbC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cblxuICAgIDwvSGVhZD5cbiAgICA8VHJhbnNpdGlvblxuICAgICAgICAgIGFzPXtGcmFnbWVudH1cbiAgICAgICAgICBzaG93PXshbG9hZCA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICBlbnRlcj1cInRyYW5zZm9ybSB0cmFuc2l0aW9uIGR1cmF0aW9uLVsxMDBtc11cIlxuICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXG4gICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwXCJcbiAgICAgICAgICBsZWF2ZT1cInRyYW5zZm9ybSBkdXJhdGlvbi1bMjUwbXNdIHRyYW5zaXRpb24gZWFzZS1pbi1vdXRcIlxuICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcbiAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDk5OTk5IH19IGNsYXNzTmFtZT1cImZpeGVkIGJnLWJsYWNrLzc1IHctZnVsbCBoLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwb2ludGVyLWV2ZW50cy1ub25lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC14LTYgYW5pbWF0ZS1wdWxzZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC02eGwgbWItNSBmb250LXNlbWlib2xkXCI+UmVuZ2luIEZvcmJlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+PGkgY2xhc3NOYW1lPVwiZmFsIGZhLXNwaW5uZXItdGhpcmQgZmEtc3BpblwiIC8+PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvVHJhbnNpdGlvbj5cbiAgICA8bWFpbiBjbGFzc05hbWU9XCJib3JkZXItYi1bN3B4XSBib3JkZXItdC1bN3B4XSBoLWZ1bGwgYm9yZGVyLW5ldXRyYWwtODAwLzUwIHctZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gbWF4LXctc2NyZWVuLWxnIHAtNSB3LWZ1bGwgbWQ6dy0xMC8xMiBsZzp3LTgvMTIgbXgtYXV0byB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbmV1dHJhbC04MDAvNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi1sZyBwLTUgdy1mdWxsIG1kOnctMTAvMTIgbGc6dy04LzEyIG14LWF1dG8gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cD5SZW5naW4gRm9yYmVzPC9wPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIG1kOm10LTAgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy1hdXRvIGJnLW5ldXRyYWwtNzAwLzUgaG92ZXI6YmctbmV1dHJhbC03MDAvMjAgcHgtNCBweS0yIHJvdW5kZWQtbWQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWRpc2NvcmQgbXItMlwiIC8+Sm9pbiBNeSBEaXNjb3JkXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICA8Lz4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIkhlYWQiLCJkeW5hbWljIiwiUm91dGVyIiwidXNlUm91dGVyIiwiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRyYW5zaXRpb24iLCJIZWFkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxvYWQiLCJzZXRMb2FkIiwic2V0VGltZW91dCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJldmVudHMiLCJvbiIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJ0eXBlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiYXMiLCJzaG93IiwiZW50ZXIiLCJlbnRlckZyb20iLCJlbnRlclRvIiwibGVhdmUiLCJsZWF2ZUZyb20iLCJsZWF2ZVRvIiwiZGl2IiwiekluZGV4IiwiY2xhc3NOYW1lIiwicCIsImkiLCJtYWluIiwiYSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./node_modules/tippy.js/animations/scale-extreme.css":
/*!************************************************************!*\
  !*** ./node_modules/tippy.js/animations/scale-extreme.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/tippy.js/animations/scale-subtle.css":
/*!***********************************************************!*\
  !*** ./node_modules/tippy.js/animations/scale-subtle.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/tippy.js/animations/shift-away.css":
/*!*********************************************************!*\
  !*** ./node_modules/tippy.js/animations/shift-away.css ***!
  \*********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/tippy.js/animations/shift-toward.css":
/*!***********************************************************!*\
  !*** ./node_modules/tippy.js/animations/shift-toward.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/tooltip.css":
/*!****************************!*\
  !*** ./styles/tooltip.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ \"./node_modules/next/dist/shared/lib/dynamic.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLHVIQUFxRCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0Ly4vbm9kZV9tb2R1bGVzL25leHQvZHluYW1pYy5qcz83M2Q0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3NoYXJlZC9saWIvZHluYW1pYycpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dynamic.js\n");

/***/ }),

/***/ "next/dist/compiled/react-is":
/*!**********************************************!*\
  !*** external "next/dist/compiled/react-is" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-is");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../shared/lib/is-plain-object":
/*!**********************************************************!*\
  !*** external "next/dist/shared/lib/is-plain-object.js" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/get-middleware-regex":
/*!****************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-middleware-regex.js" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/resolve-rewrites":
/*!************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/resolve-rewrites.js" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@headlessui/react":
/*!************************************!*\
  !*** external "@headlessui/react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();