/**
 * Form Control
 * ...
 */
export class FormControl {
    // The elements related to the input
    el;
    label_el;
    error_el;

    // The state of the input
    pristine = true;
    valid = false;

    // The validation function
    #validate;


    constructor(control_id, validate_function) {
        // Initialize the element instances
        this.el = document.getElementById(control_id);
        this.label_el = document.getElementById(`${control_id}_label`);
        this.error_el = document.getElementById(`${control_id}_error`);

        // Set the validate function
        this.#validate = validate_function;
    }





    on_input_changes(value, control_values) {
        // 
        console.log(value);
        console.log(control_values);
    }






    /**
     * Resets the value of the control
     */
    reset() { this.el.value = "" }
}