import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  ignoredRoutes: [
    "/",
    "/contactUs",
    "/Appointment",
    "/Doctors/:path*",
    "/faq",
    "/Gallery",
    "/Pathtest/:path*",
    "/Testimonials",
    "/privacy-policy",
    "/TermsandCondition",
    "/api/webhooks/clerk",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
