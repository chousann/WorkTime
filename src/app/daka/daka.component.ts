import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Record } from '../dto/Record';
import { Time } from '../dto/Time';
import { LocalstorageService } from '../service/localstorage.service';
@Component({
  selector: 'app-daka',
  templateUrl: './daka.component.html',
  styleUrls: ['./daka.component.scss']
})
export class DakaComponent implements OnInit {
  public dataSource: Array<Time> = new Array<Time>();
  constructor(private router: Router,private record: Record,
    private localstorage: LocalstorageService) { }

  ngOnInit() {
    this.update();
  }

  daka() {
    this.addRecord();
    this.update();
  }
  addRecord() {
    let timeMap: Map<string, Time> = this.localstorage.getMap("record");
    let time: Time = new Time();
    var date = new Date();
    var day = (date.getFullYear().toString() + "-" + ((date.getMonth() + 1) > 9? "": "0") + (date.getMonth() + 1).toString() + "-" + ((date.getDate()) > 9? "": "0") + date.getDate().toString()).toString();
    var t = date.getHours().toString() + ":" + date.getMinutes().toString();// + ":" + date.getSeconds().toString();
    if (timeMap.get(day) == null) {
        time.amTime = t;
        timeMap.set(day, time);
    } else {
      if (date.getHours() >= 12) {
        var a = timeMap.get(day);
        a.apTime = t;
        timeMap.set(day, a);
      }
    }

    this.localstorage.setMap("record", timeMap);
    console.log(timeMap);
  }

  update() {
    let timeMap: Map<string, Time> = this.localstorage.getMap("record");

    var date = new Date();
    var end = (date.getFullYear().toString() + "-" + ((date.getMonth() + 1) > 9? "": "0") + (date.getMonth() + 1).toString() + "-" + ((date.getDate()) > 9? "": "0") + date.getDate().toString()).toString();
    date.setDate(date.getDate() - 3);
    var start = (date.getFullYear().toString() + "-" + ((date.getMonth() + 1) > 9? "": "0") + (date.getMonth() + 1).toString() + "-" + ((date.getDate()) > 9? "": "0") + date.getDate().toString()).toString();
    this.dataSource = new Array<Time>();
    timeMap.forEach((value: Time, key: string) => {
      if(start <= key && key <= end) {
        value.day = key;
        this.dataSource.push(value);
      }
    })
  }
  displayedColumns: string[] = ['day', 'amTime', 'apTime', 'amTimeFormat', 'apTimeFormat'];

  detail() {
    this.router.navigate(['/detail']);
  }
}
