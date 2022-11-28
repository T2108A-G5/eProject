using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int a = 123456;
            int tien = 100000;
            int nhap;
            int chon;
            int phi = 1100;
                Console.WriteLine("Chao mung ban den vs ATM cua chung toi");
                Console.Write("Tai khoan: ");
                String tk = Console.ReadLine();
                Console.Write("Ma Pin: ");
                int pin = Int32.Parse(Console.ReadLine());
                if(a == pin)
                {
                    do
                    {
                        Console.WriteLine("__________________________");
                        Console.WriteLine("he'sllooooooo " + tk);
                        Console.WriteLine("~~~~~~~~~~~~~~~~~~~~~~~~~~");
                        Console.WriteLine("1. Kiem tra tien hien tai.");
                        Console.WriteLine("2. Rut tien.");
                        Console.WriteLine("3. Nap tien.");
                        Console.Write("Vui long chon so :");
                        chon = Int32.Parse(Console.ReadLine());
                        switch (chon)
                        {  
                        case 1:
                                Console.WriteLine("So tien hien tai cua ban = " + tien);
                                break;
                            case 2:
                            {

                                Console.WriteLine("Ban muon rut tien.");
                                Console.WriteLine("Luu y");
                                Console.WriteLine("So tien rut lon nhat la 50.000 va tai khoan cua ban phai co tren 10.000 moi co the thuc hien.");
                                Console.Write("Nhap so tien ban can rut : ");
                                nhap = Int32.Parse(Console.ReadLine());
                                    if (nhap > 0 && nhap <= 50000)
                                    {
                                        
                                        if (tien - nhap > 10000)
                                        {
                                        tien = tien - nhap - phi;
                                       
                                        Console.WriteLine("So tai khoan cua ban la : " +tien);
                                        }
                                        else
                                        {
                                        Console.WriteLine("Tai khoan cua ban toi thieu phai co 10.000. :( ");
                                        break;
                                        }
                                    }
                                    else
                                    {
                                        Console.WriteLine("So tien ban nhap khong dung yeu cau. :( ");
                                        break;
                                    }
                                break;
                            }
                            case 3:
                            Console.WriteLine("Ban muon nap tien.");
                            Console.Write("Nhap so tien ban can nap : ");
                            nhap = Int32.Parse(Console.ReadLine());
                            if ( nhap > 0)
                            {
                                tien = tien + nhap;
                                Console.WriteLine("So tai khoan cua ban la : " + tien);
                            }else
                            {
                                Console.WriteLine("So tien ban nhap phai lon hon 0.");
                                break;
                            }
                            break;
                            default:
                                Console.WriteLine("Vui long nhap lai");
                                break;
                        }
                    } while (chon != 0);
                        Console.WriteLine();

                }
                else
                {
                    Console.WriteLine("Sai ma pin.");
                }
            Console.ReadKey();
        }
    }
}
