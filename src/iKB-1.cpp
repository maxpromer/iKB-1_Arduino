#ifndef __iKB_1_CPP__
#define __iKB_1_CPP__

#include "iKB-1.h"

#define IKB_1_ADDR 0x48

iKB_1::iKB_1(TwoWire *bus) { 
    wirebus = bus;
	Serial = new iKB_1_UART(bus);
}

void iKB_1::begin() {
	// Serial->begin(9600);
	reset();
	delay(10);
}

// Send only, no parameter, no request
bool iKB_1::send(uint8_t command) {
	wirebus->beginTransmission(IKB_1_ADDR);
	wirebus->write(command);
	return wirebus->endTransmission() == 0;
}

// Send command and parameter, no request
bool iKB_1::send(uint8_t command, uint8_t parameter) {
	wirebus->beginTransmission(IKB_1_ADDR);
	wirebus->write(command);
	wirebus->write(parameter);
	return wirebus->endTransmission() == 0;
}

// Send command and parameter and request
bool iKB_1::send(uint8_t command, uint8_t parameter, int request_length) {
	wirebus->beginTransmission(IKB_1_ADDR);
	wirebus->write(command);
	wirebus->write(parameter);
	if (wirebus->endTransmission() != 0) {
		return false;
	}

	wirebus->requestFrom(IKB_1_ADDR, request_length);
	int i=0;
	while(wirebus->available()) {
		read_data[i++] = wirebus->read();
	}

	return true;
}

// Send command and request, no parameter 
bool iKB_1::send(uint8_t command, int request_length) {
	wirebus->beginTransmission(IKB_1_ADDR);
	wirebus->write(command);
	if (wirebus->endTransmission() != 0) {
		return false;
	}

	wirebus->requestFrom(IKB_1_ADDR, request_length);
	int i=0;
	while(wirebus->available()) {
		read_data[i++] = wirebus->read();
	}

	return true;
}

bool iKB_1::reset() {
	return send((uint8_t)0x0);
}

uint8_t iKB_1::digitalRead(uint8_t ch, bool pullup) {
	// if (ch < 0 || ch > 7) { // warning: comparison is always false due to limited range of data type
	if (ch > 7) {
		return 0;
	}
	
	if (!send(0x08 + ch, (pullup ? 3 : 2), 1)) {
		return 0;
	}
	
	return read_data[0] != 0;
}

bool iKB_1::digitalWrite(uint8_t ch, uint8_t value) {
	if (ch > 7) {
		return false;
	}

	return send(0x08 + ch, (uint8_t)(value != 0 ? 1 : 0));
}

int iKB_1::analogRead(uint8_t ch) {
	if (ch > 7) {
		return 0;
	}
	
	if (!send(0x80 + (ch << 4), (int)2)) {
		return 0;
	}
	
	return (read_data[0]<<8)|read_data[1];
}

bool iKB_1::motor(uint8_t ch, uint8_t dir, uint8_t speed) {
	if (ch < 1 || ch > 4) {
		return false;
	}
	speed = constrain(speed, 0, 100);
	
	char speed_t = 0;
	switch (dir) {
		case 1: // Forward
			speed_t = speed * 1;
			break;
		
		case 2: // Backward
			speed_t = speed * -1;
			break;
		
		default: // Stop
			speed_t = 0;

	}

	return send(0x20 | (1 << (ch - 1)), (uint8_t)speed_t);
}

bool iKB_1::servo(uint8_t ch, uint8_t angle) {
	if (ch < 1 || ch > 6) {
		return false;
	}

	return send(0x40 | (1 << (ch - 1)), (uint8_t)angle);
}

bool iKB_1::servo2(uint8_t ch, uint8_t dir, uint8_t speed) {
	if (ch < 1 || ch > 6) {
		return false;
	}
	
	speed = constrain(speed, 0, 100);
	
	uint8_t angle; 
	if (dir == 1) {
		angle = 90.0 - (speed * 90.0 / 100.0); // Forward
	} else if (dir == 2) {
		angle = 90.0 + (speed * 90.0 / 100.0); // Backward
	} else {
		return false;
	}

	return servo(ch, angle);
}

#endif
