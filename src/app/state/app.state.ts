import { ItemModel } from "@core/models/Item.interface";
import { ActionReducerMap } from "@ngrx/store";
import { UserElement } from "../users/models/UserElement";
import { itemsReducer } from "./reducer/items.reducer";
import { usersReducer } from "./reducer/users.reducer";

export interface AppState {
    users: ReadonlyArray<UserElement>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    users: usersReducer
}