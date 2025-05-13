import { Component, input, output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

export interface WishlistItem {
  title: string;
  description: string;
  status: 'todo' | 'in progress' | 'done';
}

@Component({
  selector: 'wishlist-list',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './wishlist-list.component.html',
})
export class WishlistListComponent {
  items = input<WishlistItem[]>();
  t = input<Record<string, string>>();
  edit = output<number>();
  remove = output<number>();
}
