sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough.controller.Customers", {
		onInit : function () {
			var oViewModel = new JSONModel({
				
			});
			this.getView().setModel(oViewModel, "view");
		},
		onFilterCustomers : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("FirstName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("custumorsList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
		
		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("customer", {
				customerPath: window.encodeURIComponent(oItem.getBindingContext("customer").getPath().substr(1))
			});
		}
		
	});
});