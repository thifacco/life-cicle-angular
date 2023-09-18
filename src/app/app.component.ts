import { Component, OnInit } from '@angular/core';
import { Item } from './interfaces/item';
import { ListaDeCompraService } from './services/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'life-cycle-angular';

  listaCompras! : Array<Item>;

  constructor(private listaDeCompraService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaCompras = this.listaDeCompraService.getListaDeCompra();
    console.log('OnInit', this.listaCompras);
  }
}
