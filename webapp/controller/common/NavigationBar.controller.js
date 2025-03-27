sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Popover",
    "sap/m/List",
    "sap/m/StandardListItem",
    "sap/m/Button"
], function (Controller, Popover, List, StandardListItem, Button) {
    "use strict";

    return Controller.extend("capstone.controller.common.NavigationBar", {
        onHomeIconPress: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Launchpad");
        },
  
        onSearchIconPress: function () {
            alert("검색 아이콘 클릭!");
        },
  
        onBellIconPress: function (oEvent) {
            var oButton = oEvent.getSource();
            var oView = this.getView();

            // Bell 전용 Popover 생성
            if (!this._oBellPopover) {
                this._oBellPopover = new Popover({
                    title: "최근 알림",
                    placement: "Bottom",
                    content: new List({
                        items: [
                            new StandardListItem({ title: "알림1" }),
                            new StandardListItem({ title: "알림2" }),
                            new StandardListItem({ title: "알림3" }),
                            new StandardListItem({ title: "알림4" }),
                            new StandardListItem({ title: "알림5" })
                        ]
                    })
                });

                // 뷰에 종속성 추가
                oView.addDependent(this._oBellPopover);
            }

            // Bell Popover 열기
            this._oBellPopover.openBy(oButton);
        },
  
        onAccountIconPress: function (oEvent) {
            var oButton = oEvent.getSource();
            var oView = this.getView();

            // Account 전용 Popover 생성
            if (!this._oAccountPopover) {
                this._oAccountPopover = new Popover({
                    title: "사용자 정보",
                    placement: "Bottom",
                    content: new List({
                        items: [
                            new StandardListItem({ title: "정보" }),
                            new StandardListItem({ title: "설정" }),
                            new StandardListItem({ title: "로그아웃" })
                        ]
                    })
                });
                // 뷰에 종속성 추가
                oView.addDependent(this._oAccountPopover);
            }

            // Account Popover 열기
            this._oAccountPopover.openBy(oButton);
        },
    });
});