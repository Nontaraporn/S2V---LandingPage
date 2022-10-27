import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-start',
  templateUrl: './get-start.component.html',
  styleUrls: ['./get-start.component.scss']
})
export class GetStartComponent implements OnInit {

  public detail = 'ระบบแปลงเสียงพูดเป็นวีดีโอช่วยขยับรูปปากของผู้ใช้ตามการออกเสียงได้อย่างแม่นยำทำให้การทำงานของคุณโดดเด่น ไม่เหมือนใคร';

  constructor() { }

  ngOnInit(): void {
  }

}
