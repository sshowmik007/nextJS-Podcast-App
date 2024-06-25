"use client";

import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

const ConvexClerkProvider = ({ children }) => (
	<ClerkProvider
		publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
		appearance={{
			layout: {
				socialButtonsVariant: "iconButton",
				logoImageUrl: "/icons/auth-logo.svg",
			},
			variables: {
				colorBackground: "#15171c",
				colorPrimary: "",
				colorText: "white",
				colorInputBackground: "#1b1f29",
				colorInputText: "white",
			},
		}}
	>
		<ConvexProviderWithClerk client={convex} useAuth={useAuth}>
			{children}
		</ConvexProviderWithClerk>
	</ClerkProvider>
);

export default ConvexClerkProvider;
