export interface IconProps {
	icon: string;
	class?: string;
	style?: string;
	size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
	color?: string;
	fallback?: string;
	loading?: "lazy" | "eager";
}
