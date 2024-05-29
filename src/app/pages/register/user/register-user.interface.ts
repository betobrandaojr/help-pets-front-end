import { FormControl } from '@angular/forms';

export interface IRegisterUserForm {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  address: string;
  contact: string;
  document: string;
  voluntary: unknown;
}

export type CreateFormGroup<Interface> = {
  [Property in keyof Interface]-?: FormControl<Interface[Property] | null>;
};
