namespace API
{
    public class GemReturnDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Picture { get; set; }
        public string GemType { get; set; }
        public string GemKarat { get; set; }
    }
}