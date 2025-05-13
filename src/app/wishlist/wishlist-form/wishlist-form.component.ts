import { Component, input, output, EventEmitter } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'wishlist-form',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './wishlist-form.component.html'
})
export class WishlistFormComponent {
  form = input<FormGroup>(undefined as any);
  t = input<Record<string, string>>();
  editingIndex = input<number | null>(null);
  add = output<void>();
  update = output<void>();
  cancel = output<void>();
}
