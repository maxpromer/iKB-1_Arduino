#ifndef __iKB_1_UART_H__
#define __iKB_1_UART_H__

#include <Arduino.h>
#include <Wire.h>
#include <Stream.h>
#include <Print.h>

#include "freertos/FreeRTOS.h"
#include "freertos/queue.h"

class iKB_1_UART: public Stream {
	private:		
        TwoWire *wirebus = 0;
		
		uint8_t baudToBit = 0b01;

		// UART read buffer
		QueueHandle_t uartReadQueue = NULL;
		
		// method
		int uart_read_from_iKB_1(uint8_t count) ;

	public:
		// constructor
		iKB_1_UART(TwoWire *bus) ;

		// method
		bool begin(unsigned long baud) ;

        // RXD
        int available() ;
        int read() ;
        int peek() ;
		void flush() ;

        // TXD
        size_t write(uint8_t) ;
        size_t write(const uint8_t *buffer, size_t size) ;
		
};

#endif
