import Student from "./student.dto";
import StudentsRepository from "./students.repository";
import Subject from "./subject.dto";
import SubjectsRepository from "./subjects.repository";

export default class CollegeService {
  private studentsRepo: StudentsRepository = new StudentsRepository();
  private subjectsRepo: SubjectsRepository = new SubjectsRepository();

  enrollStudent(student: Student) {
    this.studentsRepo.save(student);
  }

  kickStudent(student: Student) {
    this.studentsRepo.delete(student);
  }

  addSubject(subject: Subject) {
    this.subjectsRepo.save(subject);
  }

  removeSubject(subject: Subject) {
    this.subjectsRepo.delete(subject);
  }
}