import { NgClass, NgStyle } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewComponent } from '../new/new.component';

@Component({
  selector: 'app-template-bindings',
  standalone: true,
  imports: [NgClass, NgStyle, FormsModule, NewComponent],
  templateUrl: './template-bindings.component.html',
  styleUrl: './template-bindings.component.scss'
})
export class TemplateBindingsComponent implements AfterViewInit {
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('h2') nameH2!: ElementRef;

  @ViewChild(NewComponent) newComponent!: NewComponent;
  title = 'angular-17';
  aria = "aria teste"
  buttonDisabled: boolean = true;
  valor: number = 1;
  valor2: string = "Eliane";

  ngAfterViewInit(): void {
    console.log(this.nameInput.nativeElement.value);
    console.log(this.nameH2.nativeElement.innerText);
    console.log(this.newComponent.name)
  }

  soma() {
    this.valor++;
  }

  onKeyDown(event: Event) {
    console.log(event)
  }

  onMouseMove(event: any) {
    console.log(event)
  }
}
