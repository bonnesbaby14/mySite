import { Component, OnInit } from '@angular/core';
import { trigger, style,state,transition,animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('enterStateG',[
      state('void',style({
        transform:'translateY(-100%)',
        opacity:0
      })),
      transition(':enter',[
        animate(900,style({
          transform:'translateY(0)',
          opacity:1
        })),
      ])
    ]),
    trigger('enterStateName', [
      state('void', style({
        transform: 'translateX(100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(900, style({
          transform: 'translateX(0)',
          opacity: 1
        })),
      ])
    ]),
    trigger('enterStateCa', [
      state('void', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(900, style({
          transform: 'translateX(0)',
          opacity: 1
        })),
      ])
    ]),
    trigger('enterStateButtons', [
      state('void', style({
        
        opacity: 0
      })),
      transition(':enter', [
        animate('2.0s ease-out', style({
        
          opacity: 1
        })),
      ])
    ]),



  
  ]
  
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
