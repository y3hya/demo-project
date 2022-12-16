import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loop-item',
  template: `<p *ngFor="let item of names">I am a child: {{ item }}</p>`,
})
export class LoopItemComponent {
  @Input() names: string[] = [];
}
