import { Injectable, EventEmitter } from '@angular/core';
import { Record } from '../dto/Record';
import { Time } from '../dto/Time';
@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private localStorage: any;

  public msgEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { 
    if (!localStorage) {
      throw new Error('Current browser does not support Local Storage');
    }
    this.localStorage = localStorage;
  }

  public setMap(key:string, value: Map<string, Time>):void {
    this.localStorage.setItem(key, JSON.stringify(this.mapToObject(value)));
  }

  public getMap(key:string): Map<string, Time> {
    return this.ObjectToMap(JSON.parse(this.localStorage.getItem(key))) || new Map<string, Time>();
  }

  public mapToObject(map: Map<string, Time>):Object {
    if (map == null) {
      return Object.create(null);
    }
    let obj =Object.create(null);
    map.forEach((v, k) => {
      obj[k] = map.get(k);
    });

    return obj;
  }

  public ObjectToMap(obj):Map<string, Time> {
    if (obj == null) {
      return null;
    }
    let map = new Map<string, Time>();
    for (let k of Object.keys(obj)) {
      map.set(k, obj[k]);
    }
    return map;
  }
 
  public setArr(key:string, value:Array<any>):void {
    this.localStorage.setItem(key, JSON.stringify(value));
  }
  //JSON.stringify(value)
  //JSON.parse
  public getArr(key:string):Array<any> {
    return JSON.parse(this.localStorage.getItem(key)) || new Array<any>();
  }
 
  public remove(key:string):any {
    this.localStorage.removeItem(key);
  }
  public removeAll():any{
 
    this.localStorage.clear();
  }
}
