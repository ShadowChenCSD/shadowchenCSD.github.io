import localGameList, { type GameItem } from "../data/game";
import I18nKey from "../i18n/i18nKey";
import { i18n } from "../i18n/translation";

export function getGameList(): GameItem[] {
	return localGameList;
}

export function getGameStatusMap(): Record<
	string,
	{ text: string; class: string; icon: string }
> {
	return {
		playing: {
			text: i18n(I18nKey.gameStatusPlaying),
			class: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
			icon: "▶",
		},
		completed: {
			text: i18n(I18nKey.gameStatusCompleted),
			class: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
			icon: "✓",
		},
		planned: {
			text: i18n(I18nKey.gameStatusPlanned),
			class: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
			icon: "⏰︎",
		},
		favorite: {
			text: i18n(I18nKey.gameStatusFavorite),
			class: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
			icon: "︎❤",
		},
		onhold: {
			text: i18n(I18nKey.gameStatusOnHold),
			class: "bg-gray-100 text-gray-700 dark:bg-gray-800/50 dark:text-gray-300",
			icon: "⏸",
		},
		dropped: {
			text: i18n(I18nKey.gameStatusDropped),
			class: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
			icon: "✗",
		},
	};
}
