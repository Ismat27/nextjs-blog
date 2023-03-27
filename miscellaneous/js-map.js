const array_1 = [1, 2, 3]
const array_2 = []
for (let i = 0; i<array_1.length; i++) {
    array_2[i] = array_1[i] * 2
}

// const array_1 = [1, 2, 3]
// const array_2 = array_1.map(x => x * 2)

console.log(array_2)

// const records = [
//     {
//         firstName: 'Michael',
//         lastName: 'Abobade',
//         favLanguage: 'python',
//     },
//     {
//         firstName: 'Precious',
//         lastName: 'Peter',
//         favLanguage: 'PHP',
//     },
//     {
//         firstName: 'Hussein',
//         lastName: 'Muhammed',
//         favLanguage: 'JavaScript',
//     },
// ]

// console.log(records.map(record => record.lastName))

// const newRecord = records.map(function(record, index) {
//     return {
//         position: index + 1,
//         name: record.firstName + " " + record.lastName,
//         language: record.favLanguage,
//     }
// })

// console.log(newRecord);