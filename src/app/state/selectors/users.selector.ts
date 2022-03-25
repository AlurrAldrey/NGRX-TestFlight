import { createFeatureSelector } from "@ngrx/store";
import { UserElement } from "src/app/users/models/UserElement";

export const selectUsers = createFeatureSelector<ReadonlyArray<UserElement>>('users');