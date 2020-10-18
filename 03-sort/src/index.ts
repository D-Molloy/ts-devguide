import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'
// After making Sorter an abstract class
const numbersCollection = new NumbersCollection([103233, 3121, -5, 0])
numbersCollection.sort()
console.log('numbersCollection.data', numbersCollection.data)

console.log('------------------')

const charactersCollection = new CharactersCollection("DenisMolloy")
charactersCollection.sort()
console.log('charactersCollection.data', charactersCollection.data)

console.log('------------------')

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(0)
linkedList.add(5100)
linkedList.add(30)
linkedList.add(-1000)
linkedList.sort()
linkedList.print()

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

