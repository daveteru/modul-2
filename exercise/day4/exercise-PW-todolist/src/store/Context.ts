import {create} from 'zustand'

interface UserState{
    email : string
    password : string
    isLoggedIn : boolean
    setEmail: (email: string) => void
    login: (inputPassword: string) => boolean
}

const userContext = create<UserState>((set, get)=>({
    email: ``,
    password : '1234',
    isLoggedIn:false,
    setEmail: (email) => set({ email }),
    login: (inputPassword) => {
        if (inputPassword === get().password) {
            set({ isLoggedIn: true })
            return true
        }
        return false
    },
}))

export default userContext