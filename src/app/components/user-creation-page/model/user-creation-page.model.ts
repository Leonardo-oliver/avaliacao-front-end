export interface UserModel {
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: LocationModel[];
}

export interface LocationModel {
  street: string
  city: string
  state: string
  country: string
  timezone: string
}
