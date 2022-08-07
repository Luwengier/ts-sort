import { Sorter } from './Sorter'
import { CharactersCollection } from './CharactersCollection'
// import { NumbersCollection } from './NumberCollection'

// const numberCollection = new NumbersCollection([1001, 7, -5, 0])
// const sorter = new Sorter(numberCollection)
// sorter.sort()
// console.log(numberCollection.data)

const charactersCollection = new CharactersCollection('cDXaFv')
const sorter = new Sorter(charactersCollection)
sorter.sort()
console.log(charactersCollection.data)
