import Student from "./student.dto";

export default class StudentsRepository {
  save(student: Student) {
    console.log(`Student ${student.name} saved into database.\n`);
  }

  delete(student: Student) {
    console.log(`Student ${student.name} deleted from database.\n`);
  }
}
