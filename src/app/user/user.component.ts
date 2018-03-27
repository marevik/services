import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { LoggingServices } from '../services/logging.services';
import { AccountServices } from '../services/account.services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  constructor(private accountServices: AccountServices){}

  

}