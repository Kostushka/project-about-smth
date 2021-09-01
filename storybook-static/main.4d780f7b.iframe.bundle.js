(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{287:function(module,exports,__webpack_require__){module.exports={button:"UIButton_button__1s8yt",light:"UIButton_light__3s-os",dark:"UIButton_dark__3ABXj"}},483:function(module,exports,__webpack_require__){__webpack_require__(484),__webpack_require__(696),__webpack_require__(697),__webpack_require__(896),__webpack_require__(897),__webpack_require__(902),__webpack_require__(903),__webpack_require__(901),__webpack_require__(898),__webpack_require__(904),__webpack_require__(899),__webpack_require__(900),__webpack_require__(905),module.exports=__webpack_require__(891)},558:function(module,exports){},601:function(module,exports){},697:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(348)},891:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(348).configure)([__webpack_require__(892),__webpack_require__(893)],module,!1)}).call(this,__webpack_require__(191)(module))},892:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=892},893:function(module,exports,__webpack_require__){var map={"./components/UI/UIButton/UIButton.stories.js":906};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=893},894:function(module,exports,__webpack_require__){},905:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(913),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},906:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Light",(function(){return Light})),__webpack_require__.d(__webpack_exports__,"Dark",(function(){return Dark})),__webpack_require__.d(__webpack_exports__,"Disbled",(function(){return Disbled}));var objectSpread2=__webpack_require__(79),classnames=__webpack_require__(463),classnames_default=__webpack_require__.n(classnames),UIButton_module=(__webpack_require__(894),__webpack_require__(287)),UIButton_module_default=__webpack_require__.n(UIButton_module),jsx_runtime=__webpack_require__(208),UIButton_UIButton=function UIButton(_ref){var text=_ref.text,handleChange=_ref.handleChange,disabled=_ref.disabled,_ref$theme=_ref.theme,theme=void 0===_ref$theme?"light":_ref$theme,classes=_ref.classes;return Object(jsx_runtime.jsx)("button",{onClick:handleChange,disabled:disabled,className:classnames_default()(UIButton_module_default.a.button,UIButton_module_default.a[theme],classes),children:text})};UIButton_UIButton.__docgenInfo={description:"",methods:[],displayName:"UIButton",props:{theme:{defaultValue:{value:"'light'",computed:!1},type:{name:"string"},required:!1,description:""},text:{type:{name:"string"},required:!1,description:""},handleChange:{type:{name:"func"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},classes:{type:{name:"string"},required:!1,description:""}}};var UI_UIButton_UIButton=UIButton_UIButton;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\UI\\UIButton\\UIButton.jsx"]={name:"UIButton",docgenInfo:UIButton_UIButton.__docgenInfo,path:"src\\components\\UI\\UIButton\\UIButton.jsx"});__webpack_exports__.default={title:"UI-Kit/UIButton",component:UI_UIButton_UIButton};var UIButton_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(UI_UIButton_UIButton,Object(objectSpread2.a)({},args))},props={text:"Hello",handleChange:function handleChange(){return console.log("Button click")},disabled:!1,theme:"light",classes:""},Light=UIButton_stories_Template.bind({});Light.args=Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{theme:"light"});var Dark=UIButton_stories_Template.bind({});Dark.args=Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{theme:"dark"});var Disbled=UIButton_stories_Template.bind({});Disbled.args=Object(objectSpread2.a)(Object(objectSpread2.a)({},props),{},{disabled:!0}),Light.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <UIButton {...args} />"}},Light.parameters),Dark.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <UIButton {...args} />"}},Dark.parameters),Disbled.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <UIButton {...args} />"}},Disbled.parameters)}},[[483,2,3]]]);