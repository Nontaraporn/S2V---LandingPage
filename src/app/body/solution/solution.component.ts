import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit {

  public items = [
    {
      title : 'ใช้เทคโนโลยี Speech to video',
      detail : '  ทำการแปลงคลิปของคุณโดยนำเสียงและวีดีโอผ่านเทคโนโลยี Speech to video ให้มีเสียงพูดและขยับปากตามได้อย่างเป็นธรรมชาติ โดยสามารถปลั๊กอินเข้ากับระบบได้'
    },
    {
      title : 'ใช้เทคโนโลยีการสังเคราะห์เสียงจาก Botnoi voice',
      detail : '  หากผู้ใช้งานไม่มั่นใจในเสียงของตัวเองหรือไม่มีเสียงที่ใช้สำหรับงานก็สามารถใช้บริการ เสียงจากแพลตฟอร์ม botnoi vioce มาใช้ได้'
    },
    {
      title : 'สะดวกและรวดเร็วในการสร้างวิดิโอ',
      detail : '  ทำการแปลงคลิปของคุณโดยนำเสียงและวีดีโอผ่านเทคโนโลยี Speech to video ให้มีเสียงพูดและขยับปากตามได้อย่างเป็นธรรมชาติ โดยสามารถปลั๊กอินเข้ากับระบบได้'
    }
  ];

  public video = [
    "https://drive.google.com/file/d/13VfedBXJvOoO223_s4XGnuILsi_Z-hEg/preview"
    ,"https://drive.google.com/file/d/1me2sX7bRujXo_fuJq36JhhoAUB7UDBC_/preview"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
