import { Routes, Route } from "react-router-dom";

// Base Components
import Header from "./components/Header";

// Lazy loading optimization
import { lazy, Suspense } from "react";

// Views Components
const IndexView = lazy(() => import("./views/IndexView"));

// Not Found
const NotFoundView = lazy(() => import("./views/other/NotFoundView"));

// Loading
const LoadingView = lazy(() => import("./views/other/LoadingView"));

function Router () {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                {/* Index View */}
                <Route 
                    index 
                    element={
                        <Suspense fallback={<LoadingView />}>
                            <IndexView />
                        </Suspense>   
                    } 
                />
            </Route>

            {/* Not Found */}
            <Route path="*" element={<NotFoundView />} />
        </Routes>
    );
}

export default Router;
