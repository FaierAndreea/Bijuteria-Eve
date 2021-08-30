namespace Entities.OrderClasses
{
    public class GemOrdered
    {
        public GemOrdered()
        {
        }

        public GemOrdered(int id, string name, string picture)
        {
            Id = id;
            Name = name;
            Picture = picture;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Picture { get; set; }
    }
}