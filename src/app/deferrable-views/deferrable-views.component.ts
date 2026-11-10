import { Component } from '@angular/core';
import { NewComponent } from '../new/new.component';
import { CommonModule } from '@angular/common';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss'
})
export class DeferrableViewsComponent {
  loadingData$: Observable<string[]> = of(['nome', 'nome 2']).pipe(delay(5000))
  isTrue = false;
}
