import { createAction, props } from "@ngrx/store";
import { User } from "../user";

export const addUser=createAction('[customer] add Customer',
    props<{user:User}>()
);