import { Routes, Route } from "react-router-dom";

// Base Components
import Header from "./components/Header";

// Lazy loading optimization
import { lazy, Suspense } from "react";

// Views Components
    // Index
    const IndexView = lazy(() => import("./views/IndexView"));

    // Games
    const GamesView = lazy(() => import("./views/GamesView"));

    // Glosary
    const GlosaryView = lazy(() => import("./views/GlosaryView"));

    // // Connect And Learn
    const ConnectAndLearnView = lazy(() => import("./views/ConnectAndLearnView.jsx"));

    // Financial Supervivence
    const FinancialSupervivenceView = lazy(() => import("./views/FinancialSupervivenceView"));
        
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

            {/* Games Views */}
            <Route path="juegos/*" element={<Header />}>
                <Route 
                    index
                    element={
                        <Suspense fallback={<LoadingView />}>
                            <GamesView />
                        </Suspense>   
                    }
                />
                <Route 
                    path="glosario"
                    element={
                        <Suspense fallback={<LoadingView />}>
                            <GlosaryView />
                        </Suspense>   
                    }
                />
                <Route 
                    path="conecta-y-aprende"
                    element={
                        <Suspense fallback={<LoadingView />}>
                            <ConnectAndLearnView />
                        </Suspense>   
                    }
                />
                <Route 
                    path="supervivencia-financiera"
                    element={
                        <Suspense fallback={<LoadingView />}>
                            <FinancialSupervivenceView />
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
