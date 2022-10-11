import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public search: string = "";
  public character$!: Observable<any>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  onSearch(): void{
    this.character$ = this.apiService.searchCharacter(this.search)
  }
}
