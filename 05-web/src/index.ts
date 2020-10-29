// Model Classes -  Handle Data, used to represent Users, Blog Posts, Images, etc
// import { User } from './models/User'
// View Classes - Handle HTML and events caused by the user
import axios from 'axios'
axios.post("http://localhost:4000/users", { name: "Amanda", age: 20 })
axios.get("http://localhost:4000/users/1")

// Test for methods
// const user = new User({})
// // user.set({ name: "Amanda" })
// // console.log('name', user.get("name"))
// // console.log('age', user.get("age"))

// user.on("change", () => {
//     console.log('HEELO')
// })
// user.on("eggs", () => {
//     console.log('EGGS')
// })



// user.trigger("change")
// user.trigger("eggs")
// user.trigger("badname")//no error 
// // console.log('user', user)