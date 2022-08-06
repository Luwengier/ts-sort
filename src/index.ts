import { Sorter } from './Sorter'
import { NumbersCollection } from './NumberCollection'

const NumberCollection = new NumbersCollection([1001, 7, -5, 0])
const sorter = new Sorter(NumberCollection)
sorter.sort()
console.log(NumberCollection.data)
