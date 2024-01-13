import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';


@Component({
  selector: 'app-counter-page',
  templateUrl: './counterPage.component.html',
  styleUrls: ['./counterPage.component.css'],
})
export class CounterPageComponent {

  public counter = signal(10)
  public squareCounter = computed(()=> this.counter() * this.counter())

  increaseBy(value:number){
    // this.counter.set(this.counter() + value)

    this.counter.update(current=> current + value)

  }
}
