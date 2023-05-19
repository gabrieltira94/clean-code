import User from "./user.dto";

export default class UserRepository {
  save(user: User) {
    console.log(`User ${user.name} saved into database.`);
  }
}
