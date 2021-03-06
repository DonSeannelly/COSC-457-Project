import {Component, OnInit, ViewChild} from '@angular/core';
import { Ticket } from '../models/Ticket';
import { TicketService } from './tickets.service';
import {ContextMenuComponent} from "ngx-contextmenu";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
})
export class TicketComponent implements OnInit {
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

  tickets: Ticket[];
  editID: number = -1;

  constructor(public ticketService: TicketService) {
    //this.tickets = ticketService.get();
  }

  ngOnInit() {
  }

  edit(index: number) {
    this.editID = index;
  }

  save(index: number) {
    this.editID = -1;
    this.ticketService.update(this.tickets[index]).subscribe();
  }

  remove(index: number, showID) {
    this.tickets.splice(index, 1);
    this.ticketService.remove(this.tickets[showID]).subscribe();
  }

}
