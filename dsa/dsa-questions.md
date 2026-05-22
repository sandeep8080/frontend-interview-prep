# DSA Questions asked in the Frontend Interview

- Write a function to count the no.of words in the given sentences

```js
// Example usage
const sentence =
  "Fear leads to anger anger leads to hatred hatred leads to conflict conflict leads to suffering";
const wordFrequency = countWords(sentence);
console.log(wordFrequency);
// Output: { Fear: 1, leads: 4, to: 4, anger: 2, hatred: 2, conflict: 2, suffering: 1 }
```

- Merge companies by the same company name or Fetches comments from a REST API and organizes them based on their associated post ID.

```js
const companies = [
  {
    name: "Company A",
    id: 1,
  },
  {
    name: "Company B",
    id: 2,
  },
  {
    name: "Company C",
    id: 3,
  },
  {
    name: "Company A",
    id: 4,
  },
  {
    name: "Company B",
    id: 2,
  },
];

const res = mergeCompaniesName(companies);
console.log(res);
// Output
 {
"Company A": [
{ name: "Company A", id: 1 },
{ name: "Company A", id: 4 }],
"Company B": [
{ name: "Company B", id: 2 },
{ name: "Company B", id: 2 }
],
"Company C": [
{ name: "Company C", id: 3 }
]
}
```

- Flatten the below object in the given way & the object can be of nth level deep:

```js
{
name: {
firstName: "Sandeep",
lastName: "Garg"
},
address: {
city: "Delhi",
state: "New Delhi",
country: "India"
}
}
//o/p:
{
name.firstName: "Sandeep",
name.lastName: "Garg",
address.city: "Delhi",
address.state: "New Delhi",
address.country: "India",

}
```
