import { useParams } from '@remix-run/react';

const DynamicChild = () => {
  const { someId } = useParams();
  return <div>I am {someId}</div>;
};

export default DynamicChild;
