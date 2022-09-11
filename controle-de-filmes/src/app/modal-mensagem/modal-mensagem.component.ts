import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

interface ModalContent {
  title: string;
  text: string;
  show: boolean;
}

@Component({
  selector: 'app-modal-mensagem',
  templateUrl: './modal-mensagem.component.html',
  styleUrls: ['./modal-mensagem.component.css']
})
export class ModalMensagemComponent implements OnInit, OnChanges {
  @Input() content?: ModalContent;
  @Input() show: boolean = false;
  @Output() closeEvent = new EventEmitter<boolean>();

  @ViewChild('modal1') modal?: ElementRef;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.content?.show) {
      M.Modal.init(this.modal?.nativeElement, {})?.open();
    }
  }

  onClose() {
    this.closeEvent.emit(false);
  }

  ngOnInit(): void {}

}
