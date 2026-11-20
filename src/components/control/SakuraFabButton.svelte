<script lang="ts">
	import Icon from "@iconify/svelte";
	import { onMount } from "svelte";

	import { getSakuraStatus, toggleSakura } from "../../utils/sakura-manager";

	const STORAGE_KEY = "sakura-enabled";

	let isRunning = false;
	let syncTimer: ReturnType<typeof setTimeout> | undefined;

	function syncStatus() {
		isRunning = getSakuraStatus();
	}

	function handleToggle() {
		// SakuraManager.init() 是异步的（需加载樱花图片），
		// 先切换 UI 状态并持久化偏好，再轮询同步真实状态
		const nextRunning = !isRunning;
		isRunning = nextRunning;
		localStorage.setItem(STORAGE_KEY, String(nextRunning));

		toggleSakura();

		// 多次轮询以覆盖图片加载完成的时间点
		if (syncTimer) {
			clearTimeout(syncTimer);
		}
		let attempts = 0;
		const poll = () => {
			syncStatus();
			attempts += 1;
			if (attempts < 10 && isRunning !== nextRunning) {
				syncTimer = setTimeout(poll, 120);
			}
		};
		syncTimer = setTimeout(poll, 120);
	}

	$: ariaLabel = isRunning ? "关闭樱花特效" : "开启樱花特效";
	$: title = isRunning ? "关闭樱花特效" : "开启樱花特效";

	onMount(() => {
		// 读取当前运行状态
		isRunning = getSakuraStatus();

		// 同步 localStorage 偏好（如果尚未设置）
		if (localStorage.getItem(STORAGE_KEY) === null) {
			localStorage.setItem(STORAGE_KEY, String(isRunning));
		}
	});
</script>

<button
	type="button"
	class:active={isRunning}
	class="sakura-fab btn-card"
	aria-label={ariaLabel}
	title={title}
	on:click={handleToggle}
>
	<span class="sakura-fab__icon" aria-hidden="true">
		<Icon icon="material-symbols:local-florist-rounded" />
	</span>
</button>

<style>
	.sakura-fab {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: var(--fab-button-size, 3rem);
		height: var(--fab-button-size, 3rem);
		min-width: 0;
		min-height: 0;
		padding: 0.25rem;
		border: 1px solid rgba(148, 163, 184, 0.45);
		border-radius: 1rem;
		cursor: pointer;
		color: var(--primary);
		pointer-events: auto;
		transition:
			transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
			box-shadow 0.3s ease,
			background 0.3s ease;
	}

	.sakura-fab:hover {
		box-shadow: var(--shadow-button);
	}

	.sakura-fab:active {
		transform: scale(0.94);
	}

	.sakura-fab.active {
		background: var(--btn-card-bg-active);
	}

	.sakura-fab__icon {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		line-height: 1;
	}

	:global(.dark) .sakura-fab {
		border: 1px solid rgba(255, 255, 255, 0.15);
	}

	:global(.dark) .sakura-fab:hover {
		box-shadow: var(--shadow-button-dark);
	}

	@media (max-width: 768px) {
		.sakura-fab {
			border-radius: 0.75rem;
		}

		.sakura-fab__icon {
			font-size: 1.4rem;
		}
	}

	@media (max-width: 480px) {
		.sakura-fab {
			border-radius: 0.5rem;
		}
	}
</style>
