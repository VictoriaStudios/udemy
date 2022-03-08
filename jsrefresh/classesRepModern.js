
class Human {
    //modern: leave out constructor
    gender = "male"
    //modern: arrow function
    printGender = () => {
        console.log(this.gender)
    }
}


class Person extends Human {

    name = "Max"

    printMyName = () => {
        console.log(this.name)
    }

}

const person = new Person()
person.printMyName()
person.printGender()