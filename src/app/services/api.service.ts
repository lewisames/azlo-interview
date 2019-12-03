import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPaymentsResponse } from '../models/payments';
import { PaymentsMock } from '../fixtures/payments';
import { IContactResponse } from '../models/contact';
import { ContactsMock } from '../fixtures/contacts';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {
  }

  getPayments(): Observable<IPaymentsResponse> {
    return of(PaymentsMock).pipe(delay(1500));
  }

  getContacts(): Observable<IContactResponse> {
    return of(ContactsMock).pipe(delay(1500));
  }
}
