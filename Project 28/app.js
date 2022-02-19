class Person {
    constructor (firstName, surName) {
        this.firstName = firstName;
        this.surName = surName;
    }
fullName() {
    return this.firstName() + '' +this.surName;
}
}
console.log(new Person('Justin', 'Heath'));

const arrNames = [
    {firstName: 'Gudbjorg', surName: 'Jensdottir'},
    {firstName: 'Adam', surName: 'Harrowven'},
    {firstName: 'Gerdur', surName: 'Sigurdardottir'},
    {firstName: 'Elisabet', surName: 'Jensdottir'},
];

const arrFullNames = [];

arrNames.map ((n) => {
    arrFullNames.push(new Person(n.firstName, n.surName))
});
console.log(arrFullNames);

