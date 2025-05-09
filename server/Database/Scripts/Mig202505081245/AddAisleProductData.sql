-- Insert data into the AisleProduct table
DO $$
DECLARE
    AisleId INT;
    ProductId INT;
BEGIN
    -- AISLE 1 - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = '1' AND l."Name" = 'Festival Foods-De Pere';
    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Applesauce';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);
            
    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Bacon Bits';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);
            
    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Barbecue Sauce';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);
            
    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Canning Supplies';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);
            
    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Chili Sauce (Sriracha)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);
            
    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Chutney';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);
            
    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cocktail Sauce';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cooking Wines';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cranberry Sauce';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Fruit (Canned)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Horseradish Sauce';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Jam/Jelly';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Ketchup';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Maraschino Cherries';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Marinades (Liquid)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Mayonnaise';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Miracle Whip';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Nutella';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Olives';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Peanut Butter';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pickles';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pimientos';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Relish';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Salad Dressing';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Steak Sauce';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Sure Jell';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Tabasco Sauce';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Tahini';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Tartar Sauce';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Vinegar';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Worcestershire Sauce';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE 2 - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = '2' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Baked Beans';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Beans (Dried)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Chili (Canned)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Crabmeat (Canned)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Dry Seasoning Packets';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Fish (Canned)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'French Fried Onions';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Garlic (Minced)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Gravy';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Instant Potatoes';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Kidney Beans';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Lima Beans';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Manwich';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Meat (Canned)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Oysters (Canned)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pesto';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pine Nuts';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pinto Beans';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pizza Crust (Boxed)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pizza Sauce';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pizza Mix';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Potatoes (Dry)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Sauerkraut (Canned)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Shrimp (Canned)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Soy Sauce';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Spam';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Stew (Canned)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Stuffing';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Tomato Paste';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Tomato Sauce';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Vegetables (Canned)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Tuna';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Water Chestnuts';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Yams (Canned)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE 3 - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = '3' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Boxed Dinners';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Hispanic Foods';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Lasagna Noodles (Dry)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Noodles';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pasta (Dried)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pasta Sauce';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pesto';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Rice';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Rice-A-Roni';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Salsa';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Spaghetti';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Taco Shells';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE 4 - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = '4' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Barley';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Bread Sticks';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cookies';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Crackers';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pita Chips';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Ramen Noodles';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Soup';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE 5 - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = '5' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Baking Chocolate';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Baking Soda';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Bread Crumbs';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cake Mixes';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Candied Fruit';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Candles (Birthday)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Coconut Oil';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Coconut';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cocoa (Baking)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Condensed Milk';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cornstarch';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cupcake Liners';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Dates';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Evaporated Milk';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Flour';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Frosting';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Fruit (Dried)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Gelatin';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Jell-O (Box)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Marshmallows';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Milk (Powdered)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Molasses';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Nuts (Baking)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Oil (Cooking)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pepper';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pie Crust';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pie Filling';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Prunes';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pudding';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pumpkin (Canned)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Raisins';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Salt (Table/Sea)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Shortening';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Spices';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Sugar';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Vegetable Oil';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Yeast (Dry)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

END $$;