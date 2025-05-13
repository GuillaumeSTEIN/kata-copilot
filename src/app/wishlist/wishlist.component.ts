import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LangSelectComponent } from './lang-select/lang-select.component';
import { SortButtonsComponent } from './sort-buttons/sort-buttons.component';
import { StatusFilterComponent } from './status-filter/status-filter.component';
import { WishlistFormComponent } from './wishlist-form/wishlist-form.component';
import { WishlistListComponent } from './wishlist-list/wishlist-list.component';

export interface WishlistItem {
  title: string;
  description: string;
  status: 'todo' | 'in progress' | 'done';
}

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule, LangSelectComponent, SortButtonsComponent, StatusFilterComponent, WishlistFormComponent, WishlistListComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  items: WishlistItem[] = [];
  form: FormGroup;
  protected editingIndex: number | null = null;

  protected sortMode: 'status-asc' | 'status-desc' | 'alpha-asc' | 'alpha-desc' = 'status-asc';
  protected statusFilter = new Set<WishlistItem['status']>(['todo', 'in progress', 'done']);

  constructor(private fb: FormBuilder, private translate: TranslateService) {
    this.form = this.fb.group({
      title: '',
      description: '',
      status: 'todo',
    });
    this.translate.setDefaultLang('fr');
  }

  protected addItem() {
    if (this.form.valid) {
      this.items.push({ ...this.form.value });
      this.sortItems();
      this.form.reset({ title: '', description: '', status: 'todo' });
    }
  }

  protected removeItem(index: number) {
    this.items.splice(index, 1);
  }

  protected editItem(index: number) {
    this.editingIndex = index;
    this.form.setValue({ ...this.items[index] });
  }

  protected updateItem() {
    if (this.editingIndex !== null && this.form.valid) {
      this.items[this.editingIndex] = { ...this.form.value };
      this.sortItems();
      this.form.reset({ title: '', description: '', status: 'todo' });
      this.editingIndex = null;
    }
  }

  protected cancelEdit() {
    this.editingIndex = null;
    this.form.reset({ title: '', description: '', status: 'todo' });
  }

  protected setSortMode(mode: 'status-asc' | 'status-desc' | 'alpha-asc' | 'alpha-desc') {
    this.sortMode = mode;
    this.sortItems();
  }

  protected toggleStatusFilter(status: WishlistItem['status']) {
    if (this.statusFilter.has(status)) {
      this.statusFilter.delete(status);
    } else {
      this.statusFilter.add(status);
    }
  }

  protected get filteredItems() {
    return this.items.filter(item => this.statusFilter.has(item.status));
  }

  protected setLang(lang: 'fr' | 'en' | 'de' | 'pt') {
    this.translate.use(lang);
  }

  private sortItems() {
    const order: Record<string, number> = { 'todo': 0, 'in progress': 1, 'done': 2 };
    switch (this.sortMode) {
      case 'status-asc':
        this.items.sort((a, b) => order[a.status] - order[b.status]);
        break;
      case 'status-desc':
        this.items.sort((a, b) => order[b.status] - order[a.status]);
        break;
      case 'alpha-asc':
        this.items.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'alpha-desc':
        this.items.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }
  }
}
