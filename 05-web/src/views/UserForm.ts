import { User } from '../models/User'

export class UserForm {
    constructor(public parent: Element, public model: User) {
        this.bindModel()
    }

    bindModel(): void {
        this.model.on('change', () => {
            this.render();
        })
    }

    eventsMap(): { [key: string]: () => void } {
        return {
            "click:#set_age": this.onSetAgeClick,
            "click:#set_name": this.onSetNameClick
        }
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge()
    }

    onSetNameClick = (): void => {
        const input = this.parent.querySelector("input");
        this.model.set({ name: input.value })
    }


    template(): string {
        return `
        <div>
            <h1>User Form</h1>
            <div>Username: ${this.model.get("name")}</div>
            <div>Age: ${this.model.get("age")}</div>
            <input type="text" />
            <button id="set_name">Set Name</button>
            <button id="set_age">Set Random Age</button>
        </div>
        `;
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');

            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey])
            })
        }
    }

    render(): void {
        this.parent.innerHTML = "";
        // The HTML Content Template (<template>) element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template()
        this.bindEvents(templateElement.content)
        this.parent.append(templateElement.content)
    }
}