import * as React from "react"
import { Link } from "gatsby"
import ArticleIcon from "./articleIcon"

const PostCard = ({post, title}) => {
    return (
        <article
            className="post-list-item"
            itemScope
            itemType="http://schema.org/Article"
        > 
            <header>
                <small>🕒 {post.frontmatter.date||post.frontmatter.createDate}</small>
                <h2>
                    <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline"><ArticleIcon tags={post.frontmatter.tags}/> {title}</span>
                    </Link>
                </h2>
                <small>tags: {
                    post.frontmatter.tags.map((tag) => {
                        return (
                            <Link className="taglink" key={tag} to={`/tags/${tag}`} >
                                    <ArticleIcon tags={tag}/> {tag}
                            </Link>
                        )
                    }) || ""
                }
                </small>
            </header>
            <section>
            <p
                dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
                }}
                itemProp="description"
            />
            </section>
        </article>
    )
    

}

export default PostCard