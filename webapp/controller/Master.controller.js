sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/Fragment",
    "proyectofinal/model/constants",
	"sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter, Filter, FilterOperator, Fragment, constants, MessageBox) {
        "use strict";

        var sResponsivePaddingClasses = "sapUiResponsivePadding--header sapUiResponsivePadding--content sapUiResponsivePadding--footer";

        return Controller.extend("proyectofinal.controller.Master", {
            onInit: function () {

            },

            onSwitchChange: function(oEvent) {
                var oColumn = this.byId("ColumnDetails");
                oColumn.setVisible(oEvent.getParameter("state"));
            },

            onLimitChange: function(oEvent) {
                
                var oInput = oEvent.getSource();
                var iLimit = parseInt(oInput.getValue());
                formatter.input = iLimit
            },
            
            handleSearch: function (oEvent){
                /*/ create model fliter
                var filters = []
                var query = oEvent.getParameter("query")

                if (query && query.length > 0) {
                    filters.push(
                        new Filter({
                            path: "ProductName",
                            operator: FilterOperator.Contains,
                            value1: query
                        })
                    )
                }

                var list = this.getView().byId("list")
                var binding = list.getBinding("items")
                binding.filter(filters)
                var sQuery = oEvent.getParameter("query");
                this._oGlobalFilter = null;
    
                if (sQuery) {
                    this._oGlobalFilter = new Filter([
                        new Filter("Name", FilterOperator.Contains, sQuery)
                    ], false);
                }
    
                this._filter();*/
            },

            
            onDraggableDialogPress: function (product) {
                var oView = this.getView();
                    if (!this.openDialog){
                        this.openDialog = sap.ui.xmlfragment("IdFragment", constants.model.routes.Fragments.Dialog, this)
                        oView.addDependent(this.openDialog)
                    }
                    this.openDialog.open()
                },

                closeDialog: function (){
                    
                    //this.byId("openDialog").close()
                    
                    this.openDialog.close()
                

                /*MessageBox.information("Details", {
                    title: "{i18n>TitleDetailView}",
                    id: "detailsBox",
                    details: "<p><strong>This can happen if:</strong></p>" +
					"<ul>" +
					"<li>You are not connected to the internet</li>" +
					"<li>a backend component is not <em>available</em></li>" +
					"<li>or an underlying system is down</li>" +
					"</ul>" +
					"<p>Get more help <a href='//www.sap.com' target='_top'>here</a>.",
                    contentWidth: "100px",
                    styleClass: sResponsivePaddingClasses
                });
                if (!this.oDraggableDialog) {
                    this.oDraggableDialog = new Dialog({
                        title: "Draggable Available Products",
                        contentWidth: "550px",
                        contentHeight: "300px",
                        draggable: true,
                        content: new List({
                            items: {
                                path: "/ProductCollection",
                                template: new StandardListItem({
                                    title: "{Name}",
                                    counter: "{Quantity}"
                                })
                            }
                        }),
                        endButton: new Button({
                            text: "Close",
                            press: function () {
                                this.oDraggableDialog.close();
                            }.bind(this)
                        })
                    });
    
                    //to get access to the controller's model
                    this.getView().addDependent(this.oDraggableDialog);
                }
    
                this.oDraggableDialog.open();*/
            },

            onPressNavigate: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var selectedProductID = oEvent.getSource().getBindingContext().getProperty("ProductID");
                oRouter.navTo("RouteDetail", {
                    ProductID: selectedProductID
                });
            }
        });
    });
