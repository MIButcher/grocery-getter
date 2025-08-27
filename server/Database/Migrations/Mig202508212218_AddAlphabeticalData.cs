using FluentMigrator;

namespace GroceryGetter.Database.Migrations
{
    [Migration(202508212218)]
    public class Mig202508212218_AddAlphabeticalData : ForwardOnlyMigration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("GroceryGetter.Database.Scripts.Mig202508212218.AddAlphabeticalData.sql");
        }
    }
}