


const scriptsInEvents = {

	async E_display_Event21_Act2(runtime, localVars)
	{
		if(confirm("Pin-o-pedia will open the following link:\n'" + runtime.globalVars.TEMP_ARTISTLINK + "'\n\nContinue?") == true) {
			window.open(runtime.globalVars.TEMP_ARTISTLINK, '_blank').focus();
		}
	},

	async E_display_Event22_Act2(runtime, localVars)
	{
		if(confirm("Pin-o-pedia will open the following link:\n'" + runtime.globalVars.TEMP_ARTISTLINK + "'\n\nContinue?") == true) {
			window.open(runtime.globalVars.TEMP_ARTISTLINK, '_blank').focus();
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

