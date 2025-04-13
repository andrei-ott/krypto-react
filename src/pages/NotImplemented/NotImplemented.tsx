import { useEffect } from 'react';

function NotImplemented() {
  useEffect(() => {
    const root = document.getElementsByTagName('html')[0];
    root.classList.add('not-implemented-page');

    return () => {
      root.classList.remove('not-implemented-page');
    };
  }, []);

  return (
    <div className="page pb-15">
      <h1>Page is not implemented</h1>
    </div>
  );
}

export default NotImplemented;
