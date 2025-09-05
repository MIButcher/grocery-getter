using FluentMigrator;

namespace GroceryGetter.Database.Migrations
{
    [Migration(202509051240)]
    public class Mig202509051240_UpdateAldiAisleData : ForwardOnlyMigration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("GroceryGetter.Database.Scripts.Mig202509051240.AddNewAldiLayout.sql");
            Execute.EmbeddedScript("GroceryGetter.Database.Scripts.Mig202509051240.UpdateAldiAisleData.sql");
        }
    }
}