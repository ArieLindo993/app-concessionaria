import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class ClienteService {

  private readonly chamadaHttp = inject(HttpClient);

  urlCliente: string = "http://localhost:8080/clientes";

  salvarCliente(cliente: any) {
    return this.chamadaHttp
    .post<any>(`${this.urlCliente}/salvar-cliente`, cliente);
  }
}
