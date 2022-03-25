import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { retrievedUsers } from 'src/app/state/actions/users.actions';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service: HomeService,
    private store: Store) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(): void {
    this.service.getDataApi()
      .subscribe((res) => {
        this.store.dispatch(retrievedUsers({ users: res }))
      })
  }

}
