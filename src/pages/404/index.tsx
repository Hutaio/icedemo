import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import NotFound from './components/NotFound';

const { Cell } = ResponsiveGrid;

const FeedbackNotFound = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="404页面"
          breadcrumbs={[
            { name: '404页面' },
          ]}
        />
      </Cell>

      <Cell colSpan={12}>
        <NotFound />
      </Cell>
    </ResponsiveGrid>
  );
};

export default FeedbackNotFound;
