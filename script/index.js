"use strict";
(function() {
    function Student(name, surname, lessonCount) {
        this.name = name
        this.surname = surname
        this.currentLesson = 0;
        this.lessonCount = lessonCount
        this.attendance = new Array(lessonCount)
        this.marks = new Array(lessonCount)
    }

    Student.prototype.setAttendance = function (flag, increment = true) {
        if(this.currentLesson > this.lessonCount) throw new Error ('Can not set lessons attendance');
        this.attendance[this.currentLesson] = flag;
        increment ? this.currentLesson +=1 : null;
    }
    Student.prototype.present = function(mark = 0) {
        this.setAttendance (true, mark === 0);
        if(mark !== null) {
            this.mark(mark);
            this.currentLesson += 1;
        }
    }
    Student.prototype.absent = function() {
        this.setAttendance(false);
    }
    Student.prototype.lessonsRetake = function(lessonIndex, mark) {
        this[lessonIndex] = true;
        this.mark(mark, lessonIndex)

    }
    Student.prototype.mark = function(mark, lessonIndex) {
        if(typeof lessonIndex === 'number') {
            this.marks[lessonIndex] = mark
            return;
        }
        this.marks[this.currentLesson] = mark
    }
        Student.prototype.calcMark = function() {
            const mark = this.marks.reduce((acc, item) => {
                if(typeof item !== "undefined") {
                    acc.sum += item;
                    acc.lessonCount += 1
                }
                return acc;
            }, {
                sum: 0,
                lessonCount: 0
            })
            return mark.sum / mark.lessonCount;
        }
        Student.prototype.calcAttd = function() {
            const attd = this.attendance.reduce((acc, item) =>{
                item ? acc += 1 : null
                return acc;
            }, 0)
            return attd / this.currentLesson;
        }
        Student.prototype.summery = function() {
            return {
                mark: this.calcMark(),
                attd: this.calcAttd()
            }
        }
        const s = new Student('Olya', 'Senko', '10')
        s.present(10);
        s.present(9);
        s.present(8);
        s.present(7);
        s.absent()
        s.absent()
        s.absent()
        s.lessonsRetake(5,  10);
        console.log(s.summery());
        console.log(s)
})()