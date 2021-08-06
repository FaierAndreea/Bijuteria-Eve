namespace Entities.Identity
{
    public interface ITokenService
    {
        string CreateToken(AppUser appUser);
    }
}