using System;

namespace Day5
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] seats = System.IO.File.ReadAllLines("data.txt");
            Calculator c = new Calculator();
            int maxSeatID = c.Calculate(seats);
            Console.WriteLine(maxSeatID);

            
        int mySeatID = c.findMySeat(c.idsList);
           Console.WriteLine(mySeatID);
        }
    }
}
