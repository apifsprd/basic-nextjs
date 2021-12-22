import type { NextPage } from 'next'
import Layout from '../components/layout'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Layout pageTitle='Home'>
        <Image src='/lfc-squad-2122.jpg' width={1400} height={500} alt='lfc-squad' />
      </Layout>
    </>
  )
}

export default Home
