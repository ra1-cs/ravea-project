using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ravea.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddSkinProfileToUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "SkinTone",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SkinType",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SkinTone",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "SkinType",
                table: "Users");
        }
    }
}
