import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Record } from '../dto/Record';
import { Time } from '../dto/Time';
import { LocalstorageService } from '../service/localstorage.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  dataSource = new Array<Time>();
  start: Date = new Date();
  end: Date = new Date();
  constructor(private router: Router,private record: Record,
    private localstorage: LocalstorageService) { }

  ngOnInit() {
  }

  detail() {
    let timeMap: Map<string, Time> = this.localstorage.getMap("record");
    var start = (this.start.getFullYear().toString() + "-" + ((this.start.getMonth() + 1) > 9? "": "0") + (this.start.getMonth() + 1).toString() + "-" + ((this.start.getDate()) > 9? "": "0") + this.start.getDate().toString()).toString();
    var end = (this.end.getFullYear().toString() + "-" + ((this.end.getMonth() + 1) > 9? "": "0") + (this.end.getMonth() + 1).toString() + "-" + ((this.end.getDate()) > 9? "": "0") + this.end.getDate().toString()).toString();
    this.dataSource = new Array<Time>();
    timeMap.forEach((value: Time, key: string) => {
      if(start <= key && key <= end) {
        value.day = key;
        this.dataSource.push(value);
      }
    })
  }
  displayedColumns: string[] = ['day', 'amTime', 'apTime', 'amTimeFormat', 'apTimeFormat'];

}
