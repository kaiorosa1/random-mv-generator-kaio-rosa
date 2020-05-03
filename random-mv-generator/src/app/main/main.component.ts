import { Component, OnInit } from '@angular/core';
import { MvService } from '../services/mv.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isClicked = false;
  mvObjs;
  constructor(private mvService: MvService) { }

  ngOnInit(): void {
    this.mvObjs = this.mvService.getAll();
  }

  getRandomMV(){
    this.isClicked = true;
    let randomNumber = Math.floor(Math.random()* this.mvObjs.length);
    let randMVObj = this.mvObjs[randomNumber];
    this.mvService.getMvListener().next(randMVObj);
    
  }

}
