import { RankListScreen } from "../../site-ui/screens/rank-list-screen/RankListScreen";

import React from 'react';
import { UserGuard } from "@imagine-cms/web";

export default function Page() {
    return (
        <UserGuard redirect>
            <RankListScreen />
        </UserGuard>
    )
}