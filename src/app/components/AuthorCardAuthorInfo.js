export default function AuthorCardAuthorInfo({author_info}) {
  return (
    <div className="author_info flex items-center gap-4 m-5">
        <img className="author_img rounded-full w-14 h-14" src={author_info.author_image} alt="author image" />
        <div className="about_author text-white">
        <p className="author_name text-xs font-bold">{author_info.author_name}</p>
        <p className="author_work_title text-xs">{author_info.author_work_title}</p>
        </div>
    </div>
  )
}
