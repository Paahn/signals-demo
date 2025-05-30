import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalCalculatorComponent } from './signal-calculator/signal-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignalCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'signals-demo';
}
