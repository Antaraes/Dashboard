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
interface MonthlyData {
  month: string;
  totalSales: number;
  totalUnits: number;
  _id: string;
}

interface DailyData {
  date: string;
  totalSales: number;
  totalUnits: number;
  _id: string;
}

interface Stat {
  _id: string;
  productId: string;
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
  monthlyData: MonthlyData[];
  dailyData: DailyData[];
}

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  supply: number;

  stat: Stat;
}
