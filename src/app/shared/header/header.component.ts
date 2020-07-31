import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public navFixed = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowsScroll($event:Event){
    // let scrollOffset = $event.srcElement.children[0].scrollTop;
    let scrollOffset = document.documentElement.scrollTop;
    this.topNavegacion(scrollOffset);
    
  }

  topNavegacion(posicion: number) {
    if (posicion > 60) {
      this.navFixed = true;
    } else {
      this.navFixed = false;
    }
  }


}
