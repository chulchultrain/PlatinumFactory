import { Injectable } from '@angular/core';
import NameJson from '../../assets/Names.json';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  private nameMap = NameJson;
  constructor() { }

  NameFromId(id : string) {
    return id in this.nameMap ? this.nameMap[id] : null;
  }
}
