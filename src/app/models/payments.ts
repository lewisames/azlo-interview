export enum PaymentStatus {
  SCHEDULED = 'SCHEDULED',
  PENDING = 'PENDING',
  EXECUTED = 'EXECUTED',
  EXECUTION_ERROR = 'EXECUTION_ERROR',
  CANCELED = 'CANCELED'
}

export enum PaymentType {
  BILL_PAYMENT = 'ACH_PUSH',
  ACH_PAYMENT = 'ACH_PULL'
}

export interface IPaymentItem {
  id: string;
  amount: number;
  scheduled_date: string;
  status: string;
  contact_id: string;
  payment_type: string;
}

export interface IPaymentsResponse {
  data: IPaymentItem[];
}

export class Payment {
  public id: string;
  public amount: number;
  public scheduled_date: string;
  public status: PaymentStatus;
  public contact_id: string;
  public payment_type: PaymentType;

  constructor(props: IPaymentItem) {
    this.id  = props.id;
    this.amount = props.amount;
    this.scheduled_date = props.scheduled_date;
    this.status = props.status as PaymentStatus;
    this.contact_id = props.contact_id;
    this.payment_type = props.payment_type as PaymentType;
  }
}

