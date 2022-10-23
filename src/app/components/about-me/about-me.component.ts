import { Component, NgModule, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ModalComponent } from '../modal/modal.component';
import { ModalModule } from 'src/app/_modules/modal.module';

@Component({
  selector: 'app-newsletter',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  @ViewChild('modalComponent') modal:
    | ModalComponent<AboutMeComponent>
    | undefined;

  newsletterForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      username: ['', [Validators.required]],
    });
  }

  async createRecord(): Promise<void> {
    console.log(this.newsletterForm.value);

    await this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModalModule],
  declarations: [AboutMeComponent],
})
export class AboutMeComponentModule {}
