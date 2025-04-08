sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("capstone.controller.Item.List", {
        onInit: function () {
            console.log("Item List View loaded");
        }
    });
});
