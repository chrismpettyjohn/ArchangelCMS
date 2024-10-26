import React from 'react';
import { UserGuard } from "@imagine-cms/web";
import { PlayGameScreen } from "../../site-ui/screens/play-game-screen/PlayGameScreen";

export default function Page() {
    return <UserGuard redirect>
        <PlayGameScreen />
    </UserGuard>
}