// 本地游戏数据配置
export interface GameItem {
	title: string;
	status: "playing" | "completed" | "planned" | "onhold" | "dropped";
	rating: number;
	cover: string;
	description: string;
	actor: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
}

const localGameList: GameItem[] = [
	{
		title: "NieR:Automata",
		status: "completed",
		rating: 9.8,
		cover: "/images/albums/AcgExample/cover.webp",
		description: "在残破世界里寻找自我与情感的动作 RPG。",
		actor: "PlatinumGames",
		year: "2017",
		genre: ["Action RPG", "Story Rich"],
		studio: "PC / PS4 / Switch",
		link: "",
	},
	{
		title: "Hollow Knight",
		status: "playing",
		rating: 9.6,
		cover: "/images/albums/AcgExample/1.webp",
		description: "深入圣巢，探索孤独、危险却迷人的地下王国。",
		actor: "Team Cherry",
		year: "2017",
		genre: ["Metroidvania", "Soulslike"],
		studio: "PC / Switch / PS4",
		link: "https://store.steampowered.com/app/367520/Hollow_Knight/",
	},
	{
		title: "Blue Archive",
		status: "planned",
		rating: 8.9,
		cover: "/images/albums/AcgExample/2.webp",
		description: "轻松校园与战术战斗交织的青春冒险。",
		actor: "NEXON Games",
		year: "2021",
		genre: ["RPG", "Gacha", "School"],
		studio: "iOS / Android",
		link: "https://bluearchive-cn.com/",
	},
	{
		title: "Stardew Valley",
		status: "onhold",
		rating: 9.2,
		cover: "/images/albums/AcgExample/3.webp",
		description: "一边种田一边和小镇居民慢慢熟悉起来。",
		actor: "ConcernedApe",
		year: "2016",
		genre: ["Simulation", "Farming"],
		studio: "PC / Switch / Mobile",
		link: "https://www.stardewvalley.net/",
	},
	{
		title: "Cyberpunk 2077",
		status: "dropped",
		rating: 8.4,
		cover: "/images/albums/AcgExample/4.webp",
		description: "夜之城很酷，但我决定先把它放进愿望单角落。",
		actor: "CD PROJEKT RED",
		year: "2020",
		genre: ["Open World", "Sci-Fi"],
		studio: "PC / PS5 / Xbox",
		link: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
	},
];

export default localGameList;
