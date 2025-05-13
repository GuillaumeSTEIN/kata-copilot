import { Component, input, output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'wishlist-sort-buttons',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './sort-buttons.component.html'
})
export class SortButtonsComponent {
  mode = input<'status-asc' | 'status-desc' | 'alpha-asc' | 'alpha-desc'>('status-asc');
  t = input<Record<string, string>>();
  sort = output<'status-asc' | 'status-desc' | 'alpha-asc' | 'alpha-desc'>();
}
