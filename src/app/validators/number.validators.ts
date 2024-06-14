import { AbstractControl } from "@angular/forms"

export namespace NumberValidators {
    export const range = (min: number, max: number) => {
        return (c:AbstractControl) => {
            if(c.value >= min && c.value <= max){
                return null
            }
            return { range: true}
        }
    }
}