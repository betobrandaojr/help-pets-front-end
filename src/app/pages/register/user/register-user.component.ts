import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { equalsRequired } from './equals-required.function';
import { CreateFormGroup, IRegisterUserForm } from './register-user.interface';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzSpaceModule,
    NzPageHeaderModule,
  ],
  templateUrl: './register-user.component.html',
})
export class RegisterUserComponent {
  form: FormGroup<CreateFormGroup<IRegisterUserForm>> = this._fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
    contact: ['', Validators.required],
    document: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: [
      '',
      [
        Validators.required,
        equalsRequired(() => this.form?.controls.password.value),
      ],
    ],
    voluntary: [null],
  });

  constructor(private readonly _fb: FormBuilder) {}

  submitForm(): void {
    console.log('form submitted', this.form.getRawValue());
  }

  resetForm(): void {
    this.form.reset();
  }

  onBack(): void {}
}
