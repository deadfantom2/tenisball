const { CronJob } = require('cron');
const { sendClientMail } = require('./mail');
const User = require('../models/User');

// CRON Reports 0-15 0-3 0-1
const cronReports = new CronJob(
  '0 0 0-7 * * *',
  async (res) => {
    console.log('CRON is started !');

    const usersBeforeReports = await User.find({
      isReported: false,
      totalReports: { $gte: 50 },
    });
    await usersBeforeReports.map(async (user) => {
      const body = {
        isCanWrite: false,
        isReported: true,
        totalReports: 0,
        reportsTime: Date.now(),
      };
      await User.findOneAndUpdate({ _id: user._id }, body);
      await sendClientMail(
        user.email,
        'Permission rules - comments',
        user.name,
        `your account has been modify, you can't post some comment for 1 day!`,
        res
      );
    });

    const usersAfterReports = await User.find({
      isReported: true,
      totalReports: { $eq: 0 },
    });
    usersAfterReports.map(async (user) => {
      const body = {
        isCanWrite: true,
        isReported: false,
        reportsTime: null,
      };
      // 86 400 000 => one day in MS
      if (new Date() - user.reportsTime > 86400000) {
        await User.findOneAndUpdate({ _id: user._id }, body);
        await sendClientMail(
          user.email,
          'Permission rules - comments',
          user.name,
          `your account has been modify, you can post some comment!`,
          res
        );
      }
    });
  },
  function () {
    /* This function is executed when the job stops */
    console.log('CRON is stoped !');
  },
  true /* Start the job right now */
  /* Time zone of this job. */
);

module.exports = cronReports;
