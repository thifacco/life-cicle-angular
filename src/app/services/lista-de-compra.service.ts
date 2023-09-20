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

  adicionarItemNaLista(nomeDoItem: string) {
    const item = this.criarItem(nomeDoItem)
    this.listaDeCompra.push(item);
  }

  editarItemDaLista(item: Item, novoItemNome: string) {
    const itemEditado: Item = {
      id: item.id,
      nome: novoItemNome,
      data: item.data,
      comprado: item.comprado
    };

    this.listaDeCompra.splice(Number(item.id) - 1, 1, itemEditado);
  }

  atualizarLocalStorage() {
    const listaOrdenada: Item[] = [];

    this.listaDeCompra.forEach(item => {
      if (item.comprado) {
        listaOrdenada.push(item);
      } else {
        listaOrdenada.unshift(item);
      }
    })

    localStorage.setItem('listaDeCompras', JSON.stringify(listaOrdenada));
  }

  limparItens() {
    this.listaDeCompra = [];
  }
}
