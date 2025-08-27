using FluentMigrator;

namespace GroceryGetter.Database.Migrations
{
    [Migration(202508211644)]
    public partial class Mig202508211644_AddGetGroceryListItemsSP : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("GroceryGetter.Database.Scripts.Mig202508211644.AddGetGroceryListItemsSP.sql");
        }

        public override void Down()
        {
            Execute.Sql("DROP FUNCTION IF EXISTS public.get_grocery_list_items(INT, INT);");
        }
    }
}