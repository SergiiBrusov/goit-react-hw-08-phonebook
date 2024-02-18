import { useSelector } from 'react-redux';
import { Loading } from 'components/loading';
import { selectError, selectLoading } from 'components/redux/contacts/selectors';

const Error = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className="container mt-5">
      {isLoading && <Loading />}
      {error && 'something went wrong'}
      <h1 className="text-danger">THE PAGE NOT FOUND 404</h1>
    </div>
  );
};

export default Error;

