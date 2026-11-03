import type { User } from '#database/schema';
import { eq } from 'drizzle-orm';
import { logger, useLogger } from 'nuxt/kit';
import { db } from '#database/db';
import { oAuthUsers, users } from '#database/schema';

export default defineOAuthGitHubEventHandler({
  config: {
    emailRequired: true,
  },
  async onSuccess(event, { user: githubUser }) {
    const logger = useLogger('oauth-github');
    let newUser: User | undefined;
    if (githubUser.email) {
      newUser = await db.select().from(users).where(eq(users.email, githubUser.email)).get();

      if (!newUser) {
        newUser = await db.insert(users).values({
          email: githubUser.email,
          name: githubUser.name ?? githubUser.login,
          avatarUrl: githubUser.avatar_url,
        }).returning().get();
      }

      const oAUthUser = await db.select().from(oAuthUsers).where(eq(oAuthUsers.id, newUser.id)).get();

      if (!oAUthUser) {
        await db.insert(oAuthUsers).values({
          id: newUser.id,
          providerId: 'github',
          providerUserId: `${githubUser.id}`,
        });
      }
      await setUserSession(event, {
        user: {
          githubId: githubUser.id,
        },

      });
      logger.log('Login successful for user id: ', newUser.id);
    }
    return sendRedirect(event, '/');
  },
  onError(event, error) {
    // TODO: Add logging utils
    logger.error('GitHub OAuth error: ', error);
    return sendRedirect(event, '/');
  },
});
