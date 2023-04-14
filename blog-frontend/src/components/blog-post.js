export default function BlogPost({ id, title, body, authorUserId, authorName, createdAt, updatedAt }) {
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
    </div>
  )
}
