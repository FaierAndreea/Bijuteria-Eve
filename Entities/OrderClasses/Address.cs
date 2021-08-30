namespace Entities.OrderClasses
{
    public class Address
    {
        public Address()
        {
        }

        public Address(int id, string firstName, string lastName, string city, string street, int streetNumber, string details, string zipCode)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            City = city;
            Street = street;
            StreetNumber = streetNumber;
            Details = details;
            ZipCode = zipCode;
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public int StreetNumber { get; set; }
        public string Details { get; set; }
        public string ZipCode { get; set; }
    }
}