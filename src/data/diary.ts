// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

// 示例日记数据
const diaryData: DiaryItem[] = [
	{
		id: 14,
		content: "🎮 2026-05-17：《阴阳师》，签到3500天！🎯",
		date: "2026-05-17T19:30:00+08:00",
		images: [
			"/images/diary/阴阳师·签到3500天·达成.webp",
			"/images/diary/阴阳师·签到3500天·寄语.webp",
			"/images/diary/阴阳师·签到3500天.webp",
			"/images/diary/阴阳师·签到3000天.webp",
			"/images/diary/阴阳师·签到2500天.webp",
			"/images/diary/阴阳师·签到2000天.webp",
			"/images/diary/阴阳师·签到1500天.webp",
			"/images/diary/阴阳师·签到999天.webp",
			"/images/diary/阴阳师·签到500天.webp",
		],
	},
	{
		id: 13,
		content: "🎮 2026-02-05：《真三国无双·起源》，梦幻四英杰，全成就达成！🌸",
		date: "2026-02-05T19:30:00+08:00",
		images: [
			"/images/diary/真三国无双·起源·梦幻四英杰·张角&董卓.jpg",
			"/images/diary/真三国无双·起源·梦幻四英杰·袁绍&吕布.jpg",
		],
	},
	{
		id: 12,
		content: "🎮 2026-01-23：《真三国无双·起源》，梦幻四英杰，启动！⚔️",
		date: "2026-01-23T20:00:00+08:00",
		images: [
			"/images/diary/真三国无双·起源·梦幻四英杰·启动-1.jpg",
			"/images/diary/真三国无双·起源·梦幻四英杰·启动-2.jpg",
		],
	},
	{
		id: 11,
		content: "🎮 2025-12-16：《鸣潮》，漂泊者，开始拯救世界！⚔️",
		date: "2025-12-16T12:30:00+08:00",
		images: [
			"/images/diary/鸣潮.webp",
		],
	},
	{
		id: 10,
		content: "🎮 2025-11-27：《丝之歌》，达成30小时、100%完成度成就！🏃💯",
		date: "2025-11-27T12:30:00+08:00",
		images: ["/images/diary/丝之歌·极速圆满.jpg"],
	},
	{
		id: 9,
		content: "🎮 2025-11-21：《丝之歌》，8个忆痕全收集！🍺",
		date: "2025-11-21T18:30:00+08:00",
		images: [
			"/images/diary/丝之歌·忆痕01·飞毛腿忆痕.jpg",
			"/images/diary/丝之歌·忆痕02·守望者忆痕.jpg",
			"/images/diary/丝之歌·忆痕03·英雄忆痕.jpg",
			"/images/diary/丝之歌·忆痕04·猎人忆痕.jpg",
			"/images/diary/丝之歌·忆痕05·灰色忆痕.jpg",
			"/images/diary/丝之歌·忆痕06·墟野忆痕.jpg",
			"/images/diary/丝之歌·忆痕07·鸦虫忆痕.jpg",
			"/images/diary/丝之歌·忆痕08·双生之心.jpg",
		],
	},
	{
		id: 8,
		content: "🎮 2025-11-21：《丝之歌》，跳蚤节，打破赛斯记录！🪧",
		date: "2025-11-21T16:30:00+08:00",
		images: [
			"/images/diary/丝之歌·跳蚤节·赛斯-1.jpg",
			"/images/diary/丝之歌·跳蚤节·赛斯-2.jpg",
			"/images/diary/丝之歌·跳蚤节·赛斯-3.jpg",
			"/images/diary/丝之歌·跳蚤节·赛斯-4.jpg",
			"/images/diary/丝之歌·跳蚤节·赛斯-5.jpg",
			"/images/diary/丝之歌·跳蚤节·赛斯-6.jpg",
			"/images/diary/丝之歌·跳蚤节·成绩单.jpg",
		],
	},
	{
		id: 7,
		content: "🎮 2025-11-13：《丝之歌》，达成5小时速通成就！🏃",
		date: "2025-11-13T16:30:00+08:00",
		images: ["/images/diary/丝之歌·疾丝跑者.jpg"],
	},
	{
		id: 6,
		content: "🎮 2025-11-11：《丝之歌》，达成100%完成度成就！💯",
		date: "2025-11-11T12:30:00+08:00",
		images: ["/images/diary/丝之歌·圆满无缺.jpg"],
	},
	{
		id: 5,
		content: "🎮 2025-11-10：《丝之歌》，跳蚤节，获胜！🪧",
		date: "2025-11-10T16:30:00+08:00",
		images: [
			"/images/diary/丝之歌·跳蚤节-1.jpg",
			"/images/diary/丝之歌·跳蚤节-2.jpg",
		],
	},
	{
		id: 4,
		content: "🎮 2025-10-31：《丝之歌》，终局：姐妹情深！🌈🌸",
		date: "2025-10-31T11:30:00+08:00",
		images: [
			"/images/diary/丝之歌·终局-1.jpg",
			"/images/diary/丝之歌·终局-2.jpg",
		],
	},
	{
		id: 3,
		content: "🎮 2025-09-05：《丝之歌》，开始冒险！🗺️⚔️",
		date: "2025-09-05T19:30:00+08:00",
		images: [
			"/images/diary/丝之歌·启动-1.jpg",
			"/images/diary/丝之歌·启动-2.jpg",
		],
	},
	{
		id: 2,
		content: "🎮 2025-04-01：《真三国无双·起源》，朱和牺牲！💔",
		date: "2025-04-01T19:30:00+08:00",
		images: [
			"/images/diary/真三国无双·起源·朱和.webp",
		],
	},
	{
		id: 1,
		content: "🎮 2025-03-15：《真三国无双·起源》，启动！⚔️",
		date: "2025-03-15T19:30:00+08:00",
		images: [
			"/images/diary/真三国无双·起源·启动-1.webp",
			"/images/diary/真三国无双·起源·启动-2.webp",
		],
	},
];

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = diaryData.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	diaryData.forEach((item) => {
		if (item.tags) {
			item.tags.forEach((tag) => tags.add(tag));
		}
	});
	return Array.from(tags).sort();
};
