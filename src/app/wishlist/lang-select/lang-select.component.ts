import { Component, input, output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wishlist-lang-select',
  standalone: true,
  templateUrl: './lang-select.component.html'
})
export class LangSelectComponent {
  lang = input<'fr' | 'en' | 'de' | 'pt'>('fr');
  langChange = output<'fr' | 'en' | 'de' | 'pt'>();
  langs = [
    { value: 'fr', label: 'Français' },
    { value: 'en', label: 'English' },
    { value: 'de', label: 'Deutsch' },
    { value: 'pt', label: 'Português' },
  ];
  onChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as 'fr' | 'en' | 'de' | 'pt';
    this.langChange.emit(value);
  }
}
