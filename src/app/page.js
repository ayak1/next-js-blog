"use client"
import ArticleCard from "./components/ArticleCard";
import MoreArticlesBtn from "./components/MoreArticlesBtn";
import './globals.css'

export default function Home() {
    return (
        //? edit the padding on each size change
        <div className="flex flex-col m-auto px-[75px] ">

            <p className="capitalize text-4xl mt-32 font-extrabold">All Articals</p>
            <div className="cardSection w-full flex flex-col items-center justify-center">
            <div className="cards-container mt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-4  gap-6 w-full  ">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
                <MoreArticlesBtn/>
            </div>
        </div>
    );
}

