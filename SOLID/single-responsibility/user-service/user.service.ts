import User from "./user.dto";
import UserRepository from "./user.repository";

export default class UserService {
  constructor(private userRepository: UserRepository) { }

  create(name: string, email: string) {
    const user = new User(name, email);

    // Database logic is kept in separate class
    this.userRepository.save(user);

    // Welcome email logic is kept in separate reuseable function
    this.sendWelcomeEmail(user);
  }

  sendWelcomeEmail(user: User) {
    console.log(`Email sent to ${user.name}`);
  }
}
