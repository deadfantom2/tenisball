import { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ history, children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history, pathname]);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);
