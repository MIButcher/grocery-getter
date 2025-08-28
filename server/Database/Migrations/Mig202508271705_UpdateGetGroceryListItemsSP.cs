using FluentMigrator;

namespace GroceryGetter.Database.Migrations
{
    [Migration(202508271705)]
    public partial class Mig202508271705_UpdateGetGroceryListItemsSP : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("GroceryGetter.Database.Scripts.Mig202508271705.UpdateGetGroceryListItemsSP.sql");
        }

        public override void Down()
        {
            Execute.Sql("DROP FUNCTION IF EXISTS public.get_grocery_list_items(INT, INT);");
        }
    }
}