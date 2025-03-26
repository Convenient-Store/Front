sap.ui.define([
    "sap/ui/core/ComponentSupport"
], function () {
    "use strict";
    sap.ui.getCore().attachInit(function () {
        sap.ui.component({
            name: "capstone",
            id: "container"
        });
    });
});