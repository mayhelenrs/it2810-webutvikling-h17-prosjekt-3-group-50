export class LocalStorage {

    static loadToState(name, instance, callback=() => {}) {
        if (name in localStorage) {
            console.log(localStorage.getItem(name));
            let data = JSON.parse(localStorage.getItem(name));
            instance.setState((prevState) => {
                return {...prevState, data};
            }, () => callback());
        } else {
            LocalStorage.save(name, instance.state);
        }
    }

    static save(name, data) {
        if (name.startsWith("NoteDisplay"))
            console.log("Saving: " + name + " Data: " + JSON.stringify(data));
        localStorage.setItem(name, JSON.stringify(data));
    }

    static delete(name) {
        localStorage.removeItem(name);
    }

}