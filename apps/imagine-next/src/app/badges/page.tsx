import { BadgeListScreen } from "../../site-ui/screens/badge-list-screen/BadgeListScreen";

import React from 'react';
import { UserGuard } from "@imagine-cms/web";

export default function Page() {
    return (
        <UserGuard redirect>
            <BadgeListScreen />
        </UserGuard>
    )
}