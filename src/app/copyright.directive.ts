import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCopyright]',
})
export class CopyrightDirective {
  // ElementRef is angular built-in service through di
  constructor(el: ElementRef) {
    const currentYear = new Date().getFullYear();
    const targetEl: HTMLElement = el.nativeElement;
    // global style
    targetEl.classList.add('copyright');
    targetEl.textContent = 'Copyright @ Tennis Shop App. All rights Reserved.';
  }
}
