﻿// <auto-generated />
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using RealtySystem.Persistence;

#nullable disable

namespace RealtySystem.Persistence.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20250113054503_Listing_Schema")]
    partial class Listing_Schema
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.HasPostgresExtension(modelBuilder, "hstore");
            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("RealtySystem.Domain.Entities.Listings.Community", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("City")
                        .HasColumnType("text");

                    b.Property<string>("Country")
                        .HasColumnType("text");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("Name");

                    b.ToTable("Communities", "listing");
                });

            modelBuilder.Entity("RealtySystem.Domain.Entities.Listings.PaymentPlan", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("Name");

                    b.ToTable("PaymentPlans", "listing");
                });

            modelBuilder.Entity("RealtySystem.Domain.Entities.Listings.PaymentPlanMilestone", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<int>("Frequency")
                        .HasColumnType("integer");

                    b.Property<string>("FrequencyIntervalType")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<int>("Order")
                        .HasColumnType("integer");

                    b.Property<string>("OrdinalCountFromFrequency")
                        .HasColumnType("text");

                    b.Property<string>("PaymentPlanId")
                        .HasColumnType("text");

                    b.Property<decimal>("PercentPerFrequency")
                        .HasColumnType("numeric");

                    b.Property<string>("Remarks")
                        .HasColumnType("text");

                    b.Property<decimal>("TotalPercent")
                        .HasColumnType("numeric");

                    b.HasKey("Id");

                    b.HasIndex("PaymentPlanId");

                    b.HasIndex("Name", "PaymentPlanId");

                    b.ToTable("PaymentPlanMilestones", "listing");
                });

            modelBuilder.Entity("RealtySystem.Domain.Entities.Listings.PaymentPlanMilestoneFee", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<decimal>("FixedAmount")
                        .HasColumnType("numeric");

                    b.Property<int>("Frequency")
                        .HasColumnType("integer");

                    b.Property<bool>("IsRecurring")
                        .HasColumnType("boolean");

                    b.Property<string>("MilestoneId")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<decimal>("Rate")
                        .HasColumnType("numeric");

                    b.HasKey("Id");

                    b.HasIndex("MilestoneId");

                    b.HasIndex("Name", "MilestoneId");

                    b.ToTable("PaymentPlanMilestoneFees", "listing");
                });

            modelBuilder.Entity("RealtySystem.Domain.Entities.Listings.Project", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("CommunityId")
                        .HasColumnType("text");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("CommunityId");

                    b.HasIndex("Name");

                    b.ToTable("Projects", "listing");
                });

            modelBuilder.Entity("RealtySystem.Domain.Entities.Listings.ProjectPaymentPlan", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("PaymentPlanId")
                        .HasColumnType("text");

                    b.Property<string>("ProjectId")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("PaymentPlanId");

                    b.HasIndex("ProjectId");

                    b.ToTable("ProjectPaymentPlans", "listing");
                });

            modelBuilder.Entity("RealtySystem.Domain.Entities.Listings.Property", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<Dictionary<string, string>>("Details")
                        .IsRequired()
                        .HasColumnType("hstore");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<decimal>("Price")
                        .HasColumnType("numeric");

                    b.Property<string>("ProjectId")
                        .HasColumnType("text");

                    b.Property<decimal>("RatePerArea")
                        .HasColumnType("numeric");

                    b.Property<int>("Rooms")
                        .HasColumnType("integer");

                    b.Property<decimal>("TotalArea")
                        .HasColumnType("numeric");

                    b.Property<string>("Type")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("Name");

                    b.HasIndex("ProjectId");

                    b.ToTable("Properties", "listing");
                });

            modelBuilder.Entity("RealtySystem.Domain.Entities.Listings.PropertyFee", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<decimal>("Amount")
                        .HasColumnType("numeric");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("PropertyId")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("PropertyId");

                    b.ToTable("PropertyFees", "listing");
                });

            modelBuilder.Entity("RealtySystem.Domain.Entities.Listings.PaymentPlanMilestone", b =>
                {
                    b.HasOne("RealtySystem.Domain.Entities.Listings.PaymentPlan", "PaymentPlan")
                        .WithMany("Milestones")
                        .HasForeignKey("PaymentPlanId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.Navigation("PaymentPlan");
                });

            modelBuilder.Entity("RealtySystem.Domain.Entities.Listings.PaymentPlanMilestoneFee", b =>
                {
                    b.HasOne("RealtySystem.Domain.Entities.Listings.PaymentPlanMilestone", "Milestone")
                        .WithMany("Fees")
                        .HasForeignKey("MilestoneId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.Navigation("Milestone");
                });

            modelBuilder.Entity("RealtySystem.Domain.Entities.Listings.Project", b =>
                {
                    b.HasOne("RealtySystem.Domain.Entities.Listings.Community", "Community")
                        .WithMany("Projects")
                        .HasForeignKey("CommunityId");

                    b.Navigation("Community");
                });

            modelBuilder.Entity("RealtySystem.Domain.Entities.Listings.ProjectPaymentPlan", b =>
                {
                    b.HasOne("RealtySystem.Domain.Entities.Listings.PaymentPlan", "PaymentPlan")
                        .WithMany("Projects")
                        .HasForeignKey("PaymentPlanId");

                    b.HasOne("RealtySystem.Domain.Entities.Listings.Project", "Project")
                        .WithMany("PaymentPlans")
                        .HasForeignKey("ProjectId");

                    b.Navigation("PaymentPlan");

                    b.Navigation("Project");
                });

            modelBuilder.Entity("RealtySystem.Domain.Entities.Listings.Property", b =>
                {
                    b.HasOne("RealtySystem.Domain.Entities.Listings.Project", "Project")
                        .WithMany("Properties")
                        .HasForeignKey("ProjectId");

                    b.Navigation("Project");
                });

            modelBuilder.Entity("RealtySystem.Domain.Entities.Listings.PropertyFee", b =>
                {
                    b.HasOne("RealtySystem.Domain.Entities.Listings.Property", "Property")
                        .WithMany("Fees")
                        .HasForeignKey("PropertyId");

                    b.Navigation("Property");
                });

            modelBuilder.Entity("RealtySystem.Domain.Entities.Listings.Community", b =>
                {
                    b.Navigation("Projects");
                });

            modelBuilder.Entity("RealtySystem.Domain.Entities.Listings.PaymentPlan", b =>
                {
                    b.Navigation("Milestones");

                    b.Navigation("Projects");
                });

            modelBuilder.Entity("RealtySystem.Domain.Entities.Listings.PaymentPlanMilestone", b =>
                {
                    b.Navigation("Fees");
                });

            modelBuilder.Entity("RealtySystem.Domain.Entities.Listings.Project", b =>
                {
                    b.Navigation("PaymentPlans");

                    b.Navigation("Properties");
                });

            modelBuilder.Entity("RealtySystem.Domain.Entities.Listings.Property", b =>
                {
                    b.Navigation("Fees");
                });
#pragma warning restore 612, 618
        }
    }
}
