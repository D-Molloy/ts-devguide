import { Model } from './Model'
import { Attributes } from './Attributes'
import { Eventing } from './Eventing'
import { ApiSync } from './ApiSync'
import { Collection } from './Collection'

// "?" - optional property - meaning we can pass 0 or more to satisfy the instance
export interface UserProps {
    // id - added by json-server
    id?: number;
    name?: string;
    age?: number
}

const rootUrl = "http://localhost:4000/users"

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        )
    }

    static buildUserCollection(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(
            rootUrl,
            (json: UserProps) => User.buildUser(json))
    }
    // free to add User specific methods
    // isAdminUser(): boolean {
    //     return this.get('id') === 1
    // }
    setRandomAge(): void {
        const age = Math.round(Math.random() * 100)
        this.set({ age })
    }
}
