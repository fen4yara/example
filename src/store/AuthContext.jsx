import { createContext,useState } from "react";

export const AuthContext = createContext(null);

export function AuthContextProvider({children}){
    const [user, setUser] = useState(null);
    return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}


// import { makeAutoObservable } from "mobx"

// export function itemsCounter(itemsCount) {
//     return makeAutoObservable({
//         itemsCount,
//         get increment() {
//             this.itemsCount +1;
//             console.log(this.itemsCount)
//         },
//         decrement() {
//             this.itemsCount -1;
//             console.log(this.itemsCount)
//         }
//     })
// }

