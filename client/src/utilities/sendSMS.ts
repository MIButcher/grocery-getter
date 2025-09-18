import { GroceryListItem } from "@generated/models";

export const sendSMS = (groceryList: GroceryListItem[]) => {
	const names = groceryList
		.filter(item => item.productName)
		.map(item => {
			const notes = item.notes ? ` (${item.notes})` : '';
			return `${item.quantity} ${item.productName}${notes}`;
		});
	const messageBody = encodeURIComponent((names.join('\n')));
	window.location.href = `sms:?body=${messageBody}`;
};