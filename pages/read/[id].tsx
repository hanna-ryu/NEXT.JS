import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
      </header>
      <h2>READ</h2>
      Hello READ!
    </>
  );
}
