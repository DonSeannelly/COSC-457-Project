import { Component, OnInit } from '@angular/core';
import { Act } from '../models/Act';
import { ActService } from './acts.service';

@Component({
  selector: 'app-acts',
  templateUrl: './acts.component.html',
  styleUrls: ['./acts.component.scss']
})
export class ActsComponent implements OnInit {

  acts: Act[];
  editID: number = -1;

  constructor(public actService: ActService) { 
    this.acts = actService.get();
  }

  ngOnInit() {
  }

  edit(index: number) {
    this.editID = index;
  }

  save(index: number) {
    this.editID = -1;
    this.actService.update(this.acts[index]);
  }

  remove(index: number) {
    this.acts.splice(index, 1);
    this.actService.remove(this.acts[index]);
  }

}