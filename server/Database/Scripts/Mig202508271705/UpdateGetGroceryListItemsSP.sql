DROP FUNCTION IF EXISTS get_grocery_list_items(INT, INT);

CREATE FUNCTION get_grocery_list_items(p_user_id INT, p_store_id INT)
RETURNS TABLE (
    UserProductId INT,
    AisleLineup INT,
    ProductName VARCHAR,
    AisleName VARCHAR,
    Quantity INT,
    Notes VARCHAR,
    InCart BOOLEAN,
    IsFavorite BOOLEAN,
    IsHidden BOOLEAN
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT
        up."Id" AS UserProductId,
        aisle_info."Lineup" AS AisleLineup,
        p."Name" AS ProductName,
        aisle_info."Name" AS AisleName,
        up."Quantity",
        up."Notes",
        up."InCart",
        up."IsFavorite",
        up."IsHidden"
    FROM public."UserProduct" up
    INNER JOIN public."Product" p ON up."ProductId" = p."Id"
    LEFT JOIN LATERAL (
        SELECT a."Lineup", a."Name"
        FROM public."AisleProduct" ap
        JOIN public."Aisle" a ON ap."AisleId" = a."Id"
        JOIN public."Layout" l ON a."LayoutId" = l."Id"
        WHERE ap."ProductId" = p."Id"
          AND l."StoreId" = p_store_id
          AND l."IsActive" = true
        ORDER BY l."Id", a."Lineup"
        LIMIT 1
    ) aisle_info ON TRUE
    WHERE up."UserId" = p_user_id
    ORDER BY aisle_info."Lineup", p."Name";
END;
$$;