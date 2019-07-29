# iKB-1 Arduino
ไลบารี่สำหรับบอร์ด iKB-1 ใช้งานกับแพลตฟอร์ม Arduino

## การติดตั้ง

สำหรับโปรแกรม ArduinoIDE
 1. ดาวน์โหลดไฟล์ไลบารี่ที่ https://github.com/maxpromer/iKB-1_Arduino/releases
 2. คลายไฟล์ .zip นำโฟลเดอร์ iKB-1_Arduino-x.x.x ไปไว้ใน Documents\Arduino\libraries
 3. เปิดโปรแกรม ArduinoIDE ขึ้นมา ตัวอย่างโค้ดอยู่ที่เมนู File > Example > iKB-1 Arduino
 
สำหรับโปรแกรม KBIDE
 1. ดาวน์โหลดไฟล์ปลั๊กอินที่ https://github.com/maxpromer/iKB-1_Arduino/releases
 2. คลายไฟล์ .zip นำโฟลเดอร์ iKB-1_Arduino-x.x.x ไปไว้ใน [ไดร์ที่ติดตั้ง Windows]:\Users\Max\AppData\Local\Programs\kbide\plugins
 3. เปิดโปรแกรม KBIDE ขึ้นมา บล็อกจะอยู่ในเมนู Plugins
 
## บอร์ดที่รองรับ

บอร์ดต่อไปนี้รองรับ และทดสอบแล้ว

| บอร์ด/โปรแกรม | ArduinoIDE | KBIDE |
| ---- | :--------: | :---: |
| KidBright32 | :heavy_check_mark: | :heavy_check_mark: |
| IPST-WiFi | :heavy_check_mark: | :heavy_check_mark: |
| Ayarafun/LamLoei Node32 Lite | :heavy_check_mark: | :heavy_check_mark: |
| Node32 Pico | :heavy_check_mark: | :heavy_check_mark: (เลือกบอร์ด Node32 Lite) |
| NodeMCU-32S | :heavy_check_mark: | :heavy_check_mark: (เลือกบอร์ด Node32 Lite) |


## ตัวอย่างโค้ดโปรแกรม

โค้ดโปรแกรมต่อไปนี้อยู่ในโฟลเดอร์ examples

 * โค้ดไฟกระพริบ
 * โค้ดอ่านค่าดิจิตอลแสดงผลผ่าน Serial Monitor
 * โค้ดอ่านค่าแอนะล็อกแสดงผลผ่าน Serial Monitor
 * โค้ดควบคุมมอเตอร์
 * โค้ดควบคุมเซอร์โวมอเตอร์แบบ 180 องศา
 * โค้ดส่งข้อมูลผ่าน Serial ผ่านบอร์ด iKB-1
 

 
