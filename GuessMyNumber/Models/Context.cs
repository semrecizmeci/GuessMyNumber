using Microsoft.EntityFrameworkCore;

namespace GuessMyNumber.Models
{
    public class GuessMyNumberContext:DbContext
    {
        public DbSet<Numbers> Sayilar { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                // SQL Server bağlantı dizesini burada ayarlayın
                string connectionString = "Connection String...";

                optionsBuilder.UseSqlServer(connectionString);
            }
        }
      

    }
}
