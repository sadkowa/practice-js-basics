function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {}
}


Student.prototype.addGrade = function (subject, grade) {
    if (subject.trim() === '') {
        console.log('Podaj nazwę przedmotu')
        return
    }
    if (grade < 1 || grade > 6) {
        console.log('Niepoprawna wartość. Podaj cyfrę od 1-6')
        return
    }
    if (!this.grades[subject]) {
        this.grades[subject] = []
    }

    this.grades[subject].push(grade)
}


Student.prototype.countAvg = function (arr) {
    let sum = 0;
    let gradesAmount = 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        gradesAmount++
    }
    return ((sum / gradesAmount).toFixed(2))
}

Student.prototype.getAverageGrade = function (subject) {
    let avg
    const keys = Object.keys(this.grades)

    if (!subject) {
        let allGradesArr = []
        for (const key in this.grades) {
            // for (let i = 0; i < this.grades[key].length; i++) {
            //     sum += this.grades[key][i];
            //     gradesAmount++
            // }
            allGradesArr.push(...this.grades[key])
            avg = this.countAvg(allGradesArr)
        }
    } else if (!keys.includes(subject)) {
        console.log('Niepoprawna nazwa przedmiotu')
        return
    } else {
        for (const key in this.grades) {
            if (subject === key) {
                // for (let i = 0; i < this.grades[subject].length; i++) {
                //     sum += this.grades[subject][i]
                //     gradesAmount++
                // }
                avg = this.countAvg(this.grades[subject])
            }
        }
    }
    return avg
}


const student = new Student('Jan', 'Kowalski')
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('polish', 3);
// student.addGrade('', 4);
student.addGrade('maths', 5);
student.addGrade('geography', 3);

const avgMath = student.getAverageGrade('maths'); // 5
const avg = student.getAverageGrade(); // 4.33

console.log(avg, avgMath)
console.log(student)
