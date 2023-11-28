import Image from 'next/image';

export default function Home({ params }: any) {
  return (
    <div>
      <h1>PROFILE PAGE OF USER "{params.userId}"</h1>
    </div>
  );
}
