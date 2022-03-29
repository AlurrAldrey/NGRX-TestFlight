import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addUser } from 'src/app/state/actions/users.actions';
import { UserElement } from '../models/UserElement';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  private newUser: UserElement = new UserElement();

  createUserForm = this.fb.group({
    nombre: [''],
    apellido: [''],
    mail: ['']
  })

  constructor(
    private fb: FormBuilder,
    private store: Store) {
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.newUser = {...this.newUser,...this.createUserForm.value}

    this.store.dispatch(addUser({ user: this.newUser }))
  }

}
