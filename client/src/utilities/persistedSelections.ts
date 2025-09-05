export const clearPersistedSelections = () => {
    localStorage.removeItem('selectedStoreId');
    localStorage.removeItem('selectedLayoutId');
};