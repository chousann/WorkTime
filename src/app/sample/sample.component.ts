import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  title = 'WorkTime';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  daka() {
    this.router.navigate(['/daka']);
  }
}
