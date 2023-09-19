import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { ListaDeCompraService } from 'src/app/services/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnChanges {

  @Input() itemEdit!: Item;

  valorItem!: string;

  constructor(private listaDeCompraService: ListaDeCompraService) {}

  adicionarItem() {
    this.listaDeCompraService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  limparCampo() {
    this.valorItem = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemEdit'].firstChange) {
      this.valorItem = this.itemEdit?.nome;
    }
  }
}
