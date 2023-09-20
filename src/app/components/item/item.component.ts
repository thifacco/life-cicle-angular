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
  @Output() emitItemEditar = new EventEmitter();
  @Output() emitItemIdExcluir = new EventEmitter();
  
  faPen = faPen;
  faTrash = faTrash;

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', changes);
  }

  // será chamado no momento que esse componente for retirado da tela
  // usado para fazer a lógica de limpeza
  ngOnDestroy() {

  }

  editarItem() {
    this.emitItemEditar.emit(this.item);
  }

  excluirItem() {
    this.emitItemIdExcluir.emit(this.item);
  }

  checarItem() {
    if (this.item.comprado === true) {
      this.item.comprado = false;
    } else {
      this.item.comprado = true;
    }
  }
}
