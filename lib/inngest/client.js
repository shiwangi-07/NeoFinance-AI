import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "welth",
  name: "welth",
  retryFunction: async (attempt) => ({
    dellay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
