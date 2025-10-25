sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
     "sap/m/MessageToast"
], (Controller, JSONModel, MessageToast) => {
    "use strict";

    return Controller.extend("project1ui5.controller.View1", {
        onInit() {
            console.log("view1 loaded by piyush");

        },
        onPress() {
            console.log("Button pressed.");
        },
        onPressbypiyush() {
            console.log("Button press 2nd ");
        },

        // For radio button
        onSelectRadio: function (oEvent) {
            // Get RadioButtonGroup
            var oGroup = oEvent.getSource();
            console.log("oGroup = ",oGroup);

            // Get selected index (0-based)
            var iIndex = oGroup.getSelectedIndex();
            console.log("iIndex = ",iIndex);

            // Get all buttons
            var aButtons = oGroup.getButtons();
            console.log(aButtons);


            // Get selected text
            var sText = aButtons[iIndex].getText();

            // Print in console
            console.log("Selected option:", sText);
        },

        //for the link press
        handleLinkPress: function (oEvent) {
            var linkText = oEvent.getSource().getText();
            console.log("You click this link :", linkText);
        },

        onMenuAction: function (oEvent) {
            var oItem = oEvent.getParameter("item");
            var text = oItem.getText();
            console.log("You select - ", text);

        },
        //for nagivation 
        onItemSelect: function (oEvent) {
            var oItem = oEvent.getParameter("item");
            var text = oItem.getText();
            console.log("you select -", text);
        },

        // on range change 
        onRangeChange: function (oEvent) {
            var oRangeSlider = oEvent.getSource();
            var rangeFrom = oRangeSlider.getValue();
            var rangeTo = oRangeSlider.getValue2();
            console.log("You selected range from " + rangeFrom + " to " + rangeTo);
        },

        onCollapseExpandPress() {
            const oSideNavigation = this.byId("sideNavigation"),
                bExpanded = oSideNavigation.getExpanded();

            oSideNavigation.setExpanded(!bExpanded);
        },

        //tables
        

    });
});