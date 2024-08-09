import { Routes, Route } from "react-router-dom";

// Base Components
import CompanyHeader from './components/company/CompanyHeader';
import StudentHeader from './components/student/StudentHeader';

// Views Components
    // Company
    import IndexView from './views/IndexView';
    import LoginView from './views/modules/Users/LoginView';
    import RegisterView from './views/modules/Users/RegisterView';
    import ForgotPasswordView from './views/modules/Users/ForgotPasswordView';

    // Student
    import DashboardView from './views/modules/DashboardView';
    import GamesGalleryView from "./views/modules/Games/GamesGalleryView";
    import PersonalBudgetView from "./views/modules/PersonalBudget/PersonalBudgetView";
    import HelpView from "./views/modules/Help/HelpView";
    import ProfileView from "./views/modules/Profile/ProfileView";

// Not Found
import NotFoundView from "./views/NotFoundView";

function Router () {
    return (
        <Routes>
            {/* Company Views */}
            <Route path="/" element={<CompanyHeader />}>
                {/* Index View */}
                <Route index element={<IndexView />} />

                {/* Login View */}
                <Route path="login" element={<LoginView />} />

                {/* Register View */}
                <Route path="register" element={<RegisterView />} />

                {/* Forgot Password View */}
                <Route path="forgot-password" element={<ForgotPasswordView />} />

                <Route path="profile" element={<ProfileView />} />

                <Route path="student" element={<DashboardView />} /> 
            </Route>

            {/* Student Views */}
            {/* <Route path="student/*" element={<StudentHeader />}> */}
                {/* Dashboard View */}
                {/* <Route index element={<DashboardView />} /> */}

                {/* Games Gallery View */}
                <Route path="games" element={<GamesGalleryView />} />

                {/* Personal Budget View */}
                <Route path="personal-budget" element={<PersonalBudgetView />} />

                {/* Help View */}
                <Route path="help" element={<HelpView />} />

                {/* Profile View */}
                <Route path="profile" element={<ProfileView />} />
            {/* </Route> */}
            {/* Not Found */}
            <Route path="*" element={<NotFoundView />} />
        </Routes>
    );
}

export default Router;
