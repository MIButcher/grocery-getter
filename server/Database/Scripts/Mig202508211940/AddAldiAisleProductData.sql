-- Insert data into the Store table
INSERT INTO "Store" ("Name", "Address", "City", "State", "ZipCode", "PhoneNumber")
VALUES
    ('Aldi', '1100 Main Avenue', 'De Pere', 'WI', '54115', '8559552534');

-- Get Store ID
DO $$ 
DECLARE store_id INT;
BEGIN
    -- Insert data into the Layout table
    SELECT "Id" INTO store_id FROM "Store" WHERE "Name"='Aldi';
    INSERT INTO "Layout" ("StoreId", "Name")
    VALUES (store_id, 'Aldi-De Pere');
END $$;

-- Insert data into the Aisle table
DO $$ 
DECLARE layout_id INT;
BEGIN
    SELECT "Id" INTO layout_id FROM "Layout" WHERE "Name"='Aldi-De Pere';
    INSERT INTO "Aisle" ("LayoutId", "Name", "Lineup") 
    VALUES
        (layout_id, 'Produce', 4),
        (layout_id, 'Pantry', 5),
        (layout_id, 'Pets', 6),
        (layout_id, 'Cleaning', 7),
        (layout_id, 'Meat', 8),
        (layout_id, 'Deli', 9),
        (layout_id, 'Frozen', 10),
        (layout_id, 'Household', 11),
        (layout_id, 'Wine & Spirits', 12),
        (layout_id, 'Coffee/Tea/Spreads', 22),
        (layout_id, 'Bakery', 21),
        (layout_id, 'Dairy', 20),
        (layout_id, 'InCart', 9998),
        (layout_id, 'Unassigned', 9999);
END $$;

-- Insert data into the AisleProduct table
DO $$
DECLARE
    AisleId INT;
    ProductId INT;
BEGIN
    --AISLE Produce - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Produce' AND l."Name" = 'Aldi-De Pere';
    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Carrots';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);
            
    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Potatos';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE Pantry - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Pantry' AND l."Name" = 'Aldi-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Flour';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Vegetable Oil';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Salsa';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Tortilla Chips';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE Pets - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Pets' AND l."Name" = 'Aldi-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cat Food';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Dog Food/Treats';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE Cleaning - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Cleaning' AND l."Name" = 'Aldi-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Floor Cleaner';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Gloves';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE Meat - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Meat' AND l."Name" = 'Aldi-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Chicken';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Beef';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE Deli - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Deli' AND l."Name" = 'Aldi-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Lunch Meat';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE Frozen - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Frozen' AND l."Name" = 'Aldi-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Bread (Frozen)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Carrots';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE Household - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Household' AND l."Name" = 'Aldi-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Hosiery';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE Wine & Spirits - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Wine & Spirits' AND l."Name" = 'Aldi-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Wine';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Beer';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Liquor';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE Coffee/Tea/Spreads - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Coffee/Tea/Spreads' AND l."Name" = 'Aldi-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Coffee';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Tea (Packets/Bags)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE Bakery - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Bakery' AND l."Name" = 'Aldi-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Bread (Bakery Fresh)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cake';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Donuts';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE Dairy - Aldi De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Dairy' AND l."Name" = 'Aldi-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Milk';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Eggs';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cheese';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cheese (Shredded)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

END $$;