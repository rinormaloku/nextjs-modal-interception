import Modal from '../../../../../../components/modal/Modal';

export default function Home({ params }: any) {
  console.log('modal executed');
  return (
    <Modal>
      <div>Intercepted Route for user {params.userId}</div>
    </Modal>
  );
}
