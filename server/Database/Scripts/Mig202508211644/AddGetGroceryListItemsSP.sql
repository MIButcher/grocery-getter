DROP FUNCTION IF EXISTS get_grocery_list_items(INT, INT);

CREATE FUNCTION get_grocery_list_items(p_user_id INT, p_store_id INT)
RETURNS TABLE (
    UserProductId INT,
    ProductName VARCHAR,
    AisleName VARCHAR,
    Quantity INT,
    Notes VARCHAR,
    InCart BOOLEAN
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT
        up.Id AS UserProductId,
        p.Name AS ProductName,
        a.Name AS AisleName,
        up.Quantity,
        up.Notes,
        up.InCart
    FROM UserProduct up
    INNER JOIN Product p ON up.ProductId = p.Id
    LEFT JOIN AisleProduct ap ON p.Id = ap.ProductId
    LEFT JOIN Aisle a ON ap.AisleId = a.Id
    LEFT JOIN Layout l ON a.LayoutId = l.Id
    WHERE up.UserId = p_user_id
      AND l.StoreId = p_store_id;
END;
$$;