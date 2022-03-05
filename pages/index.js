import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Limech.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Limech.com" />
        <p className="description">
          Great things coming here soon!
        </p>
      </main>

      <Footer />
    </div>
  )
}
