import { Component, Input, OnInit } from '@angular/core';
import { Payment } from '../../models/payments';

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.scss']
})
export class PaymentsListComponent implements OnInit {
  @Input() payments: Payment[] = [];

  constructor() { }

  ngOnInit() {
  }

}
