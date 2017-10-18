export class LocalStorage {

    /**
     * Loads saved data and passes is into the state of the instance provided
     * The callback function is called whenever the state has been changed
     * @param name
     * @param instance
     * @param callback
     */
    static loadToState(name, instance, callback = () => {
    }) {
        if (name in localStorage) {
            let data = JSON.parse(localStorage.getItem(name));
            instance.setState((prevState) => {
                return {...prevState, data};
            }, () => callback());
        } else {
            LocalStorage.save(name, instance.state);
        }
    }

    /**
     * Loads saved data and passes it into a custom function provided in the parameter
     * Used for components that needs to save other information than just the state
     * @param name
     * @param instance
     * @param handleData
     * @param saveData
     */
    static load(name, handleData, saveData) {
        if (name in localStorage) {
            let data = JSON.parse(localStorage.getItem(name));
            handleData(data);
        } else {
            LocalStorage.save(name, saveData);
        }
    }

    /**
     * Checks if the item with the given name exists
     * @param name
     * @returns {boolean}
     */
    static exists(name) {
        return name in localStorage;
    }

    /**
     * Saves the item with the given name
     * @param name
     * @param data
     */
    static save(name, data) {
        localStorage.setItem(name, JSON.stringify(data));
    }

    /**
     * Deletes the item with the given name
     * @param name
     */
    static delete(name) {
        localStorage.removeItem(name);
    }

}