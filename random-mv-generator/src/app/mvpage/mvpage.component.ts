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
  mvObserver = new Observable<MvPage>();

  @Input() rand;
  constructor(private mvService: MvService) { }

  ngOnInit(): void {
    // get all mv / lyrics 
    // let mvObjs = this.mvService.getAll();
    // get random from the pool 
    this.mvObserver.subscribe((data)=> {
      console.log(data)
      // console.log(this.rand);
      // let random = mvObjs[this.rand];
      // // display radom one in the mv page
      // this.mvProp = random;
    })
    

  }

}
