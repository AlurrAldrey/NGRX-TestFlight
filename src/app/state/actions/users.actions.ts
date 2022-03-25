import { createAction, props } from "@ngrx/store";
import { UserElement } from "src/app/users/models/UserElement";

export const retrievedUsers = createAction(
    '[UsersList/API] Retrieve Users Success',
    props<{ users: ReadonlyArray<UserElement>}>()
)

export const addUser = createAction(
    '[User Added] New user',
    props<{ user: UserElement }>()
)