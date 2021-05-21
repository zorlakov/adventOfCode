using System;

namespace Day5
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] seats = System.IO.File.ReadAllLines("data.txt");
            Calculator c = new Calculator();
            int mySeat = c.Calculate(seats);
            Console.WriteLine(mySeat);
        }
    }
}
