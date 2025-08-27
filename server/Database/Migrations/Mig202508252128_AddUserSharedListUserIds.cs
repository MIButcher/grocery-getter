using FluentMigrator;

namespace GroceryGetter.Database.Migrations
{
    [Migration(202508252128)]
    public class Mig202508252128_AddUserSharedListUserIds : ForwardOnlyMigration
    {
        public override void Up()
        {
            Execute.Sql(@"
                ALTER TABLE ""User""
                ADD COLUMN ""SharedListUserIds"" INTEGER[] NULL;
            ");
        }
    }
}