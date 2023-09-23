/**
 * Form Control
 * Handles a single Form Control as well as its validity. It also exposes the control's element
 * for the FormGroup to be able to manipulate and access information.
 */
export class FormControl {
    // The elements related to the input
    el;
    #label_el;
    #error_el;

    // The state of the input
    valid = false;

    // The validation function
    #validate;


    constructor(control_id, validate_function) {
        // Initialize the element instances
        this.el = document.getElementById(control_id);
        this.#label_el = document.getElementById(`${control_id}_label`);
        this.#error_el = document.getElementById(`${control_id}_error`);

        // Set the validate function
        this.#validate = validate_function;
    }




    /**
     * Triggers whenever an input changes. It validates the control and updates its state.
     * @param control_values
     */
    on_input_changes(control_values) {
        // Validate the value
        this.valid = this.#validate(control_values);

        // Handle the input validity
        if (this.valid) {
            this.#mark_control_as_valid();
        } else {
            this.#mark_control_as_invalid();
        }
    }




    /**
     * Marks the control as invalid if it fails the validation.
     */
    #mark_control_as_invalid() {
        this.el.classList.add("errored");
        this.#label_el.classList.add("error-color");
        this.#error_el.style.visibility = "visible";
    }



    /**
     * Marks the control as valid if it passes the validation.
     */
    #mark_control_as_valid() {
        this.el.classList.remove("errored");
        this.#label_el.classList.remove("error-color");
        this.#error_el.style.visibility = "hidden";
    }





    /**
     * Resets the value and the state of the form.
     */
    reset() { 
        this.el.value = "";
        this.valid = false;
    }
}