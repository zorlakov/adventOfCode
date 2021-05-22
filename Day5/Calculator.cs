using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day5
{
    class Calculator
    {
        int maxId = 0;
       public List<int> idsList = new List<int>();

        public int Calculate(string[] seats)
        {
            

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
                    //  currentId = minRowValue * 8 + minColumnValue;
             //  currentId = maxRowValue * 8 + maxColumnValue;
                 //   if (currentId > maxId) maxId = currentId;
                
                }
                currentId = maxRowValue * 8 + maxColumnValue;

                // Add each ID to a list of integers (for part two of solution)
                idsList.Add(currentId);
                if (currentId > maxId) maxId = currentId;

            }

      


            return maxId;
        }

        public int findMySeat(List<int> idsList)
        {
            idsList.Sort();

             int mySeatID=0;
              for(int i=0; i<idsList.Count()-1; i++)
              {
                  if (idsList[i + 1] - idsList[i] != 1) { mySeatID = idsList[i+1]-1; break; }

              }
              return mySeatID;  
       
        }

    }
}
