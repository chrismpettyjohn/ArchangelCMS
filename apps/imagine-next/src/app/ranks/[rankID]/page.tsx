import { RankViewScreen } from "../../../site-ui/screens/rank-view-screen/RankViewScreen";

import React from 'react';
import { UserGuard } from "@imagine-cms/web";

export default function Page() {
    return (
        <UserGuard redirect>
            <RankViewScreen />
        </UserGuard>
    )
}