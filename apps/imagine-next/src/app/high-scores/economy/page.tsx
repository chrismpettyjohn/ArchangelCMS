import { HighScoresEconomyScreen } from "../../../site-ui/screens/high-scores-economy-screen/HighScoresEconomyScreen";

import React from 'react';
import { UserGuard } from "@imagine-cms/web";

export default function Page() {
    return (
        <UserGuard redirect>
            <HighScoresEconomyScreen />
        </UserGuard>
    )
}