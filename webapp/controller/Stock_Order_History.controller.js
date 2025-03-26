sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("capstone.controller.Stock_Order_History", {
        onHomeIconPress: function () {
            var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Launchpad")
        },
        onSearchIconPress: function () {
            alert("검색 아이콘 클릭!");
        },
        onBellIconPress: function () {
            alert("알림 아이콘 클릭!");
        },
        onAccountIconPress: function () {
            alert("계정 아이콘 클릭!");
        },
    });
});