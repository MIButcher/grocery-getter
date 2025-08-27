using FluentMigrator;

namespace GroceryGetter.Database.Migrations
{
    [Migration(202508211940)]
    public class Mig202508211940_AddAldiAisleProductData : ForwardOnlyMigration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("GroceryGetter.Database.Scripts.Mig202508211940.AddAldiAisleProductData.sql");
        }
    }
}