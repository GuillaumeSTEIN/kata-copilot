import { Component, input, output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'wishlist-status-filter',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './status-filter.component.html'
})
export class StatusFilterComponent {
  filter = input<Set<'todo' | 'in progress' | 'done'>>();
  t = input<Record<string, string>>();
  toggle = output<'todo' | 'in progress' | 'done'>();
}
