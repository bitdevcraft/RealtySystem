import { FormArray, FormControl, FormGroup } from '@angular/forms';

export type IForm<T> = FormGroup<{
    [K in keyof T]: T[K] extends object ? (T[K] extends Date ? FormControl<T[K] | null | undefined> : T[K] extends unknown[] ? FormArray<IForm<T[K] extends (infer V)[] ? V : T[K]>> : IForm<T[K]>) : FormControl<T[K] | null | undefined>;
}>;

// A custom type for a strictly typed FormGroup
export type TypedFormControl<T> = FormControl & { value: T };
export type TypedFormGroup<T> = FormGroup & { controls: { [K in keyof T]: TypedFormControl<T[K]> } };

export type ToFormControls<T> = {
    [K in keyof T]: FormControl<T[K]>;
};
