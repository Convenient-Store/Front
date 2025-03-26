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
