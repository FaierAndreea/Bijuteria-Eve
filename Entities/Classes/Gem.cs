namespace Entities.Classes
{
    public class Gem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public string Picture { get; set; }
        public int GemTypeId { get; set; }
        public int GemKaratId { get; set; }
        public GemType GemType {get; set;}
        public GemKarat GemKarat {get; set;}
    }
}