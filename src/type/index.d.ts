type Mode = "dark" | "light";

type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  city: string;
  state: string | null;
  country: string;
  occupation: string;
  phoneNumber: string;
  transitions: any[]; // You might want to specify a more specific type for transitions
  role: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
};
