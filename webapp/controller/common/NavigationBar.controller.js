sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Popover",
    "sap/m/List",
    "sap/m/StandardListItem",
    "sap/m/Input",
    "sap/m/MessageToast"
], function (Controller, Popover, List, StandardListItem, Input, MessageToast) {
    "use strict";

    return Controller.extend("capstone.controller.common.NavigationBar", {
        onHomeIconPress: function () {
            // ✅ 홈으로 가기 전에 이전 강조 제거!!
            setTimeout(() => {
                const highlighted = document.querySelectorAll(".blinkingHighlight");
                highlighted.forEach(el => el.classList.remove("blinkingHighlight"));
            }, 0);

            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Launchpad");
        },

        // ✅ 검색창에서 Enter로 검색
        onSearchSubmitEnter: function (oEvent) {
            var sValue = oEvent.getParameter("value");
            this._searchAndScroll(sValue);
        },

        // ✅ 검색 아이콘 클릭 시 검색
        onSearchSubmitButton: function () {
            var sValue = this.byId("searchField").getValue();
            this._searchAndScroll(sValue);
        },

        // ✅ 공통 검색 로직
        _searchAndScroll: function (sSearchValue) {
            sSearchValue = sSearchValue.trim().toLowerCase();
            if (!sSearchValue) return;

            var oLaunchpadView = this.getView().getParent().getParent();
            var oMainVBox = oLaunchpadView.$().find(".sapUiSmallMargin")[0];
            var matchingElement = null;

            oMainVBox.querySelectorAll(".sapMGenericTile, .sapMGT, div").forEach(function (el) {
                if (el.textContent && el.textContent.toLowerCase().includes(sSearchValue)) {
                    matchingElement = el;
                }
            });

            if (matchingElement) {
                matchingElement.scrollIntoView({ behavior: "smooth", block: "center" });

                matchingElement.classList.remove("blinkingHighlight");
                void matchingElement.offsetWidth;
                matchingElement.classList.add("blinkingHighlight");
            } else {
                MessageToast.show("검색 결과가 없습니다.");
            }

            // 검색어 초기화
            var oInput = this.byId("searchField");
            if (oInput) oInput.setValue("");
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
        },

        onInit: function () {
            // 플로팅 버튼을 SAPUI5 루트 영역에 추가
            if (!document.getElementById("floatingFab")) {
                 var btn = document.createElement("button");
                 btn.id = "floatingFab";
                 btn.innerText = "AI";
                 btn.className = "sapMBtn sapMBtnEmphasized"; // SAPUI5 스타일 적용
                btn.onclick = this.onFloatingFabPress.bind(this);
                 document.body.appendChild(btn);
            }
        },

        // 플로팅 버튼 클릭 핸들러
        onFloatingFabPress: function () {
            sap.m.MessageToast.show("FAB 클릭됨!");
        }
    });
});