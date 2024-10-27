'use client';
import React, {useEffect, useState} from 'react';
import {ButtonClear} from '../button/Button.remix';
import {useArticleFetchMany} from '@imagine-cms/client';
import {GridLarge} from '../grid/Grid.remix';
import {LatestArticlesGridProps} from './LatestArticlesGrid.types';
import {LatestArticleContainer} from '../latest-article-grid-container/LatestArticleGridContainer';
import {LatestArticleContainerMock} from '../latest-article-grid-container/LatestArticleContainer.mock';

const ARTICLES_PAGE_SIZE = 6;

export function LatestArticlesGrid({
  showHeader = true,
}: LatestArticlesGridProps) {
  const [page, setPage] = useState(0);
  const fetchArticles = useArticleFetchMany();
  const canGoUp = (fetchArticles?.data?.length ?? 0) >= ARTICLES_PAGE_SIZE;

  const canGoDown = page > 0;

  const goUpOnePage = () => {
    if (!canGoUp) {
      return;
    }
    setPage(_ => _ + 1);
  };

  const goBackOnePage = () => {
    if (!canGoDown) {
      return;
    }
    setPage(_ => _ - 1);
  };

  useEffect(() => {
    fetchArticles.fetch({
      skip: page * ARTICLES_PAGE_SIZE,
      limit: ARTICLES_PAGE_SIZE,
    });
  }, [page]);

  return (
    <>
      {showHeader && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h1>News Articles</h1>
          {page > 0 && <h2>Page {page + 1}</h2>}
        </div>
      )}
      <GridLarge>
        {fetchArticles.loading && (
          <>
            <LatestArticleContainerMock />
          </>
        )}
        {fetchArticles.data?.map(_ => (
          <LatestArticleContainer article={_} key={`latest_article_${_.id}`} />
        ))}
      </GridLarge>
      <GridLarge style={{marginTop: 16}}>
        {canGoDown ? (
          <ButtonClear onClick={goBackOnePage}>
            <i
              className={
                fetchArticles.loading
                  ? 'fa fa-spinner fa-spin'
                  : 'fa fa-arrow-left'
              }
            />
          </ButtonClear>
        ) : (
          <div />
        )}
        {canGoUp && (
          <ButtonClear onClick={goUpOnePage}>
            <i
              className={
                fetchArticles.loading
                  ? 'fa fa-spinner fa-spin'
                  : 'fa fa-arrow-right'
              }
            />
          </ButtonClear>
        )}
      </GridLarge>
    </>
  );
}
