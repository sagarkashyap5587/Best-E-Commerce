import React from 'react'
import "../../styling/blog.css";
import { Link } from "react-router-dom";
import Footer2 from '../footer/footer';
import Navbar from '../navbar';

const ArticlePreview = ({ image, title, date, description }) => {
    return (
        <div className="side-article">
            <img src={image} alt="Article Preview" className="side-article-img" />
            <div className="side-article-content">
                <h4>By Admin Dinh / in {date}</h4>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tags">
                    <button>DESIGN</button>
                    <button>FASHION</button>
                </div>
            </div>
        </div>
    );
};

const blogs = [
    {
        title: "Celebrating Artistic Visionaries",
        date: "May 9, 2023",
        author: "Admin Dinh",
        description: "In this blog, we turn our attention to the world of art and creativity, showcasing...",
        image: "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-11_533x.png?v=1683625649",
        tags: ["Design", "Lifestyle"],
    },
    {
        title: "Cutting-Edge Technologies and Ideas",
        date: "May 9, 2023",
        author: "Admin Dinh",
        description: "Join us on a journey through the world of innovation as we highlight groundbreaking technologies...",
        image: "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-10_533x.png?v=1683625618",
        tags: ["Design", "Lifestyle"],
    },
    {
        title: "Stories of Triumph and Resilience",
        date: "May 9, 2023",
        author: "Admin Dinh",
        description: "We shine a spotlight on individuals who have overcome adversity, achieved remarkable success, or made...",
        image: "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-9_533x.png?v=1683625585",
        tags: ["Design"],
    },
];

