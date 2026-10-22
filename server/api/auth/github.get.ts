import { eq } from 'drizzle-orm';
import { db } from '#database/db';
import { oAuthUsers } from '#database/schema';

export default defineOAuthGitHubEventHandler({
  config: {
    emailRequired: true,
  },
  async onSuccess(event, { user }) {
    let newUser;
    if (user.email) {
      newUser = await db.select().from(oAuthUsers).where(eq(oAuthUsers.email, user.email)).get();

      if (!newUser) {
        newUser = await db.insert(oAuthUsers).values({ email: user.email, name: user.name, avatarUrl: user.avatar_url }).returning().get();
      }
      await setUserSession(event, {
        user: {
          githubId: user.id,
        },

      });
    }
    return sendRedirect(event, '/');
  },
  onError(event, error) {
    // TODO: Add logging utils
    console.log('GitHub OAuth error: ', error);
    return sendRedirect(event, '/');
  },
});
