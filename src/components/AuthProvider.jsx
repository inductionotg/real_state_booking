
import { createContext, useContext, useState, useEffect }from "react"
import api from "@/api";
const AuthContext  = createContext(undefined)

const useAuth = ()=>{
    const authContext = useContext(AuthContext)

    if(!authContext){
        throw new Error('use Auth Provider')
    }
    return authContext
}

const AuthProvider =({children})=>{
    const [token,setToken] = useState()
    useEffect(()=>{
        async function fetchToken(){
            try {
                const response  = await api.get('/api/me')
                setToken(response.data.accessToken)
            } catch (error) {
                setToken(null)
            }
        }
        fetchToken()

    },[])
    return (
        <AuthContext.Provider value={{token,setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider,useAuth}