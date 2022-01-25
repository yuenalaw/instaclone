import Head from 'next/head'
import Header from "../components/Header";
import Feed from "../components/Feed";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div className="gb-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Insta 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />
      {/* modal */}
      <Modal />
    </div>
  )
}
