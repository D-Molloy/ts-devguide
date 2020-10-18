// not good because its hard to generalize when siting specific types (number/String)
class BadSorter {
	/** Syntax 1 */
	// collection: number[]
	// constructor(collection: number[]) {
	//     this.collection = collection;
	// }
	/** Syntax 2 (same as above but more compact) */
	// `|`  OR aka "union" operator
	// only properties shared by both array and string will be present when accessing properties/methods
	constructor(public collection: number[] | string) { }

	sort(): void {
		const { length } = this.collection
		for (let i = 0; i < length; i++) {
			// length - i - 1 - after a full iteration we know that the largest number is at the end of the array so we no longer need to touch it
			for (let j = 0; j < length - i - 1; j++) {


				// Bad Code - we're restricting ourselves to just arrays and strings
				// this is a Type Guard - this will allow all array methods to be populated when using dot notation
				if (this.collection instanceof Array) {
					if (this.collection[j] > this.collection[j + 1]) {
						const tmp = this.collection[j];
						this.collection[j] = this.collection[j + 1]
						this.collection[j + 1] = tmp
					}
				}
				// also a typeguard - but bc its a primitive, we use typeof
				if (typeof this.collection === 'string') {

				}
			}
		}
	}
}

const sorter = new Sorter([10, 3, -5, 0])
sorter.sort()
console.log('sorter.collection', sorter.collection)