// Call

const person = {
  name: "Sandeep Garg",
  job: "Developer",
};

const showPerson = {
  show(city) {
    console.log(`${this.name} job is ${this.job} and he lives in ${city}`);
  },
};

console.log(showPerson.show()); // undefined job is undefined

console.log(showPerson.show.call(person, "Pune")); // showPerson.show is a invoking functions
