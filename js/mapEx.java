import java.util.*;  

class Main {
  public static void main(String[] args) {
    
    Map<String,String> myContacts = new HashMap<>();
    myContacts.put("Rob","555-555-1234");
    myContacts.put("Jim","555-555-9876");
    System.out.println(myContacts.get("Rob"));
    
    // Also phonebook.entrySet()
    Set<String> keys = myContacts.keySet();
    for(String i : keys){
      System.out.println(i + ":" + myContacts.get(i) );
    }
    
  }
}