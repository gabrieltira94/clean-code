import { UserDetails } from "./user.interface";

// Bad practices example, having all logic in one function
class BadUser {
  constructor(private user: UserDetails) { }

  isValid(): boolean {
    if (
      this.user.name.length > 50 ||
      this.user.age < 18 ||
      this.user.mail.indexOf('@') === -1 ||
      !this.user.address ||
      this.user.address.length < 5
    ) {
      return false;
    }

    // More validation logic..

    return true;
  }
}