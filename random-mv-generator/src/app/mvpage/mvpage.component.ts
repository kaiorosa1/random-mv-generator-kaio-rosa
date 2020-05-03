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
  // mvObserver = new Observable<MvPage>();

  @Input() rand;
  constructor(private mvService: MvService) { }

  ngOnInit(): void {
    // get all mv / lyrics 
    // get random from the pool 
    // display radom one in the mv page
    this.mvService.getMvListener()
    .subscribe((data)=> {
      // console.log(data);
      this.mvProp = data;
      // console.log(this.rand);
     
    });
    

  }

}
