import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-feature',
  templateUrl: './our-feature.component.html',
  styleUrls: ['./our-feature.component.scss']
})
export class OurFeatureComponent implements OnInit {


  public listItem = [
    {
      title : 'User Voice',
      detail : '  หากผู้ใช้งานต้องการทำ Content ,Presentation ,อ่านข่าวหรือคอร์สออนไลน์ต่างๆ แต่ไม่มีเวลาอัดคลิปวิดิโอของตัวเองก็สามารถใช้อวาตารของระบบเรามาแทนได้หรือจะสร้างอวาตารเป็นของตัวเองก็ได้ โดยสามารถใช้เสียงของผู้ใช้เองได้',
    },
    {
      title : 'Text Voice',
      detail : '  หากผู้ใช้งานต้องการทำ Content ,Presentation ,อ่านข่าวหรือคอร์สออนไลน์ต่างๆ โดยเนื้อหาของงานมีการใช้เสียงแต่ไม่มั่นใจในเสียงของตัวเอง ระบบของเราก็สามารถช่วยได้เพียงแค่นำคลิปวิดิโอของคุณมาพิมพ์ข้อความใส่เข้าไป ระบบจะเอาเสียงจาก Botnoi voice มาใช้และทำการออกเสียงตามที่คุณต้องการได้นั้นเอง',
    },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
