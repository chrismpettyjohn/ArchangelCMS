import { GangViewScreen } from "../../../site-ui/screens/gang-view-screen/GangViewScreen";

import React from 'react';
import { UserGuard } from "@imagine-cms/web";

export default function Page() {
    return (
        <UserGuard redirect>
            <GangViewScreen />
        </UserGuard>
    )
}