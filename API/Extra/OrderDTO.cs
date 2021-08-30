namespace API.Extra
{
    public class OrderDTO
    {
        public string CartId { get; set; }
        public int DeliveryMethodId { get; set; }
        public AddressDTO ShipToAddress { get; set; }
    }
}