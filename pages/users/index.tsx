import Layout from "../../components/layout";
import useRouter from 'next/router';
import Styles from '../../styles/Users.module.css';

interface usersProps {
    dataUsers: Array<any>;
}

export default function Users(props: usersProps) {
    const { dataUsers } = props;
    const router = useRouter;
    return (
        <Layout pageTitle='Users'>
            <h1>Users</h1>
            {dataUsers.map((user) => (
                <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={Styles.card}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();
    return {
        props: {
            dataUsers,
        }
    }
}