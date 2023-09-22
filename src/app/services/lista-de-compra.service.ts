import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra!: Item[];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('listaDeCompras') || '[]');
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  criarItem(nomeDoItem: string) {
    const id = this.listaDeCompra.length + 1
    const item: Item = {
      id: id,
      nome: nomeDoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }
    return item;
  }

  adicionarItemNaLista(nomeDoItem: string): void {
    const item = this.criarItem(nomeDoItem)
    this.listaDeCompra.push(item);
  }

  editarItemDaLista(item: Item, novoItemNome: string): void {
    const itemEditado: Item = {
      id: item.id,
      nome: novoItemNome,
      data: item.data,
      comprado: item.comprado
    };

    const index = this.listaDeCompra.indexOf(item);
    this.listaDeCompra.splice(index, 1, itemEditado);
  }

  atualizarLocalStorage(): void {
    localStorage.setItem('listaDeCompras', JSON.stringify(this.listaDeCompra));
  }

  ordenarItens(item: Item, checked: boolean) {
    const index = this.listaDeCompra.indexOf(item);
    this.listaDeCompra.splice(index, 1);

    if (checked === true) {  
      this.listaDeCompra.push(item);
    } else {
      this.listaDeCompra.unshift(item);
    }
  }

  limparItens(): void {
    this.listaDeCompra = [];
    this.atualizarLocalStorage();
  }
}
