sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Popover",
    "sap/m/List",
    "sap/m/StandardListItem",
    "sap/m/Input"
], function (Controller, Popover, List, StandardListItem, Input) {
    "use strict";

    return Controller.extend("capstone.controller.common.NavigationBar", {
        onHomeIconPress: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Launchpad");
        },

        onInit: function () {
            // 깜빡임 애니메이션용 스타일을 한 번만 추가
            if (!document.getElementById("highlight-style")) {
                var style = document.createElement('style');
                style.id = "highlight-style";
                style.innerHTML = `
    @keyframes blinkHighlight {
        0% { background-color: gray; }
        50% { background-color: transparent; }
        100% { background-color: gray; }
    }

    .blinkingHighlight {
        animation: blinkHighlight 1s ease-in-out 3;
        border-radius: 10px;
        transition: background-color 0.3s ease-in-out;
    }
`;
                document.head.appendChild(style);
            }
        },

        onSearchIconPress: function (oEvent) {
            var oButton = oEvent.getSource();
            var oView = this.getView();

            if (!this._oSearchPopover) {
                this._oSearchPopover = new Popover({
                    title: "검색",
                    placement: "Bottom",
                    content: [
                        new Input({
                            placeholder: "검색어를 입력하세요",
                            submit: this.onSearchSubmit.bind(this)
                        })
                    ]
                });
                oView.addDependent(this._oSearchPopover);
            }
            this._oSearchPopover.openBy(oButton);
        },

        onSearchSubmit: function (oEvent) {
            var sSearchValue = oEvent.getParameter("value").trim().toLowerCase();
            if (!sSearchValue) return;
        
            // 전체 Launchpad View
            var oLaunchpadView = this.getView().getParent().getParent();
            var oMainVBox = oLaunchpadView.$().find(".sapUiSmallMargin")[0]; // 왼쪽 본문 VBox (공지사항 제외)
        
            var matchingElement = null;
        
            // GenericTile 및 관련 요소에서만 탐색
            oMainVBox.querySelectorAll(".sapMGenericTile, .sapMGT, div").forEach(function (el) {
                if (el.textContent && el.textContent.toLowerCase().includes(sSearchValue)) {
                    matchingElement = el;
                }
            });
        
            if (matchingElement) {
                matchingElement.scrollIntoView({ behavior: "smooth", block: "center" });
                matchingElement.classList.remove("blinkingHighlight");

                void matchingElement.offsetWidth; // ← reflow 강제 (애니메이션 재실행 트릭)
    matchingElement.classList.add("blinkingHighlight");
            } else {
                sap.m.MessageToast.show("검색 결과가 없습니다.");
            }
        
            this._oSearchPopover.close();

            if (sSearchValue !== "") {
                // ✅ 검색창 비우기
                var aContent = this._oSearchPopover.getContent();
                if (aContent.length > 0 && aContent[0].setValue) {
                    aContent[0].setValue(""); // 검색어 초기화
                }
            
                this._oSearchPopover.close();
            }
        },

        onBellIconPress: function (oEvent) {
            var oButton = oEvent.getSource();
            var oView = this.getView();

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

                oView.addDependent(this._oBellPopover);
            }

            this._oBellPopover.openBy(oButton);
        },

        onAccountIconPress: function (oEvent) {
            var oButton = oEvent.getSource();
            var oView = this.getView();

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
                oView.addDependent(this._oAccountPopover);
            }

            this._oAccountPopover.openBy(oButton);
        }
    });
});