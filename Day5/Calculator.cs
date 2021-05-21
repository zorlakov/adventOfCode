using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day5
{
    class Calculator
    {
        public int Calculate(string[] seats)
        {
            int maxId = 0;

            for (int i = 0; i < seats.Length; i++)
            {

                int maxRowValue = 127;
                int minRowValue = 0;
                int maxColumnValue = 7;
                int minColumnValue = 0;
                int currentId = 0;

                foreach (var c in seats[i].ToCharArray())
                {
                    switch (c)
                    {
                        case 'F':
                            maxRowValue -= ((maxRowValue - minRowValue) / 2) + 1;
                            break;
                        case 'L':
                            maxColumnValue -= ((maxColumnValue - minColumnValue) / 2) + 1;
                            break;
                        case 'B':
                            minRowValue += ((maxRowValue - minRowValue) / 2) + 1;
                            break;
                        case 'R':
                            minColumnValue += ((maxColumnValue - minColumnValue) / 2) + 1;
                            break;
                        default:
                            break;
                    }
                    currentId = minRowValue * 8 + minColumnValue;
                    if (currentId > maxId) maxId = currentId;

                }

            }




            return maxId;
        }
    }
}
