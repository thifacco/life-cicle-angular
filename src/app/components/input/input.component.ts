import { Component } from '@angular/core';
import { ListaDeCompraService } from 'src/app/services/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  valorItem!: string;

  constructor(private listaDeCompraService: ListaDeCompraService) {}

  adicionarItem() {
    this.listaDeCompraService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  limparCampo() {
    this.valorItem = '';
  }
}
