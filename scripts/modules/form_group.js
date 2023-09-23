import { FormControl } from "./form_control.js";


/**
 * Form Group
 * ...
 */
export class FormGroup {
    // Form Element
    el;

    // List of FormControl Instances
    controls;

    // The validity state of the form
    valid = false;



    constructor(form_id, partial_controls) {
        // Initialize the element's instance
        this.el = document.getElementById(form_id);

        // Initialize the controls' instances
        this.controls = partial_controls.map((control) => new FormControl(
            control.id, 
            control.validate_function
        ));

        // Subscribe to the input changes
        this.el.addEventListener("input", (e) => {
            // Build the control values
            const control_values = this.#build_control_values();

            // Trigger the change event on all controls
            this.controls.forEach((control) => control.on_input_changes(
                control.el.value,
                control_values
            ));
        });
    }






    /**
     * Builds the control values object for all the registered controls.
     * @returns object
     */
    #build_control_values() {
        return this.controls.reduce((accum, current) => {
            accum[current.el.id] = current.el.value;
            return accum;
        }, {});
    }





    /**
     * Checks if all the controls are valid.
     * @returns boolean
     */
    #is_valid() { return this.controls.every((control) => control.valid) }




    /**
     * Resets the value of all the controls.
     */
    reset() { this.controls.forEach((control) => control.reset()) }
}