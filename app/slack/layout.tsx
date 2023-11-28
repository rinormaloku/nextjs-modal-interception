import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function Layout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      <h1>Secondary Layout</h1>
      <br />
      <div>{props.children}</div>
      <div>{props.modal}</div>
    </div>
  );
}