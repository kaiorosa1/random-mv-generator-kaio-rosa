import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isClicked = false;
  constructor() { }

  ngOnInit(): void {
  }

  getRandomMV(event){
    this.isClicked = true;
    console.log("being clicked");
    console.log(event.target);
  }

}
