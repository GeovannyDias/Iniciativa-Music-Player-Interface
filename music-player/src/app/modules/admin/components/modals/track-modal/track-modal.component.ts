import { Component, ElementRef, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ModalConfigI } from '../../../model/modal-config';
import { TrackService } from '../../../services/track/track.service';

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
  @Output() closeOutput = new EventEmitter<boolean>();
  formTrack: FormGroup;


  constructor(
    // @Inject(TrackModalComponent) data: any
    private fb: FormBuilder,
    private trackService: TrackService,
  ) {
    this.formTrack = this.initForm();
  }

  ngOnInit(): void {
  }

  open(refParams?: ModalConfigI) {
    this.modal.nativeElement.style.display = 'block';
    console.log(refParams);
  }

  close(ref?: any) {
    this.modal.nativeElement.style.display = 'none';
    this.closeOutput.emit(ref);
  }

  initForm() {
    return this.fb.group({
      name: ['', Validators.required],
      artist: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['', Validators.required],
      image: ['', Validators.required],
      genre: ['', Validators.required],
      favorite: [false, Validators.required]
    });
  }

  validateForm() {
    // console.log(this.formTrack.value);
    if (this.formTrack.valid) {
      this.postTrack();
    }
  }

  postTrack() {
    this.cleanForm(this.formTrack);
    const data = this.formTrack.value;
    this.trackService.postTrack(data).subscribe(res => {
      console.log('POST:', res);
      this.close(true);
    });
  }

  cleanForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const value = typeof formGroup.get(key)?.value === 'string' ? formGroup.get(key)?.value.trim() : formGroup.get(key)?.value;
      formGroup.get(key)?.setValue(value);
    });
  }




}
