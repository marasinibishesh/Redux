import store from "./customstore.js";
import * as actions from "./action.js";
store.subscribe(()=>{
    console.log("Store changed!");
});
store.dispatch(actions.bugAdded("Bug 1"));
store.dispatch(actions.bugAdded("Bug 2"));
store.dispatch(actions.bugAdded("Bug 3"));
console.log(store.getState());
store.dispatch(actions.bugRemoved(2));
console.log(store.getState());
store.dispatch(actions.bugResolved(3));
console.log(store.getState());
store.dispatch(actions.bugResolved(1));
console.log(store.getState());
