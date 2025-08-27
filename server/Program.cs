using FluentMigrator.Runner;
using GroceryGetter.Database;
using Microsoft.EntityFrameworkCore;
using GroceryGetter.Services;
using GroceryGetter.DomainServices;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add PostgreSQL database context
builder.Services.AddDbContext<PgDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Register Services
builder.Services.AddScoped<IStoreService, StoreService>();
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<ILayoutService, LayoutService>();
builder.Services.AddScoped<IAisleService, AisleService>();
builder.Services.AddScoped<IAisleProductService, AisleProductService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IUserProductService, UserProductService>();

// Configure FluentMigrator
builder.Services.AddFluentMigratorCore()
    .ConfigureRunner(runner => runner
        .AddPostgres()
        .WithGlobalConnectionString(builder.Configuration.GetConnectionString("PostgreSqlConnection"))
        .ScanIn(typeof(GroceryGetter.Database.Migrations.Mig202505080640_InitialMigration).Assembly).For.All());

if (builder.Environment.IsDevelopment())
{
    // Allow arbitrary client browser apps to access the API.
    // In a production environment, make sure to allow only origins you trust.
    builder.Services.AddCors(cors => cors.AddPolicy("AllowAllOrigins", policy => policy
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin()
        .WithExposedHeaders("Content-Disposition"))
    );
}

var app = builder.Build();

// Run FluentMigrator migrations on startup
using (var scope = app.Services.CreateScope())
{
    var runner = scope.ServiceProvider.GetRequiredService<IMigrationRunner>();
    runner.MigrateUp();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAllOrigins");
app.UseAuthorization();
app.MapControllers();
app.Run();
