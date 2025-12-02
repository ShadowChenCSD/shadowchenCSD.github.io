// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 14,
		title: "英雄世界",
		imgurl: "/links/heroes.jpg",
		desc: "英雄无敌主题网站",
		siteurl: "http://heroworld.gamerhome.com",
		tags: ["英雄无敌"],
	},
	{
		id: 13,
		title: "YGO token",
		imgurl: "/links/yugioh.png",
		desc: "游戏王卡牌工具站，包括：卡片查询、高清卡图、卡片DIY等内容",
		siteurl: "http://www.ygotoken.com",
		tags: ["游戏王"],
	},	
	{
		id: 12,
		title: "Bangumi番组计划",
		imgurl: "/links/bangumi.png",
		desc: "由Sai发起的ACG分享与交流项目",
		siteurl: "https://bgm.tv",
		tags: ["动画", "书籍", "游戏", "音乐"],
	},
	{
		id: 11,
		title: "TMDB",
		imgurl: "/links/TMDB.svg",
		desc: "记录电影、电视剧、演员的信息的在线数据库",
		siteurl: "https://www.themoviedb.org",
		tags: ["电影", "电视剧", "演员"],
	},
	{
		id: 10,
		title: "civitai",
		imgurl: "/links/civitai.svg",
		desc: "AI绘图模型，国际站点",
		siteurl: "https://www.civitai.com",
		tags: ["AIGC", "AI绘图"],
	},
	{
		id: 9,
		title: "LibLibAI",
		imgurl: "/links/LibLibAI.png",
		desc: "在线训练，在线推理，下载模型，国内首选",
		siteurl: "https://www.liblib.art",
		tags: ["AIGC", "AI绘图"],
	},
	{
		id: 8,
		title: "civitai中文网",
		imgurl: "/links/CVAI.png",
		desc: "图片分类较为准确，有大量精美例图可以参考",
		siteurl: "https://civitai.me",
		tags: ["AIGC", "AI绘图"],
	},
	{
		id: 7,
		title: "TusiArt",
		imgurl: "/links/tusiart.png",
		desc: "可以参考作品进行在线AI绘图",
		siteurl: "https://tusi.cn",
		tags: ["AIGC", "AI绘图"],
	},
	{
		id: 6,
		title: "魔搭社区",
		imgurl: "/links/modelscope.png",
		desc: "AI模型下载站点",
		siteurl: "https://modelscope.cn",
		tags: ["AIGC", "AIGC开源社区"],
	},
	{
		id: 5,
		title: "HF-mirror",
		imgurl: "/links/huggingface.svg",
		desc: "HuggingFace的国内镜像站点",
		siteurl: "https://hf-mirror.com",
		tags: ["AIGC", "AIGC开源社区"],
	},
	{
		id: 4,
		title: "Jenkins",
		imgurl: "/links/jenkins.png",
		desc: "自动化部署工具",
		siteurl: "https://www.jenkins.io",
		tags: ["自动化测试"],
	},
	{
		id: 3,
		title: "Fuwari博客·预览",
		imgurl: "/links/Fuwari.webp",
		desc: "Demo预览",
		siteurl: "https://fuwari.vercel.app",
		tags: ["博客"],
	},
	{
		id: 2,
		title: "Mizuki博客·手册",
		imgurl: "https://docs.mizuki.mysqil.com/youxi.png",
		desc: "用户手册",
		siteurl: "https://docs.mizuki.mysqil.com",
		tags: ["博客"],
	},
	{
		id: 1,
		title: "Mizuki博客·预览",
		imgurl: "https://mizuki.mysqil.com/_astro/avatar.R2AjA_4H_1KGaVs.webp",
		desc: "Demo预览",
		siteurl: "https://mizuki.mysqil.com",
		tags: ["博客"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
