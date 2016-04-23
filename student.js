var Student = function (){
    this.name = name;
    this.gender = gender;
    this.grade = grade;
    this.GPA = GPA;
    this.detentions = detentions;
    this.sleepingInClass = sleepingInClass;
    this.catchPhrase = catchPhrase;
    function canStudentHaveFun (){
        if (this.detentions < 10 && this.GPA > 2){
            console.log("The student can have fun.")
        }
        else {
            console.log("Students can learn how to code!")
        }
    }
}

module.exports = Student; 