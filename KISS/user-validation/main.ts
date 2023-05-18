import User from "./User";
import { UserDetails } from "./user.interface";

const userInfo: UserDetails = { address: '', age: 31, mail: 'michael@testme.com', name: 'Michael' };
const Michael = new User(userInfo);