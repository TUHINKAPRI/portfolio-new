import React, { Suspense } from "react";
const Main = React.lazy(() => import("./components/Main/Main"));
const Loading = React.lazy(() => import("./components/Loading/Loading"));
const MainLayout = React.lazy(() => import("./Layout/MainLayout"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <Main />
      </MainLayout>
    </Suspense>
  );
}

export default App;
