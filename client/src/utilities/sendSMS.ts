import { GroceryListItem } from "@generated/models";

export const sendSMS = (groceryList: GroceryListItem[]) => {
	const names = groceryList
		.filter(item => item.productName)
		.map(item => `${item.quantity} ${item.productName} (${item.notes})`);
	const messageBody = encodeURIComponent((names.join('\n')));
	window.location.href = `sms:?body=${messageBody}`;
};