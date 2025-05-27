'use client';

import FuseLoading from '@fuse/core/FuseLoading';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useState } from 'react';
import { useGetProjectDashboardWidgetsQuery } from './ProjectDashboardApi';
import ProjectDashboardAppHeader from './ProjectDashboardAppHeader';
import BudgetTab from './tabs/budget/BudgetTab';
import HomeTab from './tabs/home/HomeTab';
import TeamTab from './tabs/team/TeamTab';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.vars.palette.background.paper,
    boxShadow: `inset 0 -1px 0 0px  ${theme.vars.palette.divider}`,
  },
}));

/**
 * The ProjectDashboardApp page.
 */
function ProjectDashboardApp() {
  const { isLoading } = useGetProjectDashboardWidgetsQuery();

  const [tabValue, setTabValue] = useState('home');

  function handleTabChange(event: React.SyntheticEvent, value: string) {
    setTabValue(value);
  }

  if (isLoading) {
    return <FuseLoading />;
  }

  return (
    <Root
      header={<ProjectDashboardAppHeader />}
      content={
        <div className='w-full pt-4 sm:pt-6'>
          {/* <div className='w-full px-6 md:px-8'>
            <FuseTabs value={tabValue} onChange={handleTabChange} aria-label='New user tabs'>
              <FuseTab value='home' label='Home' />
              <FuseTab value='budget' label='Budget' />
              <FuseTab value='team' label='Team' />
            </FuseTabs>
          </div> */}
          {tabValue === 'home' && <HomeTab />}
          {tabValue === 'budget' && <BudgetTab />}
          {tabValue === 'team' && <TeamTab />}
        </div>
      }
    />
  );
}

export default ProjectDashboardApp;
