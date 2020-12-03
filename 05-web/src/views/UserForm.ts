export class UserForm {
    constructor(public parent: Element) { }

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:button': this.onButtonClick,
            'mouseenter:h1': this.onHeaderHover
        }
    }

    onHeaderHover(): void {
        console.log("HEADER HOVERED")
    }

    onButtonClick(): void {
        console.log("hi there")
    }


    template(): string {
        return `
        <div>
            <h1>User Form</h1>
            <input type="text" />
            <button>Click Me</button>
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
        // The HTML Content Template (<template>) element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template()
        this.bindEvents(templateElement.content)
        this.parent.append(templateElement.content)
    }
}