import { createAuthClient } from "better-auth/client";
import { customSessionClient } from "better-auth/client/plugins";

import { auth } from "./auth";

export const authClient = createAuthClient({
  plugins: [customSessionClient<typeof auth>()],
});
