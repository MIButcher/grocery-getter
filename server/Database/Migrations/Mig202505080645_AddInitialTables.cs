using FluentMigrator;

namespace GroceryGetter.Database.Migrations
{
    [Migration(202505080650)]
    public class Mig202505080645_AddInitialTables : ForwardOnlyMigration
    {
        public override void Up()
        {
            Create.Table("Store")
                .WithColumn("Id")
                    .AsInt32()
                    .NotNullable()
                    .PrimaryKey()
                    .Identity()
                .WithColumn("Name")
                    .AsString(150)
                    .NotNullable()
                .WithColumn("Address")
                    .AsString(150)
                    .NotNullable()
                .WithColumn("City")
                    .AsString(50)
                    .NotNullable()
                .WithColumn("State")
                    .AsString(2)
                    .NotNullable()
                .WithColumn("ZipCode")
                    .AsString(10)
                    .NotNullable()
                .WithColumn("PhoneNumber")
                    .AsString(10)
                    .NotNullable();

            Create.Table("Layout")
                .WithColumn("Id")
                    .AsInt32()
                    .NotNullable()
                    .PrimaryKey()
                    .Identity()
                .WithColumn("StoreId")
                    .AsInt32()
                    .NotNullable()
                .WithColumn("Name")
                    .AsString(150)
                    .NotNullable();

            Create.Table("Aisle")
                .WithColumn("Id")
                    .AsInt32()
                    .NotNullable()
                    .PrimaryKey()
                    .Identity()
                .WithColumn("LayoutId")
                    .AsInt32()
                    .NotNullable()
                .WithColumn("Name")
                    .AsString(150)
                    .NotNullable()
                .WithColumn("Lineup")
                    .AsInt32()
                    .NotNullable();

            Create.Table("Product")
                .WithColumn("Id")
                    .AsInt32()
                    .NotNullable()
                    .PrimaryKey()
                    .Identity()
                .WithColumn("Name")
                    .AsString(150)
                    .NotNullable();

            Create.Table("AisleProduct")
                .WithColumn("Id")
                    .AsInt32()
                    .NotNullable()
                    .PrimaryKey()
                    .Identity()
                .WithColumn("ProductId")
                    .AsInt32()
                    .NotNullable()
                .WithColumn("AisleId")
                    .AsInt32()
                    .NotNullable();

            Create.Table("User")
                .WithColumn("Id")
                    .AsInt32()
                    .NotNullable()
                    .PrimaryKey()
                    .Identity()
                .WithColumn("FirstName")
                    .AsString(150)
                    .NotNullable()
                .WithColumn("LastName")
                    .AsString(150)
                    .NotNullable()
                .WithColumn("Email")
                    .AsString(250)
                    .NotNullable()
                .WithColumn("Password")
                    .AsString(255)
                    .NotNullable();

            Create.Table("UserProduct")
                .WithColumn("Id")
                    .AsInt32()
                    .NotNullable()
                    .PrimaryKey()
                    .Identity()
                .WithColumn("UserId")
                    .AsInt32()
                    .NotNullable()
                .WithColumn("ProductId")
                    .AsInt32()
                    .NotNullable()
                .WithColumn("InCart")
                    .AsBoolean()
                    .NotNullable()
                    .WithDefaultValue(false)
                .WithColumn("Quantity")
                    .AsInt32()
                    .NotNullable()
                    .WithDefaultValue(1)
                .WithColumn("Notes")
                    .AsString(250)
                    .Nullable();

            Create.ForeignKey("fk_layout_store")
                .FromTable("Layout").ForeignColumn("StoreId")
                .ToTable("Store").PrimaryColumn("Id");

            Create.ForeignKey("fk_aisle_layout")
                .FromTable("Aisle").ForeignColumn("LayoutId")
                .ToTable("Layout").PrimaryColumn("Id");

            Create.ForeignKey("fk_aisleproduct_product")
                .FromTable("AisleProduct").ForeignColumn("ProductId")
                .ToTable("Product").PrimaryColumn("Id");

            Create.ForeignKey("fk_aisleproduct_aisle")
                .FromTable("AisleProduct").ForeignColumn("AisleId")
                .ToTable("Aisle").PrimaryColumn("Id");

            Create.ForeignKey("fk_userproduct_user")
                .FromTable("UserProduct").ForeignColumn("UserId")
                .ToTable("User").PrimaryColumn("Id");

            Create.ForeignKey("fk_userproduct_product")
                .FromTable("UserProduct").ForeignColumn("ProductId")
                .ToTable("Product").PrimaryColumn("Id");
        }
    }
}