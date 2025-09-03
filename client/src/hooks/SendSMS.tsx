import { GroceryListItem } from "@generated/models";

export const sendSMS = (groceryList: GroceryListItem[]) => {
	const names = groceryList.map(item => item.productName).filter(Boolean);
	const messageBody = encodeURIComponent((names.join('\n')));
	window.location.href = `sms:?body=${messageBody}`;
};