import { Routes, Route } from "react-router-dom";

// Base Components
import CompanyHeader from './components/company/CompanyHeader';
import StudentHeader from './components/student/StudentHeader';

// Lazy loading optimization
import { lazy, Suspense } from "react";

// Views Components
    // Company
    const IndexView = lazy(() => import("./views/IndexView"))
    const LoginView = lazy(() => import("./views/modules/Users/LoginView"))
    const RegisterView = lazy(() => import("./views/modules/Users/RegisterView"))
    const ForgotPasswordView = lazy(() => import("./views/modules/Users/ForgotPasswordView"))

    // Student
    const DashboardView = lazy(() => import("./views/modules/DashboardView"));
    const GamesGalleryView = lazy(() => import("./views/modules/Games/GamesGalleryView"));
    const PersonalBudgetView = lazy(() => import("./views/modules/PersonalBudget/PersonalBudgetView"))
    const HelpView = lazy(() => import("./views/modules/Help/HelpView"))
    const ProfileView = lazy(() => import("./views/modules/Profile/ProfileView"));

// Games View Components
    // Expense or Need
    const ExpenseOrNeedView = lazy(() => import("./views/modules/Games/ExpenseOrNeed/ExpenseOrNeedView"));

    // Memory Concepts
    const MemoryConceptsView = lazy(() => import("./views/modules/Games/MemoryConcepts/MemoryConceptsView"));

// Not Found
const NotFoundView = lazy(() => import("./views/NotFoundView"));

// Loading
const LoadingView = lazy(() => import("./views/LoadingView"));

function Router () {
    return (
        <Routes>
            {/* Company Views */}
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

                {/* Login View */}
                <Route 
                    path="login" 
                    element={
                        <Suspense fallback={<LoadingView />}>
                            <LoginView />
                        </Suspense>   
                    } 
                />

                {/* Register View */}
                <Route 
                    path="register" 
                    element={
                        <Suspense fallback={<LoadingView />}>
                            <RegisterView />
                        </Suspense>   
                    } 
                />

                {/* Forgot Password View */}
                <Route 
                    path="forgot-password" 
                    element={
                        <Suspense fallback={<LoadingView />}>
                            <ForgotPasswordView />
                        </Suspense>   
                    } 
                />
            </Route>

            {/* Student Views */}
            <Route path="student/*" element={<StudentHeader />}>
                {/* Dashboard View */}
                <Route 
                    index 
                    path="dashboard" 
                    element={
                        <Suspense fallback={<LoadingView />}>
                            <DashboardView />
                        </Suspense>   
                    } 
                />

                {/* Games Gallery View */}
                <Route 
                    path="games/*" 
                    element={
                        <Suspense fallback={<LoadingView />}>
                            <GamesGalleryView />
                        </Suspense>   
                    } 
                />
                    
                    {/* Expense or Need - Game View */}
                    <Route 
                        path="games/expense-or-need"
                        element={
                            <Suspense fallback={<LoadingView />}>
                                <ExpenseOrNeedView />
                            </Suspense>   
                        } 
                    />

                    {/* Memory Concepts - Game View */}
                    <Route 
                        path="games/memory-concepts" 
                        element={
                            <Suspense fallback={<LoadingView />}>
                                <MemoryConceptsView />
                            </Suspense>   
                        } 
                    />

                {/* Personal Budget View */}
                <Route 
                    path="personal-budget" 
                    element={
                        <Suspense fallback={<LoadingView />}>
                            <PersonalBudgetView />
                        </Suspense>   
                    } 
                />

                {/* Help View */}
                <Route 
                    path="help" 
                    element={
                        <Suspense fallback={<LoadingView />}>
                            <HelpView />
                        </Suspense>   
                    } 
                />

                {/* Profile View */}
                <Route 
                    path="profile" 
                    element={
                        <Suspense fallback={<LoadingView />}>
                            <ProfileView />
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
