import { ProfileScreen } from "../../../site-ui/screens/profile-screen/ProfileScreen";

import React from 'react';
import { UserGuard } from "@imagine-cms/web";

export default function Page() {
    return (
        <UserGuard redirect>
            <ProfileScreen />
        </UserGuard>
    )
}