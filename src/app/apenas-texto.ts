import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[TextOnly]'
})
export class ApenasTextos {
  private regex: RegExp = new RegExp('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*$');
  //regex para letras do alfabeto e espaço ^[a-zA-Z0-9_ ]*$
  private teclasEspeciais: Array<string> = ['Backspace', 'ArrowLeft', 'ArrowRight','Delete'];

  constructor(private elementRef: ElementRef) { }

  /**Teclas digitadas
   * @param event
   */
  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (this.teclasEspeciais.indexOf(event.key) !== -1) {
      return;
    }
    const inputValue: string = this.elementRef.nativeElement.value.concat(event.key);
    if (inputValue && !String(inputValue).match(this.regex)) {
      event.preventDefault();
    }
    return;
  }

  /**Cola texto
   * @param event
   */
  @HostListener('paste', ['$event']) onPaste(event) {
    const clipboardData = (event.OriginalEvent || event).clipboardData.getData('text/plain');
    if (clipboardData) {
      const regEx = new RegExp('^[0-9]*$');
      if (!regEx.test(clipboardData)) {
        event.preventDefault();
      }
    }
    return;
  }

}