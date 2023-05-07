import { useEffect, useState } from "react";

import upIcon from "./assets/icon-up.svg";
import downIcon from "./assets/icon-down.svg";

import facebookIcon from "./assets/icon-facebook.svg";
import instagramIcon from "./assets/icon-instagram.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import youtubeIcon from "./assets/icon-youtube.svg";
import shortenNumber from "./common/shortenNumber";

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
		username: "@realnathanf",
		site: {
			name: "twitter",
			icon: twitterIcon,
			followers: 1044,
			followersName: "followers",
			change: {
				direction: "positive",
				amount: 1099,
			},
		},
	},
	{
		id: 3,
		username: "@nathanf",
		site: {
			name: "instagram",
			icon: instagramIcon,
			followers: 11000,
			followersName: "followers",
			change: {
				direction: "positive",
				amount: 99,
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

const overviewCards: {
	id: number;
	title: string;
	icon: string;
	value: number;
	change: { direction: "positive" | "negative"; amount: number };
}[] = [
	{
		id: 1,
		title: "Page Views",
		icon: facebookIcon,
		value: 87,
		change: {
			direction: "positive",
			amount: 3,
		},
	},
	{
		id: 2,
		title: "Likes",
		icon: facebookIcon,
		value: 42,
		change: {
			direction: "negative",
			amount: 2,
		},
	},
	{
		id: 3,
		title: "Likes",
		icon: instagramIcon,
		value: 5462,
		change: {
			direction: "positive",
			amount: 2257,
		},
	},
	{
		id: 4,
		title: "Profile Views",
		icon: instagramIcon,
		value: 52000,
		change: {
			direction: "positive",
			amount: 1375,
		},
	},
	{
		id: 5,
		title: "Retweets",
		icon: twitterIcon,
		value: 117,
		change: {
			direction: "positive",
			amount: 303,
		},
	},
	{
		id: 6,
		title: "Likes",
		icon: twitterIcon,
		value: 507,
		change: {
			direction: "positive",
			amount: 553,
		},
	},
	{
		id: 7,
		title: "Likes",
		icon: youtubeIcon,
		value: 107,
		change: {
			direction: "negative",
			amount: 19,
		},
	},
	{
		id: 8,
		title: "Total Views",
		icon: youtubeIcon,
		value: 1407,
		change: {
			direction: "negative",
			amount: 12,
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
				className={`h-screen overflow-auto transition ${
					darkMode
						? "bg-theme-dark-900 text-theme-dark-text"
						: "bg-theme-light-900 text-theme-light-text"
				} p-6`}
			>
				<div
					className={`absolute inset-x-0 top-0 z-10 h-1/4 transition ${
						darkMode ? "bg-theme-dark-800" : "bg-theme-light-800"
					}`}
				/>
				<div className="container relative z-20 mx-auto">
					<div className="mb-6 flex flex-col mobile:flex-row mobile:items-center">
						<div>
							<h1 className="mb-1 text-2xl font-bold sm:text-3xl">
								Social Media Dashboard
							</h1>
							<p
								className={`font-bold ${
									darkMode
										? "text-theme-dark-text-alt"
										: "text-theme-light-text-alt"
								}`}
							>
								Total Followers: 23,004
							</p>
						</div>
						<div className="mb-5 h-px w-full bg-theme-light-toggle mobile:hidden" />
						<label className="relative mb-8 flex cursor-pointer items-center justify-between mobile:mb-0 mobile:ml-auto">
							<div
								className={`font-bold ${
									darkMode
										? "text-theme-dark-text-alt"
										: "text-theme-light-text-alt"
								} mobile:mr-3`}
							>
								Dark Mode
							</div>
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
					</div>
					<div className="mb-14 grid auto-rows-fr grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{accounts.map((account) => {
							return (
								<div
									className={`relative flex flex-col items-center overflow-hidden rounded-lg transition-[background-color] mobile:w-full ${
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
										<div
											className={`font-bold ${
												darkMode
													? "text-theme-dark-text-alt"
													: "text-theme-light-text-alt"
											}`}
										>
											{account.username}
										</div>
									</div>
									<div
										className="mb-2 text-6xl font-bold"
										title={`${account.site.followers}`}
									>
										{shortenNumber(account.site.followers)}
									</div>
									<div
										className={`mb-4 text-base uppercase ${
											darkMode
												? "text-theme-dark-text-alt"
												: "text-theme-light-text-alt"
										} [letter-spacing:4px]`}
									>
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
										<span title={`${account.site.change.amount}`}>
											{shortenNumber(account.site.change.amount)} Today
										</span>
									</div>
								</div>
							);
						})}
					</div>
					<div>
						<h2
							className={`mb-6 text-2xl font-bold sm:text-3xl ${
								darkMode ? "text-theme-dark-text" : "text-theme-light-text-alt"
							}`}
						>
							Overview - Today
						</h2>
						<div className="grid auto-rows-fr grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
							{overviewCards.map((card) => {
								return (
									<div
										className={`rounded-lg p-6 transition-[background-color] ${
											darkMode ? "bg-theme-dark-700" : "bg-theme-light-700"
										}`}
									>
										<div className="mb-6 flex items-center justify-between">
											<div
												className={`text-base font-bold ${
													darkMode
														? "text-theme-dark-text-alt"
														: "text-theme-light-text-alt"
												}`}
											>
												{card.title}
											</div>
											<div>
												<img
													className="w-6"
													src={card.icon}
													alt="social media icon"
												/>
											</div>
										</div>
										<div className="flex items-end justify-between">
											<div
												className="text-4xl font-bold"
												title={`${card.value}`}
											>
												{shortenNumber(card.value)}
											</div>
											<div className="flex items-center">
												<div className="mr-2">
													<img
														className="w-3"
														src={
															card.change.direction === "positive"
																? upIcon
																: downIcon
														}
														alt={
															card.change.direction === "positive"
																? "chevron up"
																: "chevron down"
														}
													/>
												</div>
												<span className="font-bold">{card.change.amount}%</span>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
