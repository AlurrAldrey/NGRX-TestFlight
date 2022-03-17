import { ItemModel } from "@core/models/Item.interface";
import { createReducer, on } from "@ngrx/store";
import { addItem, retrievedItemList } from "../actions/items.actions";

export const initialState: ReadonlyArray<ItemModel> = [];

export const itemsReducer = createReducer(
    initialState,
    on(addItem, (oldState, props)=>{
        return [...[props.item], ... oldState]
    }),
    on(retrievedItemList, (oldState, props) => {
        return [... oldState, ... props.items]
    })
)