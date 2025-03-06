let input=" Javascript ";
const trim=str=>str.trim();
const toLowerCase=str=>str.toLowerCase();
const wrapInDiv=str=>`<div>${str}</div>`;
const result=wrapInDiv(toLowerCase(trim(input)));
console.log(result);

//currying a function
const wrap=type=>str=>`<${type}>${str}</${type}>`;
const result2=wrap('div')(toLowerCase(trim(input)));
console.log(result2);

//Updating objects using concept of Immutability

const person={
    name:"John"
}
const updated0=Object.assign({},person,{name:"Bob"});
console.log(updated0);//{ name: 'Bob' }
const updated=Object.assign({...person,'name':"Bob"});//const updated={...person,name:"Bob"};
console.log(updated);//{ name: 'Bob' }

//Shallow Copy
const person1={
    name:"John",
    address:{
        country:"USA",
        city:"San Francisco"
    }
}
const updated1={...person1,name:"Bob"};
updated1.address.city="New York";
console.log(person1);//{ name: 'John', address: { country: 'USA', city: 'New York' } }
console.log(updated1);//{ name: 'Bob', address: { country: 'USA', city: 'New York' } }
//Casue the address object is not copied, it is just a reference to the original object
//To avoid this we can use deep copy
//Deep Copy
const person2={
    name:"John",
    address:{
        country:"USA",
        city:"San Francisco"
    }
}
const updated2={
    ...person2,
    address:{
        ...person2.address,
        city:"New York"
    }
}

//Updating arrays using concept of Immutability
const numbers=[1,2,3];
//Adding an element
const update0=[...numbers,4];
console.log(update0);//[ 1, 2, 3, 4 ]
//Addong an element at the beginning
const update1=[4,...numbers];
console.log(update1);//[ 4, 1, 2, 3 ]
//Adding an element at the middle
const index=numbers.indexOf(2); 
const update2=[...numbers.slice(0,index),4,...numbers.slice(index)];
console.log(update2);//[ 1, 4, 2, 3 ]
//Removing an element
const update3=numbers.filter(n=>n!==2);
console.log(update3);//[ 1, 3 ]
//Updating an element
const update4=numbers.map(n=>n===2?20:n);
console.log(update4);//[ 1, 20, 3 ]



