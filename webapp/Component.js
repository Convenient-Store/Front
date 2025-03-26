sap.ui.define([
  "sap/ui/core/UIComponent"
], function (UIComponent) {
  "use strict";

  return UIComponent.extend("capstone.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      // style.css 불러오기
      jQuery.sap.includeStyleSheet("capstone/css/style.css");

      // 초기화
      UIComponent.prototype.init.apply(this, arguments);
      this.getRouter().initialize();
    }
  });
});
