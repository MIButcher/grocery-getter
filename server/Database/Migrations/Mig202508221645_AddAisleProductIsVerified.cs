using FluentMigrator;

namespace GroceryGetter.Database.Migrations
{
    [Migration(202508221645)]
    public class Mig202508221645_AddAisleProductIsVerified : ForwardOnlyMigration
    {
        public override void Up()
        {
            Alter.Table("AisleProduct")
                .AddColumn("IsVerified")
                    .AsBoolean()
                    .NotNullable()
                    .WithDefaultValue(false)
                    .SetExistingRowsTo(true);
        }
    }
}