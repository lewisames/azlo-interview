import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable, of } from 'rxjs';
import { Payment, PaymentStatus } from '../../models/payments';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  public payments$: Observable<Payment[]>;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.payments$ = this.fetchPayments();
  }

  // write this method to meet the output signature
  // filter out payments that have been CANCELED
  fetchPayments(): Observable<Payment[]> {
    // remove this line.  it is here to make TS happy :D
    return of([]);
  }

}
