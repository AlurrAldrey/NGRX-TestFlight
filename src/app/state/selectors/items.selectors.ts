import { ItemModel } from "@core/models/Item.interface";
import { createFeatureSelector } from "@ngrx/store";

export const selectItems = createFeatureSelector<ReadonlyArray<ItemModel>>('items');