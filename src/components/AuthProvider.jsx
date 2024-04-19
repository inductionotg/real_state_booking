const { default: api } = require("@/api")
const { createContext, useContext, useState, useEffect } = require("react")

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
        <AuthContext.Provider values={{token,setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider,useAuth}