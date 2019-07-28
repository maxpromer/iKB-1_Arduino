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
  ikb.servo(5, 0);
  delay(500);
  ikb.servo(5, 90);
  delay(500);
  ikb.servo(5, 180);
  delay(500);
}
