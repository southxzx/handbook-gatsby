import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main>
        <div className="container mx-auto pt-10">
          <div className="max-w-screen-sm mx-auto">{children}</div>
        </div>
      </main>
      <div className="mt-auto bg-extraLight p-3">
        <div className="max-w-screen-sm flex items-center justify-between mx-auto font-light text-sm text-grey">
          <p>@southxzx</p>
          <p>2023</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
