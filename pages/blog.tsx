import Layout from "../components/layout";
import Styles from '../styles/Blog.module.css';

interface Post {
    id: number;
    title: string;
    body: string;
}

interface BlogProps {
    dataBlog: Post[]
}

export default function Blog(props: BlogProps) {
    const { dataBlog } = props;
    return (
        <Layout pageTitle='Blog'>
            <h1>Blog</h1>
            {dataBlog.map((blog) => {
                return (
                    <div key={blog.id} className={Styles.card}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                    </div>
                )
            })}
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataBlog = await res.json();

    return {
        props: {
            dataBlog,
        }
    }
}