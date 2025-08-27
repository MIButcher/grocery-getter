using FluentMigrator;

namespace GroceryGetter.Database.Migrations
{
    [Migration(202508251905)]
    public class Mig202508251905_AddUserIsAdmin : ForwardOnlyMigration
    {
        public override void Up()
        {
            Alter.Table("User")
                .AddColumn("IsAdmin")
                    .AsBoolean()
                    .NotNullable()
                    .WithDefaultValue(false)
                    .SetExistingRowsTo(true);
        }
    }
}