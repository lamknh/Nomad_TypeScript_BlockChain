//interface : function에 object를 전달하는 것
// interface Human {
//     name: string;
//     age: number;
//     gender: string;
// }

//interface -> js로 전달하고 싶을 때 class 사용
class Human {
    public name: string;
    public age: number; // private 선언 가능 - 클래스 내부에서만 접근 가능
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

// const person = {
//     name: "KNH", 
//     age: 24,
//     gender: "woman"
// }

const lynn = new Human("Lynn", 18, "female");

const sayHi = (person: Human) : string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`
}

console.log(sayHi(lynn));

export {};