var selenium = require('selenium-server-standalone-jar');
var chromeDriver = require('chrome-driver-standalone');


var config = {
	"custom_commands_path": "command",
	"page_objects_path": "page",
	"src_folders":["test"],
	"output_folder":"./output",
	"selenium":{
		"start_process":true,
		"server_path":selenium.path,
		"cli_args":{
			"webdriver.chrome.driver":chromeDriver.path
		}

	},
	"test_settings":{
		"default":{
			"screenshots":{
				"enabled":true,
				"path":'./screenshots'
			},
			"globals":{
				"waitForConditionTimeout":5000
			},
      		"desiredCapabilities": {
        		"browserName": "chrome",
      		}
		}
	}
}
module.exports =config;