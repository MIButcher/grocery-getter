-- Insert data into the Aisle table
DO $$ 
DECLARE layout_id INT;
BEGIN
    SELECT "Id" INTO layout_id FROM "Layout" WHERE "Name"='Aldi-De Pere' AND "IsActive"=true;
    INSERT INTO "Aisle" ("LayoutId", "Name", "Lineup") 
    VALUES
        (layout_id, 'Quick Meals', 1),
        (layout_id, 'Fruit', 2),
        (layout_id, 'Vegetables', 3),
        (layout_id, 'Salads', 4),
        (layout_id, 'Organic Produce', 5),
        (layout_id, 'Sweet Treats', 6),
        (layout_id, 'Red Wine', 7),
        (layout_id, 'Beer', 8),
        (layout_id, 'Bagels', 9),
        (layout_id, 'Tortillas & Wraps', 10),
        (layout_id, 'Specialty Bread', 11),
        (layout_id, 'Crackers', 12),
        (layout_id, 'Bread', 13),
        (layout_id, 'Snack Cakes', 14),
        (layout_id, 'Cookies', 15),
        (layout_id, 'Candy', 16),
        (layout_id, 'Deli (Cheese)', 17),
        (layout_id, 'Chips', 18),
        (layout_id, 'Jerky', 19),
        (layout_id, 'Baking', 20),
        (layout_id, 'Salsa', 21),
        (layout_id, 'Flour & Sugar', 22),
        (layout_id, 'Oil & Vinegar', 23),
        (layout_id, 'White & Sparkling Wine', 24),
        (layout_id, 'Aldi Finds', 25),
        (layout_id, 'Deli Meat', 26),
        (layout_id, 'Biscuts', 27),
        (layout_id, 'Hispanic', 28),
        (layout_id, 'Breakfast', 29),
        (layout_id, 'Spices', 30),
        (layout_id, 'Granola Bars', 31),
        (layout_id, 'Pasta & Sauces', 32),
        (layout_id, 'Packaged Dinners', 33),
        (layout_id, 'Cereal', 34),
        (layout_id, 'Canned Fruit', 35),
        (layout_id, 'Soups', 36),
        (layout_id, 'Broths', 37),
        (layout_id, 'Canned Vegetables', 38),
        (layout_id, 'Canned Meat', 39),
        (layout_id, 'Juice', 40),
        (layout_id, 'Soft Drinks', 41),
        (layout_id, 'Energy Drinks', 42),
        (layout_id, 'Iced Teas', 43),
        (layout_id, 'Water', 44),
        (layout_id, 'Sports Drinks', 45),
        (layout_id, 'Dairy', 46),
        (layout_id, 'Chicken', 47),
        (layout_id, 'Beef', 48),
        (layout_id, 'Seafood', 49),
        (layout_id, 'Freezer', 50),
        (layout_id, 'Household', 51),
        (layout_id, 'InCart', 9998),
        (layout_id, 'Unassigned', 9999);
END $$;

-- Insert data into the AisleProduct table
DO $$
DECLARE
    AisleId INT;
    ProductId INT;
BEGIN
    --AISLE Vegetables - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Vegetables' AND l."Name" = 'Aldi-De Pere' AND "IsActive"=true;
    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Carrots';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    -- AISLE Sweet Treats - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Sweet Treats' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cake';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Donuts';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    -- AISLE Red Wine - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Red Wine' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Wine';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    -- AISLE Beer - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Beer' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Beer';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    -- AISLE Specialty Bread - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Specialty Bread' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Bread (Bakery Fresh)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Bread Sticks';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    -- AISLE Bread - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Bread' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Hotdog Buns';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Hamburger Buns';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Bread (Commercial)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 3);

    -- AISLE Cookies - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Cookies' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cookies';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    -- AISLE Candy - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Candy' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Candy Bags';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Candy Single Bars';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Candies';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 3);

    -- AISLE Snack Cakes - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Snack Cakes' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Snacks';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    -- AISLE Deli (Cheese) - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Deli (Cheese)' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cheese';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cheese (Shredded)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    -- AISLE Jerky - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Jerky' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Beef Stick (Snacks)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    -- AISLE Chips - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Chips' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Potato Chips';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Tortilla Chips';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pita Chips';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 3);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pretzels';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 4);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Popcorn (Bagged)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 5);

    -- AISLE Baking - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Baking' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Baking Chocolate';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Baking Soda';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cocoa (Baking)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 3);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cornstarch';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 4);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Salt (Table/Sea)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 5);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Shortening';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 6);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Molasses';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 7);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Condensed Milk';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 8);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Evaporated Milk';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 9);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cake Mixes';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 10);

    -- AISLE Salsa - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Salsa' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Salsa';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    -- AISLE Flour & Sugar - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Flour & Sugar' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Flour';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Sugar';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    -- AISLE Oil & Vinegar - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Oil & Vinegar' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Vegetable Oil';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Coconut Oil';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Oil (Cooking)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 3);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Vinegar';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 4);

    -- AISLE White & Sparkling Wine - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'White & Sparkling Wine' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Wine';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    -- AISLE Deli Meat - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Deli Meat' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Lunch Meat';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    -- AISLE Hispanic - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Hispanic' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Hispanic Foods';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Dry Seasoning Packets';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    -- AISLE Breakfast - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Breakfast' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pancake Mix';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Oatmeal';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pop Tarts';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 3);

    -- AISLE Spices - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Spices' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Spices';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    -- AISLE Granola Bars - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Granola Bars' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Granola Bars';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Energy Bars';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Protein Bars';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 3);

    -- AISLE Pasta & Sauces - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Pasta & Sauces' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pasta (Dried)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Spaghetti';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Lasagna Noodles (Dry)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 3);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Noodles';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 4);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pasta Sauce';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 5);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pizza Sauce';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 6);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Tomato Sauce';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 7);

    -- AISLE Cereal - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Cereal' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cereal (Hot/Cold)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    -- AISLE Canned Fruit - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Canned Fruit' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Fruit (Canned)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pie Filling';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pumpkin (Canned)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 3);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Applesauce';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 4);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Jam/Jelly';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 5);

    -- AISLE Soups - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Soups' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Soup';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Stew (Canned)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Chili (Canned)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 3);

    -- AISLE Canned Vegetables - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Canned Vegetables' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Vegetables (Canned)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Lima Beans';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Kidney Beans';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 3);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pinto Beans';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 4);

    -- AISLE Juice - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Juice' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Apple Juice';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cranberry Juice';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Juice';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 3);

    -- AISLE Soft Drinks - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Soft Drinks' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Soda';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Club Soda';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    -- AISLE Energy Drinks - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Energy Drinks' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Energy Drinks';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    -- AISLE Iced Teas - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Iced Teas' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Iced Tea';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    -- AISLE Water - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Water' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Seltzer Water';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    -- AISLE Sports Drinks - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Sports Drinks' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Sports Drinks';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Gatorade';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    -- AISLE Dairy - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Dairy' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Eggs';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Milk';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    -- AISLE Chicken - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Chicken' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Chicken';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    -- AISLE Beef - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Beef' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Beef';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    -- AISLE Seafood - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Seafood' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Tuna';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    -- AISLE Freezer - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Freezer' AND l."Name" = 'Aldi-De Pere' AND "IsActive" = true;

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Bread (Frozen)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 1);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Lemonade (Frozen)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 2);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pasta (Refrigerated Premade)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId", "IsVerified", "Lineup")
    VALUES (AisleId, ProductId, true, 3);

END $$;