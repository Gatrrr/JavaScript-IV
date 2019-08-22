// CODE here for your Lambda Classes


class Person{
     constructor(obj){
         this.newName = obj.name
         this.newAge = obj.age 
         this.newLocation = obj.location
     }
    speak(){
        return `Hello my name is ${this.newName}, I am from ${this.newLocation}`;
    }
}

class Instructor extends Person {
     constructor(objTwo){
     super(objTwo);
     this.newSpecialty = objTwo.specialty
     this.newFavLanguage = objTwo.FavLanguage 
     this.newCatchPhrase = objTwo.CatchPhrase
     this.newSubject = objTwo.subject
    }

    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.newName} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(objThree){
        super(objThree);
        this.favSubject = objThree.favSubject
    }
    listSubjects(){
        return `${student.newName} favorite subjects are ${student.favSubject}`;
    }
    PRAssignment(subject){
        return `${student.newName} has submitted a PR for ${subject}`
    }

}

class ProjectManager extends Instructor{
    constructor(ProjectManagerProps){
        super(ProjectManagerProps);
        this.newGradClassName = ProjectManagerProps.GradClassName
        this.newFavInstructor = ProjectManagerProps.FavInstructor
        this.newchannel = ProjectManagerProps.channel
    }
    standUp(channel){
        return `${Ronny.newName} announces to ${channel} @channel standy times`
    }
    debugsCode(student, subject){
        return `${Ronny.newName} debugs ${student.newName}'s code on ${subject}`
    }
}



const student = new Student ({
    name: 'David',
    age: '21',
    location: 'Vegas',
    previousBackground: 'DI',
    className: 'ls1908',
    favSubject: ['Html', 'CSS', 'JavaScript']
}) 

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    subject: 'CSS'
});

const Ronny = new ProjectManager({
    name: 'Ronny',
    location: 'NoIdea',
    age: 25,
    favLanguage: 'NoClue',
    specialty: 'Talking',
    catchPhrase: `Oof`,
    subject: 'NoIdeaAtAll',
    channel: 'RonnysChannel'

});



// const studentTwo = new Student({
//     name: 'Muamer',
//     age: '22',
//     location: 'Bosnia',
//     previousBackground: 'Smiths',
//     classname: 'web23',
//     favSubject: ['Html', 'CSS', 'JavaScript']
//  })

console.log(student.speak());
console.log(fred.demo(fred.newSubject));
console.log(fred.grade(student, fred.newSubject));
console.log(student.listSubjects());
console.log(student.PRAssignment(fred.newSubject));
console.log(Ronny.debugsCode())
