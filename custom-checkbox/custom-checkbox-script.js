class CustomCheckbox {
    #checked;
    #disabled;

    constructor(parent, index, checked = false, disabled = false) {
        this.#checked = checked;
        this.#disabled = disabled;

        const checkbox = document.createElement('div');
        checkbox.classList.add('custom-checkbox-wrapper');
        if (this.#checked) {
            checkbox.classList.add('checked');
        }
        if (this.#disabled) {
            checkbox.classList.add('disabled');
        }

        parent.insertBefore(checkbox, parent.children[index] || null);

        this.checkbox = checkbox;

        this.checkbox.addEventListener('click', (event) => {
            if (!this.#disabled) {
                this.toggleChecked();
            }
        });
    }

    get isChecked() {
        return this.#checked;
    }

    toggleChecked(){
        this.#checked = !this.#checked;
        this.checkbox.classList.toggle('checked');
    }

    get isDisabled() {
        return this.#disabled;
    }

    toggleDisabled(){
        this.#disabled = !this.#disabled;
        this.checkbox.classList.toggle('disabled');
    }
}