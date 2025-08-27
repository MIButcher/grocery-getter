using FluentMigrator;

namespace GroceryGetter.Database.Migrations
{
    [Migration(202508221145)]
    public class Mig202508221145_AddLayoutIsActive : ForwardOnlyMigration
    {
        public override void Up()
        {
            Alter.Table("Layout")
                .AddColumn("IsActive")
                    .AsBoolean()
                    .NotNullable()
                    .WithDefaultValue(true);
        }
    }
}