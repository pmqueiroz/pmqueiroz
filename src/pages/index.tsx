import Head from 'next/head';
import LinkTree from '../components/LinkTree';

export default function Home() {
  return (
    <div>
      <Head>
        <title>@pmqueiroz</title>
      </Head>
      <LinkTree />
    </div>
  )
}
