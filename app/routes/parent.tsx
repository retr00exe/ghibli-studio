import { Outlet } from '@remix-run/react';

const Parent = () => {
  return (
    <div className="p-10">
      <Outlet />
    </div>
  );
};

export default Parent;
