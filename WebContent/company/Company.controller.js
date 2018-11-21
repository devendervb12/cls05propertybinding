sap.ui.controller("company.Company", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf company.Company
*/
	onInit: function() {
		
	// 1. instantiated JSONModel	
      var oModel = new sap.ui.model.json.JSONModel();
      
   // 2. Load Data   
      oModel.loadData("model/companyData.json");
      
   // 3. set model to View   
      this.getView().setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf company.Company
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf company.Company
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf company.Company
*/
//	onExit: function() {
//
//	}

});