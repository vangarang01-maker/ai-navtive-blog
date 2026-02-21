type Author = {
  name: string
  bio: string
  avatarUrl: string
}

type AuthorProfileProps = {
  author: Author
}

export function AuthorProfile({ author }: AuthorProfileProps) {
  return (
    <div className="flex items-start gap-4 mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
      <img
        src={author.avatarUrl}
        alt={author.name}
        className="w-14 h-14 rounded-full object-cover shrink-0"
      />
      <div>
        <p className="font-bold text-neutral-900 dark:text-neutral-100">
          {author.name} Sir
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
          {author.bio}
        </p>
      </div>
    </div>
  )
}
