sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/Popover",
    "sap/m/List",
    "sap/m/StandardListItem"
], function (Controller, Popover, List, StandardListItem) {
  "use strict";

  return Controller.extend("capstone.controller.Launchpad", {

      onPressInventoryOrder: function () {
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("Stock_Order");
      },

      onPressCheckInventoryOrder: function () {
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("Stock_Order_History");
      },

      onPressInventory: function () {
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("Stock");
      },

      onPressSchedule: function () {
          alert("입고 일정으로 이동");
      },

      onPressExpirationDate: function () {
          alert("유통 기한으로 이동");
      },

      onPressSalesDetail: function () {
          alert("지점별 판매량으로 이동");
      },

      onPressPromotion: function () {
          alert("프로모션으로 이동");
      },

      onPressSalesProfit: function () {
          alert("판매 이익으로 이동");
      },

      onPressExpenditureDetails: function () {
          alert("지출 내역으로 이동");
      }
  });
});