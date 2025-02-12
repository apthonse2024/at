"use strict";(self.webpackChunk_scribd_app_monolith=self.webpackChunk_scribd_app_monolith||[]).push([[2240],{22240:function(t,e,r){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)},o=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=s(r(59971)),u=s(r(31956)),l=r(27309),c=s(r(69437)),p=s(r(79164)),d=s(r(21097)),g=s(r(9951)),h=s(r(62229)),f=s(r(11329)),v=s(r(17726)),y=r(4354),m=r(43746),E=s(r(19800)),S=s(r(62517)),w=s(r(50158)),C=s(r(21695)),I=r(48842),D=r(51724),L=64,b=2048,U=function(){function t(e,r,n){var o=this;if(this.appState=null,this.currentAppState=null,this.onCacheLoadedForReact=null,this.initCalled=!1,this.pendingInitPromise=null,this.optionalLoggingSetup=!1,this.prefetchedUsersByCacheKey={},this.logLayerParameterExposureForLayer=function(t,e,r){void 0===r&&(r=!1);var n="",i=t._getUndelegatedSecondaryExposures(),s=t._getExplicitParameters().includes(e);s&&(n=t._getAllocatedExperimentName(),i=t._getSecondaryExposures()),o.logger.logLayerExposure(o.getCurrentUser(),t.getName(),t.getRuleID(),i,n,e,s,t._getEvaluationDetails(),r)},!0!==(null==n?void 0:n.localMode)&&("string"!=typeof e||!e.startsWith("client-")))throw new l.StatsigInvalidArgumentError("Invalid key provided.  You must use a Client SDK Key from the Statsig console to initialize the sdk");if(this.startTime=(0,I.now)(),this.options=new f.default(n),this.logger=new g.default(this),w.default.initialize({options:this.options}),this.errorBoundary=new u.default(e,this.options),this.ready=!1,this.sdkKey=e,this.consoleLogger=new C.default(this.options.getLogLevel()),S.default.disabled=this.options.getDisableLocalStorage(),this.identity=new d.default(this.normalizeUser(null!=r?r:null),this.options.getOverrideStableID(),t.reactNativeUUID),this.network=new h.default(this),this.store=new v.default(this,this.options.getInitializeValues()),this.errorBoundary.setStatsigMetadata(this.getStatsigMetadata()),null!=this.options.getInitializeValues()){var i=this.options.getInitCompletionCallback();this.ready=!0,this.initCalled=!0,setTimeout((function(){return o.delayedSetup()}),20),this.handleOptionalLogging(),i&&i((0,I.now)()-this.startTime,!0,null)}}return t.prototype.getErrorBoundary=function(){return this.errorBoundary},t.prototype.getNetwork=function(){return this.network},t.prototype.getStore=function(){return this.store},t.prototype.getLogger=function(){return this.logger},t.prototype.getOptions=function(){return this.options},t.prototype.getSDKKey=function(){var t=this;return this.errorBoundary.capture("getSDKKey",(function(){var e;return null!==(e=t.sdkKey)&&void 0!==e?e:""}),(function(){return""}))},t.prototype.getCurrentUser=function(){var t=this;return this.errorBoundary.capture("getCurrentUser",(function(){return t.identity.getUser()}),(function(){return null}))},t.prototype.getCurrentUserCacheKey=function(){var t=this;return this.errorBoundary.capture("getCurrentUserCacheKey",(function(){return(0,m.getUserCacheKey)(t.getStableID(),t.getCurrentUser(),t.getSDKKey())}),(function(){return{v1:"",v2:"",v3:""}}))},t.prototype.getCurrentUserUnitID=function(t){var e=this;return this.errorBoundary.capture("getCurrentUserUnitID",(function(){return e.getUnitID(e.getCurrentUser(),t)}),(function(){return""}))},t.prototype.getCurrentUserID=function(){var t=this;return this.errorBoundary.capture("getCurrentUserID",(function(){return t.getUnitID(t.getCurrentUser(),"userid")}),(function(){return""}))},t.prototype.getUnitID=function(t,e){var r,n,o;return t?"userid"===e.toLowerCase()?null!==(n=null===(r=t.userID)||void 0===r?void 0:r.toString())&&void 0!==n?n:null:t.customIDs?null!==(o=t.customIDs[e])&&void 0!==o?o:t.customIDs[e.toLowerCase()]:null:null},t.prototype.getStatsigMetadata=function(){var t=this;return this.errorBoundary.capture("getStatsigMetadata",(function(){return t.identity.getStatsigMetadata()}),(function(){return{}}))},t.prototype.getSDKType=function(){var t=this;return this.errorBoundary.capture("getSDKType",(function(){return t.identity.getSDKType()}),(function(){return""}))},t.prototype.getSDKVersion=function(){var t=this;return this.errorBoundary.capture("getSDKVersion",(function(){return t.identity.getSDKVersion()}),(function(){return""}))},t.prototype.getConsoleLogger=function(){return this.consoleLogger},t.prototype.delayedSetup=function(){var t=this;this.errorBoundary.swallow("delayedSetup",(function(){null!=t.options.getInitializeValues()&&t.fireAndForgetPrefechUsers(),t.identity.saveStableID(),t.logger.sendSavedRequests().catch((function(e){return t.errorBoundary.logError("sendSavedRequests:delayedSetup",e)}))}))},t.prototype.setInitializeValues=function(t){var e=this;this.errorBoundary.capture("setInitializeValues",(function(){e.store.bootstrap(t);var r=null;e.ready||(e.ready=!0,e.initCalled=!0,r=e.options.getInitCompletionCallback()),e.handleOptionalLogging(),e.logger.sendSavedRequests().catch((function(t){return e.errorBoundary.logError("sendSavedRequests:setInitializeValues",t)})),r&&r((0,I.now)()-e.startTime,!0,null)}),(function(){e.ready=!0,e.initCalled=!0;var t=e.options.getInitCompletionCallback();t&&t((0,I.now)()-e.startTime,!1,"Caught an exception during setInitializeValues")}))},t.prototype.initializeAsync=function(){return o(this,void 0,void 0,(function(){var t=this;return i(this,(function(e){return[2,this.errorBoundary.capture("initializeAsync",(function(){return o(t,void 0,void 0,(function(){var t,e,r=this;return i(this,(function(n){switch(n.label){case 0:return null!=this.pendingInitPromise?[2,this.pendingInitPromise]:this.ready?[2,Promise.resolve()]:(w.default.mark.overall.start({}),this.initCalled=!0,E.default.asyncStorage?[4,this.identity.initAsync()]:[3,3]);case 1:return n.sent(),[4,this.store.loadAsync()];case 2:n.sent(),n.label=3;case 3:return null===(e=this.onCacheLoadedForReact)||void 0===e||e.call(this),this.appState&&this.appState.addEventListener&&"function"==typeof this.appState.addEventListener&&(this.currentAppState=this.appState.currentState,this.appState.addEventListener("change",this.handleAppStateChange.bind(this))),this.options.getLocalModeEnabled()?[2,Promise.resolve()]:(t=this.identity.getUser(),this.pendingInitPromise=this.fetchAndSaveValues({user:t,prefetchUsers:this.options.getPrefetchUsers(),timeout:this.options.getInitTimeoutMs()}).then((function(){return w.default.mark.overall.end({success:!0,evaluationDetails:r.store.getGlobalEvaluationDetails()}),{success:!0,message:null}})).catch((function(t){var e;return r.errorBoundary.logError("initializeAsync:fetchAndSaveValues",t),w.default.mark.overall.end({success:!1,error:w.default.formatError(t),evaluationDetails:r.store.getGlobalEvaluationDetails()}),{success:!1,message:null!==(e=t.message)&&void 0!==e?e:null}})).then((function(t){var e=t.success,n=t.message,o=r.options.getInitCompletionCallback();o&&o((0,I.now)()-r.startTime,e,n)})).finally((function(){return o(r,void 0,void 0,(function(){return i(this,(function(e){return this.pendingInitPromise=null,this.ready=!0,this.delayedSetup(),this.logger.logDiagnostics(t,"initialize"),[2]}))}))})),this.handleOptionalLogging(),[2,this.pendingInitPromise])}}))}))}),(function(){return t.ready=!0,t.initCalled=!0,Promise.resolve()}))]}))}))},t.prototype.prefetchUsers=function(t){return o(this,void 0,void 0,(function(){var e=this;return i(this,(function(r){return[2,this.errorBoundary.capture("prefetchUsers",(function(){if(t&&0!=t.length)return e.fetchAndSaveValues({user:null,prefetchUsers:t,timeout:0})}),(function(){return Promise.resolve()}))]}))}))},t.prototype.getEvaluationDetails=function(){var t=this;return this.errorBoundary.capture("getEvaluationDetails",(function(){return t.store.getGlobalEvaluationDetails()}),(function(){return{time:Date.now(),reason:y.EvaluationReason.Error}}))},t.prototype.checkGate=function(t,e){var r=this;return void 0===e&&(e=!1),this.errorBoundary.capture("checkGate",(function(){var n=r.checkGateImpl(t,e);r.logGateExposureImpl(t,n);var o=r.options.getGateEvaluationCallback();return o&&o(t,n.gate.value,{withExposureLoggingDisabled:!1}),!0===n.gate.value}),(function(){return!1}),{configName:t})},t.prototype.checkGateWithExposureLoggingDisabled=function(t,e){var r=this;return void 0===e&&(e=!1),this.errorBoundary.capture("checkGateWithExposureLoggingDisabled",(function(){var n=r.checkGateImpl(t,e),o=r.options.getGateEvaluationCallback();return o&&o(t,n.gate.value,{withExposureLoggingDisabled:!0}),!0===n.gate.value}),(function(){return!1}))},t.prototype.logGateExposure=function(t){var e=this;this.errorBoundary.swallow("logGateExposure",(function(){e.logGateExposureImpl(t)}))},t.prototype.getConfig=function(t,e){var r=this;return void 0===e&&(e=!1),this.errorBoundary.capture("getConfig",(function(){var n=r.getConfigImpl(t,e);return r.logConfigExposureImpl(t,n),n}),(function(){return r.getEmptyConfig(t)}),{configName:t})},t.prototype.getConfigWithExposureLoggingDisabled=function(t,e){var r=this;return void 0===e&&(e=!1),this.errorBoundary.capture("getConfig",(function(){return r.getConfigImpl(t,e)}),(function(){return r.getEmptyConfig(t)}))},t.prototype.logConfigExposure=function(t){var e=this;this.errorBoundary.swallow("logConfigExposure",(function(){e.logConfigExposureImpl(t)}))},t.prototype.getExperiment=function(t,e,r){var n=this;return void 0===e&&(e=!1),void 0===r&&(r=!1),this.errorBoundary.capture("getExperiment",(function(){var o=n.getExperimentImpl(t,e,r);return n.logExperimentExposureImpl(t,e,o),o}),(function(){return n.getEmptyConfig(t)}),{configName:t})},t.prototype.getExperimentWithExposureLoggingDisabled=function(t,e,r){var n=this;return void 0===e&&(e=!1),void 0===r&&(r=!1),this.errorBoundary.capture("getExperimentWithExposureLoggingDisabled",(function(){return n.getExperimentImpl(t,e,r)}),(function(){return n.getEmptyConfig(t)}))},t.prototype.logExperimentExposure=function(t,e){var r=this;this.errorBoundary.swallow("logExperimentExposure",(function(){r.logExperimentExposureImpl(t,e)}))},t.prototype.getLayer=function(t,e){var r=this;return void 0===e&&(e=!1),this.errorBoundary.capture("getLayer",(function(){return r.getLayerImpl(r.logLayerParameterExposureForLayer,t,e)}),(function(){return c.default._create(t,{},"",r.getEvalutionDetailsForError())}),{configName:t})},t.prototype.getLayerWithExposureLoggingDisabled=function(t,e){var r=this;return void 0===e&&(e=!1),this.errorBoundary.capture("getLayerWithExposureLoggingDisabled",(function(){return r.getLayerImpl(null,t,e)}),(function(){return c.default._create(t,{},"",r.getEvalutionDetailsForError())}))},t.prototype.logLayerParameterExposure=function(t,e,r){var n=this;void 0===r&&(r=!1),this.errorBoundary.swallow("logLayerParameterExposure",(function(){var o=n.getLayerImpl(null,t,r);n.logLayerParameterExposureForLayer(o,e,!0)}))},t.prototype.logEvent=function(t,e,r){var n=this;void 0===e&&(e=null),void 0===r&&(r=null),this.errorBoundary.swallow("logEvent",(function(){if(!n.logger||!n.sdkKey)throw new l.StatsigUninitializedError("Must initialize() before logging events.");if("string"==typeof t&&0!==t.length){n.shouldTrimParam(t,L)&&(n.consoleLogger.info("eventName is too long, trimming to 64 characters."),t=t.substring(0,L)),"string"==typeof e&&n.shouldTrimParam(e,L)&&(n.consoleLogger.info("value is too long, trimming to 64."),e=e.substring(0,L)),n.shouldTrimParam(r,b)&&(n.consoleLogger.info("metadata is too big. Dropping the metadata."),r={error:"not logged due to size too large"});var o=new p.default(t);o.setValue(e),o.setMetadata(r),o.setUser(n.getCurrentUser()),n.logger.log(o)}else n.consoleLogger.error("Event not logged. No valid eventName passed.")}))},t.prototype.updateUserWithValues=function(t,e){var r,n=this;return this.errorBoundary.capture("updateUserWithValues",(function(){var o=Date.now();if(!n.initializeCalled())throw new l.StatsigUninitializedError("Call initialize() first.");return r=function(t,e){var r=n.options.getUpdateUserCompletionCallback();null==r||r(Date.now()-o,t,e)},n.identity.updateUser(n.normalizeUser(t)),n.store.bootstrap(e),r(!0,null),!0}),(function(){return null==r||r(!1,"Failed to update user. An unexpected error occured."),!1}))},t.prototype.updateUser=function(t){return o(this,void 0,void 0,(function(){var e,r=this;return i(this,(function(n){return[2,this.errorBoundary.capture("updateUser",(function(){return o(r,void 0,void 0,(function(){var r,n,o,s,a,u,c=this;return i(this,(function(i){switch(i.label){case 0:if(r=Date.now(),!this.initializeCalled())throw new l.StatsigUninitializedError("Call initialize() first.");return e=function(t,e){var n=c.options.getUpdateUserCompletionCallback();null==n||n(Date.now()-r,t,e)},E.default.asyncStorage&&""==(null!==(u=this.identity.getStatsigMetadata().stableID)&&void 0!==u?u:"")?[4,this.identity.initAsync()]:[3,2];case 1:i.sent(),i.label=2;case 2:return this.identity.updateUser(this.normalizeUser(t)),n=this.getCurrentUserCacheKey(),o=Boolean(this.prefetchedUsersByCacheKey[n.v3]),s=this.store.updateUser(o),w.default.clearContext("api_call"),this.logger.resetDedupeKeys(),null!=s&&(o||this.isCacheValidForFetchMode(s))?(e(!0,null),[2,Promise.resolve(!0)]):null==this.pendingInitPromise?[3,4]:[4,this.pendingInitPromise];case 3:i.sent(),i.label=4;case 4:return this.options.getLocalModeEnabled()?(e(!0,null),[2,Promise.resolve(!0)]):(a=this.identity.getUser(),this.pendingInitPromise=this.fetchAndSaveValues({user:a,prefetchUsers:[],timeout:void 0}).finally((function(){c.pendingInitPromise=null})),[2,this.pendingInitPromise.then((function(){return e(!0,null),Promise.resolve(!0)})).catch((function(t){return e(!1,"Failed to update user: "+t),Promise.resolve(!1)}))])}}))}))}),(function(){return null==e||e(!1,"Failed to update user. An unexpected error occured."),Promise.resolve(!1)}))]}))}))},t.prototype.shutdown=function(){var t=this;this.errorBoundary.swallow("shutdown",(function(){t.logger.shutdown(),t.appState&&t.appState.removeEventListener&&"function"==typeof t.appState.removeEventListener&&t.appState.removeEventListener("change",t.handleAppStateChange.bind(t)),S.default.cleanup()}))},t.prototype.overrideGate=function(t,e){var r=this;this.errorBoundary.swallow("overrideGate",(function(){r.ensureStoreLoaded(),r.store.overrideGate(t,e)}))},t.prototype.overrideConfig=function(t,e){var r=this;this.errorBoundary.swallow("overrideConfig",(function(){r.ensureStoreLoaded(),r.store.overrideConfig(t,e)}))},t.prototype.overrideLayer=function(t,e){var r=this;this.errorBoundary.swallow("overrideLayer",(function(){r.ensureStoreLoaded(),r.store.overrideLayer(t,e)}))},t.prototype.removeGateOverride=function(t){var e=this;this.errorBoundary.swallow("removeGateOverride",(function(){e.ensureStoreLoaded(),e.store.removeGateOverride(t)}))},t.prototype.removeConfigOverride=function(t){var e=this;this.errorBoundary.swallow("removeConfigOverride",(function(){e.ensureStoreLoaded(),e.store.removeConfigOverride(t)}))},t.prototype.removeLayerOverride=function(t){var e=this;this.errorBoundary.swallow("removeLayerOverride",(function(){e.ensureStoreLoaded(),e.store.removeLayerOverride(t)}))},t.prototype.removeOverride=function(t){var e=this;this.errorBoundary.swallow("removeOverride",(function(){e.ensureStoreLoaded(),e.store.removeGateOverride(t)}))},t.prototype.getOverrides=function(){var t=this;return this.errorBoundary.capture("getOverrides",(function(){return t.ensureStoreLoaded(),t.store.getAllOverrides().gates}),(function(){return{}}))},t.prototype.getAllOverrides=function(){var t=this;return this.errorBoundary.capture("getAllOverrides",(function(){return t.ensureStoreLoaded(),t.store.getAllOverrides()}),(function(){return{gates:{},configs:{},layers:{}}}))},t.prototype.getStableID=function(){var t=this;return this.errorBoundary.capture("getStableID",(function(){return t.identity.getStatsigMetadata().stableID}),(function(){return""}))},t.prototype.initializeCalled=function(){return this.initCalled},t.prototype.setSDKPackageInfo=function(t){null!=t&&(this.identity.setSDKPackageInfo(t),this.errorBoundary.setStatsigMetadata(this.getStatsigMetadata()))},t.setAsyncStorage=function(t){null!=t&&(E.default.asyncStorage=t)},t.prototype.setOnCacheLoadedReactCallback=function(t){this.onCacheLoadedForReact=null!=t?t:null},t.setReactNativeUUID=function(e){null!=e&&(t.reactNativeUUID=e)},t.prototype.setAppState=function(t){null!=t&&(this.appState=t)},t.prototype.setNativeModules=function(t){null!=t&&this.identity.setNativeModules(t)},t.prototype.setPlatform=function(t){null!=t&&this.identity.setPlatform(t)},t.prototype.setRNDeviceInfo=function(t){null!=t&&this.identity.setRNDeviceInfo(t)},t.prototype.setExpoConstants=function(t){null!=t&&this.identity.setExpoConstants(t)},t.prototype.setExpoDevice=function(t){null!=t&&this.identity.setExpoDevice(t)},t.prototype.flushEvents=function(){this.logger.flush()},t.prototype.reenableAllLogging=function(){this.getOptions().reenableAllLogging()},t.prototype.isCacheValidForFetchMode=function(t){return"cache-or-network"===this.options.getFetchMode()&&t>this.startTime},t.prototype.handleOptionalLogging=function(){var t=this,e=this.options.getDisableErrorLogging(),r=this.options.getDisableAutoMetricsLogging();if((!e||!r)&&!this.optionalLoggingSetup&&"undefined"!=typeof window&&window&&window.addEventListener){var n=this.identity.getUser();if(e||window.addEventListener("error",(function(e){var r,o=e.error;if(null!=o&&"object"==typeof o)try{o=JSON.stringify(o)}catch(e){o="Failed to stringify Error"}t.logger.logAppError(n,null!==(r=e.message)&&void 0!==r?r:"",{filename:e.filename,lineno:e.lineno,colno:e.colno,error_obj:o})})),!r){if("undefined"==typeof document||!document||"undefined"==typeof setTimeout||!setTimeout)return;var o=function(){setTimeout((function(){t.logger.logAppMetrics(n)}),1e3)};"complete"===document.readyState?o():window.addEventListener("load",(function(){return o()}))}this.optionalLoggingSetup=!0}},t.prototype.handleAppStateChange=function(t){var e,r=this;"active"===this.currentAppState&&t.match(/inactive|background/)?this.logger.flush(!0):(null===(e=this.currentAppState)||void 0===e?void 0:e.match(/inactive|background/))&&"active"===t&&this.logger.sendSavedRequests().catch((function(t){return r.errorBoundary.logError("sendSavedRequests:handleAppStateChange",t)})),this.currentAppState=t},t.prototype.shouldTrimParam=function(t,e){return null!=t&&("string"==typeof t?t.length>e:"object"==typeof t?JSON.stringify(t).length>e:"number"==typeof t&&t.toString().length>e)},t.prototype.normalizePrefetchUsers=function(t){var e=this;return null==t?[]:t.map((function(t){return e.normalizeUser(t)}))},t.prototype.normalizeUser=function(t){var e={};try{e=JSON.parse(JSON.stringify(t))}catch(t){throw new l.StatsigInvalidArgumentError("User object must be convertable to JSON string.")}return e=this.trimUserObjIfNeeded(e),null!=this.options.getEnvironment()&&(e.statsigEnvironment=this.options.getEnvironment()),e},t.prototype.trimUserObjIfNeeded=function(t){var e,r;return null==t?{}:(this.shouldTrimParam(null!==(e=t.userID)&&void 0!==e?e:null,L)&&(this.consoleLogger.info("User ID is too large, trimming to 64characters"),t.userID=null===(r=t.userID)||void 0===r?void 0:r.toString().substring(0,L)),this.shouldTrimParam(t,b)&&(t.custom={},this.shouldTrimParam(t,b)?(this.consoleLogger.info("User object is too large, only keeping the user ID."),t={userID:t.userID}):this.consoleLogger.info("User object is too large, dropping the custom property.")),t)},t.prototype.ensureStoreLoaded=function(){if(!this.store.isLoaded())throw new l.StatsigUninitializedError("Call and wait for initialize() to finish first.")},t.prototype.getEvalutionDetailsForError=function(){return{time:Date.now(),reason:y.EvaluationReason.Error}},t.prototype.fetchAndSaveValues=function(t){var e,r,s,a,u,l;return o(this,void 0,void 0,(function(){var c,p,d,g,h,f,v=this;return i(this,(function(E){return c=t.user,p=null!==(e=t.prefetchUsers)&&void 0!==e?e:[],d=null!==(r=t.timeout)&&void 0!==r?r:this.options.getInitTimeoutMs(),p.length>5&&this.consoleLogger.info("Cannot prefetch more than 5 users."),g=this.normalizePrefetchUsers(p).slice(0,5).reduce((function(t,e){return t[(0,m.getUserCacheKey)(v.getStableID(),e,v.getSDKKey()).v3]=e,t}),{}),h=null,0===p.length&&(h=this.store.getLastUpdateTime(c,String(null!==(a=null===(s=this.getStatsigMetadata())||void 0===s?void 0:s.stableID)&&void 0!==a?a:""))),f=this.store.getPreviousDerivedFields(c,String(null!==(l=null===(u=this.getStatsigMetadata())||void 0===u?void 0:u.stableID)&&void 0!==l?l:"")),[2,this.network.fetchValues({user:c,sinceTime:h,timeout:d,useDeltas:null!=h,prefetchUsers:p.length>0?g:void 0,previousDerivedFields:f}).eventually((function(t){var e;(0,D.verifySDKKeyUsed)(t,null!==(e=v.sdkKey)&&void 0!==e?e:"",v.errorBoundary)&&(null==t?void 0:t.has_updates)&&v.store.saveWithoutUpdatingClientState(c,t,p.length>0?g:void 0).catch((function(t){return v.errorBoundary.logError("fetchAndSaveValues:eventually",t)}))})).then((function(t){return o(v,void 0,void 0,(function(){var e=this;return i(this,(function(r){return[2,this.errorBoundary.swallow("fetchAndSaveValues",(function(){return o(e,void 0,void 0,(function(){var e;return i(this,(function(r){switch(r.label){case 0:return w.default.mark.initialize.process.start({}),(0,D.verifySDKKeyUsed)(t,null!==(e=this.sdkKey)&&void 0!==e?e:"",this.errorBoundary)?(null==t?void 0:t.has_updates)?[4,this.store.save(c,t,p.length>0?g:void 0)]:[3,2]:(w.default.mark.initialize.process.end({success:!1}),[2]);case 1:return r.sent(),[3,3];case 2:(null==t?void 0:t.is_no_content)&&this.store.setEvaluationReason(y.EvaluationReason.NetworkNotModified),r.label=3;case 3:return this.prefetchedUsersByCacheKey=n(n({},this.prefetchedUsersByCacheKey),g),w.default.mark.initialize.process.end({success:!0}),[2]}}))}))}))]}))}))}))]}))}))},t.prototype.checkGateImpl=function(t,e){if(this.ensureStoreLoaded(),"string"!=typeof t||0===t.length)throw new l.StatsigInvalidArgumentError("Must pass a valid string as the gateName.");return this.store.checkGate(t,e)},t.prototype.logGateExposureImpl=function(t,e){var r=!e,n=null!=e?e:this.checkGateImpl(t,!1),o=n.gate;this.logger.logGateExposure(this.getCurrentUser(),t,o.value,o.rule_id,o.secondary_exposures,n.evaluationDetails,r)},t.prototype.getConfigImpl=function(t,e){if(this.ensureStoreLoaded(),"string"!=typeof t||0===t.length)throw new l.StatsigInvalidArgumentError("Must pass a valid string as the configName.");return this.store.getConfig(t,e)},t.prototype.logConfigExposureImpl=function(t,e){var r=!e,n=null!=e?e:this.getConfigImpl(t,!1);this.logger.logConfigExposure(this.getCurrentUser(),t,n.getRuleID(),n._getSecondaryExposures(),n.getEvaluationDetails(),r)},t.prototype.getExperimentImpl=function(t,e,r){if(this.ensureStoreLoaded(),"string"!=typeof t||0===t.length)throw new l.StatsigInvalidArgumentError("Must pass a valid string as the experimentName.");return this.store.getExperiment(t,e,r)},t.prototype.logExperimentExposureImpl=function(t,e,r){var n=!r,o=null!=r?r:this.getExperimentImpl(t,e,!1);this.logger.logConfigExposure(this.getCurrentUser(),t,o.getRuleID(),o._getSecondaryExposures(),o.getEvaluationDetails(),n)},t.prototype.getLayerImpl=function(t,e,r){if(this.ensureStoreLoaded(),"string"!=typeof e||0===e.length)throw new l.StatsigInvalidArgumentError("Must pass a valid string as the layerName.");return this.store.getLayer(t,e,r)},t.prototype.getEmptyConfig=function(t){return new a.default(t,{},"",this.getEvalutionDetailsForError())},t.prototype.fireAndForgetPrefechUsers=function(){this.prefetchUsers(this.options.getPrefetchUsers()).catch((function(){}))},t}();e.default=U}}]);
//# sourceMappingURL=https://www.scribd.com/webpack/monolith/2240.553258f66b119f2fd63d.js.map