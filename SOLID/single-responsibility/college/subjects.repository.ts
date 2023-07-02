import Subject from "./subject.dto";

export default class SubjectsRepository {
  save(subject: Subject) {
    console.log(`Subject ${subject.name} saved into database.\n`);
  }

  delete(subject: Subject) {
    console.log(`Student ${subject.name} deleted from database.\n`);
  }
}
