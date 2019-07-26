var ADDONS_IKB_1_ADDRESS = '0x48';
var ADDONS_IKB_1_CLASS_BEGIN = 'DEV_I2C1.iKB_1(0, ' + ADDONS_IKB_1_ADDRESS + ')';

Blockly.JavaScript['ikb1_digital_read'] = function(block) {
	var dropdown_ch = block.getFieldValue('ch');
	var code = ADDONS_IKB_1_CLASS_BEGIN + '.digital_read(' + dropdown_ch + ')';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ikb1_digital_write'] = function(block) {
	var dropdown_ch = block.getFieldValue('ch');
	var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
	var code = ADDONS_IKB_1_CLASS_BEGIN + '.digital_write(' + dropdown_ch + ', ' + value_value + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_analog_read'] = function(block) {
	var dropdown_ch = block.getFieldValue('ch');
	var code = ADDONS_IKB_1_CLASS_BEGIN + '.analog_read(' + dropdown_ch + ')';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ikb1_motor'] = function(block) {
	var dropdown_ch = block.getFieldValue('ch');
	var dropdown_dir = block.getFieldValue('dir');
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
	var code = ADDONS_IKB_1_CLASS_BEGIN + '.motor(' + dropdown_ch + ', ' + dropdown_dir + ', ' + value_speed + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_servo'] = function(block) {
	var dropdown_ch = block.getFieldValue('ch');
	var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
	var code = ADDONS_IKB_1_CLASS_BEGIN + '.servo(' + dropdown_ch + ', ' + value_angle + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_servo2'] = function(block) {
	var dropdown_ch = block.getFieldValue('ch');
	var dropdown_dir = block.getFieldValue('dir');
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
	var code = ADDONS_IKB_1_CLASS_BEGIN + '.servo2(' + dropdown_ch + ', ' + dropdown_dir +', ' + value_speed + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_serial_config'] = function(block) {
	var dropdown_baud = block.getFieldValue('baud');
	var code = ADDONS_IKB_1_CLASS_BEGIN + '.uart_config(' + dropdown_baud + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_serial_write'] = function(block) {
	var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
	var code = ADDONS_IKB_1_CLASS_BEGIN + '.uart_write(' + value_data + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_serial_write_line'] = function(block) {
	var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
	var code = ADDONS_IKB_1_CLASS_BEGIN + '.uart_write_line(' + value_data + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_serial_available'] = function(block) {
	var code = ADDONS_IKB_1_CLASS_BEGIN + '.uart_available()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ikb1_serial_read_one_byte'] = function(block) {
	var code = ADDONS_IKB_1_CLASS_BEGIN + '.uart_read()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ikb1_serial_read'] = function(block) {
	var value_count = Blockly.JavaScript.valueToCode(block, 'count', Blockly.JavaScript.ORDER_ATOMIC);
	var code = ADDONS_IKB_1_CLASS_BEGIN + '.uart_read(' + value_count + ')';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ikb1_serial_read_string'] = function(block) {
	var code = ADDONS_IKB_1_CLASS_BEGIN + '.uart_read_string(100)';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ikb1_serial_read_line'] = function(block) {
	var code = ADDONS_IKB_1_CLASS_BEGIN + '.uart_read_line(100)';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ikb1_serial_read_until'] = function(block) {
	var text_until = block.getFieldValue('until');
	var code = ADDONS_IKB_1_CLASS_BEGIN + '.uart_read_until("' + text_until + '", 100)';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ikb1_motor_forward'] = function(block) {
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += ADDONS_IKB_1_CLASS_BEGIN + '.motor(1, 1, ' + value_speed + ');\t';
	code += ADDONS_IKB_1_CLASS_BEGIN + '.motor(2, 1, ' + value_speed + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_motor_backward'] = function(block) {
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += ADDONS_IKB_1_CLASS_BEGIN + '.motor(1, 2, ' + value_speed + ');\t';
	code += ADDONS_IKB_1_CLASS_BEGIN + '.motor(2, 2, ' + value_speed + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_motor_turn_left'] = function(block) {
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += ADDONS_IKB_1_CLASS_BEGIN + '.motor(1, 1, 0);\t';
	code += ADDONS_IKB_1_CLASS_BEGIN + '.motor(2, 1, ' + value_speed + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_motor_turn_right'] = function(block) {
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += ADDONS_IKB_1_CLASS_BEGIN + '.motor(1, 1, ' + value_speed + ');\t';
	code += ADDONS_IKB_1_CLASS_BEGIN + '.motor(2, 1, 0);\n';
	return code;
};

Blockly.JavaScript['ikb1_motor_spin_left'] = function(block) {
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += ADDONS_IKB_1_CLASS_BEGIN + '.motor(1, 2, ' + value_speed + ');\t';
	code += ADDONS_IKB_1_CLASS_BEGIN + '.motor(2, 1, ' + value_speed + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_motor_spin_right'] = function(block) {
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += ADDONS_IKB_1_CLASS_BEGIN + '.motor(1, 1, ' + value_speed + ');\t';
	code += ADDONS_IKB_1_CLASS_BEGIN + '.motor(2, 2, ' + value_speed + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_motor_stop'] = function(block) {
	var code = '';
	code += ADDONS_IKB_1_CLASS_BEGIN + '.motor(1, 1, 0);\t';
	code += ADDONS_IKB_1_CLASS_BEGIN + '.motor(2, 1, 0);\n';
	return code;
};

Blockly.JavaScript['ikb1_motor_forward2'] = function(block) {
	var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += ADDONS_IKB_1_CLASS_BEGIN + '.motor(1, 1, ' + value_speed1 + ');\t';
	code += ADDONS_IKB_1_CLASS_BEGIN + '.motor(2, 1, ' + value_speed2 + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_motor_backward2'] = function(block) {
	var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += ADDONS_IKB_1_CLASS_BEGIN + '.motor(1, 2, ' + value_speed1 + ');\t';
	code += ADDONS_IKB_1_CLASS_BEGIN + '.motor(2, 2, ' + value_speed2 + ');\n';
	return code;
};

