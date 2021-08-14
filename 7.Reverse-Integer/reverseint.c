/*
*reverseint.c
*Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

int reverse(int x)
{
    int mod = 0;
    int reversed = 0;
    while (x != 0)
    {
        mod = x % 10;
        // to avoid overflow we did reversed/10  
        if (reversed > (pow(2, 31) - 1) / 10 || reversed < -(pow(2, 31) / 10))
        {
            return 0;
        }

        reversed = reversed * 10 + mod;
        x /= 10;
    }
    return reversed;
}