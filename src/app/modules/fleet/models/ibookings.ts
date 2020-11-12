import { IStartEnd } from './istartend';
import { IUser } from './iuser';

export interface IBookings {
  id: number;
  applicant: IUser;
  purpose: 'string';
  destination: 'string';
  begin: string;
  end: string;
  passengers: IUser[];
  start_details: IStartEnd;
  end_details: IStartEnd;
}
