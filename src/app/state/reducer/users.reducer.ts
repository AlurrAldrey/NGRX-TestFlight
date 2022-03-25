import { createReducer, on } from "@ngrx/store";
import { UserElement } from "src/app/users/models/UserElement";
import { addUser, retrievedUsers } from "../actions/users.actions";

export const initialState: ReadonlyArray<UserElement> = [];

export const usersReducer = createReducer(
    initialState,
    on(retrievedUsers, (oldState, props) => {
        return  props.users
    }),
    on(addUser, (oldState, props) => {
        return [...[props.user], ... oldState]
    }),
)