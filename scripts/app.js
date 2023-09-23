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