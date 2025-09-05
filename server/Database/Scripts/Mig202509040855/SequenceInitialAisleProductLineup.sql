-- Assign Lineup values to AisleProduct by AisleId, ordered by ProductId
WITH Ranked AS (
    SELECT 
        ap."Id",
        ROW_NUMBER() OVER (PARTITION BY ap."AisleId" ORDER BY ap."ProductId") AS "Seq"
    FROM public."AisleProduct" ap
)
UPDATE public."AisleProduct" ap
SET "Lineup" = r."Seq"
FROM Ranked r
WHERE ap."Id" = r."Id";