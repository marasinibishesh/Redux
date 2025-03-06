import {Map} from 'immutable';
let book={
    title:"Harry Potter"
};
function publish(book){
    book.isPublished=true;
}
publish(book);
console.log(book);//{ title: 'Harry Potter', isPublished: true }
//The original object is modified

let book1=Map({
    title:"Harry Potter"
});


function publish1(book){
    return book.set('isPublished',true);
}
publish1(book1);



console.log(book1);//Map {size: 1,_root: ArrayMapNode { ownerID: OwnerID {}, entries: [ [Array] ] },__ownerID: undefined,__hash: undefined,__altered: false }
console.log(book1.get('title'));//Harry Potter
console.log(book1.toJS());//{ title: 'Harry Potter' }
//The original object is not modified, a new object is created
//The object is immutable


let updated=publish1(book1);
console.log(updated.toJS());//{ title: 'Harry Potter', isPublished: true }
//The object is immutable



