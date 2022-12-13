import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // scroll chang style nav
    let element = document.querySelector('.navbar') as HTMLElement;
    // console.log("current",this.location.path().slice(1));
    if (window.pageYOffset > 40 ) {
      element.classList.add('sticky');
    }else {
      element.classList.remove('sticky');
    }
  }
  // $(window).scroll(function(){
	// 	if(this.scrollY > 20){
	// 		('.navbar').addClass("sticky");
	// 	}else{
	// 		('.navbar').removeClass("sticky");
	// 	}
	// });

	// slide up
	// $('.scroll-up-btn').click(function(){
	// 	$('html').animate({scrollTop: 0});
	// })

}
