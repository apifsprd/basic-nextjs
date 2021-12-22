import Layout from "../../components/layout";
import { useRouter } from "next/router";

interface user {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

interface UserDetailProps {
    user: user;
}

export default function UserDetail(props: UserDetailProps) {
    const { user } = props;
    const router = useRouter();
    return (
        <Layout pageTitle='User Detail'>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </Layout>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();

    const paths = dataUsers.map((user) => ({
        params: {
            id: `${user.id}`,
        },
    }));

    return {
        paths,
        fallback: false
    }
}

interface GetStaticProps {
    params: {
        id: string;
    }
}

export async function getStaticProps(context: GetStaticProps) {
    const { id } = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();

    return {
        props: {
            user,
        }
    }

}