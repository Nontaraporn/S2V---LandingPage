import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-cases',
  templateUrl: './use-cases.component.html',
  styleUrls: ['./use-cases.component.scss']
})
export class UseCasesComponent implements OnInit {

  public useCases = [
    {
      url:'https://drive.google.com/file/d/1IAl9aZDaOxgJPHZRBgJkLah1BqPAkvEJ/preview',
      title:'Marketing Video'
    },
    {
      url:'data/item02.jpg',
      title:'Avatar Conversations'
    },
    {
      url:'data/item03.jpg',
      title:'Customer Communications'
    },
    {
      url:'data/item04.jpg',
      title:'Entertainment Content'
    },
    {
      url:'data/item05.jpg',
      title:'Educational Content'
    },
  ]
  public content = [
    {
      title:'Reporter',
      detail:"เปลี่ยนเสียง content วิดิโอที่เป็นภาษาอังกฤษอยู่แล้ว ให้กลายเป็นภาษาไทย (หรือจากไทยเป็นอังกฤษ)",
      url:"data/content1.svg",
    },
    {
      title:'Instructor',
      detail:"Machine translation เพื่อแปลภาษาองกฤษเป็นภาษาไทยและใช้ Text to speech เปลี่ยนข้อความภาษาไทยให้เป็นเสียงภาษาไทย",
      url:"data/content2.svg",
    },
    {
      title:'Presentation',
      detail:"แปลงคลิปโดยนำเสียงและวิดิโอผ่านเทคโนโลยี Speech to video ให้มีเสียงและขยับปากอย่างเป็นธรรมชาติ",
      url:"data/content3.svg",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
