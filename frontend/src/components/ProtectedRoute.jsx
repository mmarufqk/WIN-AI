import {Navigate} from "react-router-dom"
import {jwtDecode} from "jwt-decode"
import api from "../api"
import { ACCES_TOKEN, REFRESH_TOKEN } from "../constants"
import { useState, useEffect } from "react"

function ProtectedRoute({children}) {
    const [isAuthorized, setAuthorized] = useState(null)

    useEffect(() => {
        auth().catch(() => setAuthorized(false))
    }, [])

    const refereshToken = async () => {
        const refereshToken = localStorage.getItem(REFRESH_TOKEN)
        try {
            const res = await api.post('api/token/refresh', { refresh : refereshToken })
            if (res.status === 200) {
                localStorage.setItem(ACCES_TOKEN, res.data.access)
                setAuthorized(true)
            } else {
                setAuthorized(false)
            }
        } catch (error) {
            console.log(error)
            setAuthorized(false)
        }
    }
    const auth = async () => {
        const token = localStorage.getItem(ACCES_TOKEN)
        if (!token) {
            setAuthorized(false)
            return
        }

        const decoded = jwtDecode(token)
        const tokenExpiration = decoded.exp
        const now = Date.now() / 1000

        if (tokenExpiration < now) {
            await refereshToken()
        } else {
            setAuthorized(true)
        }
        
    }

    if (isAuthorized === null) {
        return <div>Loading...</div>
    }

    return isAuthorized ? children : <Navigate to="/login" />
}


export default ProtectedRoute