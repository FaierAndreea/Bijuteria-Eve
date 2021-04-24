using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL.Migrations
{
    public partial class MigrationCreater : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GemKarats",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GemKarats", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "GemTypes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GemTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Gems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Price = table.Column<int>(nullable: false),
                    Picture = table.Column<string>(nullable: false),
                    GemTypeId = table.Column<int>(nullable: false),
                    GemKaratId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Gems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Gems_GemKarats_GemKaratId",
                        column: x => x.GemKaratId,
                        principalTable: "GemKarats",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Gems_GemTypes_GemTypeId",
                        column: x => x.GemTypeId,
                        principalTable: "GemTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Gems_GemKaratId",
                table: "Gems",
                column: "GemKaratId");

            migrationBuilder.CreateIndex(
                name: "IX_Gems_GemTypeId",
                table: "Gems",
                column: "GemTypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Gems");

            migrationBuilder.DropTable(
                name: "GemKarats");

            migrationBuilder.DropTable(
                name: "GemTypes");
        }
    }
}
