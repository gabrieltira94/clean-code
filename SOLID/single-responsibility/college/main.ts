import CollegeService from "./college.service";
import Student from "./student.dto";
import Subject from "./subject.dto";

const jon = new Student('Jon', 19);
const alex = new Student('Alex', 22);
const leila = new Student('Leila', 18);
const megan = new Student('Megan', 31);

const phisics = new Subject('Phisics', 2);
const typescript = new Subject('TypeScript', 2);
const systemDesign = new Subject('System Design', 2);
const softSkills = new Subject('Soft Skills', 2);

const informatica = new CollegeService();

informatica.addSubject(softSkills);
informatica.addSubject(phisics);
informatica.enrollStudent(jon);
informatica.addSubject(systemDesign);
informatica.enrollStudent(alex);
informatica.enrollStudent(leila);
informatica.addSubject(typescript);
informatica.enrollStudent(megan);

informatica.kickStudent(leila);

informatica.removeSubject(phisics);
