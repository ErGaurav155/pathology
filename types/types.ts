export interface AppointmentParams {
  name: string;
  phone: string;
  address?: string;
  date: string;
  time: string;
  doctor: string;
  test: string;
  type: string;
  message?: string;
}

export declare type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string | null;
  firstName: string;
  lastName: string;
  photo: string;
};

export declare type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string | null;
  photo: string;
};
