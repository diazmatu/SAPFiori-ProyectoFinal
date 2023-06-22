sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "proyectofinal/model/constants",
	"sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter, JSONModel, Fragment, constants, MessageBox) {
        "use strict";

        return Controller.extend("proyectofinal.controller.Detail", {

            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteDetail").attachMatched(this._onRouteMatched, this);
                
                var oView = this.getView();
                var openDialog = sap.ui.xmlfragment("IdFragment", constants.model.routes.Fragments.Dialog, this)
                oView.addDependent(openDialog)
            },
            
            _onRouteMatched: function (oEvent) {
                var oArgs, oView;
                oArgs = oEvent.getParameter("arguments");
                oView = this.getView();
                oView.bindElement({
                    path: "/Products(" + oArgs.ProductID + ")",
                    events: {
                        dataRequested: function () {
                            oView.setBusy(true);
                        },
                        dataReceived: function () {
                            oView.setBusy(false);
                        }
                    }
                });
            },
        })
});