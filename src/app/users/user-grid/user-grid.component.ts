import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { retrievedUsers } from 'src/app/state/actions/users.actions';
import { selectUsers } from 'src/app/state/selectors/users.selector';
import { UserElement } from '../models/UserElement';

const ELEMENT_DATA: UserElement[] = [
  {nombre: 'pepito', apellido: 'pepon', mail:'pepitopepon@gmail.com'}
];


@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'mail'];
  dataSource = ELEMENT_DATA;
  dataSource$: Observable<any> = new Observable();

  constructor(private store: Store) { 
    this.dataSource$ = this.store.select(selectUsers)
  }

  ngOnInit(): void {

  }


}
