1.Find the Product.
Write a program that takes an array as input from the user and find out the product of the elements.

Note: You have to complete Find_Prod. No need to take any input.


ans
const Find_Prod = (array, n) => 
{    let prod=1;
  for(let i =0;i<n;i++)
  {prod*=array[i];}
  return prod;
  
 
     

};

2.Find the Sum.

ans
const Find_Sum = (array, n) => 
{let sum=0;
  for(let i =0;i<n;i++)
  {sum+=array[i];}
  return sum;
};

3.Count Occurrences
ans
const findCount = (N, K, Arr) => 
{let count=0;
    for(let i=0;i<N;i++)
    {
      if(Arr[i]==K)
      count++
    }
    return count
};

4.Even Odd
ans

const findEvenOdd = (N, Arr) => 
{
    let odd=0, even=0;
    for(let i=0;i<N;i++)
    {
      if(Arr[i]%2==0)
       even+=Arr[i];
      else
       odd+=Arr[i];
    }
    let B=[];
    B[0]=even;
    B[1]=odd;
    return B;
};
 
5.Find whether the number is present or not
ans 

const Find_Num = (array,N,M) => 
{
  for(let i=0;i<N;i++)
  {
    if(array[i]==M)
    return "YES"
    else
    continue;
  }
  return "NO"
};
 
6.Higher Age
ans

const highAge = (N, Arr) => 
{ let Arrb=[]
   for(let i=0;i<N;i++)
   {
     if (Arr[i]>=18)
       Arrb.push(Arr[i])
      else
      continue;
    }
    return Arrb;
};
 
7.Increment the Array Elements
ans 
  
const Inc_Arr = (array,N) => 
{
  for(let i=0;i<N;i++)
  {
    array[i]++;
  }
       console.log(...array)
};

8.Pass or Fail
Ans  
const isAllPass = (N, Arr) => 
{
  for( let i=0;i<N;i++)
  {
    if(Arr[i]<32)
      return "NO"
    else
    continue;
  }
  return "YES"
};

9.  Unique Color Shirt
  Ans 
     
function Unique_Shirts (arr,N) {
    let unique = arr.filter((value) => arr.indexOf(value) === arr.lastIndexOf(value));
        return(unique.length);
  }

10.Min and Max
Ans
    
 function arrayMin(arr) {
    let min=arr[0];
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i]<min)
        min=arr[i]
    }
       return min
  }
  
  function arrayMax(arr) {
   let max=arr[0];
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i]>max)
        max=arr[i]
    }
       return max
  
  }

  11.Birthday Game
   Ans 
        
function Birthday_Game(arr,D ,M) {
    let counter = 0;
       for(let i = 0; i < arr.length - 1; i++){
            let subArray = arr.slice(i, i+M);
            if (subArray.length === M) {
               let sum = subArray.reduce((a,b) => a + b, 0);
               if(sum === D){
                    counter += 1;
                }
             }
       }
       return counter;
  }
   
  
  
  
  

  
  
  
  
  





