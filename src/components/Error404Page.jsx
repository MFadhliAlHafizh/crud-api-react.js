import { useRouteError } from 'react-router-dom';

function Error404Page() {
    const error = useRouteError();

  return (
    <div className="h-screen flex flex-col gap-3 justify-center items-center">
      <h1 className="text-3xl text-slate-800 font-bold">Oops!</h1>
      <p className="text-lg text-slate-700">Sorry, an unexpected error has occured</p>
      <p className="text-lg text-slate-700">{error.statusText || error.message}</p>
    </div>
  );
}

export default Error404Page