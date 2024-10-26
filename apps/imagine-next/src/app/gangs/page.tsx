import { GangListScreen } from "../../site-ui/screens/gang-list-screen/GangListScreen";

import React from 'react';
import { UserGuard } from "@imagine-cms/web";

export default function Page() {
    return (
        <UserGuard redirect>
            <GangListScreen />
        </UserGuard>
    )
}