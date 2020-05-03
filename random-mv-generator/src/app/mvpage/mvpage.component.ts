import { MvPage } from './../models/mvpage';
import { MvService } from './../services/mv.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'mvpage',
  templateUrl: './mvpage.component.html',
  styleUrls: ['./mvpage.component.css']
})
export class MvpageComponent implements OnInit {
  mvProp: MvPage;
  
  constructor(private mvService: MvService) { }

  ngOnInit(): void {

    this.mvService.getMvListener()
    .subscribe((data: MvPage)=> {
      this.mvProp = data;
    });
    
  }

}
