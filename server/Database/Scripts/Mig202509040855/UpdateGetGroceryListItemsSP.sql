DROP FUNCTION IF EXISTS get_grocery_list_items(INT, INT);

-- Then recreate with the updated return type
CREATE FUNCTION get_grocery_list_items(p_user_id INT, p_store_id INT)
RETURNS TABLE (
    userproductid INT,
    aislelineup INT,
    productlineup INT,
    productname VARCHAR(150),
    aislename VARCHAR(150),
    quantity INT,
    notes VARCHAR(250),
    incart BOOLEAN,
    isfavorite BOOLEAN,
    ishidden BOOLEAN
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        up."Id" AS userproductid,
        aisle_info.aislelineup,
        aisle_info.productlineup,
        p."Name" AS productname,
        aisle_info.aislename,
        up."Quantity" AS quantity,
        up."Notes" AS notes,
        up."InCart" AS incart,
        up."IsFavorite" AS isfavorite,
        up."IsHidden" AS ishidden
    FROM public."UserProduct" up
    INNER JOIN public."Product" p ON up."ProductId" = p."Id"
    LEFT JOIN LATERAL (
        SELECT
            ap."Lineup" AS productlineup,
            a."Lineup" AS aislelineup,
            a."Name" AS aislename,
            a."Lineup" AS aisleorder,
            ap."Lineup" AS productorder
        FROM public."AisleProduct" ap
        JOIN public."Aisle" a ON ap."AisleId" = a."Id"
        JOIN public."Layout" l ON a."LayoutId" = l."Id"
        WHERE ap."ProductId" = p."Id"
          AND l."StoreId" = p_store_id
          AND l."IsActive" = TRUE
        ORDER BY a."Lineup", ap."Lineup"
        LIMIT 1
    ) aisle_info ON TRUE
    WHERE up."UserId" = p_user_id
    ORDER BY
        CASE WHEN aisle_info.aislename = 'Alphabetical' THEN NULL ELSE aisle_info.aisleorder END,
        CASE WHEN aisle_info.aislename = 'Alphabetical' THEN NULL ELSE aisle_info.productorder END,
        p."Name";
END;
$$ LANGUAGE plpgsql;