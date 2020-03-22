Blockly.JavaScript['ikb1_setup'] = function(block) {
	var WIRE_OBJ = 'Wire';
	var SDA_PIN = 21, SCL_PIN = 22; 

	var board_name = Vue.prototype.$global.board.board_info.name;
	if (board_name == 'kidbright-arduino' || board_name == 'openkb') {
		WIRE_OBJ = 'Wire1';
		SDA_PIN = 4;
		SCL_PIN = 5;
	} else if (board_name == 'ipst-wifi') {

	}

	var code = '';
	code += '#EXTINC#include <iKB-1.h>#END\n';
	code += '#EXTINC#include <iKB-1_UART.h>#END\n';
	code += '#EXTINC#include <Wire.h>#END\n';
	code += '#VARIABLE iKB_1 ikb(&' + WIRE_OBJ + ');#END\n';
	code += '\n';
	code += WIRE_OBJ + '.begin(' + SDA_PIN + ', ' + SCL_PIN + ');\n';
	code += 'ikb.begin();\n';
	return code;
};

Blockly.JavaScript['ikb1_digital_read'] = function(block) {
	var dropdown_ch = block.getFieldValue('ch');
	var code = 'ikb.digitalRead(' + dropdown_ch + ')';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ikb1_digital_write'] = function(block) {
	var dropdown_ch = block.getFieldValue('ch');
	var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC) || 0;
	var code = 'ikb.digitalWrite(' + dropdown_ch + ', ' + value_value + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_analog_read'] = function(block) {
	var dropdown_ch = block.getFieldValue('ch');
	var code = 'ikb.analogRead(' + dropdown_ch + ')';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ikb1_motor'] = function(block) {
	var dropdown_ch = block.getFieldValue('ch');
	var dropdown_dir = block.getFieldValue('dir');
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
	var code = 'ikb.motor(' + dropdown_ch + ', ' + dropdown_dir + ', ' + value_speed + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_servo'] = function(block) {
	var dropdown_ch = block.getFieldValue('ch');
	var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
	var code = 'ikb.servo(' + dropdown_ch + ', ' + value_angle + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_servo2'] = function(block) {
	var dropdown_ch = block.getFieldValue('ch');
	var dropdown_dir = block.getFieldValue('dir');
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || 0;
	var code = 'ikb.servo2(' + dropdown_ch + ', ' + dropdown_dir +', ' + value_speed + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_serial_config'] = function(block) {
	var dropdown_baud = block.getFieldValue('baud');
	var code = 'ikb.Serial->begin(' + dropdown_baud + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_serial_write'] = function(block) {
	var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC) || 0;
	var code = 'ikb.Serial->print(' + value_data + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_serial_write_line'] = function(block) {
	var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC) || '';
	var code = 'ikb.Serial->println(' + value_data + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_serial_available'] = function(block) {
	var code = 'ikb.Serial->available()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ikb1_serial_read_one_byte'] = function(block) {
	var code = 'ikb.Serial->read()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

/*
Blockly.JavaScript['ikb1_serial_read'] = function(block) {
	var value_count = Blockly.JavaScript.valueToCode(block, 'count', Blockly.JavaScript.ORDER_ATOMIC);
	var code = 'ikb.uart_read(' + value_count + ')';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
*/

Blockly.JavaScript['ikb1_serial_read_string'] = function(block) {
	var code = 'ikb.Serial->readString()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ikb1_serial_read_line'] = function(block) {
	var code = 'ikb.Serial->readStringUntil(\'\\n\')';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ikb1_serial_read_until'] = function(block) {
	var text_until = block.getFieldValue('until');
	var code = 'ikb.Serial->readStringUntil("' + text_until + '")';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ikb1_motor_forward'] = function(block) {
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += 'ikb.motor(1, 1, ' + value_speed + ');\t';
	code += 'ikb.motor(2, 1, ' + value_speed + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_motor_backward'] = function(block) {
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += 'ikb.motor(1, 2, ' + value_speed + ');\t';
	code += 'ikb.motor(2, 2, ' + value_speed + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_motor_turn_left'] = function(block) {
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += 'ikb.motor(1, 1, 0);\t';
	code += 'ikb.motor(2, 1, ' + value_speed + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_motor_turn_right'] = function(block) {
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += 'ikb.motor(1, 1, ' + value_speed + ');\t';
	code += 'ikb.motor(2, 1, 0);\n';
	return code;
};

Blockly.JavaScript['ikb1_motor_spin_left'] = function(block) {
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += 'ikb.motor(1, 2, ' + value_speed + ');\t';
	code += 'ikb.motor(2, 1, ' + value_speed + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_motor_spin_right'] = function(block) {
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += 'ikb.motor(1, 1, ' + value_speed + ');\t';
	code += 'ikb.motor(2, 2, ' + value_speed + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_motor_stop'] = function(block) {
	var code = '';
	code += 'ikb.motor(1, 1, 0);\t';
	code += 'ikb.motor(2, 1, 0);\n';
	return code;
};

Blockly.JavaScript['ikb1_motor_forward2'] = function(block) {
	var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += 'ikb.motor(1, 1, ' + value_speed1 + ');\t';
	code += 'ikb.motor(2, 1, ' + value_speed2 + ');\n';
	return code;
};

Blockly.JavaScript['ikb1_motor_backward2'] = function(block) {
	var value_speed1 = Blockly.JavaScript.valueToCode(block, 'speed1', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var value_speed2 = Blockly.JavaScript.valueToCode(block, 'speed2', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	var code = '';
	code += 'ikb.motor(1, 2, ' + value_speed1 + ');\t';
	code += 'ikb.motor(2, 2, ' + value_speed2 + ');\n';
	return code;
};

