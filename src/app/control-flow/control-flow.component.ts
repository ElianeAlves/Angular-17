import { NgFor, NgStyle, NgIf, AsyncPipe, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [NgFor, NgStyle, NgIf, AsyncPipe, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
  frutas = [
    { nome: "Maça", quantidade: 3 },
    { nome: "Uva", quantidade: 5 },
    { nome: "Pera", quantidade: 8 },
    { nome: "Banana", quantidade: 1 },
    { nome: "Laranja", quantidade: 9 },
  ];

  verduras = [
    { nome: "Alface", quantidade: 1 },
    { nome: "Rucula", quantidade: 1 },
    { nome: "Couve", quantidade: 1 },
    { nome: "Alcega", quantidade: 1 },
  ];

  valor: number = 3;

  data$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
    'item 4',
  ]).pipe(delay(3000));

  itens = [{ name: 'Eliane' }];

  switchCondition = 'B';

  trackByFn(index: number): number {
    return index;
  }

  addNewName(value: string) {
    this.itens.push({ name: value });
  }
}
