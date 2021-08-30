using System.Security.Claims;

namespace API.Extra
{
    public static class ClaimExtra
    {
        public static string RetrieveEmailClaim(this ClaimsPrincipal user) {
            return user.FindFirstValue(ClaimTypes.Email);
        }
    }
}