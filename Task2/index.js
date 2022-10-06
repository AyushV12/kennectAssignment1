let leaderboard = await sequelize.query(`select u.id, u.name, u.email, u.company, u.mobile, subQ.accuracy, u.created_at
                from (select l.user_id, max(l.accuracy) as accuracy FROM public.campaign_user_exercise_history l group by user_id) subQ 
                left join public.campaign_users u on u.id = subQ.user_id
                where u.is_anonymous = false and u.campaign_id = ? and u.is_deleted = false
                order by accuracy desc, u.created_at desc;`, {
                replacements: [campaignId],
                type: sequelize.SELECT,
            });