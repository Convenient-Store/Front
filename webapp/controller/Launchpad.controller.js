sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/Popover",
    "sap/m/List",
    "sap/m/StandardListItem"
], function (Controller, Popover, List, StandardListItem) {
  "use strict";

  return Controller.extend("capstone.controller.Launchpad", {
      onHomeIconPress: function () {
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("Launchpad");
      },

      onSearchIconPress: function () {
          alert("검색 아이콘 클릭!");
      },

      onBellIconPress: function (oEvent) {
        var oButton = oEvent.getSource();

        if (!this.pPopover) {
            this.pPopover = new Popover({
                title: "사용자 정보",
                placement: "Bottom",
                content: new List({
                    items: [
                        new StandardListItem({ title: "최근 활동" }),
                        new StandardListItem({ title: "자주 사용하는 기능" }),
                        new StandardListItem({ title: "설정" }),
                        new StandardListItem({ title: "정보" }),
                        new StandardListItem({ title: "로그아웃" })
                    ]
                }),
                footer: new Button({
                    text: "닫기",
                    press: function () {
                        this.pPopover.close();
                    }.bind(this)
                })
            });
            this.getView().addDependent(this.pPopover);
        }
        this.pPopover.openBy(oButton);
      },

      onAccountIconPress: function () {
          alert("계정 아이콘 클릭!");
      },

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