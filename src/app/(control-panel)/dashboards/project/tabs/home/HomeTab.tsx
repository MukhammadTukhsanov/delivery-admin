import { motion } from 'motion/react';
import FeaturesWidget from './widgets/FeaturesWidget';
import GithubIssuesWidget from './widgets/GithubIssuesWidget';
import IssuesWidget from './widgets/IssuesWidget';
import OverdueWidget from './widgets/OverdueWidget';
import SummaryWidget from './widgets/SummaryWidget';

/**
 * The HomeTab component.
 */
function HomeTab() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full min-w-0 py-6 px-6 md:px-8'
      variants={container}
      initial='hidden'
      animate='show'
    >
      <motion.div variants={item}>
        <SummaryWidget />
      </motion.div>
      <motion.div variants={item}>
        <OverdueWidget />
      </motion.div>
      <motion.div variants={item}>
        <IssuesWidget />
      </motion.div>
      <motion.div variants={item}>
        <FeaturesWidget />
      </motion.div>
      <motion.div variants={item} className='sm:col-span-2 md:col-span-4'>
        <GithubIssuesWidget />
      </motion.div>
      <motion.div variants={item} className='sm:col-span-2 md:col-span-4 lg:col-span-2'>
        {/* <TaskDistributionWidget /> */}
      </motion.div>
      <motion.div variants={item} className='sm:col-span-2 md:col-span-4 lg:col-span-2'>
        {/* <ScheduleWidget /> */}
      </motion.div>
    </motion.div>
  );
}

export default HomeTab;
