import { Injectable } from '@angular/core';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class Time {
  constructor() { }
  
  day: string;

  amTime: string;
  apTime: string;

  amTimeFormat: string;
  apTimeFormat: string;
}
