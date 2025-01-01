export class User {
    firstName: string;
  lastName: string;
  street: string;
  zipCode: number;
  city: string;
  id?: string;
  email: string;
  password:string;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : ''; //if object exists take fisrtName of object else empty string
    this.lastName = obj ? obj.lastName : '';
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
    this.id = obj ? obj.id : '';
    this.email = obj ? obj.email : '';
    this.password = obj ? obj.password : '';
  }

  public toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
      id: this.id,
      email: this.email,
      password: this.password
    };
  }
}