import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div className="flex min-h-screen flex-col justify-between bg-base-100">
            <Header />
            <Posts />
            <Footer />
        </div>
    )
}

export default page

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl tracking-[.3em]">RAFA / BLOG</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <label className="swap swap-rotate">
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" className="theme-controller" value="dark" />

                            {/* sun icon */}
                            <svg
                                className="swap-off size-5 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}
                            <svg
                                className="swap-on size-5 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                    </li>
                    <li>
                        <a>Posts</a>
                    </li>
                    <li>
                        <details>
                            <summary>Extras</summary>
                            <ul className="rounded-t-none bg-base-100 p-2">
                                <li>
                                    <a>Archive</a>
                                </li>
                                <li>
                                    <a className="">About me</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-300 p-4 text-base-content">
            <aside>
                <p>Copyright © 2024 - Rafa llc</p>
            </aside>
        </footer>
    )
}

const posts = [
    {
        published: 'Jan 3, 2024',
        author: 'Rafa Jones',
        readTime: '~10 min',
        title: 'How to make a blog look GOOD',
        image: 'https://images.unsplash.com/photo-1568826197047-0fc0311f65fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D',
        preview:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, fuga quis non eligendi explicabo tempore officiis quibusdam et incidunt deleniti minima distinctio dolorem. Quidem magni quae corrupti exercitationem cum qui?',
        likes: 5,
    },
    {
        published: 'Jan 3, 2024',
        author: 'Rafa Jones',
        readTime: '~10 min',
        title: 'How to make a blog look GOOD',
        image: 'https://images.unsplash.com/photo-1568826197047-0fc0311f65fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D',
        preview:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, fuga quis non eligendi explicabo tempore officiis quibusdam et incidunt deleniti minima distinctio dolorem. Quidem magni quae corrupti exercitationem cum qui?',
        likes: 5,
    },
    {
        published: 'Jan 3, 2024',
        author: 'Rafa Jones',
        readTime: '~10 min',
        title: 'How to make a blog look GOOD',
        image: 'https://images.unsplash.com/photo-1568826197047-0fc0311f65fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D',
        preview:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, fuga quis non eligendi explicabo tempore officiis quibusdam et incidunt deleniti minima distinctio dolorem. Quidem magni quae corrupti exercitationem cum qui?',
        likes: 5,
    },
    {
        published: 'Jan 3, 2024',
        author: 'Rafa Jones',
        readTime: '~10 min',
        title: 'How to make a blog look GOOD',
        image: 'https://images.unsplash.com/photo-1568826197047-0fc0311f65fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D',
        preview:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, fuga quis non eligendi explicabo tempore officiis quibusdam et incidunt deleniti minima distinctio dolorem. Quidem magni quae corrupti exercitationem cum qui?',
        likes: 5,
    },
]

const Posts = () => {
    return (
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-10 md:grid-cols-2 ">
            {posts.map((post, index) => {
                return (
                    <div
                        key={index}
                        className="rounded-lg bg-cover bg-center bg-no-repeat pt-24"
                        style={{ backgroundImage: `url(${post.image})` }}
                    >
                        {/* <Image src={post.image} height={500} width={500} alt="blog image" className="bg-cover" /> */}
                        <div className="  rounded-b-lg bg-base-200 px-4 pb-5">
                            <div className=" flex items-center">
                                <h1 className="text-2xl font-bold tracking-widest lg:text-3xl">{post.title}</h1>
                                <button className="btn btn-ghost flex">
                                    <div className="">{post.likes}</div>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex items-center text-base-content/60">
                                <div className="font-semibold">{post.author}</div>
                                <div className="pl-2">{post.readTime}</div>
                                <div className="pl-5 text-xs">{'Published: ' + post.published}</div>
                            </div>
                            <div className="line-clamp-2 text-xs text-base-content/50">{post.preview}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
