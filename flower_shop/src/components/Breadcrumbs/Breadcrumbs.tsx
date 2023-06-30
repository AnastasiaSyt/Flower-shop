import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.scss';

interface BreadcrumbsProps {
  category: string;
  title: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ category, title }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((pathname) => pathname);

  return (
    <div className="breadcrumbs">
      <Link to="/">Главная</Link>
      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <React.Fragment key={routeTo}>
            <span>{' > '}</span>
            {isLast ? (
              <span>{title}</span>
            ) : (
              <Link to={routeTo}>{index === 1 ? category : pathname}</Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
