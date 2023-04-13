import { useAuth0 } from '@auth0/auth0-react'
import Link from 'next/link'

export default function Layout({ children }) {
  const { user, error, isAuthenticated, isLoading } = useAuth0()

  const wrapperClasses = "prose max-width-xl mx-auto my-8"

  if (isLoading) {
    return <div className={wrapperClasses}><p>Loading ...</p></div>
  }

  if (error) {
    return <div className={wrapperClasses}><p>Oops... {error.message}</p></div>
  }

  return (
    <div className={wrapperClasses}>
      <header>
        <h1>
          <Link href="/">My blog</Link>
        </h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
