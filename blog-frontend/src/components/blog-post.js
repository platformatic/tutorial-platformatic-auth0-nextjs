import { useAuth0 } from '@auth0/auth0-react'
import Link from 'next/link'

export default function BlogPost({ id, title, body, authorUserId, authorName, createdAt, updatedAt }) {
  const { user } = useAuth0()

  const currentUserIsAuthor = user?.sub === authorUserId

  return (
    <div>
      <h2>{title}</h2>
      <p>
        <em>Published {new Date(Number(createdAt)).toUTCString()}</em><br />
        {createdAt !== updatedAt && (
          <><em>Updated {new Date(Number(updatedAt)).toUTCString()}</em><br /></>
        )}
        <em>By {authorName}</em>
      </p>
      <p>{body}</p>
      {currentUserIsAuthor && <Link href={`/edit/${id}`}>Edit</Link>}
    </div>
  )
}
