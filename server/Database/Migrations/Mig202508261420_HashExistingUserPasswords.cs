using FluentMigrator;
using System.Data;
using BCrypt.Net;

namespace GroceryGetter.Database.Migrations
{
    [Migration(202508261420)]
    public class Mig202508261420_HashExistingUserPasswords : ForwardOnlyMigration
    {
        public override void Up()
        {
            Execute.WithConnection((connection, transaction) =>
            {
                var users = new List<(int Id, string Password)>();

                // Step 1: Read all users
                using (var selectCmd = connection.CreateCommand())
                {
                    selectCmd.Transaction = transaction;
                    selectCmd.CommandText = "SELECT \"Id\", \"Password\" FROM \"User\"";

                    using var reader = selectCmd.ExecuteReader();
                    while (reader.Read())
                    {
                        var id = reader.GetInt32(0);
                        var password = reader.GetString(1);
                        users.Add((id, password));
                    }
                }

                // Step 2: Hash and update each password
                foreach (var user in users)
                {
                    if (user.Password.StartsWith("$2b$") || user.Password.StartsWith("$2a$"))
                        continue;

                    var hashed = BCrypt.Net.BCrypt.HashPassword(user.Password);

                    using var updateCmd = connection.CreateCommand();
                    updateCmd.Transaction = transaction;
                    updateCmd.CommandText = "UPDATE \"User\" SET \"Password\" = @Password WHERE \"Id\" = @Id";

                    var passwordParam = updateCmd.CreateParameter();
                    passwordParam.ParameterName = "@Password";
                    passwordParam.Value = hashed;
                    updateCmd.Parameters.Add(passwordParam);

                    var idParam = updateCmd.CreateParameter();
                    idParam.ParameterName = "@Id";
                    idParam.Value = user.Id;
                    updateCmd.Parameters.Add(idParam);

                    updateCmd.ExecuteNonQuery();
                }
            });
        }
    }
}