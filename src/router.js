import { Routes, Route } from "react-router-dom";

// Lazy loading optimization
import { lazy, Suspense } from "react";

// Views Components
    // Index
    const IndexView = lazy(() => import("./views/IndexView"));
    
    // Glosary
    const GlosaryView = lazy(() => import("./views/GlosaryView"));

        // Basic Concepts
        const BasicConceptsView = lazy(() => import("./views/Glosary/BasicConceptsView.jsx"));

        // Financial Entities
        const FinancialEntitiesView = lazy(() => import("./views/Glosary/FinancialEntitiesView.jsx"));

        // Financial Attitudes
        const FinancialAttitudesView = lazy(() => import("./views/Glosary/FinancialAttitudesView.jsx"));

    // // Connect And Learn
    const ConnectAndLearnView = lazy(() => import("./views/ConnectAndLearnView.jsx"));

    // Financial Supervivence
    const FinancialSupervivenceView = lazy(() => import("./views/FinancialSupervivenceView"));

    // Buy and Save
    const BuyAndSaveView = lazy(() => import("./views/BuyAndSaveView.jsx"));
        
// Not Found
const NotFoundView = lazy(() => import("./views/other/NotFoundView"));

// Loading
const LoadingView = lazy(() => import("./views/other/LoadingView"));

function Router () {
    return (
        <Routes>
            <Route path="/">
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

            {/* Glosary Views */}
            <Route path="glosario/*">
                <Route 
                    index
                    element={
                        <Suspense fallback={<LoadingView />}>
                            <GlosaryView />
                        </Suspense>   
                    }
                />
                <Route 
                    path="conceptos-basicos"
                    element={
                        <Suspense fallback={<LoadingView />}>
                            <BasicConceptsView />
                        </Suspense>   
                    }
                />
                <Route 
                    path="entidades-financieras"
                    element={
                        <Suspense fallback={<LoadingView />}>
                            <FinancialEntitiesView />
                        </Suspense>   
                    }
                />
                <Route 
                    path="actitudes-financieras"
                    element={
                        <Suspense fallback={<LoadingView />}>
                            <FinancialAttitudesView />
                        </Suspense>   
                    }
                />
            </Route>
        
            {/* Games Views */}
            <Route path="juegos/*">
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
                <Route 
                    path="compra-y-ahorra"
                    element={
                        <Suspense fallback={<LoadingView />}>
                            <BuyAndSaveView />
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
