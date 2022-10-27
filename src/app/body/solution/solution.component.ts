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
      detail : 'ทำการแปลงคลิปของคุณโดยนำเสียงและวีดีโอผ่านเทคโนโลยี Speech to video ให้มีเสียงพูดและขยับปากตามได้อย่างเป็นธรรมชาติ โดยสามารถปลั๊กอินเข้ากับระบบได้'
    },
    {
      title : 'ใช้เทคโนโลยี Speech to video',
      detail : 'ทำการแปลงคลิปของคุณโดยนำเสียงและวีดีโอผ่านเทคโนโลยี Speech to video ให้มีเสียงพูดและขยับปากตามได้อย่างเป็นธรรมชาติ โดยสามารถปลั๊กอินเข้ากับระบบได้'
    },
    {
      title : 'ใช้เทคโนโลยี Speech to video',
      detail : 'ทำการแปลงคลิปของคุณโดยนำเสียงและวีดีโอผ่านเทคโนโลยี Speech to video ให้มีเสียงพูดและขยับปากตามได้อย่างเป็นธรรมชาติ โดยสามารถปลั๊กอินเข้ากับระบบได้'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
