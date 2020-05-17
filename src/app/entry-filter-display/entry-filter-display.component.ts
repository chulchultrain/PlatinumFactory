import { Component, OnInit } from '@angular/core';
import { NameService } from '../name/name.service';


@Component({
  selector: 'app-entry-filter-display',
  templateUrl: './entry-filter-display.component.html',
  styleUrls: ['./entry-filter-display.component.css']
})
export class EntryFilterDisplayComponent implements OnInit {




  constructor(nameService : NameService) { 
  }

  ngOnInit(): void {
  }

  ngOnChanges() {

  }


}
