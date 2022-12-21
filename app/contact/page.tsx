'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Contact = () => {
  const router = useRouter();
  const handleClick = () => router.push('/');
  return (
    <div>
      <h1>Contact</h1>
      <Link href="/">Go Home</Link>
      <Link href={`/blog`}>Go to Blog Post</Link>
      <button type="button" onClick={handleClick}>
        Home
      </button>
    </div>
  );
};

export default Contact;
