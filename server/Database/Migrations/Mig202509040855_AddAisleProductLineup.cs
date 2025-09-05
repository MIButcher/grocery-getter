using FluentMigrator;

namespace GroceryGetter.Database.Migrations
{
    [Migration(202509040855)]
    public class Mig202509040855_AddAisleProductLineup : ForwardOnlyMigration
    {
        public override void Up()
        {
            Alter.Table("AisleProduct")
                .AddColumn("Lineup")
                    .AsInt32()
                    .NotNullable()
                    .SetExistingRowsTo(0);

            Execute.EmbeddedScript("GroceryGetter.Database.Scripts.Mig202509040855.SequenceInitialAisleProductLineup.sql");

            // Enforce uniqueness per ProductId
            Create.UniqueConstraint("UQ_AisleProduct_AisleId_Lineup")
                .OnTable("AisleProduct")
                .Columns("AisleId", "Lineup");

            // Update stored procedure to include the Lineup in the ordering considerations
            Execute.EmbeddedScript("GroceryGetter.Database.Scripts.Mig202509040855.UpdateGetGroceryListItemsSP.sql");
        }
    }
}