using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ravea.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddUserToProductRating : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_ProductRatings_ProductId",
                table: "ProductRatings");

            migrationBuilder.DropColumn(
                name: "UserName",
                table: "ProductRatings");

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedAt",
                table: "ProductRatings",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "ProductRatings",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_ProductRatings_ProductId_UserId",
                table: "ProductRatings",
                columns: new[] { "ProductId", "UserId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProductRatings_UserId",
                table: "ProductRatings",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductRatings_Users_UserId",
                table: "ProductRatings",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductRatings_Users_UserId",
                table: "ProductRatings");

            migrationBuilder.DropIndex(
                name: "IX_ProductRatings_ProductId_UserId",
                table: "ProductRatings");

            migrationBuilder.DropIndex(
                name: "IX_ProductRatings_UserId",
                table: "ProductRatings");

            migrationBuilder.DropColumn(
                name: "UpdatedAt",
                table: "ProductRatings");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "ProductRatings");

            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "ProductRatings",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_ProductRatings_ProductId",
                table: "ProductRatings",
                column: "ProductId");
        }
    }
}
