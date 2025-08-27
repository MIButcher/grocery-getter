using FluentMigrator;

namespace GroceryGetter.Database.Migrations
{
    [Migration(202508211900)]
    public class Mig202508211900_AddMoreAisleProductData : ForwardOnlyMigration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("GroceryGetter.Database.Scripts.Mig202508211900.AddMoreAisleProductData.sql");
        }
    }
}