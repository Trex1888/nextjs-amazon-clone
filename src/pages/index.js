import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon Nextjs</title>
      </Head>

      <main>
        <Header />
      </main>
    </div>
  );
}
