import { useEffect, useState } from "react";

import upIcon from "./assets/icon-up.svg";
import downIcon from "./assets/icon-down.svg";

import facebookIcon from "./assets/icon-facebook.svg";
import instagramIcon from "./assets/icon-instagram.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import youtubeIcon from "./assets/icon-youtube.svg";

type Account = {
	id: number;
	username: string;
	site: {
		name: "facebook" | "instagram" | "twitter" | "youtube";
		icon: string;
		followers: number;
		followersName: string;
		change: {
			direction: "positive" | "negative";
			amount: number;
		};
	};
};

const accounts: Account[] = [
	{
		id: 1,
		username: "@nathanf",
		site: {
			name: "facebook",
			icon: facebookIcon,
			followers: 1987,
			followersName: "followers",
			change: {
				direction: "positive",
				amount: 12,
			},
		},
	},
	{
		id: 2,
		username: "@nathanf",
		site: {
			name: "instagram",
			icon: instagramIcon,
			followers: 1044,
			followersName: "followers",
			change: {
				direction: "positive",
				amount: 99,
			},
		},
	},
	{
		id: 3,
		username: "@realnathanf",
		site: {
			name: "twitter",
			icon: twitterIcon,
			followers: 11000,
			followersName: "followers",
			change: {
				direction: "positive",
				amount: 1099,
			},
		},
	},
	{
		id: 4,
		username: "Nathan F.",
		site: {
			name: "youtube",
			icon: youtubeIcon,
			followers: 8239,
			followersName: "subscribers",
			change: {
				direction: "negative",
				amount: 144,
			},
		},
	},
];

function App() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		setDarkMode(prefersDark);
	}, []);

	return (
		<>
			<main
				className={`container mx-auto h-screen overflow-auto transition ${
					darkMode
						? "bg-theme-dark-900 text-theme-dark-text"
						: "bg-theme-light-900 text-theme-light-text"
				} p-6`}
			>
				<h1 className="text-theme-light mb-1 text-2xl font-bold">
					Social Media Dashboard
				</h1>
				<p className="font-bold text-theme-light-text-alt">
					Total Followers: 23,004
				</p>
				<div className="mb-5 mt-6 h-px w-full bg-theme-light-toggle" />
				<label className="relative mb-8 flex cursor-pointer items-center justify-between">
					<div className="font-bold text-theme-light-text-alt">Dark Mode</div>
					<input
						className="sr-only"
						type="checkbox"
						checked={darkMode}
						onChange={() => {
							setDarkMode(!darkMode);
						}}
					/>
					<div
						className={`relative h-7 w-14 rounded-full ${
							darkMode
								? "bg-gradient-to-r from-theme-dark-toggle-lg-from to-theme-dark-toggle-lg-to"
								: "bg-theme-light-toggle"
						}`}
					>
						<div
							className={`absolute ${
								darkMode
									? "left-1 bg-theme-dark-700"
									: "translate-x-8 bg-theme-light-900"
							} my-1 h-5 w-5 rounded-full transition`}
						/>
					</div>
				</label>
				<div className="flex flex-col gap-8">
					{accounts.map((account) => {
						return (
							<div
								className={`relative flex flex-col items-center overflow-hidden rounded-lg ${
									darkMode ? "bg-theme-dark-700" : "bg-theme-light-700"
								} p-4 before:absolute before:left-0 before:top-0 before:h-2 before:w-full ${
									account.site.name === "facebook"
										? "before:bg-facebook"
										: account.site.name === "instagram"
										? "before:bg-gradient-to-r before:from-instagram-lg-from before:to-instagram-lg-to"
										: account.site.name === "twitter"
										? "before:bg-twitter"
										: account.site.name === "youtube"
										? "before:bg-youtube"
										: ""
								}`}
								key={account.id}
							>
								<div className="my-6 flex items-center gap-2">
									<img
										className="w-6"
										src={account.site.icon}
										alt="social media icon"
									/>
									<div className="font-bold text-theme-light-text-alt">
										{account.username}
									</div>
								</div>
								<div className="mb-2 text-6xl font-bold">
									{account.site.followers}
								</div>
								<div className="mb-4 text-base uppercase text-theme-light-text-alt [letter-spacing:4px]">
									{account.site.followersName}
								</div>
								<div
									className={`mb-2 flex items-center font-bold ${
										account.site.change.direction === "positive"
											? "text-lime-green"
											: "text-bright-red"
									}`}
								>
									<div className="mr-2">
										<img
											className="w-3"
											src={
												account.site.change.direction === "positive"
													? upIcon
													: downIcon
											}
											alt={
												account.site.change.direction === "positive"
													? "chevron up"
													: "chevron down"
											}
										/>
									</div>
									<span>{account.site.change.amount} Today</span>
								</div>
							</div>
						);
					})}
				</div>
			</main>
		</>
	);
}

export default App;
