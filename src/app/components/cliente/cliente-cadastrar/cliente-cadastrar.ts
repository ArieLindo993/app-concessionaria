import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { SelectModule } from 'primeng/select';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonDirective } from 'primeng/button';
import { Save } from '@primeicons/angular/save';
import { Times } from '@primeicons/angular/times';

@Component({
  selector: 'app-cliente-cadastrar',
  imports: [
    InputTextModule,
    FloatLabelModule,
    CardModule,
    SelectModule,
    InputMaskModule,
    ButtonDirective,
    Save,
    Times
],
  templateUrl: './cliente-cadastrar.html',
  styleUrl: './cliente-cadastrar.css',
})
export class ClienteCadastrar {

  tipoPessoaOptions: any[] = [
    { descricao: 'Pessoa Física', valor: 'PF'},
    { descricao: 'Pessoa Jurídica', valor: 'PJ'}
  ];
}
