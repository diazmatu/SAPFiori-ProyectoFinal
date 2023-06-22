sap.ui.define([], function() {
    'use strict';
    return{/*
        statusText: function (sShipperName, sShippedDate, sStatus){
            var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
            var finalText = sShipperName + " " + sShippedDate + " ";

            switch (sStatus){
                case "A":
                    return finalText + resourceBundle.getText("StatusA");
                case "B":
                    return finalText + resourceBundle.getText("StatusB");
                case "C":
                    return finalText + resourceBundle.getText("StatusC");
                default:
                    return finalText + sStatus;
            }
        },*/

        statusText: function (sPrice, sInput){
            debugger
            if (sPrice > sInput){
                return "Alto";
            } else {
                return "Bajo"
            }
        }
    }
});