import { Component, EventEmitter, Input, Output, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnChanges {

  @Input() item!: Item;
  @Output() emitItemEdit = new EventEmitter();
  
  faPen = faPen;
  faTrash = faTrash;

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', changes);
  }

  editarItem() {
    this.emitItemEdit.emit(this.item);
  }

  checarItem() {
    if (this.item.comprado === true) {
      this.item.comprado = false;
    } else {
      this.item.comprado = true;
    }
  }
}
