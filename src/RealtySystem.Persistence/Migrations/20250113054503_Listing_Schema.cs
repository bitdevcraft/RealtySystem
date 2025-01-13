using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RealtySystem.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Listing_Schema : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Community",
                schema: "listing",
                table: "Community");

            migrationBuilder.RenameTable(
                name: "Community",
                schema: "listing",
                newName: "Communities",
                newSchema: "listing");

            migrationBuilder.AlterDatabase()
                .Annotation("Npgsql:PostgresExtension:hstore", ",,");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Communities",
                schema: "listing",
                table: "Communities",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "PaymentPlans",
                schema: "listing",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentPlans", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Projects",
                schema: "listing",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true),
                    CommunityId = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Projects_Communities_CommunityId",
                        column: x => x.CommunityId,
                        principalSchema: "listing",
                        principalTable: "Communities",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PaymentPlanMilestones",
                schema: "listing",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true),
                    Remarks = table.Column<string>(type: "text", nullable: true),
                    Order = table.Column<int>(type: "integer", nullable: false),
                    TotalPercent = table.Column<decimal>(type: "numeric", nullable: false),
                    Frequency = table.Column<int>(type: "integer", nullable: false),
                    FrequencyIntervalType = table.Column<string>(type: "text", nullable: true),
                    PercentPerFrequency = table.Column<decimal>(type: "numeric", nullable: false),
                    OrdinalCountFromFrequency = table.Column<string>(type: "text", nullable: true),
                    PaymentPlanId = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentPlanMilestones", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PaymentPlanMilestones_PaymentPlans_PaymentPlanId",
                        column: x => x.PaymentPlanId,
                        principalSchema: "listing",
                        principalTable: "PaymentPlans",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProjectPaymentPlans",
                schema: "listing",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    ProjectId = table.Column<string>(type: "text", nullable: true),
                    PaymentPlanId = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectPaymentPlans", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProjectPaymentPlans_PaymentPlans_PaymentPlanId",
                        column: x => x.PaymentPlanId,
                        principalSchema: "listing",
                        principalTable: "PaymentPlans",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ProjectPaymentPlans_Projects_ProjectId",
                        column: x => x.ProjectId,
                        principalSchema: "listing",
                        principalTable: "Projects",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Properties",
                schema: "listing",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true),
                    Price = table.Column<decimal>(type: "numeric", nullable: false),
                    TotalArea = table.Column<decimal>(type: "numeric", nullable: false),
                    RatePerArea = table.Column<decimal>(type: "numeric", nullable: false),
                    Rooms = table.Column<int>(type: "integer", nullable: false),
                    Type = table.Column<string>(type: "text", nullable: true),
                    Details = table.Column<Dictionary<string, string>>(type: "hstore", nullable: false),
                    ProjectId = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Properties", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Properties_Projects_ProjectId",
                        column: x => x.ProjectId,
                        principalSchema: "listing",
                        principalTable: "Projects",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PaymentPlanMilestoneFees",
                schema: "listing",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true),
                    FixedAmount = table.Column<decimal>(type: "numeric", nullable: false),
                    Rate = table.Column<decimal>(type: "numeric", nullable: false),
                    IsRecurring = table.Column<bool>(type: "boolean", nullable: false),
                    Frequency = table.Column<int>(type: "integer", nullable: false),
                    MilestoneId = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentPlanMilestoneFees", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PaymentPlanMilestoneFees_PaymentPlanMilestones_MilestoneId",
                        column: x => x.MilestoneId,
                        principalSchema: "listing",
                        principalTable: "PaymentPlanMilestones",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PropertyFees",
                schema: "listing",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true),
                    Amount = table.Column<decimal>(type: "numeric", nullable: false),
                    PropertyId = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PropertyFees", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PropertyFees_Properties_PropertyId",
                        column: x => x.PropertyId,
                        principalSchema: "listing",
                        principalTable: "Properties",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Communities_Name",
                schema: "listing",
                table: "Communities",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_PaymentPlanMilestoneFees_MilestoneId",
                schema: "listing",
                table: "PaymentPlanMilestoneFees",
                column: "MilestoneId");

            migrationBuilder.CreateIndex(
                name: "IX_PaymentPlanMilestoneFees_Name_MilestoneId",
                schema: "listing",
                table: "PaymentPlanMilestoneFees",
                columns: new[] { "Name", "MilestoneId" });

            migrationBuilder.CreateIndex(
                name: "IX_PaymentPlanMilestones_Name_PaymentPlanId",
                schema: "listing",
                table: "PaymentPlanMilestones",
                columns: new[] { "Name", "PaymentPlanId" });

            migrationBuilder.CreateIndex(
                name: "IX_PaymentPlanMilestones_PaymentPlanId",
                schema: "listing",
                table: "PaymentPlanMilestones",
                column: "PaymentPlanId");

            migrationBuilder.CreateIndex(
                name: "IX_PaymentPlans_Name",
                schema: "listing",
                table: "PaymentPlans",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectPaymentPlans_PaymentPlanId",
                schema: "listing",
                table: "ProjectPaymentPlans",
                column: "PaymentPlanId");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectPaymentPlans_ProjectId",
                schema: "listing",
                table: "ProjectPaymentPlans",
                column: "ProjectId");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_CommunityId",
                schema: "listing",
                table: "Projects",
                column: "CommunityId");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_Name",
                schema: "listing",
                table: "Projects",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_Properties_Name",
                schema: "listing",
                table: "Properties",
                column: "Name");

            migrationBuilder.CreateIndex(
                name: "IX_Properties_ProjectId",
                schema: "listing",
                table: "Properties",
                column: "ProjectId");

            migrationBuilder.CreateIndex(
                name: "IX_PropertyFees_PropertyId",
                schema: "listing",
                table: "PropertyFees",
                column: "PropertyId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PaymentPlanMilestoneFees",
                schema: "listing");

            migrationBuilder.DropTable(
                name: "ProjectPaymentPlans",
                schema: "listing");

            migrationBuilder.DropTable(
                name: "PropertyFees",
                schema: "listing");

            migrationBuilder.DropTable(
                name: "PaymentPlanMilestones",
                schema: "listing");

            migrationBuilder.DropTable(
                name: "Properties",
                schema: "listing");

            migrationBuilder.DropTable(
                name: "PaymentPlans",
                schema: "listing");

            migrationBuilder.DropTable(
                name: "Projects",
                schema: "listing");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Communities",
                schema: "listing",
                table: "Communities");

            migrationBuilder.DropIndex(
                name: "IX_Communities_Name",
                schema: "listing",
                table: "Communities");

            migrationBuilder.RenameTable(
                name: "Communities",
                schema: "listing",
                newName: "Community",
                newSchema: "listing");

            migrationBuilder.AlterDatabase()
                .OldAnnotation("Npgsql:PostgresExtension:hstore", ",,");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Community",
                schema: "listing",
                table: "Community",
                column: "Id");
        }
    }
}
