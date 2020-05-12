import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {

  results = [
    {
      'Name':'Charizard',
      'Type':'Fire/Flying',
      'Move 1':'Flamethrower',
      'Move 2':'Air Cutter',
      'Move 3':'Menacing Moonraze Maelstrom',
      'Move 4':'Fire Blast',
      'Item':'Bright Powder',
      'Nature':'Brave',
      'HP EV':0,
      'Attack EV':255, 
      'Defense EV':255,
      'Special Attack EV':255,
      'Special Defense EV':255,
      'Speed EV':0,
      'Base HP': 50,
      'Base Attack': 100,
      'Base Defense':150, 
      'Base Special Attack':200,
      'Base Special Defense':500,
      'Base Speed':60
    }
  ];

  tabledata = [
    {'Stat':50, 'Move/Item/Nature':'Flamethrower', 'EV': 0},
    {'Stat':100, 'Move/Item/Nature':'Air Cutter', 'EV': 255},
    {'Stat':150, 'Move/Item/Nature':'Fire Blast', 'EV': 255},
    {'Stat':200, 'Move/Item/Nature':'Menacing Moonraze Maelstrom', 'EV': 0},
    {'Stat':500, 'Move/Item/Nature':'Bright Powder', 'EV': 0},
    {'Stat':60, 'Move/Item/Nature':'Brave', 'EV': 0},

  ]

  tabledata2 = [
    {'Stat':50, 'Move/Item/Nature':'Flamethrower', 'EV': 0},
    {'Stat':100, 'Move/Item/Nature':'Air Cutter', 'EV': 255},
    {'Stat':150, 'Move/Item/Nature':'Fire Blast', 'EV': 255},
    {'Stat':200, 'Move/Item/Nature':'Nope', 'EV': 0},
    {'Stat':500, 'Move/Item/Nature':'Bright Powder', 'EV': 0},
    {'Stat':60, 'Move/Item/Nature':'Brave', 'EV': 0},

  ]

  displayedColumns = ['Stat','Move/Item/Nature','EV'];

  constructor() { }

  ngOnInit(): void {
  }

  convert(entry) {
    let res = [];
    res.push({'Stat': entry['Base HP'], 'Move/Item/Nature': entry['Move 1'], 'EV':entry['HP EV']});
    res.push({'Stat': entry['Base Attack'], 'Move/Item/Nature': entry['Move 2'], 'EV':entry['Attack EV']});
    res.push({'Stat': entry['Base Defense'], 'Move/Item/Nature': entry['Move 3'], 'EV':entry['Defense EV']});
    res.push({'Stat': entry['Base Special Attack'], 'Move/Item/Nature': entry['Move 4'], 'EV':entry['Special Attack EV']});
    res.push({'Stat': entry['Base Special Defense'], 'Move/Item/Nature': entry['Item'], 'EV':entry['Special Defense EV']});
    res.push({'Stat': entry['Base Speed'], 'Move/Item/Nature': entry['Nature'], 'EV':entry['Speed EV']});
    return res;
  }

}
