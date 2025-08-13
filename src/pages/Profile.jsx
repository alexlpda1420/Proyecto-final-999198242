import { useEffect, useState } from "react"
import { Layout } from "../components/Layout/Layout"
import { useAuth } from "../context/UserContext"

const Profile = () => {
  const { user } = useAuth()
  const [apiUserData, setApiUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      setLoading(false)
      return
    }

    
    if (user.email) {
      setLoading(false)
      return
    }

   
    const fetchUserFromAPI = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/users")
        const data = await response.json()
        const foundUser = data.find(u => u.username === user.username)
        setApiUserData(foundUser)
      } catch (error) {
        console.error("Error fetching user data from API:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserFromAPI()
  }, [user])

  if (loading) {
    return (
      <Layout>
        <div className="container mt-5">
          <h2>Cargando perfil...</h2>
        </div>
      </Layout>
    )
  }

  if (!user) {
    return (
      <Layout>
        <div className="container mt-5">
          <h2>No has iniciado sesión.</h2>
        </div>
      </Layout>
    )
  }

  const profile = user.email ? user : apiUserData

  return (
    <Layout>
      <div className="container mt-5">
        <h1>Perfil de Usuario</h1>
        {profile ? (
          <>
            <p><strong>Username:</strong> {profile.username}</p>
            {profile.email && <p><strong>Email:</strong> {profile.email}</p>}
            {profile.phone && <p><strong>Teléfono:</strong> {profile.phone}</p>}
            {profile.name && profile.name.firstname && profile.name.lastname && (
              <p><strong>Nombre completo:</strong> {profile.name.firstname} {profile.name.lastname}</p>
            )}
          </>
        ) : (
          <p>No se encontraron datos del usuario.</p>
        )}
      </div>
    </Layout>
  )
}

export { Profile }
