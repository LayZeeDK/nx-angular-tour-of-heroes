import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent {
  @Output()
  add = new EventEmitter<string>();

  onAdd(name: string): void {
    name = name.trim();

    if (name === '') {
      return;
    }

    this.add.emit(name);
  }
}
