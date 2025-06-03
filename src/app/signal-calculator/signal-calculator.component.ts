import { NgFor, NgIf } from '@angular/common';
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-signal-calculator',
  templateUrl: './signal-calculator.component.html',
  standalone: true,
  imports: [NgFor, NgIf],
})
export class SignalCalculatorComponent {
  public error = false;
  public actions = signal<string[]>([]);
  // When returned the signal is a function that returns the current value
  // of the signal, and can be used in templates to display the value

  // signals are used to create reactive state in Angular
  // they are similar to observables but are simpler and more lightweight

  // the counter signal is an object that is a wrapper around a primitive value
  // it is a reactive primitive that can be used to track changes
  // and trigger updates in the UI
  public counter = signal(0);
  public doubleCounter = computed(() => this.counter() * 2);

  public increment() {
    this.error = false;
    // update the signal value using the update method
    // this is a more efficient way to update the signal value
    // as it avoids creating a new signal object
    // and instead updates the existing signal object
    // update needs to take a function that receives the old value
    // and returns the new value
    this.counter.update(oldCounterValue => oldCounterValue + 1);

    // alernatively, you can use the set method to set the value directly
    // set simply takes the new value and sets it directly
    // this.counter.set(this.counter() + 1);
    // notice how we are invoking the signal function to get the current value even in the ts file,
    // not just in the template
    // this is because the signal is a function that returns the current value
    this.actions.update((oldActionsArray) => [...oldActionsArray, 'INCREMENT']);
  }

  public decrement() {
    this.error = false;
    this.counter.update(oldCounterValue => oldCounterValue - 1);
    this.actions.update((oldActionsArray) => [...oldActionsArray, 'DECREMENT']);
  }

  public doubleAction() {
    const actionsArray = this.actions();
    const lastNonDoubleAction = [...actionsArray].reverse().find(action => action !== 'DOUBLE');

    switch (lastNonDoubleAction) {
      case 'INCREMENT':
        this.counter.update(oldCounterValue => oldCounterValue + 1);
        break;
      case 'DECREMENT':
        this.counter.update(oldCounterValue => oldCounterValue - 1);
        break;
      case 'DOUBLE':
        break;
      default:
        this.error = true;
        break;
    }
    this.actions.update((oldActionsArray) => [...oldActionsArray, 'DOUBLE']);
  }
}

