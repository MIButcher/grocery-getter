-- Insert all products into AisleProduct for Aisle '1' in Layout 'Alphabetical-A-Z'
WITH TargetAisle AS (
    SELECT a."Id" AS "AisleId"
    FROM public."Aisle" a
    JOIN public."Layout" l ON a."LayoutId" = l."Id"
    WHERE a."Name" = 'Alphabetical' AND l."Name" = 'Alphabetical-A-Z'
)
INSERT INTO public."AisleProduct" ("ProductId", "AisleId")
SELECT p."Id", ta."AisleId"
FROM public."Product" p
JOIN TargetAisle ta ON TRUE;