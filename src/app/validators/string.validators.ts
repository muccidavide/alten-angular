import { AbstractControl } from "@angular/forms"

export namespace StringValidators {
    // se string da validare è presente nel array di stringhe che passiamo
    // => non valida
    export const forbidden = (...values: string[]) =>
        (c: AbstractControl) => values.includes(c.value)
            ? { forbidden: true }
            : null

}