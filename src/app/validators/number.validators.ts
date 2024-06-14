import { AbstractControl } from "@angular/forms"

export namespace NumberValidators {
    export const range = (min: number, max: number) =>
        (c: AbstractControl) => c.value >= min && c.value <= max
            ? null :
            { range: true }
}