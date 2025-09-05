-- Get Store ID
DO $$ 
DECLARE store_id INT;
BEGIN
    -- Insert data into the Layout table
    SELECT "Id" INTO store_id FROM "Store" WHERE "Name"='Aldi';
    UPDATE "Layout" SET "IsActive" = false WHERE "Name"='Aldi-De Pere' ;
    INSERT INTO "Layout" ("StoreId", "Name", "IsActive")
    VALUES (store_id, 'Aldi-De Pere', true);
END $$;