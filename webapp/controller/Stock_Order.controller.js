sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller) {
    "use strict";

    return Controller.extend("capstone.controller.Stock_Order.controller", {
        onInit: function () {
            var oODataModel = this.getOwnerComponent().getModel();
            var sEntitySetPath = "/zcap_itemsSet"; // Set 이름 업데이트
      
            oODataModel.read(sEntitySetPath, {
              success: function (oData) {
                var oViewModel = new JSONModel(oData.results);
                this.getView().setModel(oViewModel, "stockData");
              }.bind(this),
              error: function (oError) {
                console.error("데이터 로딩 실패", oError);
              }
            });
          },
      
          // ... 기타 로직
        });
      });