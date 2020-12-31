import { User, UserProps } from '../models/User'
import { View } from './View'


export class UserForm extends View<User, UserProps> {

    eventsMap(): { [key: string]: () => void } {
        return {
            "click:#set_age": this.onSetAgeClick,
            "click:#set_name": this.onSetNameClick,
            "click:#save_model": this.onSaveClick
        }
    }

    onSaveClick = (): void => {
        this.model.save()
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge()
    }

    onSetNameClick = (): void => {
        const input = this.parent.querySelector("input");
        if (input) {
            this.model.set({ name: input.value })
        }
    }


    template(): string {
        return `
        <div>
    
            <input type="text" placeholder="${this.model.get("name")}"/>
            <button id="set_name">Set Name</button>
            <button id="set_age">Set Random Age</button>
            <button id="save_model">Save User</button>
        </div>
        `;
    }


}