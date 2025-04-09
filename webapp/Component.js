sap.ui.define([
  "sap/ui/core/UIComponent"
], function (UIComponent) {
  "use strict";
//test2
  return UIComponent.extend("capstone.Component", {
    metadata: {
      manifest: "json",
    },

    init: function () {
      // style.css 불러오기
      jQuery.sap.includeStyleSheet(jQuery.sap.getModulePath("capstone") + "/css/style.css");

      // 초기화   //
      UIComponent.prototype.init.apply(this, arguments);
      this.getRouter().initialize();
    }
  });
});
