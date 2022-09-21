import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ModalConfigI } from '../../../model/modal-config';

@Component({
  selector: 'app-track-modal',
  templateUrl: './track-modal.component.html',
  styleUrls: ['./track-modal.component.scss']
})
export class TrackModalComponent implements OnInit {
  // operador de signo de exclamación (variableName!)
  // Ese es el operador de aserción no nula.
  // Es una forma de decirle al compilador "esta expresión no puede ser null o undefined aquí,
  // así que no te quejes de la posibilidad de que sea null o undefined ".
  @ViewChild('myModal', { static: false }) modal!: ElementRef;

  constructor(
    // @Inject(TrackModalComponent) data: any
  ) { }

  ngOnInit(): void {
  }

  open(refParams?: ModalConfigI) {
    this.modal.nativeElement.style.display = 'block';
    console.log(refParams);
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }

}
