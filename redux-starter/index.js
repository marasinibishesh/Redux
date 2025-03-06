import configureStore from "./store.js";
//import * as actions from "./actionTypes.js";
// import {bugAdded,bugRemoved} from "./actions.js";
import * as actions from "./bugs.js";
const store=configureStore();
console.log(store);
console.log(store.getState());
const unsubscribe=store.subscribe(()=>{
    console.log("Store changed!",store.getState());
});
store.dispatch(actions.bugAdded({description:"Bug1"}));
console.log(store.getState());

store.dispatch(actions.bugAdded({description:"Bug2"}));
console.log(store.getState());
unsubscribe();

//store.dispatch(actions.bugResolved({id:1}));
console.log(store.getState());
//store.dispatch(actions.bugRemoved({id:1}));
console.log(store.getState());