const Blog = () => {
    return (
        <>
            <Navbar />
            <div className='blog-main-image'>
                <div className='image1'>
                    <img src='https://cdn.shopify.com/s/files/1/0726/1221/7115/files/bn-bl-1.png?v=1683616783' />
                    <h4 className='fashion-heading'>Fashion</h4>
                    <p>Here’s what’s new in your favourite stores & online this week...</p>
                    <div className='logo1'><img src='https://cdn.shopify.com/s/files/1/0726/1221/7115/users/avatar_250x250_crop_center_7b84e44b-2e69-463a-83d1-09c0337c268c.png?v=1683616182' /><span className='admin-dinh'>Admin Dinh</span></div>
                </div>
                <div>
                    <div className='blog-main-page-background'>
                        <img className='image-battery' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0iY3VycmVudENvbG9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNy41IDBDNy44MzUwNSAwIDAgNy44MzUwNSAwIDE3LjVDMCAyNy4xNjQ5IDcuODM1MDUgMzUgMTcuNSAzNUMyNy4xNjQ5IDM1IDM1IDI3LjE2NDkgMzUgMTcuNUMzNC45OTE3IDcuODM4NDQgMjcuMTYxNiAwLjAwODMzMDIxIDE3LjUgMFpNMTcuNSAzMy40OTRWMzMuNTA5QzguNjY2NzMgMzMuNTA5IDEuNTA2IDI2LjM0ODMgMS41MDYgMTcuNTE1QzEuNTA2IDguNjgxNzcgOC42NjY4IDEuNTIxMDQgMTcuNSAxLjUyMTA0QzI2LjMyNzMgMS41MjEwNCAzMy40ODU3IDguNjcyNTkgMzMuNDk0IDE3LjVDMzMuNDg1NyAyNi4zMjk4IDI2LjMyOTggMzMuNDg1NyAxNy41IDMzLjQ5NFoiIGZpbGw9ImJsYWNrIi8+PHBhdGggZD0iTTI0LjM5OTcgMTQuNzE1OUMyNC4yODgyIDE0LjY1NSAyNC4xNjMyIDE0LjYyMzIgMjQuMDM2MiAxNC42MjM1VjE0LjY2ODdIMTguMTQ3NkwxOC41MDkxIDcuMzk0NjFDMTguNTQgNi45Nzk4NyAxOC4yMjg5IDYuNjE4NjMgMTcuODE0MiA2LjU4NzY0QzE3LjY3MzcgNi41NzcxNyAxNy41MzMxIDYuNjA2MzEgMTcuNDA4NCA2LjY3MTc1QzE3LjI4MzYgNi43MzcxOSAxNy4xNzk3IDYuODM2MzEgMTcuMTA4NSA2Ljk1Nzg0TDEwLjI4NjIgMTkuMjE2OUMxMC4wODY1IDE5LjU4MTcgMTAuMjIwNSAyMC4wMzkzIDEwLjU4NTMgMjAuMjM4OUMxMC42OTY3IDIwLjI5OTkgMTAuODIxOCAyMC4zMzE3IDEwLjk0ODggMjAuMzMxNEgxNi44MjIzTDE2LjQ3NTkgMjcuNjA1NUMxNi40NjkyIDI3Ljc3MzUgMTYuNTE4OSAyNy45Mzg5IDE2LjYxNzIgMjguMDc1NEMxNi43MTU1IDI4LjIxMTkgMTYuODU2NiAyOC4zMTE1IDE3LjAxOCAyOC4zNTg1SDE3LjIyODlDMTcuMzY0NCAyOC4zNTg5IDE3LjQ5NzQgMjguMzIyNyAxNy42MTQxIDI4LjI1MzhDMTcuNzMwNyAyOC4xODQ4IDE3LjgyNjYgMjguMDg1NyAxNy44OTE2IDI3Ljk2NjlMMjQuNjk4OSAxNS43Mzc5QzI0Ljg5ODQgMTUuMzczMSAyNC43NjQ1IDE0LjkxNTUgMjQuMzk5NyAxNC43MTU5Wk0xOC4xMzI1IDI0LjQ4OEwxOC4zNTg0IDE5LjYyMzVDMTguMzc1MSAxOS4yMDggMTguMDUxNyAxOC44NTc2IDE3LjYzNjIgMTguODQxQzE3LjYyNTkgMTguODQwNSAxNy42MTU3IDE4Ljg0MDMgMTcuNjA1NSAxOC44NDAzSDEyLjIyOUwxNi44NTI0IDEwLjU1NzJMMTYuNjExNSAxNS4zOTE1QzE2LjU4NjYgMTUuODA2NiAxNi45MDI4IDE2LjE2MzQgMTcuMzE3OSAxNi4xODgzQzE3LjMzMzQgMTYuMTg5MyAxNy4zNDg5IDE2LjE4OTggMTcuMzY0NSAxNi4xODk3SDIyLjc1NkwxOC4xMzI1IDI0LjQ4OFoiIGZpbGw9ImJsYWNrIi8+PC9zdmc+' />
                        <h3 className='design-text'>DESIGN</h3>
                        <h1 className='store-text'>Here's what's new in your favourite stores & online this week...</h1>
                    </div>
                    <img className='img-atom' src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/bn-bl-2.png?v=1683619218" />
                    <div className='img-atom-text'>
                        <h3>FEATURED CATEGORIES</h3>
                        <h1>Lifestyle</h1>
                        <h4>View all post</h4>
                    </div>
                </div>
            </div>
            <div className='inside-design'>
                <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0iY3VycmVudENvbG9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zOC44MjYxIDEuMTY5MzZDMzguMjg5NCAwLjYzNTAxOSAzNy42MTI2IDAuMjYzNDIgMzYuODczNyAwLjA5NzUwMzJDMzYuMTM0OCAtMC4wNjg0MTQgMzUuMzY0MSAtMC4wMjE4Nzc1IDM0LjY1MDUgMC4yMzE3MzVMMi43MzM4MSAxMy4zOTZDMS45OTc4IDEzLjYzOTggMS4zNDg4NCAxNC4wOTI5IDAuODY2MzI5IDE0LjY5OThDMC4zODM4MTggMTUuMzA2OCAwLjA4ODY5MDQgMTYuMDQxMiAwLjAxNzA1ODQgMTYuODEzMkMtMC4wNTQ1NzM1IDE3LjU4NTIgMC4xMDAzOTggMTguMzYxNCAwLjQ2MzAwOCAxOS4wNDY3QzAuODI1NjE5IDE5LjczMjEgMS4zODAxNCAyMC4yOTY4IDIuMDU4NzIgMjAuNjcxOUwyLjE5NjI0IDIwLjczNDRMMTQuNzg1NCAyNS45NDc2QzE1LjAzMzEgMjYuMDM3OCAxNS4zMDEgMjYuMDU3NSAxNS41NTkyIDI2LjAwNDVDMTUuODE3NCAyNS45NTE1IDE2LjA1NTkgMjUuODI4IDE2LjI0ODEgMjUuNjQ3NkwyMi44MzY1IDE5LjA1OTJDMjIuOTc0IDE4LjkzODUgMjMuMDg1MyAxOC43OTA5IDIzLjE2MzUgMTguNjI1NEMyMy4yNDE3IDE4LjQ2IDIzLjI4NTIgMTguMjgwMiAyMy4yOTExIDE4LjA5NzNDMjMuMjk3MSAxNy45MTQ0IDIzLjI2NTQgMTcuNzMyMyAyMy4xOTgyIDE3LjU2MjFDMjMuMTMwOSAxNy4zOTE5IDIzLjAyOTQgMTcuMjM3MyAyMi45IDE3LjEwNzlDMjIuNzcwNiAxNi45Nzg1IDIyLjYxNjEgMTYuODc3IDIyLjQ0NTkgMTYuODA5OEMyMi4yNzU3IDE2Ljc0MjUgMjIuMDkzNSAxNi43MTA5IDIxLjkxMDYgMTYuNzE2OEMyMS43Mjc3IDE2LjcyMjggMjEuNTQ4IDE2Ljc2NjIgMjEuMzgyNSAxNi44NDQ0QzIxLjIxNzEgMTYuOTIyNiAyMS4wNjk0IDE3LjAzMzkgMjAuOTQ4NyAxNy4xNzE1TDE0Ljk5NzkgMjMuMTM0OEwzLjI4Mzg4IDE4LjMwOTFDMy4wNjcwMyAxOC4xODY3IDIuODkxNjggMTguMDAyMyAyLjc4MDMxIDE3Ljc3OTZDMi42Njg5NCAxNy41NTY4IDIuNjI2NjMgMTcuMzA1OSAyLjY1ODggMTcuMDU5QzIuNjg2MyAxNi43ODY1IDIuNzk1MjMgMTYuNTI4NyAyLjk3MTQgMTYuMzE5MUMzLjE0NzU3IDE2LjEwOTUgMy4zODI4IDE1Ljk1NzggMy42NDY0MyAxNS44ODM4TDM1LjU3NTYgMi43MzIwNkMzNS44MDkzIDIuNjUxOTcgMzYuMDYwOCAyLjYzODc5IDM2LjMwMTUgMi42OTQwMUMzNi41NDIzIDIuNzQ5MjQgMzYuNzYyOSAyLjg3MDY3IDM2LjkzODMgMy4wNDQ2MUMzNy4xMDU1IDMuMjAwOTYgMzcuMjI2NiAzLjQwMDIzIDM3LjI4ODMgMy42MjA2OUMzNy4zNTAxIDMuODQxMTQgMzcuMzUwMSA0LjA3NDMxIDM3LjI4ODQgNC4yOTQ3N0wyNC4wNzQxIDM2LjQyNEMyNC4wMDE2IDM2LjY3MzcgMjMuODUzMSAzNi44OTQ2IDIzLjY0OTIgMzcuMDU2QzIzLjQ0NTMgMzcuMjE3MyAyMy4xOTYyIDM3LjMxMSAyMi45MzY1IDM3LjMyNDFDMjIuNjg5NSAzNy4zNTYzIDIyLjQzODYgMzcuMzE0IDIyLjIxNTkgMzcuMjAyNkMyMS45OTMxIDM3LjA5MTMgMjEuODA4NyAzNi45MTU5IDIxLjY4NjMgMzYuNjk5TDE4LjQ2MDkgMjguOTEwNUMxOC4zMjQ5IDI4LjU3OSAxOC4wNjI5IDI4LjMxNSAxNy43MzIzIDI4LjE3NjZDMTcuNDAxNyAyOC4wMzgzIDE3LjAyOTcgMjguMDM3IDE2LjY5ODIgMjguMTcyOUMxNi4zNjY2IDI4LjMwODkgMTYuMTAyNiAyOC41NzA5IDE1Ljk2NDMgMjguOTAxNUMxNS44MjYgMjkuMjMyMSAxNS44MjQ2IDI5LjYwNDEgMTUuOTYwNiAyOS45MzU3TDE5LjIyMzUgMzcuODExN0wxOS4yODYgMzcuOTQ5MkMxOS42Mjg0IDM4LjU3OTIgMjAuMTM2OSAzOS4xMDM0IDIwLjc1NjIgMzkuNDY0OEMyMS4zNzU1IDM5LjgyNjMgMjIuMDgyIDQwLjAxMTIgMjIuNzk5IDM5Ljk5OTVIMjMuMTg2NUMyMy45NDU0IDM5LjkzODkgMjQuNjcwMSAzOS42NTgyIDI1LjI3MTkgMzkuMTkxOUMyNS44NzM3IDM4LjcyNTYgMjYuMzI2MyAzOC4wOTM5IDI2LjU3NDUgMzcuMzc0MUwzOS43ODg3IDUuMjU3NEM0MC4wMjU5IDQuNTU0MDYgNDAuMDYxNCAzLjc5ODM4IDM5Ljg5MTMgMy4wNzU4OUMzOS43MjExIDIuMzUzNCAzOS4zNTIxIDEuNjkyOTcgMzguODI2MSAxLjE2OTM2WiIgZmlsbD0iYmxhY2siLz48L3N2Zz4=' />

                <div className='inside-desing-text'>
                    <h3>Inside Design: <br />Stories & Interviews</h3>
                    <p>Subscribe to learn about new product feature the latest in technology, and updates</p>
                </div>
                <div className="subscribe-container">
                    <input type="email" placeholder="Enter your email here.." />
                    <button className="subscribe-btn">Subscribe</button>
                </div>
            </div>


            <div className='fashion-small-pic'>
                <img src='https://cdn.shopify.com/s/files/1/0726/1221/7115/files/img-icon-bl.png?v=1683620903' alt='fashion-girl' />
                <h1>Fashion</h1>
            </div>

            <div className="fashion-container">
                <div className="main-article">
                    <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-4_720x.png?v=1683621391" alt="Main Article" className="main-article-img" />
                    <div className="article-content">
                        <h3>By Admin Dinh / in May 9, 2023</h3>
                        <h2>Here's why you should try mood</h2>
                        <p>But they weren’t the only ones to lean into the high-octane trend, with Moschino, Cersace, and Jil Sander plumping for bold prints...</p>
                        <div className="tags">
                            <button>DESIGN</button>
                            <button>FASHION</button>
                        </div>
                    </div>
                </div>
                <div className="side-articles">
                    <ArticlePreview
                        image="https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-3_533x.png?v=1683621366"
                        title="Your Guide to Fashion Forward Living"
                        date="May 9, 2023"
                        description="Cersace and Jil Sander plumping for bold prints..."
                    />
                    <ArticlePreview
                        image="https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-2_533x.png?v=1683621336"
                        title="Where Style and Creativity Collide"
                        date="May 9, 2023"
                        description="Cersace and Jil Sander plumping for bold prints..."
                    />
                    <ArticlePreview
                        image="https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-1_533x.png?v=1683621301"
                        title="Unveiling the Latest Fashion Trends"
                        date="May 9, 2023"
                        description="Cersace and Jil Sander plumping for bold prints..."
                    />
                </div>
            </div>

            <div className="spotlight-container">
                <h2 className="spotlight-title">Spotlight</h2>

                <div className="spotlight-content">
                    <img
                        className="spotlight-image"
                        src="https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-12_1100x.png?v=1683625677"
                        alt="Desert travel scene"
                    />

                    <div className="spotlight-text">
                        <p className="author-date">
                            Admin Dinh / May 9, 2023
                        </p>

                        <h3 className="spotlight-heading">
                            Travel Tales and Cultural Immersion
                        </h3>

                        <p className="spotlight-description">
                            Forget the tourist hotspots and explore the road less traveled as we uncover hidden gems around the world. From enchanting small towns and...
                        </p>

                        <div className="tags">
                            <span className="tag">DESIGN</span>
                            <span className="tag">LIFESTYLE</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-section">
                <div className="blog-list">
                    {blogs.map((blog, index) => (
                        <div className="blog-card" key={index}>
                            <img src={blog.image} alt={blog.title} className="blog-image" />
                            <div className="blog-content">
                                <p className="blog-author">
                                    By {blog.author} / in {blog.date}
                                </p>
                                <h3 className="blog-title">{blog.title}</h3>
                                <p className="blog-description">{blog.description}</p>
                                <div className="blog-tags">
                                    {blog.tags.map((tag, i) => (
                                        <span className="blog-tag" key={i}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='fashion-small-pic'>
                <img src='https://cdn.shopify.com/s/files/1/0726/1221/7115/files/img-icon-bl2.png?v=1683624622' alt='fashion-girl' />
                <h1>Lifestyle</h1>
            </div>

            <div className="fashion-container">
                <div className="main-article">
                    <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-8_c9accd91-b5cc-4d1c-b7c5-27c324302426_533x.png?v=1683624775" alt="Main Article" className="main-article-img" />
                    <div className="article-content">
                        <h3>By Admin Dinh / in May 9, 2023</h3>
                        <h2>Embracing Mindfulness in a Busy World</h2>
                        <p>we delve into the importance of incorporating mindfulness practices into our daily lives. Discover tips for finding inner peace, reducing stress, and cultivating...</p>
                        <div className="tags">
                            <button>DESIGN</button>
                            <button>FASHION</button>
                        </div>
                    </div>
                </div>
                <div className="side-articles">
                    <ArticlePreview
                        image="https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-6_533x.png?v=1683624505"
                        title="Travel Tales and Cultural Immersion"
                        date="May 9, 2023"
                        description="Join us on a journey around the globe as we explore different..."
                    />
                    <ArticlePreview
                        image="https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-7_533x.png?v=1683624537"
                        title="Embracing Minimalism and Decluttering"
                        date="May 9, 2023"
                        description="In a world of constant consumerism, this blog invites you to simplify..."
                    />
                    <ArticlePreview
                        image="https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-5_533x.png?v=1683624796"
                        title="Exploring Healthy Habits and Holistic Wellness"
                        date="May 9, 2023"
                        description="Dive into a world of holistic wellness as we explore nourishing habits..."
                    />
                </div>
            </div>
            <Footer2 />
        </>
    )
}

export default Blog;