import { combineReducers } from "redux";
import searchReducer from "./search";
import favouriteReducer from "./favourite";
import notificationReducer from "./notification";

const rootReducer = combineReducers({
    search: searchReducer,
    favourite: favouriteReducer,
    notification: notificationReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
