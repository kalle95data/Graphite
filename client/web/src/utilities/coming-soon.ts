import { createDialog, dismissDialog } from "@/utilities/dialog";
import { TextButtonWidget } from "@/components/widgets/widgets";

export default function comingSoon(issueNumber?: number) {
	const bugMessage = `— but you can help add it!\nSee issue #${issueNumber} on GitHub.`;
	const details = `This feature is not implemented yet${issueNumber ? bugMessage : ""}`;

	const okButton: TextButtonWidget = {
		kind: "TextButton",
		callback: async () => dismissDialog(),
		props: { label: "OK", emphasized: true, minWidth: 96 },
	};
	const issueButton: TextButtonWidget = {
		kind: "TextButton",
		callback: async () => window.open(`https://github.com/GraphiteEditor/Graphite/issues/${issueNumber}`, "_blank"),
		props: { label: `Issue #${issueNumber}`, minWidth: 96 },
	};
	const buttons = [okButton];
	if (issueNumber) buttons.push(issueButton);

	createDialog("Warning", "Coming soon", details, buttons);
}