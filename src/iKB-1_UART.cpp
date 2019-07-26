#ifndef __iKB_1_UART_CPP__
#define __iKB_1_UART_CPP__

#include "iKB-1_UART.h"

#define IKB_1_ADDR 0x48

#define min(a, b) (a > b ? b : a)

iKB_1_UART::iKB_1_UART(TwoWire *bus) { 
    wirebus = bus;
}

bool iKB_1_UART::begin(unsigned long baud) {
	uartReadQueue = xQueueCreate(
		256, 
		sizeof(uint8_t)
	);

	if (baud == 2400) {
		baudToBit = 0b00;
	} else if (baud == 9600) {
		baudToBit = 0b01;
	} else if (baud == 57600) {
		baudToBit = 0b10;
	} else if (baud == 115200) {
		baudToBit = 0b11;
	} else {
		return false;
	}
	
	return true;
}

// TXD
size_t iKB_1_UART::write(uint8_t data) {
    return write(&data, 1);
}

size_t iKB_1_UART::write(const uint8_t *buffer, size_t size) {
	wirebus->beginTransmission(IKB_1_ADDR);
	wirebus->write(0x04 | baudToBit);
	wirebus->write(buffer, size);
	return wirebus->endTransmission() == 0 ? size : 0;
}

// RXD
int iKB_1_UART::available() {
	uint8_t newDataIniKB_1 = 0;
	uint8_t readCount = 0;

    wirebus->beginTransmission(IKB_1_ADDR);
    wirebus->write(0x01);
    wirebus->endTransmission();

    readCount = wirebus->requestFrom(IKB_1_ADDR, readCount);
	
	if (readCount > 0) {
        newDataIniKB_1 = wirebus->read();
	    ESP_LOGI("iKB-1", "Data new (iKB-1): %d", newDataIniKB_1);
    } else {
        newDataIniKB_1 = 0;
		ESP_LOGI("iKB-1", "Read serial available fail");
	}

	while(newDataIniKB_1 > 0) {
		readCount = min(newDataIniKB_1, 63);

        wirebus->beginTransmission(IKB_1_ADDR);
        wirebus->write(0x02);
        wirebus->write(readCount);
        if (wirebus->endTransmission() != 0) {
            delay(1);
            continue;
        }

        readCount = wirebus->requestFrom(IKB_1_ADDR, readCount);
		
		ESP_LOGI("iKB-1", "Read: %d\n", readCount);
		
		while(wirebus->available()) {
            uint8_t data = wirebus->read();
			xQueueSendToBack(uartReadQueue, &data, 0);
		}
		newDataIniKB_1 = newDataIniKB_1 - readCount;
		
		delay(1);
	}
	
	return uxQueueMessagesWaiting(uartReadQueue);
}

int iKB_1_UART::read() {
    uint8_t data = 0;
	xQueueReceive(uartReadQueue, &data, 10);
	
	return data;
}

int iKB_1_UART::peek() {
    uint8_t data = 0;
	xQueuePeek(uartReadQueue, &data, 10);
	
	return data;
}

void iKB_1_UART::flush() {
	read();
}


#endif
