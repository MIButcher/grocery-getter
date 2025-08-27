-- Insert data into the Product table
DO $$
BEGIN
    INSERT INTO "Product" ("Name")
    VALUES
        ('Pasta (Refridgerated Premade)'),
        ('Toothpicks'), 
	    ('Candies');
END $$;
-- Insert data into the AisleProduct table
DO $$
DECLARE
    AisleId INT;
    ProductId INT;
BEGIN
    -- AISLE 6 - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = '6' AND l."Name" = 'Festival Foods-De Pere';
    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Bird Seed';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);
            
    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cat Food';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);
            
    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cat Litter';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);
            
    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Dog Food/Treats';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);
            
    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Rawhide';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE 7 - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = '7' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Beef Stick (Snacks)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Candies';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Candy Bags';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Candy Single Bars';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Fruit Snacks';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Gatorade';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Ice Cream Cones';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Ice Cream Toppings';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Iced Tea';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Nuts (Snacks)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Popcorn (Microwave)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Sports Drinks';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Tea (Bottles & Jugs)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE 8 - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = '8' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Apple Juice';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Coffee Creamer';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Coffee Filters';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Coffee';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cranberry Juice';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Hot Cocoa';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Juice';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Kool Aid';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Lemon Juice';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Tang';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Tea (Packets/Bags)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE 9 - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = '9' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cereal (Hot/Cold)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Diabetic & Diet Needs';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Granola Bars';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Grits';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Oatmeal';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pancake Mix';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pancake Syrup';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pop Tarts';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Rice Cakes';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Slim Fast';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE 10 - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = '10' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Aluminum Foil';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Bakeware';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Bath Tissue';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cheesecloth';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cling Wrap';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cooking Bags';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Dinner Napkins';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Facial Tissues';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Foil Baking Pans';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Freezer Paper';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Garbage Bags';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Handi Wipes';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Handi-Wrap';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Housewares';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Kitchen Gadgets';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Kleenex';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Lunch Bags';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Napkins (Paper)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Paper Cups';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Paper Plates';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Paper Towels';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Plastic Flatware';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Plastic Wrap';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Sandwich Bags';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Storage Bags';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Straws';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Toilet Paper';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Toothpicks';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Wax Paper';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE 11 - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = '11' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'After Shave';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Aspirin';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Baby Formula';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Band-Aids';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cotton Balls';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Deodorant';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Diapers';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Hand Lotion';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Laxatives';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Nail Care';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Shampoo';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Skin Care';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Toothpaste';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE 12 - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = '12' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Air Fresheners';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Ammonia';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Automotive';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Bar Soap';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Clothes Line';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Dish Detergent';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Distilled Water';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Electrical Needs';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Fabric Softener';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Floor Cleaner';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Furniture Polish';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Glass Cleaner';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Gloves';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Hardware';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Hosiery';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Household Cleaners';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Laundry Detergent';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Light Bulbs';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Mops';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Moth Balls';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Oven Cleaner';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Rubber Gloves';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'School Supplies';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Shoe Laces';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Sponges';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Stain Remover';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Starch (Spray)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Super Glue';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Water (Distilled)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Windex';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE 13 - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = '13' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Club Soda';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Drink Enhancers (flavoring)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Energy Drinks';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Seltzer Water';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Soda';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Tonic Water';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Water (Drinking)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Water Refill';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE 14 - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = '14' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Bread (Commercial)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Hamburger Buns';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Hotdog Buns';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Popcorn (Bagged)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Potato Chips';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Snacks';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Tortilla Chips';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE Front End - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Front End' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Automotive';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Batteries';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Books';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Candy Single Bars';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Charcoal/Logs';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cigarettes';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Envelopes';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Firewood Bundle';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Greeting Cards';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Insecticides';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Magazines';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Matches';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Rug Doctor Rental';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Salt (Sidewalk)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Salt (Water Softener)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE Meat - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Meat' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Beef Stick (Snacks)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'SauerKraut (Bag)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE Bakery - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Bakery' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Bread (Bakery Fresh)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Candles (Birthday)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cake';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Donuts';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE Dairy - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Dairy' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Coffee Creamer';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Jell-O (Cups)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pesto';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pie Crust';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pasta (Refrigerated Premade)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Tea (Bottles & Jugs)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Velveeta';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cheese';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cheese (Shredded)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Yeast Cakes';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Milk';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Eggs';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE Produce - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Produce' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Garlic (Minced)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pine Nuts';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE Frozen - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Frozen' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Lemonade (Frozen)';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE Wine & Spirits - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Wine & Spirits' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Club Soda';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Cooking Wines';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Liquor';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Beer';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Seltzer Water';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Tonic Water';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

    -- AISLE Deli - Festival De Pere
    SELECT a."Id" INTO AisleId 
        FROM "Aisle" a 
        JOIN "Layout" l ON a."LayoutId" = l."Id" 
        WHERE a."Name" = 'Deli' AND l."Name" = 'Festival Foods-De Pere';

    SELECT "Id" INTO ProductId FROM "Product" WHERE "Name" = 'Pita Chips';
    INSERT INTO "AisleProduct"("AisleId", "ProductId")
    VALUES (AisleId, ProductId);

END $$;