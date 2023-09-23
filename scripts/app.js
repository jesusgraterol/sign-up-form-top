import { FormGroup } from "./modules/form_group.js";


/**
 * App
 * Implementation of the Application Class. Initializes all the DOM elements and subscribes
 * to all required events.
 */
class App {
    // The FormGroup Instace
    form;

    // Modal
    #modal_el;
    #modal_close_button_el;


    constructor() {
        // Initialize the form element & Subscribe to the Submission Event.
        this.form = new FormGroup("form", [
            {
                id: "first_name", 
                validate_function: (value, control_values) => {
                    return typeof value == "string" && /^[a-zA-Z]{2,30}$/.test(value);
                }
            },

        ]);
        this.form.el.addEventListener("submit", (e) => this.#on_form_submission(e));


        // Initialize the modal elements and subscribe to the closing events
        this.#modal_el = document.getElementById("modal");
        this.#modal_close_button_el = document.getElementById("modal_close_button");
        this.#modal_close_button_el.addEventListener("click", () => { this.#close_modal() });
        document.onkeydown = (evt) => { if (evt.key == "Escape") this.#close_modal() };
    }







    /********************
     * Submission Event *
     ********************/






    /**
     * This function is invoked when a valid form is submitted.
     */
    #on_form_submission(e) {
        // Cancel the default behavior
        e.preventDefault();

        // Trigger the submission if the form is valid
        if (this.form.valid) {
            // Display the modal
            this.#display_modal();

            // Reset the form
            this.form.reset();
        }
    }






    

    /********************
     * MODAL MANAGEMENT *
     ********************/


    /**
     * Displays the modal once the form is submitted successfully.
     */
    #display_modal() { this.#modal_el.style.display = "block"; }




    /**
     * Closes the submission modal when the user clicks on the button or hits "Escape".
     */
    #close_modal() { this.#modal_el.style.display = "none"; }
}




/**
 * App Initialization
 * Initializes the Application Instance once the HTML has been loaded.
 * @DONOTMODIFY
 */
const app = new App();