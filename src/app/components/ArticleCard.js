import AuthorCardAuthorInfo from "./AuthorCardAuthorInfo";

export default function ArticleCard() {
    const author_info = {
        author_name: "Aya Killiah",
        author_image: "https://picsum.photos/200/300",
        author_work_title: "Web Developer"
    };
    const article_image = "https://picsum.photos/200/300";
    const article_title = "Java Script Tips and Tricks";
    return (
        <div className="relative card_wrapper h-[497px] w-full">
            <img className="absolute inset-0 w-full h-full object-cover object-center shadow-inner" src={article_image} alt="Article Image" />
            <div className="top_of_img absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex flex-col justify-between ">
                <div className="">
                    <AuthorCardAuthorInfo author_info={author_info}/>
                </div>
                <div className="">
                    <p className="capitalize font-bold text-4xl text-center text-white">{article_title}</p>
                </div>               
                <div className="bottom-5 right-5 self-end m-5">
                    <div className="post_date text-white">2/22/2022</div>
                </div>
            </div>
        </div>
    );
}
