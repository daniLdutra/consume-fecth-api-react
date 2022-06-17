import { useParams } from 'react-router-dom';

export function Repo() {
  const params = useParams();
  const repository = params['*'] as string;

  return (
    <div>
      <h1>{repository}</h1>
    </div>
  );
}
