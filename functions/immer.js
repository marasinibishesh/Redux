import {produce} from 'immer';
let book={
    title:"Harry Potter"
};
function publish(book){
    return produce(book,draftBook=>{
        draftBook.isPublished=true;
    })
}
let updated=publish(book);
console.log(updated);//{ title: 'Harry Potter', isPublished: true }
console.log(book);//{ title: 'Harry Potter' }
//The original object is not modified, a new object is created