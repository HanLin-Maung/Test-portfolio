import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }


  ngOnInit(): void {
    
  }

}
