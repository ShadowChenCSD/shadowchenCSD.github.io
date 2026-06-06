import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const LOCAL_PLAYLIST: Song[] = [
	{
		id: 1,
		title: "潮鳴り",
		artist: "Key",
		cover: "/assets/music/cover/Clannad.webp",
		url: "/assets/music/url/潮鳴り.mp3",
		duration: 240,
	},
	{
		id: 2,
		title: "回想錄",
		artist: "戶越Magome",
		cover: "/assets/music/cover/Air.webp",
		url: "/assets/music/url/回想錄.mp3",
		duration: 240,
	},
	{
		id: 3,
		title: "夢の跡",
		artist: "Key",
		cover: "/assets/music/cover/Kanon.webp",
		url: "/assets/music/url/夢の跡.mp3",
		duration: 240,
	},
	{
		id: 4,
		title: "汐",
		artist: "Key",
		cover: "/assets/music/cover/Clannad.webp",
		url: "/assets/music/url/汐.mp3",
		duration: 240,
	},
	{
		id: 5,
		title: "夏影",
		artist: "麻枝准",
		cover: "/assets/music/cover/Air.webp",
		url: "/assets/music/url/夏影.mp3",
		duration: 240,
	},
	{
		id: 6,
		title: "桜花抄",
		artist: "天門",
		cover: "/assets/music/cover/秒速5センチメートル.webp",
		url: "/assets/music/url/桜花抄.mp3",
		duration: 240,
	},
	{
		id: 7,
		title: "羽根",
		artist: "折戶伸治",
		cover: "/assets/music/cover/Air.webp",
		url: "/assets/music/url/羽根.mp3",
		duration: 240,
	},
	{
		id: 8,
		title: "渚",
		artist: "Key",
		cover: "/assets/music/cover/Clannad.webp",
		url: "/assets/music/url/渚.mp3",
		duration: 240,
	},
];

export const DEFAULT_SONG: Song = {
	title: "Sample Song",
	artist: "Sample Artist",
	cover: "/favicon/favicon.ico",
	url: "",
	duration: 0,
	id: 0,
};

export const DEFAULT_METING_API =
	"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
