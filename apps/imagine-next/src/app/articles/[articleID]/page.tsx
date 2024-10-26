import { ArticleViewScreen } from '../../../site-ui/screens/article-view-screen/ArticleViewScreen';

import React from 'react';
import { UserGuard } from "@imagine-cms/web";

export default function Page() {
    return (
        <UserGuard redirect>
            <ArticleViewScreen />
        </UserGuard>
    )
}