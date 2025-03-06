import { createAction,createReducer } from "@reduxjs/toolkit";

//Action Types
// const BUG_ADDED="bugAdded";
// const BUG_REMOVED="bugRemoved";
// const BUG_RESOLVED="bugResolved";

//Action Creators
export const bugAdded=createAction("bugAdded");
export const bugRemoved=createAction("bugRemoved");
export const bugResolved=createAction("bugResolved");



//Reducer
let lastId=0;
createReducer([],{
    [bugAdded.type]: (bugs,action)=>{
        bugs.push({
            id:++lastId,
            description:action.payload.description,
            resolved:false
        });
    },
    [bugResolved.type]: (bugs,action)=>{
        const index=bugs.findIndex(bug=>bug.id===action.payload.id);
        bugs[index].resolved=true; 
    }
});

// function reducer(state=[],action){
    // if(action.type==="bugAdded"){
    //     return [
    //         ...state,
    //         {
    //             id:++lastId,
    //             description:action.payload.description,
    //             resolved:false
    //         }
    //     ]
    // }
    // else if(action.type==="bugRemoved"){
    //     return state.filter(bug=>bug.id!==action.payload.id);
    // }

    // return state;
   
//     switch(action.type){
//     case bugAdded.type:
//         return[
//             ...state,{
//                 id:++lastId,
//                 description:action.payload.description,
//                 resolved:false
//             }
//         ];
//     case bugRemoved.type:
//         return state.filter(bug=>bug.id!==action.payload.id);
    
//     case bugResolved.type:
//         return state.map(bug=>bug.id===action.payload.id?{...bug,resolved:true}:bug);
//     default:
//         return state;
//     }
// }
export default createReducer;