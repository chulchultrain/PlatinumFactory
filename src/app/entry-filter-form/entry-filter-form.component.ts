import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FilterService } from '../services/filter/filter.service';
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


  constructor(private filterService : FilterService) { 

  }

  ngOnInit(): void {
    console.log("initing")
  }

  sanitizeInput() {
    
  }
  
  submitForm() {
    this.sanitizeInput();
    let filterObject = {
      name: this.filter_form.get('name').value.trim(),
      type: this.filter_form.get('type').value.trim(),
      moves: [
        this.filter_form.get('move1').value.trim(),
        this.filter_form.get('move2').value.trim(),
        this.filter_form.get('move3').value.trim(),
        this.filter_form.get('move4').value.trim(),
      ]
    };
    console.log("reached submit form ", filterObject);
    this.filterService.filter(filterObject);
  }

}
