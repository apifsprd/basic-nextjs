import { useEffect } from 'react';
import useRouter from 'next/router';

export default function custom404() {
    const router = useRouter;
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 2000);
    }, [])
    return (
        <div>
            <h1 className='title-404-notfound'>404</h1>
            <h1 className='title-404-notfound'>Ooops... Halaman tidak ditemukan</h1>
        </div>
    )
}