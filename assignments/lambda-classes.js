// CODE here for your Lambda Classes
class Person{
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;

    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase; 
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }

        listsSubjects() {
        this.favSubjects.map(item => console.log(item));
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(managerAttributes){
        super(managerAttributes);
        this.gradClassName = managerAttributes.gradClassName;
        this.favInstructor = managerAttributes.favInstructor;
    }
    
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel stand up times!`;
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const peter = new Instructor({
    name: 'Peter',
    location: 'California',
    age: 31,
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: 'What is up' 
})

const andy = new Instructor({
    name: 'Andy',
    location: 'Akron',
    age: 38,
    favLanguage: 'Ruby',
    specialty: 'Fullstack',
    catchPhrase: `aye what's up`
});

const aaron = new Student({
    name: 'Aaron',
    location: 'Joplin',
    age: 24,
    favSubjects: ['Javascript', 'C++'],
});

const tyler = new Student({
    name: 'Tyler',
    location: 'Las Vegas',
    age: 48,
    favSubjects: ['Ruby', 'Python'],
});

const jaden = new ProjectManager({
    name: 'Jaden',
    location: 'Toledo',
    age: 58,
    gradClassName: 'CS1'
});

const gabi = new ProjectManager({
    name: 'Gabi',
    location: 'Scranton',
    age: 30,
    gradClassName: 'CS2'
});

console.log(gabi.speak());
console.log(tyler.listsSubjects());
console.log(gabi.debugsCode(tyler, 'Javascript'));
console.log(jaden.standUp("WEB24"));
console.log(tyler.sprintChallenge('Javascript'));
console.log(peter.demo('JavaScript'));
console.log(peter.grade(tyler, 'CSS'));
console.log(jaden.speak());
console.log(aaron.PRAssignment('Responsive Design'));
console.log(andy.catchPhrase);