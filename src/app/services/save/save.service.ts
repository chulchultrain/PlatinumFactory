import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  public savedEntries = new Subject<any>();
  
  constructor() { 

  }

  save(entry) {
    this.savedEntries.next(entry);
  }
}
