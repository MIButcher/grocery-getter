using FluentMigrator;

namespace GroceryGetter.Database.Migrations
{
    [Migration(20250821217)]
    public partial class Mig202508212107_UpdateGetGroceryListItemsSP : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("GroceryGetter.Database.Scripts.Mig202508212107.UpdateGetGroceryListItemsSP.sql");
        }

        public override void Down()
        {
            Execute.Sql("DROP FUNCTION IF EXISTS public.get_grocery_list_items(INT, INT);");
        }
    }
}