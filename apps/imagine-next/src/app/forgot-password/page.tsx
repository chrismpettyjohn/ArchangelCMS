import { ForgotPasswordScreen } from "../../site-ui/screens/forgot-password-screen/ForgotPasswordScreen";

import React from 'react';
import { UserGuard } from "@imagine-cms/web";

export default function Page() {
    return (
        <UserGuard redirect>
            <ForgotPasswordScreen />
        </UserGuard>
    )
}