import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Verkada Take Home';
  max_ts:number = 1503031520;
  min_ts:number = 1500348260;
  interval_ts:number = 20;
  img_url:number[]=[];
 //134163
  counter:number;


   // = 134163;
  ngOnInit() {
    this.counter = (this.max_ts - this.min_ts)/this.interval_ts;

    console.log(this.counter)
      for (let i = 0; i < 200; i++){
        this.img_url.push(this.min_ts + i * this.interval_ts)

      }
      console.log(this.img_url);
    }

 //  this.counter = (max_ts - min_ts)/interval_ts;
 //
 // }
  // timestamp = min_ts + interval_ts
  // for (i = min_ts; i <= max_ts; i+interval_ts)
      // {{i}}
}
