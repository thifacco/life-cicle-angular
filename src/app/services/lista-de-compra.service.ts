import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

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

  adicionarItemNaLista(nomeDoItem: string) {
    const item = this.criarItem(nomeDoItem)
    this.listaDeCompra.push(item);
    this.atualizarLocalStorage();
  }

  editarItemDaLista(item: Item, novoItemNome: string) {
    const itemEditado: Item = {
      id: item.id,
      nome: novoItemNome,
      data: item.data,
      comprado: item.comprado
    };

    this.listaDeCompra.splice(Number(item.id) - 1, 1, itemEditado);
    this.atualizarLocalStorage();
  }

  atualizarLocalStorage() {
    localStorage.setItem('listaDeCompras', JSON.stringify(this.listaDeCompra));
  }
}
