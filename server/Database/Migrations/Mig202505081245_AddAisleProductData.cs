using FluentMigrator;

namespace GroceryGetter.Database.Migrations
{
    [Migration(202505081246)]
    public class Mig202505081245_AddAisleProductData : ForwardOnlyMigration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("GroceryGetter.Database.Scripts.Mig202505081245.AddAisleProductData.sql");
        }
    }
}