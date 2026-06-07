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
		id: 17,
		title: "库街区：鸣潮",
		imgurl: "/links/鸣潮.webp",
		desc: "官方Wiki站点",
		siteurl: "https://wiki.kurobbs.com/mc/home",
		tags: ["游戏", "社区"],
	},
	{
		id: 16,
		title: "英雄世界",
		imgurl: "/links/英雄世界.webp",
		desc: "英雄无敌：主题网站",
		siteurl: "http://heroworld.gamerhome.com",
		tags: ["游戏", "在线数据库"],
	},
	{
		id: 15,
		title: "YGO token",
		imgurl: "/links/游戏王.webp",
		desc: "游戏王：卡牌工具站点",
		siteurl: "http://www.ygotoken.com",
		tags: ["游戏", "在线数据库"],
	},

	{
		id: 14,
		title: "TMDB",
		imgurl: "/links/TMDB.webp",
		desc: "记录电影、电视剧、演员的信息的在线数据库",
		siteurl: "https://www.themoviedb.org",
		tags: ["影视剧", "在线数据库"],
	},
	{
		id: 13,
		title: "Bangumi",
		imgurl: "/links/bangumi.webp",
		desc: "由Sai发起的ACG分享与交流项目",
		siteurl: "https://bgm.tv",
		tags: ["ACGN", "在线数据库", "社区"],
	},
	{
		id: 12,
		title: "pixiv",
		imgurl: "/links/pixiv.webp",
		desc: "插画社交网站，需要科学上网",
		siteurl: "https://www.pixiv.net",
		tags: ["插画", "科学上网", "社区"],
	},
	{
		id: 11,
		title: "TusiArt",
		imgurl: "/links/吐司.webp",
		desc: "国内AI绘图站点，可以参考作品进行AI绘图",
		siteurl: "https://tusi.cn",
		tags: ["AIGC绘图", "开源大模型站点"],
	},
	{
		id: 10,
		title: "civitai中文网",
		imgurl: "/links/CVAI.webp",
		desc: "国内AI绘图站点，图片分类较为准确",
		siteurl: "https://civitai.me",
		tags: ["AIGC绘图", "开源大模型站点"],
	},
	{
		id: 9,
		title: "civitai",
		imgurl: "/links/civitai.svg",
		desc: "AI绘图模型站点，需要科学上网",
		siteurl: "https://www.civitai.com",
		tags: ["AIGC绘图", "开源大模型站点", "科学上网"],
	},
	{
		id: 8,
		title: "魔搭社区",
		imgurl: "/links/modelscope.png",
		desc: "国内开源大模型站点，提供前沿的AI模型，更新速度慢于HuggingFace",
		siteurl: "https://modelscope.cn",
		tags: ["开源大模型站点"],
	},
	{
		id: 7,
		title: "HF-mirror",
		imgurl: "/links/huggingface.svg",
		desc: "HuggingFace的国内镜像站点，提供前沿的AI模型",
		siteurl: "https://hf-mirror.com",
		tags: ["开源大模型站点"],
	},
	{
		id: 6,
		title: "HuggingFace",
		imgurl: "/links/huggingface.svg",
		desc: "国际开源大模型站点，提供前沿的AI模型",
		siteurl: "https://huggingface.co",
		tags: ["开源大模型站点", "科学上网"],
	},
	{
		id: 5,
		title: "动手学·深度学习",
		imgurl: "/links/动手学·深度学习.webp",
		desc: "介绍如何使用深度学习技术解决实践中的问题",
		siteurl: "https://zh.d2l.ai",
		tags: ["深度学习", "书籍"],
	},
	{
		id: 4,
		title: "深度学习",
		imgurl: "/links/深度学习.webp",
		desc: "深度学习的权威教科书",
		siteurl: "https://www.deeplearningbook.org",
		tags: ["深度学习", "书籍"],
	},
	{
		id: 3,
		title: "Hello算法",
		imgurl: "/links/Hello算法.webp",
		desc: "数据结构和算法，原理介绍与代码实践",
		siteurl: "https://www.hello-algo.com",
		tags: ["算法", "书籍"],
	},
	{
		id: 2,
		title: "GLaDOS",
		imgurl: "/links/GLADOS.webp",
		desc: "科学上网工具，全平台支持",
		siteurl: "https://glados.cloud/console",
		tags: ["科学上网"],
	},
	{
		id: 1,
		title: "Mizuki博客·预览",
		imgurl: "/links/Mizuki.png",
		desc: "Mizuki博客的效果预览",
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
