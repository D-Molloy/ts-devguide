"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// After making Sorter an abstract class
var numbersCollection = new NumbersCollection_1.NumbersCollection([103233, 3121, -5, 0]);
numbersCollection.sort();
console.log('numbersCollection.data', numbersCollection.data);
console.log('------------------');
var charactersCollection = new CharactersCollection_1.CharactersCollection("DenisMolloy");
charactersCollection.sort();
console.log('charactersCollection.data', charactersCollection.data);
console.log('------------------');
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(0);
linkedList.add(5100);
linkedList.add(30);
linkedList.add(-1000);
linkedList.sort();
linkedList.print();
// Before making Sorter an abstract class
// const numbersCollection = new NumbersCollection([103233, 3121, -5, 0])
// const sorter1 = new Sorter(numbersCollection)
// sorter1.sort()
// console.log('sorter1.collection', sorter1.collection)
// console.log('------------------')
// const charCollection = new CharactersCollection("DenisMolloy")
// const sorter2 = new Sorter(charCollection)
// sorter2.sort()
// console.log('sorter2.collection', sorter2.collection)
// console.log('------------------')
// const linkedList = new LinkedList()
// linkedList.add(500)
// linkedList.add(-10)
// linkedList.add(0)
// linkedList.add(5100)
// linkedList.add(30)
// linkedList.add(-1000)
// const sorter3 = new Sorter(linkedList)
// sorter3.sort()
// linkedList.print()
// console.log('------------------')
