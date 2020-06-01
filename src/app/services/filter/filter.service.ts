import { Injectable } from '@angular/core';
import SpeciesJson from '../../../assets/Species.json';
import EntriesJson from '../../../assets/Entries.json';

import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private speciesMap = SpeciesJson;
  private entryList = EntriesJson;
  public filteredEntries = new Subject<Array<any>>();
  constructor() { 

  }

  

  filter(filterObj : FilterObject) {
    console.log(this.entryList.length);
    let entries = this._filter(this.entryList,filterObj);
    this.filteredEntries.next(entries);
  }

  private _filter(entryList, filterObj : FilterObject) {
    entryList = this._filterName(entryList,filterObj.name);
    entryList = this._filterMoves(entryList,filterObj.moves);
    return this._filterType(entryList,filterObj.type);
  }

  private _filterMoves(entryList,  moves : Array<string> ) {
    for(let i = 0; i < moves.length; i++) {
      entryList = this._filterMove(entryList,moves[i]);
    }
    return entryList;
  }

  private _filterMove(entryList, move : string) {
    return move ? entryList.filter(entry => entry['Moves'].includes(move)) : entryList;
  }

  private _filterName(entryList, name : string) {
    return name ? entryList.filter(entry => entry['Pokemon'] == name) : entryList;
  }

  private _filterType(entryList, type: string) {
    return type ? entryList.filter(entry => this.speciesMap[entry['Pokemon']]['Types'].contains(type)) : entryList;
  }
}

interface FilterObject {
  name: string;
  type: string;
  moves: Array<string>; 
}