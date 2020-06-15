import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter/filter.service';
import SpeciesJson from '../../assets/Species.json';
import { SaveService } from '../services/save/save.service';
@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {
  private speciesMap = SpeciesJson;
  results = [
    // {
    //   'Name':'Charizard',
    //   'Type':'Fire/Flying',
    //   'Move 1':'Flamethrower',
    //   'Move 2':'Air Cutter',
    //   'Move 3':'Menacing Moonraze Maelstrom',
    //   'Move 4':'Fire Blast',
    //   'Item':'Bright Powder',
    //   'Nature':'Brave',
    //   'HP EV':0,
    //   'Attack EV':255, 
    //   'Defense EV':255,
    //   'Special Attack EV':255,
    //   'Special Defense EV':255,
    //   'Speed EV':0,
    //   'Base HP': 50,
    //   'Base Attack': 100,
    //   'Base Defense':150, 
    //   'Base Special Attack':200,
    //   'Base Special Defense':500,
    //   'Base Speed':60
    // }
  ];
  convertedResults = [];
  example = 
    {
      'Name':'Pokemon Name',
      'Type':'Pokemon Typing',
      'Moves': [
        'Move 1', 'Move 2', 'Move 3', 'Move 4'
      ],
      'Item':'Item',
      'Nature':'Nature',
      'HP EV':'HP EV',
      'Attack EV':'Attack EV', 
      'Defense EV':'Defense EV',
      'Special Attack EV':'Special Attack EV',
      'Special Defense EV':'Special Defense EV',
      'Speed EV':'Speed EV',
      'BaseStats': {
        'Base HP': 'Base HP',
        'Base Attack': 'Base Attack',
        'Base Defense':'Base Defense', 
        'Base Special Attack':'Base Special Attack',
        'Base Special Defense':'Base Special Defense',
        'Base Speed':'Base Speed'
      }
    };


  tabledata = [
    {'Stat':50, 'Move/Item/Nature':'Flamethrower', 'EV': 0},
    {'Stat':100, 'Move/Item/Nature':'Air Cutter', 'EV': 255},
    {'Stat':150, 'Move/Item/Nature':'Fire Blast', 'EV': 255},
    {'Stat':200, 'Move/Item/Nature':'Menacing Moonraze Maelstrom', 'EV': 0},
    {'Stat':500, 'Move/Item/Nature':'Bright Powder', 'EV': 0},
    {'Stat':60, 'Move/Item/Nature':'Brave', 'EV': 0},

  ];

  tabledata2 = [
    {'Stat':50, 'Move/Item/Nature':'Flamethrower', 'EV': 0},
    {'Stat':100, 'Move/Item/Nature':'Air Cutter', 'EV': 255},
    {'Stat':150, 'Move/Item/Nature':'Fire Blast', 'EV': 255},
    {'Stat':200, 'Move/Item/Nature':'Nope', 'EV': 0},
    {'Stat':500, 'Move/Item/Nature':'Bright Powder', 'EV': 0},
    {'Stat':60, 'Move/Item/Nature':'Brave', 'EV': 0},

  ]

  displayedColumns = ['Stat','EV','Move/Item/Nature'];

  constructor(private filterService : FilterService, private saveService : SaveService) { 
    this.filterService.filteredEntries.subscribe(entryList => {
      this.results = [];
      for(let i = 0; i < entryList.length; i++) {
        this._denormalizeEntry(entryList[i]);
      }

      // console.log(this.results);
      for(let i = 0; i < entryList.length; i++) {
        entryList[i]['tableData'] = this.convert(entryList[i]);
      }
      this.results = entryList;
    });
  }

  private _denormalizeEntry(entry) {
    Object.assign(entry,this.speciesMap[entry['Pokemon']]);
  }

  ngOnInit(): void {
  }

  

  convert(entry) {
    let res = [];
    res.push({'Stat': entry['BaseStats']['HP'], 'Move/Item/Nature': entry['Moves'][0], 'EV':entry['HP EV']});
    res.push({'Stat': entry['BaseStats']['Attack'], 'Move/Item/Nature': entry['Moves'][1], 'EV':entry['Attack EV']});
    res.push({'Stat': entry['BaseStats']['Defense'], 'Move/Item/Nature': entry['Moves'][2], 'EV':entry['Defense EV']});
    res.push({'Stat': entry['BaseStats']['Special Attack'], 'Move/Item/Nature': entry['Moves'][3], 'EV':entry['Special Attack EV']});
    res.push({'Stat': entry['BaseStats']['Special Defense'], 'Move/Item/Nature': entry['Item'], 'EV':entry['Special Defense EV']});
    res.push({'Stat': entry['BaseStats']['Speed'], 'Move/Item/Nature': entry['Nature'], 'EV':entry['Speed EV']});
    return res;
  }
  
  saveEntry(entry) {
    // a saved entries service that will consume this entry, and then when it consumes, the subject generates an entry. Whenever subject notifies observers, the saved-display will
    // add that entry to its entries. 
    this.saveService.save(entry);
  }
}
