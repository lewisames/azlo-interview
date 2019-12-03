import { Component, Input, OnInit } from '@angular/core';
import { Payment } from '../../models/payments';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() payment: Payment;

  constructor() { }

  ngOnInit() {
  }

}
