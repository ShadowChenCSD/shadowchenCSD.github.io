import { visit } from "unist-util-visit";

/* 保证段首缩进一致 */
export function rehypeParagraphIndent() {
	return (tree) => {
		visit(tree, "element", (node) => {
			if (node.tagName !== "p") {
				return;
			}

			const firstChild = node.children[0];
			if (firstChild?.type !== "text") {
				return;
			}

			const match = firstChild.value.match(/^\u200b[\t\u3000]+/);
			if (!match) {
				return;
			}

			firstChild.value =
				"\u00a0\u00a0\u00a0\u00a0" +
				firstChild.value.slice(match[0].length);
		});
	};
}
