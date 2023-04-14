import React, { Suspense, lazy } from "react";

const Home = lazy(() => import('./Home'));

function LazyLoading() {
  return (
      <div>
          <h1>Lazy Loading</h1>
      <Suspense fallback={<div>please wait...</div>}>
        
        <Home />
      </Suspense>
    </div>
  );
}

export default LazyLoading;
