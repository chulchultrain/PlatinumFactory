import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-entry-filter-form',
  templateUrl: './entry-filter-form.component.html',
  styleUrls: ['./entry-filter-form.component.css']
})
export class EntryFilterFormComponent implements OnInit {

  filter_form = new FormGroup({ 
    'name': new FormControl(''),
    'type': new FormControl(''),
    'move1': new FormControl(''),
    'move2': new FormControl(''),
    'move3': new FormControl(''),
    'move4': new FormControl('')
  });


  constructor() { }

  ngOnInit(): void {
  }

  
  submitForm() {
    
  }

}
