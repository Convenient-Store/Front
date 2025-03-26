sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("capstone.controller.Launchpad", {
    onPressInventoryOrder: function () {
      alert("재고 주문으로 이동");
    },
    onPressCheckInventoryOrder: function () {
      alert("재고 주문 확인으로 이동");
    },
    onPressInventory: function () {
      alert("재고 현황으로 이동");
    },
    onPressSchedule: function () {
      alert("입고 일정정으로 이동");
    },
    onPressonExpirationDate: function () {
      alert("유통 기한으로 이동");
    }
  });
});
