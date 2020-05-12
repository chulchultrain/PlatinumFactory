import { Component, OnInit } from '@angular/core';
import { NameService } from '../name/name.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-entry-filter-display',
  templateUrl: './entry-filter-display.component.html',
  styleUrls: ['./entry-filter-display.component.css']
})
export class EntryFilterDisplayComponent implements OnInit {

  filter_form = new FormGroup({ 
    'name': new FormControl(''),
    'type': new FormControl(''),
    'move1': new FormControl(''),
    'move2': new FormControl(''),
    'move3': new FormControl(''),
    'move4': new FormControl('')
  });



  constructor(nameService : NameService) { 
  }

  ngOnInit(): void {
  }

  ngOnChanges() {

  }

  submitForm() {
    
  }

}
