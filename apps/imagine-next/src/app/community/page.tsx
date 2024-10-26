import { CommunityScreen } from "../../site-ui/screens/community-screen/CommunityScreen";

import React from 'react';
import { UserGuard } from "@imagine-cms/web";

export default function Page() {
    return (
        <UserGuard redirect>
            <CommunityScreen />
        </UserGuard>
    )
}