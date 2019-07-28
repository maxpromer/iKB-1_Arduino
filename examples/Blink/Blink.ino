#include <iKB-1.h>
#include <Wire.h>

iKB_1 ikb(&Wire1);

void setup() {
  Wire1.begin(4, 5);
  ikb.begin();
}

void loop() {
  ikb.digitalWrite(0, HIGH);
  delay(1000);
  ikb.digitalWrite(0, LOW);
  delay(1000);
}
