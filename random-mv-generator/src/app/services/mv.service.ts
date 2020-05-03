import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MvService {
  
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
}
