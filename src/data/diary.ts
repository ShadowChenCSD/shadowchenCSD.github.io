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
		id: 9,
		content: "💼 2025-11-27：兜兜转转，又回到开始的地方。♻️",
		date: "2025-11-27T17:30:00+08:00",
		images: ["/images/diary/小宿科技.svg"],
	}, 
	{
		id: 8,
		content: "🎮 2025-11-27：《丝之歌》，达成30小时、100%完成度成就！🏃💯",
		date: "2025-11-27T12:30:00+08:00",
		images: ["/images/diary/丝之歌·极速圆满.jpg"],
	},
	{
		id: 7,
		content: "🎮 2025-11-21：《丝之歌》，8个忆痕全收集！🍺",
		date: "2025-11-21T18:30:00+08:00",
		images: ["/images/diary/丝之歌·忆痕01·飞毛腿忆痕.jpg",
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
		id: 6,
		content: "🎮 2025-11-21：《丝之歌》，跳蚤节·打破塞斯记录！🪧",
		date: "2025-11-21T16:30:00+08:00",
		images: ["/images/diary/丝之歌·跳蚤节·赛斯对话-1.jpg",
				 "/images/diary/丝之歌·跳蚤节·赛斯对话-2.jpg",
				 "/images/diary/丝之歌·跳蚤节·赛斯对话-3.jpg",
				 "/images/diary/丝之歌·跳蚤节·赛斯对话-4.jpg",
				 "/images/diary/丝之歌·跳蚤节·赛斯对话-5.jpg",
				 "/images/diary/丝之歌·跳蚤节·赛斯对话-6.jpg",
				],
	},
	{
		id: 5,
		content: "🎮 2025-11-13：《丝之歌》，达成5小时速通成就！🏃",
		date: "2025-11-13T16:30:00+08:00",
		images: ["/images/diary/丝之歌·疾丝跑者.jpg"],
	},
	{
		id: 4,
		content: "🎮 2025-11-11：《丝之歌》，达成100%完成度成就！💯",
		date: "2025-11-11T12:30:00+08:00",
		images: ["/images/diary/丝之歌·圆满无缺.jpg"],
	},
	{
		id: 3,
		content: "🎮 2025-10-31：《丝之歌》，终局：姐妹情深！🌈🌸",
		date: "2025-10-31T11:30:00+08:00",
		images: ["/images/diary/丝之歌·终局.jpg"],
	},
	{
		id: 2,
		content: "💼 2025-10-01：老当益壮，宁移白首之心；穷且益坚，不坠青云之志。👊",
		date: "2025-10-01T10:30:00+08:00",
		images: ["/images/diary/老当益壮、穷且益坚.jpeg"],
	},
	{
		id: 1,
		content: "🎮 2025-09-05：《丝之歌》，开始冒险！🗺️⚔️",
		date: "2025-09-05T19:30:00+08:00",
		images: ["/images/diary/丝之歌·启动.jpg"],
	},
];

// 获取日记统计数据
export const getDiaryStats = () => {
	const total = diaryData.length;
	const hasImages = diaryData.filter(
		(item) => item.images && item.images.length > 0,
	).length;
	const hasLocation = diaryData.filter((item) => item.location).length;
	const hasMood = diaryData.filter((item) => item.mood).length;

	return {
		total,
		hasImages,
		hasLocation,
		hasMood,
		imagePercentage: Math.round((hasImages / total) * 100),
		locationPercentage: Math.round((hasLocation / total) * 100),
		moodPercentage: Math.round((hasMood / total) * 100),
	};
};

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

// 获取最新的日记
export const getLatestDiary = () => {
	return getDiaryList(1)[0];
};

// 根据ID获取日记
export const getDiaryById = (id: number) => {
	return diaryData.find((item) => item.id === id);
};

// 获取包含图片的日记
export const getDiaryWithImages = () => {
	return diaryData.filter((item) => item.images && item.images.length > 0);
};

// 根据标签筛选日记
export const getDiaryByTag = (tag: string) => {
	return diaryData
		.filter((item) => item.tags?.includes(tag))
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
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

export default diaryData;
