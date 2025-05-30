import { Component } from '@angular/core';

import { SignalCalculatorComponent } from './signal-calculator/signal-calculator.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [SignalCalculatorComponent]
})
export class AppComponent {}
