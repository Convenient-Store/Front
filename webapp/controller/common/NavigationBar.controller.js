sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
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
    });
});