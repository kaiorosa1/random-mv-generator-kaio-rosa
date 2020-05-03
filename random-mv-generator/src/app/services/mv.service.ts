import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { MvPage } from '../models/mvpage';

@Injectable({
  providedIn: 'root'
})
export class MvService {
  mvSubject = new Subject<any>();
  objMVs = [
    {
      artist: 'Rina Sawayama',
      titletrack: 'XS',
      lyrics: [
        "I just wanna.. (yes, yes)... oh me oh my"
      ],
      videourl: ""
    },
    {
      artist: 'Ariana Grande',
      titletrack: '7 Rings',
      lyrics: [
        "I see it I like I want it I got it.."
      ],
      videourl: ""
    },
    {
      artist: 'Bad Suns',
      titletrack: 'Disappear Here',
      lyrics: [
        "Disappear.."
      ],
      videourl: ""
    }
  ];

  constructor() { }

  getAll(){
    return this.objMVs;
  }

  getMvListener() {
    return this.mvSubject;
  }

}
