import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  ignoredRoutes: [
    "/",
    "/contactUs",
    "/privacy-policy",
    "/TermsandCondition",
    "/api/webhooks/clerk",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
