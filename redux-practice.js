const obj = {
	a: {
		c: 3
	},
	b: 2
}
const obj2 = {
	...obj,
	a: {
		...obj.a,
		c: 42
	}
}
const arr = ['a', 'b']
const arr2 = arr.concat('c')
const arr3 = arr.slice()
arr.push('c')

console.log('obj1',obj);
console.log('obj2', obj2);