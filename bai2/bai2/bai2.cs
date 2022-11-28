using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bai2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int a = 123456;
            int tiengoc = 10000;
            Console.WriteLine("Vui long nhap Tai khoan");
            String tk = Console.ReadLine();
            Console.WriteLine("Vui long nhap ma Pin");
            int pin = Int32.Parse(Console.ReadLine());
            if( a == pin )
            {
                Console.WriteLine("He's Lo"+tk);
                Console.WriteLine("So tien goc cua ban la :" + tiengoc);

            }
            Console.ReadKey();  
        }
    }
}
