import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
    <ul>
        <li *ngFor="let currentKeg of childKegList"><strong>Name:</strong> {{currentKeg.name}},<strong>type of beer:</strong> {{currentKeg.type}}, $ {{currentKeg.price}}, <strong>alcohol content:</strong> {{currentKeg.alcoholContent}}
        <button (click)="editButtonHasbeenClicked(currentKeg)">Edit Keg!</button>
      </li>
    </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasbeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}
