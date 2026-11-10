import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  firstName = signal('Eliane ');
  lastName = signal('Alves');

  fullName = computed(() => { return this.firstName() + this.lastName() })

  array = signal([1]);

  constructor() {
    effect(() => {
      console.log(this.fullName());
      if(this.firstName() === "Meg ") {
        alert('Nome alterado para meguinha');
      }
    })
  }

  updateName() {
    this.firstName.set('Meg ')
  }

  updateArray() {
    this.array.update((value: number[]) => {
      return [...value, value.length + 1];
    })
  }
}
