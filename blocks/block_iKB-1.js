Blockly.Blocks['ikb1_setup'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("iKB-1 Setup")
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("setup iKB-1");
		this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
	}
};

Blockly.Blocks['ikb1_digital_read'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("digital read pin")
			.appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"]]), "ch");
		this.setOutput(true, ["Number", "Boolean"]);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
	}
};

Blockly.Blocks['ikb1_digital_write'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("digital write pin")
			.appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"]]), "ch");
		this.appendValueInput("value")
			.setCheck(["Number", "Boolean"])
			.appendField("to");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
	}
};

Blockly.Blocks['ikb1_analog_read'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("analog read pin")
			.appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"]]), "ch");
		this.setOutput(true, "Number");
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
	}
};

Blockly.Blocks['ikb1_motor'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("set motor")
			.appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "ch")
			.appendField("direction")
			.appendField(new Blockly.FieldDropdown([["Forward","1"], ["Backward", "2"]]), "dir");
		this.appendValueInput("speed")
			.setCheck("Number")
			.appendField("speed");
		this.appendDummyInput()
			.appendField("%");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
	}
};

Blockly.Blocks['ikb1_servo'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("set servo")
			.appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "ch");
		this.appendValueInput("angle")
			.setCheck("Number")
			.appendField("degree");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
	}
};

Blockly.Blocks['ikb1_servo2'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("set servo")
			.appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "ch")
			.appendField("direction")
			.appendField(new Blockly.FieldDropdown([["Forward","1"], ["Backward", "2"]]), "dir");
		this.appendValueInput("speed")
			.setCheck("Number")
			.appendField("speed");
		this.appendDummyInput()
			.appendField("%");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
	}
};

Blockly.Blocks['ikb1_serial_config'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("serial set baud rate to")
			.appendField(new Blockly.FieldDropdown([["9600","9600"], ["2400","2400"], ["57600","57600"], ["115200","115200"]]), "baud");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
	}
};

Blockly.Blocks['ikb1_serial_write'] = {
	init: function() {
		this.appendValueInput("data")
			.setCheck(["String", "Number", "Boolean"])
			.appendField("serial write");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
	}
};

Blockly.Blocks['ikb1_serial_write_line'] = {
	init: function() {
		this.appendValueInput("data")
			.setCheck(["String", "Number", "Boolean"])
			.appendField("serial write line");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
	}
};

Blockly.Blocks['ikb1_serial_available'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("serial available");
		this.setInputsInline(true);
		this.setOutput(true, ["Number", "Boolean"]);
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
	}
};

Blockly.Blocks['ikb1_serial_read_one_byte'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("serial read one byte");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
	}
};

/*
Blockly.Blocks['ikb1_serial_read'] = {
	init: function() {
		this.appendValueInput("count")
			.setCheck("Number")
			.appendField("serial read");
		this.appendDummyInput()
			.appendField("characters");
		this.setInputsInline(true);
		this.setOutput(true, "String");
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
	}
};
*/

Blockly.Blocks['ikb1_serial_read_string'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("serial read string");
		this.setInputsInline(true);
		this.setOutput(true, "String");
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
	}
};

Blockly.Blocks['ikb1_serial_read_line'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("serial read line");
		this.setInputsInline(true);
		this.setOutput(true, "String");
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
	}
};

Blockly.Blocks['ikb1_serial_read_until'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("serial read until")
			.appendField(new Blockly.FieldTextInput("$"), "until");
		this.setInputsInline(true);
		this.setOutput(true, "String");
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("https://github.com/maxpromer/iKB-1_Arduino");
	}
}

Blockly.Blocks['ikb1_motor_forward'] = {
	init: function() {
		this.jsonInit({
			"message0": "%1 Move Forward at speed %2 %%",
			"args0": [{
				"type": "field_image",
				"src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/wheel-icon.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "https://github.com/maxpromer/iKB-1_Arduino"
		});
	}
};

Blockly.Blocks['ikb1_motor_backward'] = {
	init: function() {
		this.jsonInit({
			"message0": "%1 Move Backward at speed %2 %%",
			"args0": [{
				"type": "field_image",
				"src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/wheel-icon.png",
				"width": 20,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "https://github.com/maxpromer/iKB-1_Arduino"
		});
	}
};

Blockly.Blocks['ikb1_motor_forward2'] = {
	init: function() {
		this.jsonInit({
			"message0": "%1 Move Forward left wheel at speed %2 %% and right wheel at speed %3 %%",
			"args0": [{
				"type": "field_image",
				"src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/wheel-icon.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed1",
				"check": "Number"
			}, {
				"type": "input_value",
				"name": "speed2",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "https://github.com/maxpromer/iKB-1_Arduino"
		});
	}
};

Blockly.Blocks['ikb1_motor_backward2'] = {
	init: function() {
		this.jsonInit({
			"message0": "%1 Move Backward left wheel at speed %2 %% and right wheel at speed %3 %%",
			"args0": [{
				"type": "field_image",
				"src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/wheel-icon.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed1",
				"check": "Number"
			}, {
				"type": "input_value",
				"name": "speed2",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "https://github.com/maxpromer/iKB-1_Arduino"
		});
	}
};

Blockly.Blocks['ikb1_motor_turn_left'] = {
	init: function() {
		this.jsonInit({
			"message0": "%1 Turn Left at speed %2 %%",
			"args0": [{
				"type": "field_image",
				"src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/wheel-icon.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "https://github.com/maxpromer/iKB-1_Arduino"
		});
	}
};

Blockly.Blocks['ikb1_motor_turn_right'] = {
	init: function() {
		this.jsonInit({
			"message0": "%1 Turn Right at speed %2 %%",
			"args0": [{
				"type": "field_image",
				"src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/wheel-icon.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "https://github.com/maxpromer/iKB-1_Arduino"
		});
	}
};

Blockly.Blocks['ikb1_motor_spin_left'] = {
	init: function() {
		this.jsonInit({
			"message0": "%1 Spin Left at speed %2 %%",
			"args0": [{
				"type": "field_image",
				"src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/wheel-icon.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "https://github.com/maxpromer/iKB-1_Arduino"
		});
	}
};

Blockly.Blocks['ikb1_motor_spin_right'] = {
	init: function() {
		this.jsonInit({
			"message0": "%1 Spin Right at speed %2 %%",
			"args0": [{
				"type": "field_image",
				"src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/wheel-icon.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "https://github.com/maxpromer/iKB-1_Arduino"
		});
	}
};

Blockly.Blocks['ikb1_motor_stop'] = {
	init: function() {
		this.jsonInit({
			"message0": "%1 Stop Moving",
			"args0": [{
				"type": "field_image",
				"src": require('path').dirname(Vue.prototype.$global.plugin.pluginInfo.plugins["block_iKB-1.js"].dir) + "/static/wheel-icon.png",
				"width": 18,
				"height": 16,
				"alt": "*",
				"flipRtl": false
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 180,
			"tooltip": "",
			"helpUrl": "https://github.com/maxpromer/iKB-1_Arduino"
		});
	}
};
