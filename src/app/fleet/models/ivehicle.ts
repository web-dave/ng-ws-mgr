import { IBookings } from './ibookings';
import { ILog } from './ilog';
import { IStatus } from './istatus';

export interface IVehicle {
  id: number;
  plate: string;
  title: string;
  description: string;
  image: string;
  status: IStatus;
  logs: ILog[];
  bookings: IBookings[];
}
