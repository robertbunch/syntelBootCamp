import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

public class Main {

   public static void main(String[] args) throws FileNotFoundException {
       //Creates a new file with the text file you saved
       File file = new File("C:\\Users\\Me\\Desktop\\names.txt");

       //Creates a scanner with your file
       Scanner scan = new Scanner(file);

       //Allows you to access each string in the file
       String name = scan.next();

       //This one is used with organizing the by alphabet
       StringTokenizer stringTokenizer = new StringTokenizer(name, "\",");

       //This ne is used with your hashmap
       StringTokenizer stringTokenizer2 = new StringTokenizer(name, "\",");

       ArrayList<String> stringArray = new ArrayList<String>();

       //loops through the names, adds them to your arraylist
       while (stringTokenizer.hasMoreTokens()) {
           stringArray.add(stringTokenizer.nextToken());
       }

       //Collections has a sort method that automatically sorts your arrayList
       Collections.sort(stringArray);
       System.out.println(stringArray);


       String alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       //A treemap organizes it by it's key
       Map<String,Integer> sum = new TreeMap<String, Integer>();


       while (stringTokenizer2.hasMoreTokens()) {
           String newStr = stringTokenizer2.nextToken();
           int add = 0;
           //loop through your string of names
           for(int i = 0; i <newStr.length(); i++){
               //loop through your string that has all the letters
               for(int j =0; j < alpha.length(); j++){
                   if(newStr.charAt(i) == alpha.charAt(j)){
                       //gets the index and adds 1 to it to the value of the letter
                       //then adds them to the other letters in the name 
                       add += j+1;
                   }
               }
           }
           sum.put(newStr, add);
       }
       //prints out the names in ascending order by their values
       sum.entrySet().stream().sorted(Map.Entry.comparingByValue()).forEach(System.out::println);

       //loops through hashmap keys using a for each loop and add them together
       int add = 0;
       for (String i : sum.keySet()){
           add+= sum.get(i);
       }
       System.out.println(add);
       
   }
   
}
Message Input


Message @Amber Marshall