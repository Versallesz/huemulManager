export interface Apartment {
  //APARTMENT INFO
  id: number;
  number: string;
  direction: string;
  floor: number;
  owner: Owner
  //PAYMENT INFO
  monthlyFee: number;
  lastPaymentDate: Date;
  status:  'paid' | 'pending' | 'overdue' |'inDebt';
}

export interface Owner {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  apartments: Apartment[];
}
