#include <iKB-1.h>
#include <Wire.h>

iKB_1 ikb(&Wire1);

void setup() {
  Wire1.begin(4, 5);
  ikb.begin();

  Serial.begin(115200);
}

void loop() {
  Serial.println(ikb.analogRead(0));
  delay(50);
}
