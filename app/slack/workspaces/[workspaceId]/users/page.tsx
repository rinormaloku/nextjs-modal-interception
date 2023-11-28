import Link from 'next/link';

export default function Home({ params }: any) {
  return (
    <div>
      <h1>Slack Users List for workspace with id "{params.workspaceId}"</h1>
      <br />
      <Link key={'first-user'} href={`/users/first-user/profile`}>
        First User
      </Link>

      <br />
      <Link key={'second-user'} href={`/users/second-user/profile`}>
        Second User
      </Link>

      <br />
      <Link key={'third-user'} href={`/users/third-user/profile`}>
        Third User
      </Link>
    </div>
  );
}
