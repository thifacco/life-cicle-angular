import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/item';
import { ListaDeCompraService } from './services/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {

  listaCompras!: Array<Item>;
  itemEdit!: Item;

  constructor(private listaDeCompraService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaCompras = this.listaDeCompraService.getListaDeCompra();
    console.log('OnInit', this.listaCompras);
  }

  // checa todas as alterações durante todo o ciclo de vida do componente
  // inclusive nos componentes filhos, tome cuidado com a performance
  ngDoCheck(): void {
    console.log('DoCheck foi chamado');
    this.listaDeCompraService.atualizarLocalStorage();
    this.listaCompras = this.listaDeCompraService.getListaDeCompra();
  }

  editar(item: Item) {
    this.itemEdit = item;
  }

  excluir(itemId: number) {
    const index = this.listaCompras.findIndex((item)=>item.id === itemId);
    this.listaCompras.splice(index, 1);
  }

  limparLista() {
    this.listaCompras = [];
    this.listaDeCompraService.limparItens();
  }
}
