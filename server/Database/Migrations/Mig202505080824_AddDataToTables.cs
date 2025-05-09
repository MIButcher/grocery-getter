using FluentMigrator;

namespace GroceryGetter.Database.Migrations
{
    [Migration(202505080842)]
    public class Mig202505080824_AddDataToTables : ForwardOnlyMigration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("GroceryGetter.Database.Scripts.Mig202505080824.AddDataToTables.sql");
        }
    }
}