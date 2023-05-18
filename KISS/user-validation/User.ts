import { UserDetails } from "./user.interface";

export default class User {
  constructor(private user: UserDetails) { }

  isValid(user: User): boolean {
    if (
      this.isNameInvalid(this.user.name) ||
      this.isAgeInvalid(this.user.age) ||
      this.isEmailInvalid(this.user.mail) ||
      this.isAddressInvalid(this.user.address)
    ) {
      return false;
    }

    return true;
  }

  isNameInvalid(name: string): boolean {
    return name.length > 50;
  }

  isAgeInvalid(age: number): boolean {
    return age < 18;
  }

  isEmailInvalid(email: string): boolean {
    return email.indexOf('@') === -1;
  }

  isAddressInvalid(address: string): boolean {
    return !address || address.length < 5;
  }
}