import UserRepository from "./user.repository";
import UserService from "./user.service";

const userRepo = new UserRepository();
const userService = new UserService(userRepo);

userService.create('Adrian', 'adrian@whatfost.com');
