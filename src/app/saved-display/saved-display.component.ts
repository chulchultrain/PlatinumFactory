import { Component, OnInit } from '@angular/core';
import { SaveService } from '../services/save/save.service';

@Component({
  selector: 'app-saved-display',
  templateUrl: './saved-display.component.html',
  styleUrls: ['./saved-display.component.css']
})
export class SavedDisplayComponent implements OnInit {

  results = [];

  displayedColumns = ['Stat','EV','Move/Item/Nature'];
  constructor(private saveService : SaveService) { 
    this.saveService.savedEntries.subscribe(res => {
      if(!this.results.includes(res)) {
        this.results.push(res);
      }
    });
  }

  ngOnInit(): void {
  }


  removeEntry(entry) {
    let index = this.results.indexOf(entry);
    if(index >= 0) {
      this.results.splice(index,1);
    }
  }

}
