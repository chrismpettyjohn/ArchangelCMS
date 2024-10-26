import { BadgeViewScreen } from "../../../site-ui/screens/badge-view-screen/BadgeViewScreen";

import React from 'react';
import { UserGuard } from "@imagine-cms/web";

export default function Page() {
    return (
        <UserGuard redirect>
            <BadgeViewScreen />
        </UserGuard>
    )
}