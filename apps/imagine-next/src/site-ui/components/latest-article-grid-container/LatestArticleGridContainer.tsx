import React from 'react';
import DayJS from 'dayjs';
import Link from 'next/Link';
import {LatestArticleContainerProps} from './LatestArticleGridContainer.types';
import {
  LatestArticleGridContainerElement,
  LatestArticleImage,
} from './LatestArticleGridContainer.styled';
import {DATE_FORMAT} from '@imagine-cms/web';

export function LatestArticleContainer({article}: LatestArticleContainerProps) {
  return (
    <Link href={`/articles/${article.id}`}>
      <LatestArticleGridContainerElement>
        <div style={{flex: 1}}>
          <LatestArticleImage src={article.imageURL} />
        </div>
        <div style={{flex: 4}}>
          <h3>{article.name}</h3>
          <span>{DayJS.unix(article.createdAt).format(DATE_FORMAT)}</span>
          <span>{article.description}</span>
        </div>
      </LatestArticleGridContainerElement>
    </Link>
  );
}
