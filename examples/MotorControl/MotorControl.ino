#include <iKB-1.h>
#include <Wire.h>

iKB_1 ikb(&Wire1);

int pushButton = 0;

void setup() {
  Serial.begin(115200);

  Wire1.begin(4, 5);
  ikb.begin();
}

void loop() {
  ikb.motor(1, 1, 100);
  ikb.motor(2, 1, 100);
  delay(500);
  ikb.motor(1, 1, 50);
  ikb.motor(2, 1, 50);
  delay(500);
  ikb.motor(1, 2, 100);
  ikb.motor(2, 2, 100);
  delay(500);
  ikb.motor(1, 2, 50);
  ikb.motor(2, 2, 50);
  delay(500);
  ikb.motor(1, 1, 0);
  ikb.motor(2, 1, 0);
  delay(500);
}
