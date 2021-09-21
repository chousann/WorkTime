import { Injectable } from '@angular/core';
import { Time } from './Time';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class Record {
	constructor() { }

  timeMap: Map<string, Time> = new Map<string, Time>();
}
