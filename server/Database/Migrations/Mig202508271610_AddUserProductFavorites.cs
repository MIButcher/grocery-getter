using FluentMigrator;

namespace GroceryGetter.Database.Migrations
{
    [Migration(202508271610)]
    public class Mig202508271610_AddUserProductFavorites : ForwardOnlyMigration
    {
        public override void Up()
        {
            Alter.Table("UserProduct")
                .AddColumn("IsFavorite")
                    .AsBoolean()
                    .NotNullable()
                    .WithDefaultValue(false)
                .AddColumn("IsHidden")
                    .AsBoolean()
                    .NotNullable()
                    .WithDefaultValue(false);
        }
    }
}