#ifndef __iKB_1_H__
#define __iKB_1_H__

#include <Arduino.h>
#include <Wire.h>

#include "iKB-1_UART.h"

class iKB_1 {
	private:		
		TwoWire *wirebus = 0;

		uint8_t read_data[3]; // Max 3 bytes
		uint8_t errCount = 0;

		// method
		bool send(uint8_t command) ;
		bool send(uint8_t command, uint8_t parameter) ;
		bool send(uint8_t command, uint8_t parameter, int request_length) ;
		bool send(uint8_t command, int request_length) ;

	public:
		// constructor
		iKB_1(TwoWire *bus) ;

		// method
		void begin() ;
		bool reset() ;
		uint8_t digitalRead(uint8_t ch, bool pullup = false) ;
		bool digitalWrite(uint8_t ch, uint8_t value) ;
		int analogRead(uint8_t ch) ;
		bool motor(uint8_t ch, uint8_t dir, uint8_t speed) ;
		bool servo(uint8_t ch, uint8_t angle) ;
		bool servo2(uint8_t ch, uint8_t dir, uint8_t speed) ;
		
		// Uart
		iKB_1_UART *Serial;
		
};

extern iKB_1 ikb;

#endif
