import { lazy } from 'react';

const DeferredFunds = lazy(() => import('modules/pages/DeferredFunds/DeferredFunds'));
const FundAllocation = lazy(() => import('modules/pages/FundAllocation/FundAllocation'));

export { DeferredFunds, FundAllocation };
