import { FormGroup } from "./modules/form_group.js";
import { Modal } from "./modules/modal.js";


/**
 * App
 * Implementation of the Application Class. Initializes all the DOM elements and subscribes
 * to all required events.
 */
class App {
    // The FormGroup Instace
    #form;

    // Modal
    #modal;


    constructor() {
        // Initialize the Form Group Instance
        this.#form = new FormGroup("form", [
            {
                id: "first_name", 
                validate_function: (control_values) => {
                    return  typeof control_values["first_name"] == "string" && 
                            /^[a-zA-Z]{2,30}$/.test(control_values["first_name"]);
                }
            },
            {
                id: "last_name", 
                validate_function: (control_values) => {
                    return  typeof control_values["last_name"] == "string" && 
                            /^[a-zA-Z]{2,30}$/.test(control_values["last_name"]);
                }
            },
            {
                id: "email", 
                validate_function: (control_values) => {
                    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    return  typeof control_values["email"] == "string" && 
                    regex.test(control_values["email"]);
                }
            },
            {
                id: "phone_number", 
                validate_function: (control_values) => {
                    return  typeof control_values["phone_number"] == "string" && 
                            /^\d{6,15}$/.test(control_values["phone_number"]);
                }
            },
            {
                id: "password", 
                validate_function: (control_values) => {
                    return  typeof control_values["password"] == "string" && 
                            control_values["password"].length >= 6;
                }
            },
            {
                id: "password_confirmation", 
                validate_function: (control_values) => {
                    return  control_values["password"] == control_values["password_confirmation"];
                }
            },
        ]);

        // Initialize the Modal Instance
        this.#modal = new Modal();

        // Subscribe to the form submission event and handle it
        this.#form.el.addEventListener("submit", (e) => {
            // Cancel the default behavior
            e.preventDefault();
    
            // Trigger the submission if the form is valid
            if (this.#form.valid) {
                // Display the modal
                this.#modal.display(this.#form.build_control_values());
    
                // Reset the form
                this.#form.reset();
            }
        });
    }
}




/**
 * App Initialization
 * Initializes the Application Instance once the HTML has been loaded.
 * @DONOTMODIFY
 */
const app = new App();