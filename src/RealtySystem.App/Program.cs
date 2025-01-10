using RealtySystem.App;
using RealtySystem.Persistence;

var builder = WebApplication.CreateBuilder(args);
builder.AddNpgsqlDbContext<AppDbContext>("postgresdb");

builder.AddServiceDefaults();

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddRealtySystemServices(builder.Configuration);
// builder.Services.AddApplicationInsightsTelemetry();

var app = builder.Build();

app.MapDefaultEndpoints();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();